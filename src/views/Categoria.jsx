import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import HeaderHome from "../components/HeaderHome";
import FooterHome from "../components/FooterHome";
import Filters from "../components/Filters";
import MueblesPorCategoria from "../components/MueblesPorCategoria";
import { Context } from "../context/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const { store } = useContext(Context);
  const { muebles } = store;
  const { name: categoriaMostrar } = useParams();

  const mueblesCategoria = muebles[categoriaMostrar] || [];

  return (
    <div className="bg-abitacoloGray dark:text-abitacoloGray dark:bg-abitacoloDarkGrayShadow px-5 lg:px-20 py-10">
      <button className="xl:hidden bg-gray-400 p-2 rounded text-2xl">
        <FontAwesomeIcon icon={faSliders} /> Filtros
      </button>
      <div className="flex mt-14">
        <div className="max-smartphone:hidden">
          <Filters />
        </div>
        <div className="">
          <MueblesPorCategoria muebles={mueblesCategoria} />
        </div>
      </div>
      <FooterHome />
    </div>
  );
}

export default Home;
