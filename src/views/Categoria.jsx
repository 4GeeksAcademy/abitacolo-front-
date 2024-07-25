// Categorias.jsx
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import FooterHome from "../components/FooterHome";
import Filters from "../components/Filters";
import MueblesPorCategoria from "../components/MueblesPorCategoria";
import { Context } from "../context/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import ModalFiltros from "../components/ModalFiltros";

const Categoria = () => {
  const { store } = useContext(Context);
  const { name: categoriaName } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const categoriaActual = store.mueblesCategorizados.find(
    (cat) => cat.categoria === categoriaName
  );

  return (
    <div className="bg-abitacoloGray dark:text-abitacoloGray dark:bg-abitacoloDarkGrayShadow px-5 lg:px-20 py-10">
      <div className="smartphone:hidden">
        <button
          onClick={isModalOpen ? closeModal : openModal}
          className="bg-gray-400 p-2 rounded text-2xl"
        >
          <FontAwesomeIcon icon={faSliders} /> Filtros
        </button>
        {isModalOpen && <ModalFiltros onClose={closeModal} />}
      </div>
      <div className="flex mt-14">
        <div className="max-smartphone:hidden">
          <Filters />
        </div>
        <div className="">
          {categoriaActual ? (
            <MueblesPorCategoria
              mueblesPorCategorias={categoriaActual.muebles}
            />
          ) : (
            <p>Categoría no encontrada</p>
          )}
        </div>
      </div>
      <FooterHome />
    </div>
  );
};

export default Categoria;
