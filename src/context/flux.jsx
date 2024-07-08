const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        muebles: [
            {
                id: 1,
                estilo: "Industrial",
                categoria: "Cama",
                color: "Negro",
                disponibilidad: "esta disponible"
            },
            {
                id: 2,
                estilo: "Industrial",
                categoria: "Mesa",
                color: "Marron",
                disponibilidad: "esta disponible"
            },
            {
                id: 3,
                estilo: "Industrial",
                categoria: "Armario",
                color: "Blanco",
                disponibilidad: "no esta disponible"
            },
            {
                id: 4,
                estilo: "Industrial",
                categoria: "Cama",
                color: "Negro",
                disponibilidad: "esta disponible"
            },
            {
                id: 5,
                estilo: "Industrial",
                categoria: "Mesa",
                color: "Marron",
                disponibilidad: "esta disponible"
            },
            {
                id: 6,
                estilo: "Industrial",
                categoria: "Armario",
                color: "Blanco",
                disponibilidad: "no esta disponible"
            },
            {
                id: 7,
                estilo: "Industrial",
                categoria: "Cama",
                color: "Negro",
                disponibilidad: "esta disponible"
            },
            {
                id: 8,
                estilo: "Industrial",
                categoria: "Mesa",
                color: "Marron",
                disponibilidad: "esta disponible"
            },
            {
                id: 9,
                estilo: "Industrial",
                categoria: "Armario",
                color: "Blanco",
                disponibilidad: "no esta disponible"
            },
        ]
      },
  
      actions: {
        loadSomeData: () => {
            console.log("Testing from flux")
        }, 
      },
    };
  };
  
  export default getState;