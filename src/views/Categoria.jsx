import React, { useContext } from "react";
import HeaderHome from "../components/HeaderHome";
import FooterHome from "../components/FooterHome";
import Filters from "../components/Filters";
import MueblesPorCategoria from "../components/MueblesPorCategoria";
import { Context } from "../context/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

function Home() {
  const { store } = useContext(Context);
  const { muebles } = store;

  // Define la categoría que quieres mostrar dinámicamente
  const categoriaMostrar = useParams().name;

  return (
    <div className="bg-abitacoloGray dark:text-abitacoloGray dark:bg-abitacoloDarkGrayShadow px-5 lg:px-20 py-10">
      <button className="xl:hidden bg-gray-400 p-2 rounded text-2xl">
        <FontAwesomeIcon icon={faSliders} /> Filtros
      </button>
      <div className="flex mt-14">
        <Filters className="max-smartphone:hidden" />
        <div className="mt-6">
          <MueblesPorCategoria muebles={muebles[categoriaMostrar]} />
        </div>
      </div>
      <FooterHome />
    </div>
  );
}

export default Home;
