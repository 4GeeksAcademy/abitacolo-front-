const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isDarkMode: false,
      muebles: [],
      mueblesFiltrados: [],
      mueblesCategorizados: [],
    },
    actions: {
      toggleDarkMode: () => {
        const store = getStore();
        setStore({ ...store, isDarkMode: !store.isDarkMode });
      },
      loadSomeData: () => {
        console.log("Testing from flux");
      },
      getMuebles: () => {
        const store = getStore();
        const actions = getActions();
        console.log("Fetching muebles...");

        fetch("http://localhost:3000/mueble")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setStore({
              ...store,
              muebles: data,
              mueblesFiltrados: data,
            });
            actions.categorizarMuebles(data);
            console.log("Muebles filtrados:", store.mueblesFiltrados);
          })
          .catch((error) => {
            console.error("Error fetching muebles:", error);
          });
      },
      categorizarMuebles: (muebles) => {
        const store = getStore();
        const categorias = {};

        muebles.forEach((mueble) => {
          const { categoria } = mueble;
          if (!categorias[categoria]) {
            categorias[categoria] = [];
          }
          categorias[categoria].push(mueble);
        });

        const mueblesCategorizadosArray = Object.entries(categorias).map(
          ([categoria, muebles]) => ({
            categoria,
            muebles,
          })
        );

        setStore({ ...store, mueblesCategorizados: mueblesCategorizadosArray });
      },
      filtrarMuebles: (filtros) => {
        const store = getStore();
        const actions = getActions();

        console.log("Applied filters:", filtros);

        // Check if there's initial data to filter
        if (store.muebles.length === 0) {
          console.log("No initial muebles data to filter");
          return;
        }

        let mueblesFiltrados = store.muebles;
        console.log("Initial muebles:", mueblesFiltrados);

        // Filter by availability
        if (filtros.disponible) {
          mueblesFiltrados = mueblesFiltrados.filter(
            (mueble) => mueble.disponible
          );
          console.log("After disponibilidad filter:", mueblesFiltrados);
        }

        // Filter by categories (color, estilo, espacio)
        ["color", "estilo", "espacio"].forEach((category) => {
          if (filtros[category] && filtros[category].length > 0) {
            mueblesFiltrados = mueblesFiltrados.filter((mueble) =>
              filtros[category].includes(mueble[category])
            );
            console.log(`After ${category} filter:`, mueblesFiltrados);
          }
        });

        // Filter by price range
        if (filtros.precioDesde || filtros.precioHasta) {
          const precioDesde = parseFloat(filtros.precioDesde) || 0;
          const precioHasta = parseFloat(filtros.precioHasta) || Infinity;
          mueblesFiltrados = mueblesFiltrados.filter(
            (mueble) =>
              mueble.precio >= precioDesde && mueble.precio <= precioHasta
          );
          console.log("After precio filter:", mueblesFiltrados);
        }

        // Update the store with filtered furniture
        setStore({ ...store, mueblesFiltrados: mueblesFiltrados });

        // Recategorize the filtered furniture
        actions.categorizarMuebles(mueblesFiltrados);

        console.log("Final muebles filtrados:", mueblesFiltrados);
      },
    },
  };
};

export default getState;
