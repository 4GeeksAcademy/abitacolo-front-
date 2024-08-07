import { faGears, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Markdown from "react-markdown";
import logoMueble from "../assets/ModoClaro/Categorias/Aparadores.png";
import { useTranslation } from "react-i18next";
import { Context } from "../context/appContext";
import Carrusel from "./Carrusel";

const HeaderBody = () => {
  const [t, i18n] = useTranslation("global");
  const { store } = useContext(Context);
  return (
    <div className="px-5 lg:px-20 dark:text-abitacoloGray dark:bg-abitacoloDarkGrayShadow py-8">
      {" "}
      <header className="text-center  flex flex-col md:flex-row md:mx-48">
        <div className="">
          <Markdown className="mt-4 text-3xl text-left">
            {t("navBar.body")}
          </Markdown>

          <div className="mt-8 text-sm dark:border-abitacoloGray border-b-2 border-black flex justify-between">
            <p>{t("navBar.since")}</p>
            <span className="font-bold">
              {store.muebles.length} {t("navBar.recovered")}
            </span>
          </div>
        </div>
        <Carrusel />
      </header>
      <div className="mt-10 pb-5 flex justify-between max-sm:hidden">
        <a href="#" className="font-bold text-lg">
          <span className="me-5">
            <FontAwesomeIcon icon={faMessage} size="xl" />
          </span>{" "}
          {t("navBar.help")}
        </a>
        <p className="font-bold text-lg">
          {t("navBar.configuration")}
          <span className="ms-5">
            <FontAwesomeIcon icon={faGears} size="xl" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeaderBody;
