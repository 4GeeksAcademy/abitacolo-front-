import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import silla from "../assets/c001.webp";

const MueblesPorCategoria = ({ mueblesPorCategorias }) => {
  if (!mueblesPorCategorias || mueblesPorCategorias.length === 0) {
    return (
      <p className="text-center text-xl">
        No hay muebles disponibles en esta categoría.
      </p>
    );
  }

  return (
    <div className="">
      <p className="text-4xl mb-8 flex justify-center font-bold">
        {mueblesPorCategorias[0].categoria}
      </p>
      <Link to={"/"}>
        <button
          className="border dark:text-white dark:font-bold p-2 rounded-lg border-abitacoloDarkGrayShadow bg-abitacoloGreen"
          aria-label="Volver"
        >
          Volver
        </button>
      </Link>
      <div className="grid max-laptop:grid-cols-2 grid-cols-3 justify-items-stretch gap-4">
        {mueblesPorCategorias.map((mueble) => (
          <div key={mueble.id_codigo} className="p-4 rounded-lg">
            <img src={silla} alt="" />
            <h3 className="font-semibold">{mueble.nombre}</h3>
            <p>
              <strong>Personalidad:</strong> {mueble.personalidad}
            </p>
            <p>
              <strong>Color:</strong> {mueble.color}
            </p>
            <p>
              <strong>Estilo:</strong> {mueble.estilo}
            </p>
            <p>
              <strong>Espacio:</strong> {mueble.espacio}
            </p>
            <p>
              <strong>{mueble.precio_mes}€/mes</strong>
            </p>
            <p>
              <strong>
                {mueble.ancho}cm (A) x {mueble.fondo}cm (F) x {mueble.altura}cm
                (H)
              </strong>
            </p>
            <p>
              <strong>Disponible:</strong> {mueble.disponible ? "Sí" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

MueblesPorCategoria.propTypes = {
  mueblesPorCategorias: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MueblesPorCategoria;
