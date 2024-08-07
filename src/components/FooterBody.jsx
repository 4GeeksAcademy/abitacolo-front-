import React, { useContext } from "react";
import abitacolo from "../assets/ModoClaro/Logos/AbitacoloNegro.png";
import abitacoloBlanco from "../assets/ModoOscuro/Logos/A_oscuro-02edit.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";
import SwitchLanguage from "./SwitchLanguage";
import { Context } from "../context/appContext";

const FooterBody = ({ isModal = false }) => {
  const [t] = useTranslation("global");
  const { store } = useContext(Context);

  const containerClass = isModal
    ? "px-4 py-6 overflow-y-auto max-h-[80vh]"
    : "px-5 lg:px-20 py-10 max-lg:hidden";

  const contentClass = isModal
    ? "grid grid-cols-2 gap-6"
    : "flex justify-between mt-10";

  return (
    <div
      className={`${containerClass} dark:bg-abitacoloDarkGrayShadow dark:text-abitacoloGray`}
    >
      <div className="flex justify-between border-b-2 dark:border-abitacoloGrayShadow border-black mb-6">
        <img
          className="w-40 sm:w-60"
          src={store.isDarkMode ? abitacoloBlanco : abitacolo}
          alt="Logo Abitacolo"
        />
        <p className="place-self-end text-xl sm:text-2xl">MADRID</p>
      </div>
      <div className={contentClass}>
        <div className="flex flex-col items-center h-fit text-sm text-center dark:bg-abitacoloGrayShadow bg-abitacoloGray pt-4 rounded-lg p-2 dark:text-white">
          <FontAwesomeIcon icon={faRecycle} size="2xl" className="mb-2" />
          <span className="font-bold mb-1">{t("footer.recycleOne")}</span>
          <Markdown>{t("footer.recycleTwo")}</Markdown>
        </div>
        <div>
          <p className="font-bold mb-2 text-xl sm:text-2xl">muebles</p>
          <ul className="text-sm">
            <li>armarios y cómodas</li>
            <li>estanterías</li>
            <li>mesas y escritorios</li>
            <li>mesillas</li>
            <li>aparadores</li>
            <li>camas y cabeceros</li>
            <li>percheros</li>
            <li>sillas y taburetes</li>
            <li>sillones y sofás</li>
            <li>lámparas</li>
            <li>marcos y espejos</li>
            <li>otros objetos</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2 text-xl sm:text-2xl">nosotros</p>
          <ul className="text-sm">
            <li>nuestra misión</li>
            <li>contacto</li>
            <li>trabaja con nosotros</li>
            <li>danos tu opinión</li>
            <li>suscríbete a nuestra newsletter</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2 text-xl sm:text-2xl">ayuda</p>
          <ul className="text-sm">
            <li>¿necesitas ayuda?</li>
            <li>FAQ</li>
            <li>aviso legal</li>
            <li>política de privacidad</li>
            <li>política de cookies</li>
            <li>plataforma de pago</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2 text-xl sm:text-2xl">idioma</p>
          <SwitchLanguage />
        </div>
        <div>
          <p className="font-bold mb-2 text-xl sm:text-2xl">
            ¡síguenos en redes!
          </p>
          <div className="flex justify-between mt-2">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <FontAwesomeIcon icon={faSquareXTwitter} size="lg" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-sm">
        <p>
          © {new Date().getFullYear()} Abitacolo. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default FooterBody;
