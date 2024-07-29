import React, { useContext } from "react";
import { Link } from "react-router-dom";
import otros from "../assets/ModoClaro/Categorias/Otros_objetos.png";
import a001 from "../assets/Muebles/a001.webp";
import { Context } from "../context/appContext";

const DetalleMueble = () => {
  const { actions, store } = useContext(Context);

  if (!DetalleMueble || DetalleMueble.length === 0) {
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
  const mueble = {
    id_codigo: "a001",
    nombre: "Sillón Acogedor",
    personalidad: "Relajante",
    color: "Gris",
    estilo: "Moderno",
    espacio: "Sala de estar",
    precio_mes: 29.99,
    ancho: 80,
    fondo: 75,
    altura: 90,
    disponible: true,
    categoria: "Sillones",
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-8 font-bold">{mueble.categoria}</p>
      <div className="w-full flex justify-start pl-20 mb-3">
        <Link to={"/"}>
          <button
            className="border dark:text-white dark:font-bold p-2 rounded-lg border-abitacoloDarkGrayShadow bg-abitacoloGreen"
            aria-label="Volver"
          >
            Volver
          </button>
        </Link>
      </div>
      <div className="p-4 rounded-lg max-w-md">
        <img
          src={imageMap[mueble.id_codigo] ? imageMap[mueble.id_codigo] : otros}
          alt={mueble.id_codigo}
          className="w-full h-auto"
        />
        <h3 className="font-semibold text-xl mt-4">{mueble.nombre}</h3>
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
            {mueble.ancho}cm (A) x {mueble.fondo}cm (F) x {mueble.altura}cm (H)
          </strong>
        </p>
        <p>
          <strong>Disponible:</strong> {mueble.disponible ? "Sí" : "No"}
        </p>
      </div>
    </div>
  );
};

export default DetalleMueble;
