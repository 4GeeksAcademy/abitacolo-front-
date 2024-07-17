import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import silla from "../assets/c001.webp";

const MueblesPorCategoria = ({ muebles }) => {
  if (!muebles.length) {
    return (
      <p className="text-center text-xl">
        No hay muebles disponibles en esta categoría.
      </p>
    );
  }

  return (
    <div className="">
      <p className="text-4xl mb-8 flex justify-center font-bold">
        {muebles[0]?.categoria}
      </p>
      <Link to={"/"}>
        <button
          className="border p-2 rounded-lg border-abitacoloDarkGrayShadow bg-abitacoloGreen"
          aria-label="Volver"
        >
          Volver
        </button>
      </Link>
      <div className="grid max-laptop:grid-cols-2 grid-cols-3 justify-items-stretch gap-4">
        {muebles.map((mueble) => (
          <div key={mueble.id_codigo} className="p-4 rounded-lg">
            <img src={silla} alt="" />
            <h3 className="font-semibold">{mueble.nombre}</h3>
            <p>
              <strong>Color:</strong> {mueble.color}
            </p>
            <p>
              <strong>Estilo:</strong> {mueble.estilo}
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
  muebles: PropTypes.arrayOf(
    PropTypes.shape({
      id_codigo: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      estilo: PropTypes.string.isRequired,
      precio_mes: PropTypes.string.isRequired,
      ancho: PropTypes.string.isRequired,
      altura: PropTypes.string.isRequired,
      fondo: PropTypes.string.isRequired,
      disponible: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default MueblesPorCategoria;
