import React from "react";
import PropTypes from "prop-types";

const MueblesPorCategoria = ({ muebles }) => {
  return (
    <div className="mt-4">
      <p className="text-4xl mb-8 flex justify-center font-bold">
        {muebles[0].categoria}
      </p>
      <div className="grid max-laptop:grid-cols-2 grid-cols-3 justify-items-stretch gap-4">
        {muebles.map((mueble) => (
          <div key={mueble.id_codigo} className="p-4 rounded-lg">
            <h3 className="font-semibold">{mueble.nombre}</h3>
            <p>
              <strong>Color:</strong> {mueble.color}
            </p>
            <p>
              <strong>Estilo:</strong> {mueble.estilo}
            </p>
            <p>
              <strong>Precio por mes:</strong> ${mueble.precio_mes}
            </p>
            <p>
              <strong>Dimensiones:</strong> {mueble.ancho} cm x {mueble.altura}{" "}
              cm x {mueble.fondo} cm
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
