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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
        <div className="h-fit w-full grid">
          <Link to={`/mueble/${cardsData[currentIndex]?.id_codigo}`}>
            <h2 className=" top-4 left-4 text-2xl dark:text-white font-bold text-gray-800">
              {cardsData[currentIndex]?.nombre || "Sin nombre"}
            </h2>
            <img
              className=" rounded-full h-full w-full object-cover "
              src={categoryImages[cardsData[currentIndex]?.categoria]}
              alt={cardsData[currentIndex]?.categoria}
            />
          </Link>
          {cardsData[currentIndex]?.novedad ? (
            <p className=" bg-abitacoloGreen w-fit dark:text-white rounded-lg text-black py-1 px-2  place-self-center">
              {" "}
              Novedades
            </p>
          ) : (
            <p className="py-1 invisible"> 1</p>
          )}
        </div>
      </div>
      <div className="mt-3">
        {" "}
        <button
          onClick={prevCard}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FontAwesomeIcon icon={faBackward} size="xl" />{" "}
        </button>
        <button
          onClick={nextCard}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FontAwesomeIcon icon={faForward} size="xl" />
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
