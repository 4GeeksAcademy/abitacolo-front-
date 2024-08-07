import React, { useContext } from "react";
import { Context } from "../context/appContext";
import { Link } from "react-router-dom";

const ModalFavoritos = () => {
  const { store } = useContext(Context);

  const favoritos = store.muebles.filter((mueble) =>
    store.user.favourites.map((fav) => fav.mueble_id).includes(mueble.id_codigo)
  );
  return (
    <>
      {" "}
      {favoritos.map((mueble) => (
        <Link key={mueble.id_codigo} to={`/mueble/${mueble.id_codigo}`}>
          <div className="mx-2">
            <p className="m-4 font-bold" key={mueble.nombre}>
              {mueble.nombre}
            </p>
            <p>Disponible: {mueble.disponible ? "Sí" : "No"}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ModalFavoritos;
