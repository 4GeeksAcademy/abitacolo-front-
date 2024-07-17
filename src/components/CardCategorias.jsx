import React from "react";
import silla from "../assets/c001.webp";
import PropTypes from "prop-types";

const CardCategorias = ({ categoria, recuperados, disponibles }) => {
  // Para mostrar una imagen dinámica basada en la categoría:
  // const imagen = require(`../assets/${categoria}.webp`);

  return (
    <div className="p-4 rounded-lg">
      {/* Para la imagen dinámica */}
      {/* <img className="w-60 rounded-full" src={imagen} alt={categoria} /> */}
      {/* Imagen estática para propósitos de ejemplo */}
      <img className="w-60 rounded-full" src={silla} alt={categoria} />
      <div className="mt-4">
        <div className="font-bold">{categoria}</div>
        <div>{recuperados} muebles recuperados</div>
        <div>{disponibles} muebles disponibles</div>
      </div>
    </div>
  );
};

CardCategorias.propTypes = {
  categoria: PropTypes.string.isRequired,
  recuperados: PropTypes.number.isRequired,
  disponibles: PropTypes.number.isRequired,
};

export default CardCategorias;
