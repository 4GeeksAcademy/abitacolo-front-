import React from "react";
import abitacolo from "/src/assets/abitacolo.png";
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

const FooterBody = () => {
  const [t] = useTranslation("global");

  return (
    <div className="px-5 lg:px-20 py-10 max-lg:hidden dark:bg-abitacoloDarkGrayShadow dark:text-abitacoloGray">
      <div className="flex justify-between border-b-2 dark:border-abitacoloGrayShadow border-black">
        <img src={abitacolo} alt="Abitacolo" />
        <p className="place-self-end text-2xl">MADRID</p>
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex flex-col items-center text-sm text-center dark:bg-abitacoloGrayShadow bg-abitacoloGray pt-8 px-2 dark:text-wh">
          <FontAwesomeIcon icon={faRecycle} size="2xl" className="mb-2" />
          <span className="font-bold mb-1">{t("footer.recycleOne")}</span>
          <Markdown>{t("footer.recycleTwo")}</Markdown>
        </div>
        <div>
          <p className="font-bold mb-5 text-3xl">muebles</p>
          <ul>
            <li>armarios y cómodas</li>
            <li>estanterías</li>
            <li>mesas y escritorios</li>
            <li>mesillas</li>
            <li>aparadores</li>
            <li>camas y cabeceros</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-3xl invisible mb-5">muebles</p>
          <ul>
            <li>percheros</li>
            <li>sillas y taburetes</li>
            <li>sillones y sofás</li>
            <li>lámparas</li>
            <li>marcos y espejos</li>
            <li>otros objetos</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-5 text-3xl">nosotros</p>
          <ul>
            <li>nuestra misión</li>
            <li>contacto</li>
            <li>trabaja con nosotros</li>
            <li>danos tu opinión</li>
            <li>suscríbete a</li>
            <li>nuestra newsletter</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-5 text-3xl">ayuda</p>
          <ul>
            <li>¿necesitas ayuda?</li>
            <li>FAQ</li>
            <li>aviso legal</li>
            <li>política de privacidad</li>
            <li>política de cookies</li>
            <li>plataforma de pago</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-5 text-3xl">idioma</p>
          <SwitchLanguage />
        </div>
        <div>
          <p className="font-bold mb-5 text-3xl">¡síguenos en redes!</p>
          <div className="flex justify-between mt-11">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
            <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <p>
          © {new Date().getFullYear()} Abitacolo. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default FooterBody;
