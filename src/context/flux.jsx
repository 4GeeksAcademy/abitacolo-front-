const API_BASE_URL = import.meta.env.VITE_API_URL;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
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

        fetch(`${API_BASE_URL}/mueble`)
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
            console.log(import.meta.env.VITE_API_URL);
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
          const precioDesde = filtros.precioDesde
            ? parseFloat(filtros.precioDesde)
            : 0;
          const precioHasta = filtros.precioHasta
            ? parseFloat(filtros.precioHasta)
            : Infinity;

          mueblesFiltrados = mueblesFiltrados.filter((mueble) => {
            const mueblePrecio = parseFloat(mueble.precio_mes);
            return mueblePrecio >= precioDesde && mueblePrecio <= precioHasta;
          });

          console.log("After precio filter:", mueblesFiltrados);
          console.log(
            "Precio desde:",
            precioDesde,
            "Precio hasta:",
            precioHasta
          );
        }

        // Update the store with filtered furniture
        setStore({ ...store, mueblesFiltrados: mueblesFiltrados });

        // Recategorize the filtered furniture
        actions.categorizarMuebles(mueblesFiltrados);

        console.log("Final muebles filtrados:", mueblesFiltrados);
      },
      registerUser: async (body) => {
        try {
          const response = await fetch(`${API_BASE_URL}/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },

      loginUser: async (formData) => {
        const store = getStore();

        try {
          const response = await fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (!response.ok)
            throw new Error("Error en la respuesta del servidor");
          const data = await response.json();
          console.log(data);
          setStore({
            ...store,
            user: data.user,
          });
          console.log(store.user);

          return data;
        } catch (error) {
          console.error("Error en el login: ", error);
        }
      },
      registrarNuevoMueble: async (formData) => {
        const actions = getActions();
        try {
          const response = await fetch(`${API_BASE_URL}/mueble`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          const data = await response.json();
          console.log(data);
          actions.getMuebles();
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
