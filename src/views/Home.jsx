import React, { useContext, useState } from "react";
import HeaderHome from "../components/HeaderHome";
import FooterHome from "../components/FooterHome";
import Filters from "../components/Filters";
import CardCategorias from "../components/CardCategorias";
import { Context } from "../context/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import abitacoloNadaAquiBlanco from "../assets/ModoOscuro/Especiales/D_oscuro-06.png";
import abitacoloNadaAquidNegro from "../assets/ModoClaro/Especiales/D_claro-06.png";
import Markdown from "react-markdown";
import { useTranslation } from "react-i18next";
import ModalFiltros from "../components/ModalFiltros";

const Home = () => {
  const { store } = useContext(Context);
  const { mueblesCategorizados } = store;
  const [t, i18n] = useTranslation("global");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-abitacoloGray dark:text-abitacoloGray dark:bg-abitacoloDarkGrayShadow px-5  py-10 dark:bg-prueba-color">
      <div className="max-xl:hidden lg:px-20">
        <HeaderHome />
      </div>
      <div className="smartphone:hidden">
        <button
          onClick={isModalOpen ? closeModal : openModal}
          className="bg-gray-400 dark:text-white p-2 rounded text-2xl"
        >
          <FontAwesomeIcon icon={faSliders} /> Filtros
        </button>
        {isModalOpen && <ModalFiltros onClose={closeModal} />}
      </div>
      <div className="flex mt-14 max-xl:justify-center lg:ps-20">
        <div className="max-smartphone:hidden">
          <Filters />
        </div>
        {mueblesCategorizados.length > 0 ? (
          <div className="grid w-full place-items-center max-laptop:grid-cols-2 grid-cols-3">
            {mueblesCategorizados.map(({ categoria, muebles }) => (
              <div key={categoria} className="max-w-96">
                {" "}
                <Link to={`/categoria/${categoria}`}>
                  <CardCategorias
                    categoria={categoria}
                    recuperados={muebles.length}
                    disponibles={
                      muebles.filter((mueble) => mueble.disponible).length
                    }
                  />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="">
            <img
              className=""
              src={
                store.isDarkMode
                  ? abitacoloNadaAquiBlanco
                  : abitacoloNadaAquidNegro
              }
              alt="Logo Abitacolo"
            />
            <Markdown className="mt-4 text-3xl text-left">
              {t("home.noMueble")}
            </Markdown>
          </div>
        )}
      </div>
      <FooterHome />
    </div>
  );
};

export default Home;
