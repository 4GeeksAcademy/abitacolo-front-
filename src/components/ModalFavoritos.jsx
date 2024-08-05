import React, { useContext } from "react";
import { Context } from "../context/appContext";

const ModalFavoritos = () => {
  const { store } = useContext(Context);

  const favoritos = store.muebles.filter((mueble) =>
    store.user.favourites.map((fav) => fav.mueble_id).includes(mueble.id_codigo)
  );
  return (
    <>
      {" "}
      {favoritos.map((mueble) => (
        <div className="mx-2" key={mueble.nombre}>
          <p className="m-4 font-bold" key={mueble.nombre}>
            {mueble.nombre}
          </p>
          <p>Disponible: {mueble.disponible ? "Sí" : "No"}</p>
        </div>
      ))}
    </>
  );
};

export default ModalFavoritos;
