import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/appContext";

import Aparadores from "../assets/ModoClaro/Categorias/Aparadores.png";
import ArmariosComodas from "../assets/ModoClaro/Categorias/Armarios_comodas.png";
import CamasCabeceros from "../assets/ModoClaro/Categorias/Camas_cabeceros.png";
import Estanterias from "../assets/ModoClaro/Categorias/Estanterias.png";
import Lamparas from "../assets/ModoClaro/Categorias/Lamparas.png";
import MarcosEspejos from "../assets/ModoClaro/Categorias/Marcos_espejos.png";
import MesasEscritorios from "../assets/ModoClaro/Categorias/Mesas_escritorios.png";
import Mesillas from "../assets/ModoClaro/Categorias/Mesillas.png";
import OtrosObjetos from "../assets/ModoClaro/Categorias/Otros_objetos.png";
import Percheros from "../assets/ModoClaro/Categorias/Percheros.png";
import SillasTaburetes from "../assets/ModoClaro/Categorias/Sillas_taburetes.png";
import SillonesSofas from "../assets/ModoClaro/Categorias/Sillones_sofas.png";

const categoryImages = {
  Percheros,
  Aparadores,
  "Armarios y Cómodas": ArmariosComodas,
  "Camas y Cabeceros": CamasCabeceros,
  "Estanterias y Baldas": Estanterias,
  Lámparas: Lamparas,
  "Marcos y Espejos": MarcosEspejos,
  "Mesas y Escritorios": MesasEscritorios,
  Mesillas,
  "Otros Objetos": OtrosObjetos,
  "Sillas y Taburetes": SillasTaburetes,
  "Sillones y Sofás": SillonesSofas,
};

const Carrusel = () => {
  const { store } = useContext(Context);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    if (Array.isArray(store.muebles) && store.muebles.length > 0) {
      setCardsData(store.muebles);
    }
  }, [store.muebles]);

  useEffect(() => {
    if (cardsData.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [cardsData]);

  const nextCard = () => {
    if (cardsData.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const prevCard = () => {
    if (cardsData.length === 0) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
    );
  };

  if (cardsData.length === 0) {
    return <div>No hay muebles disponibles.</div>;
  }

  return (
    <div className=" w-fit h-fit max-w-sm mx-auto">
      <div className="overflow-hidden ">
        <div className=" h-64">
          <h2 className=" top-4 left-4 text-2xl dark:text-white font-bold text-gray-800">
            {cardsData[currentIndex]?.nombre || "Sin nombre"}
          </h2>
          <img
            className=" rounded-full h-full w-full object-cover "
            src={categoryImages[cardsData[currentIndex]?.categoria]}
            alt={cardsData[currentIndex]?.categoria}
          />
          <p className=" bottom-4 left-4 right-4 text-gray-600">
            {cardsData[currentIndex]?.disponible
              ? "Disponible"
              : "No disponible"}
          </p>
        </div>
      </div>
      <button
        onClick={prevCard}
        className=" bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextCard}
        className=" bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carrusel;
