import React, { useContext } from "react";
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

const Home = () => {
  const { store } = useContext(Context);
  const { mueblesCategorizados } = store;
  const [t, i18n] = useTranslation("global");

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
        {mueblesCategorizados.length > 0 ? (
          <div className="grid w-full max-laptop:grid-cols-2 grid-cols-3 justify-items-stretch h-fit">
            {mueblesCategorizados.map(({ categoria, muebles }) => (
              <Link key={categoria} to={`/categoria/${categoria}`}>
                <CardCategorias
                  categoria={categoria}
                  recuperados={muebles.length}
                  disponibles={
                    muebles.filter((mueble) => mueble.disponible).length
                  }
                />
              </Link>
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
      <button
        className="uelz-button uelz-button-styles"
        id="uelz-button"
        data-service-name="Conferencias"
        data-plan-name="Regional"
        data-plan-description="Descripción del servicio"
        data-plan-amount="55.50"
        data-plan-currency="EUR"
        data-plan-type="Subscription"
        data-plan-frequency="month"
        data-plan-billing-cycles="2"
        data-plan-payment-day="25"
        data-type-subscription="variable"
        data-future-charge-action="last_charge"
        data-consume-units="6"
        data-external-usage-id="abc2sr5tgd"
      >
        Comprar
      </button>
      <FooterHome />
    </div>
  );
};

export default Home;
