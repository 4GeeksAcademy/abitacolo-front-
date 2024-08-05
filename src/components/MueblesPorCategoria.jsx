import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import otros from "../assets/ModoClaro/Categorias/Otros_objetos.png";
import a001 from "../assets/Muebles/a001.webp";
import b001 from "../assets/Muebles/b001.webp";
import b002 from "../assets/Muebles/b002.webp";
import c001 from "../assets/Muebles/c001.webp";
import c002 from "../assets/Muebles/c002.webp";
import c003 from "../assets/Muebles/c003.webp";
import d001 from "../assets/Muebles/d001.webp";
import d002 from "../assets/Muebles/d002.webp";
import f001 from "../assets/Muebles/f001.webp";
import h001 from "../assets/Muebles/h001.webp";
import l001 from "../assets/Muebles/l001.webp";
import n001 from "../assets/Muebles/n001.webp";
import n002 from "../assets/Muebles/n002.webp";
import n003 from "../assets/Muebles/n003.webp";
import n004 from "../assets/Muebles/n004.webp";
import n005 from "../assets/Muebles/n005.webp";
import o001 from "../assets/Muebles/o001.webp";
import r001 from "../assets/Muebles/r001.webp";
import r002 from "../assets/Muebles/r002.webp";
import r003 from "../assets/Muebles/r003.webp";
import s001 from "../assets/Muebles/s001.webp";
import s002 from "../assets/Muebles/s002.webp";
import t001 from "../assets/Muebles/t001.webp";
import t002 from "../assets/Muebles/t002.webp";

const MueblesPorCategoria = ({ mueblesPorCategorias }) => {
  if (!mueblesPorCategorias || mueblesPorCategorias.length === 0) {
    return (
      <p className="text-center text-xl">
        No hay muebles disponibles en esta categoría.
      </p>
    );
  }
  const imageMap = {
    a001,
    b001,
    b002,
    c001,
    c002,
    c003,
    d001,
    d002,
    f001,
    h001,
    l001,
    n001,
    n002,
    n003,
    n004,
    n005,
    o001,
    r001,
    r002,
    r003,
    s001,
    s002,
    t001,
    t002,
  };
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
            <img
              src={imageMap[mueble.id_codigo] ? imageMap[mueble.id_codigo] : otros}
              alt={mueble.id_codigo}
            />

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
