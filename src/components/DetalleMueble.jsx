import React from "react";
import { Link } from "react-router-dom";
import otros from "../assets/ModoClaro/Categorias/Otros_objetos.png";
import a001 from "../assets/Muebles/a001.webp";

const DetalleMueble = () => {
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
    categoria: "Sillones"
  };

  const imageMap = {
    a001,
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-8 font-bold">
        {mueble.categoria}
      </p>
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
            {mueble.ancho}cm (A) x {mueble.fondo}cm (F) x {mueble.altura}cm
            (H)
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