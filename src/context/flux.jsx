const API_BASE_URL = import.meta.env.VITE_API_URL;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {
        email: "",
        name: "",
        password: "",
        address: "",
        nationality: "",
        birth_date: "",
      },
      payment_data: {
        type_sub: "",
        time_sub: "",
        payment_day: "",
        finish_contract: "",
        frecuency: "",
      },
      external_customer_id: "",
      carrito: [],
      precioCarrito: "",
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
      getMuebles: async () => {
        const store = getStore();

        console.log("Fetching muebles...");
        try {
          const response = await fetch(`${API_BASE_URL}/mueble`);
          if (!response.ok) throw new Error("Network response was not ok");
          const data = await response.json();
          setStore({ ...store, muebles: data, mueblesFiltrados: data });
          getActions().categorizarMuebles(data);
        } catch (error) {
          console.error("Error fetching muebles:", error);
        }
      },
      categorizarMuebles: (muebles) => {
        const store = getStore();
        const categoriasReducidas = muebles.reduce((acc, mueble) => {
          const { categoria } = mueble;
          if (!acc[categoria]) acc[categoria] = [];
          acc[categoria].push(mueble);
          return acc;
        }, {});

        const mueblesCategorizadosArray = Object.entries(
          categoriasReducidas
        ).map(([categoria, muebles]) => ({
          categoria,
          muebles,
        }));

        setStore({ ...store, mueblesCategorizados: mueblesCategorizadosArray });
      },
      filtrarMuebles: (filtros) => {
        const store = getStore();
        const actions = getActions();

        console.log("Applied filters:", filtros);
        if (store.muebles.length === 0) {
          console.log("No initial muebles data to filter");
          return;
        }

        let mueblesFiltrados = store.muebles;
        console.log("Initial muebles:", mueblesFiltrados);

        if (filtros.disponible) {
          mueblesFiltrados = mueblesFiltrados.filter(
            (mueble) => mueble.disponible
          );
          console.log("After disponibilidad filter:", mueblesFiltrados);
        }

        ["color", "estilo", "espacio"].forEach((category) => {
          if (filtros[category]?.length > 0) {
            mueblesFiltrados = mueblesFiltrados.filter((mueble) =>
              filtros[category].includes(mueble[category])
            );
            console.log(`After ${category} filter:`, mueblesFiltrados);
          }
        });

        if (filtros.precioDesde || filtros.precioHasta) {
          const precioDesde = parseFloat(filtros.precioDesde) || 0;
          const precioHasta = parseFloat(filtros.precioHasta) || Infinity;
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

        setStore({ ...store, mueblesFiltrados });
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
          if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);
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
            external_customer_id: data.user.id,
          });
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
      editUser: async (formData) => {
        const store = getStore();
        try {
          const response = await fetch(
            `${API_BASE_URL}/users/${store.user.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.message || `HTTP error! status: ${response.status}`
            );
          }
          const data = await response.json();
          console.log("User updated successfully:", data);
          setStore({
            ...store,
            user: data.user,
          });
          return data;
        } catch (error) {
          console.error("Error updating user:", error.message);
        }
      },
      addMuebleToCarrito: (mueble) => {
        const store = getStore();
        const updatedCarrito = [...store.carrito];
        const muebleIndex = updatedCarrito.findIndex(
          (item) => item.id_codigo === mueble.id_codigo
        );

        if (muebleIndex !== -1) {
          updatedCarrito[muebleIndex].quantity += 1;
        } else {
          updatedCarrito.push({ ...mueble, quantity: 1 });
        }

        setStore({ ...store, carrito: updatedCarrito });
        setStore({
          ...store,
          precioCarrito: store.carrito.reduce(
            (total, mueble) => total + mueble.precio_mes,
            0
          ),
        });
      },
      removeMuebleFromCarrito: (muebleId) => {
        const store = getStore();
        let updatedCarrito = [...store.carrito];
        const muebleIndex = updatedCarrito.findIndex(
          (item) => item.id_codigo === muebleId
        );

        if (muebleIndex !== -1) {
          if (updatedCarrito[muebleIndex].quantity > 1) {
            updatedCarrito[muebleIndex].quantity -= 1;
          } else {
            updatedCarrito = updatedCarrito.filter(
              (item) => item.id_codigo !== muebleId
            );
          }
        }

        setStore({ ...store, carrito: updatedCarrito });
        setStore({
          ...store,
          precioCarrito: store.carrito.reduce(
            (total, mueble) => total + mueble.precio_mes,
            0
          ),
        });
      },
      addFav: async (fav) => {
        const { user } = getStore();
        const { getUser } = getActions();

        if (!user || !user.id) {
          console.error("Usuario no autenticado.");
          return { success: false, error: "Usuario no autenticado" };
        }

        try {
          const response = await fetch(
            `${API_BASE_URL}/favourite/mueble/${fav}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ user_id: user.id }),
            }
          );

          if (!response.ok) {
            let errorMessage = `HTTP error! status: ${response.status}`;
            try {
              const errorData = await response.json();
              errorMessage = errorData.message || errorMessage;
            } catch (jsonError) {
              // Fall back to the original message if JSON parsing fails
            }
            throw new Error(errorMessage);
          }

          const data = await response.json();
          console.log("Favorito añadido:", data);

          await getUser();
          return { success: true, data };
        } catch (error) {
          console.error("Error al añadir favorito:", error.message);
          return { success: false, error: error.message };
        }
      },

      deleteFav: async (id) => {
        const actions = getActions();

        try {
          const response = await fetch(`${API_BASE_URL}/favoritos/${id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            const result = await response.json();
            console.log(result.message);
            actions.getUser();
          } else {
            const errorData = await response.json();
            console.error(
              errorData.description || "Error al eliminar el favorito"
            );
          }
        } catch (error) {
          console.error("Error:", error);
        }
      },
      getUser: () => {
        return new Promise((resolve, reject) => {
          const store = getStore();
          if (!store.user || !store.user.id) {
            reject(new Error("User ID not found in store"));
            return;
          }

          console.log("Fetching user...");
          fetch(`${API_BASE_URL}/users/${store.user.id}`)
            .then((response) => {
              if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);
              return response.json();
            })
            .then((data) => {
              setStore({
                ...store,
                user: data,
              });
              console.log("User data fetched successfully:", data);
              resolve(data);
            })
            .catch((error) => {
              console.error("Error fetching user:", error.message);
              reject(error);
            });
        });
      },
    },
  };
};

export default getState;
