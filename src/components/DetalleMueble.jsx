import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../context/appContext";
import FavButton from "./FavButton";
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
const API_BASE_URL = import.meta.env.VITE_API_URL;

const DetalleMueble = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [mueble, setMueble] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMueble = async () => {
      if (store.muebles.length === 0) {
        await actions.getMuebles();
      }
      const foundMueble = store.muebles.find((m) => m.id_codigo === id);
      if (foundMueble) {
        setMueble(foundMueble);
      } else {
        const response = await fetch(`${API_BASE_URL}/mueble/${id}`);
        const data = await response.json();
        setMueble(data);
      }
      setIsLoading(false);
    };

    loadMueble();
  }, [id, actions, store.muebles]);

  if (isLoading) return <p>Cargando mueble...</p>;
  if (!mueble) return <p>Mueble no encontrado</p>;

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
    <div className="mx-auto p-4 dark:text-white md:pt-4 dark:bg-abitacoloDarkGrayShadow bg-abitacoloGray min-h-screen">
      <Link to="/" className="mb-4">
        <button className="border  dark:font-bold p-2 rounded-lg border-abitacoloDarkGrayShadow bg-abitacoloGreen">
          Volver
        </button>
      </Link>
      <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mt-4 md:mt-0">
        <div className="md:w-1/2 mb-4  md:pb-10">
          <img
            src={imageMap[mueble.id_codigo] || otros}
            alt={mueble.nombre}
            className="w-max h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pt-10">
          <h1 className="text-3xl font-bold mb-4">{mueble.nombre}</h1>
          <div className="space-y-2">
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
              <strong>Precio:</strong> {mueble.precio_mes}€/mes
            </p>
            <p>
              <strong>Dimensiones:</strong> {mueble.ancho}cm (A) x{" "}
              {mueble.fondo}cm (F) x {mueble.altura}cm (H)
            </p>
            <p>
              <strong>Disponible:</strong> {mueble.disponible ? "Sí" : "No"}
            </p>
          </div>
          {store.user?.email && (
            <div className="flex justify-between items-center mt-4">
              {mueble.disponible && (
                <button
                  className="p-2 bg-abitacoloGreen rounded-md me-3 mt-3"
                  onClick={() => actions.addMuebleToCarrito(mueble)}
                >
                  Añadir al carrito
                </button>
              )}

              <FavButton mueble={mueble} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalleMueble;
