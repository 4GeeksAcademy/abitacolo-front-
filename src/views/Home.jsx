import React, { useContext } from "react";
import HeaderHome from "../components/HeaderHome";
import FooterHome from "../components/FooterHome";
import Filters from "../components/Filters";
import CardCategorias from "../components/CardCategorias";
import { Context } from "../context/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const { store } = useContext(Context);
  const { mueblesCategorizados } = store;

  return (
    <div className="bg-abitacoloGray dark:text-abitacoloGray dark:bg-abitacoloDarkGrayShadow px-5 lg:px-20 py-10 dark:bg-prueba-color">
      <div className="max-xl:hidden">
        <HeaderHome />
      </div>
      <div className="xl:hidden">
        <button className="bg-gray-400 p-2 rounded text-2xl">
          <FontAwesomeIcon icon={faSliders} /> Filtros
        </button>
      </div>
      <div className="flex mt-14 max-xl:justify-center">
        <div className="max-smartphone:hidden">
          <Filters />
        </div>
        <div className="grid max-laptop:grid-cols-2 grid-cols-3 justify-items-stretch">
          {mueblesCategorizados.length > 0 ? (
            mueblesCategorizados.map(({ categoria, muebles }) => (
              <Link key={categoria} to={`/categoria/${categoria}`}>
                <CardCategorias
                  categoria={categoria}
                  recuperados={muebles.length}
                  disponibles={
                    muebles.filter((mueble) => mueble.disponible).length
                  }
                />
              </Link>
            ))
          ) : (
            <p>No se han encontrado Muebles que cumplan con los filtros.</p>
          )}
        </div>
      </div>
      <FooterHome />
    </div>
  );
};

export default Home;
