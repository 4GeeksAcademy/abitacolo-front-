import React from "react";
import PropTypes from "prop-types";

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

const CardCategorias = ({ categoria, recuperados, disponibles }) => (
  <div className="p-4 rounded-lg h-fit">
    <img
      className="w-60 rounded-full"
      src={categoryImages[categoria]}
      alt={categoria}
    />
    <div className="mt-4">
      <div className="font-bold capitalize">{categoria}</div>
      <div>{recuperados} muebles recuperados</div>
      <div>{disponibles} muebles disponibles</div>
    </div>
  </div>
);

CardCategorias.propTypes = {
  categoria: PropTypes.string.isRequired,
  recuperados: PropTypes.number.isRequired,
  disponibles: PropTypes.number.isRequired,
};

export default CardCategorias;
