import { act } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isDarkMode: false,
      muebles: [],
      mueblesCategorizados: [], // Cambiado a un array
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

        fetch("http://localhost:3000/mueble") // Reemplaza con la URL de tu API
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setStore({ ...store, muebles: data });
            actions.categorizarMuebles(data);
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

        // Convertir el objeto de categorías en un array
        const mueblesCategorizadosArray = Object.entries(categorias).map(
          ([categoria, muebles]) => ({
            categoria,
            muebles,
          })
        );

        setStore({ ...store, mueblesCategorizados: mueblesCategorizadosArray });
        console.log(store.mueblesCategorizados);
      },
    },
  };
};

export default getState;
