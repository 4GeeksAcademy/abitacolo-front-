import React from "react";
import abitacolo from "/src/assets/abitacolo.png";
import sostenible from "/src/assets/sostenible.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterBody = () => {
  return (
    <div className="px-5 lg:px-20 py-10 max-lg:hidden">
      <div className="flex justify-between border-b-4 border-black">
        <img src={abitacolo} alt="Abitacolo" />
        <p className="place-self-end text-2xl">MADRID</p>
      </div>
      <div className="flex justify-between mt-10">
        <div>
          <img src={sostenible} alt="sostenible" />
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
            <li>msillones y sofás</li>
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
            <li>sanos tu opinión</li>
            <li>suscribete a</li>
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
          <ul>
            <li className="font-bold">ESPAÑOL</li>
            <li>ENGLISH</li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-5 text-3xl">¡siguenos en redes!</div>
          <div className=" flex justify-between mt-11">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
            <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p>datos de copyright</p>
      </div>
    </div>
  );
};

export default FooterBody;
