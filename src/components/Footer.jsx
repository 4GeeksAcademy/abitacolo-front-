import React, { useState } from "react";
import FooterBody from "./FooterBody";
import FooterModal from "./FooterModal";
import abitacolo from "../assets/ModoClaro/Logos/AbitacoloNegro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <FooterBody />
      <div className="lg:hidden bottom-0 left-0 right-0 bg-white dark:bg-abitacoloDarkGrayShadow dark:text-abitacoloGray border-t border-gray-200 dark:border-abitacoloGrayShadow">
        <div className="flex justify-between items-center px-4 py-2 border-b-2 dark:border-abitacoloGrayShadow border-black">
          <img className="w-32" src={abitacolo} alt="Abitacolo" />
          <p className="text-lg">MADRID</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full py-2 bg-abitacoloGray  text-sm flex items-center justify-center hover:bg-abitacoloGreen -80 transition-all duration-300"
        >
          Más información...
          <FontAwesomeIcon icon={faChevronDown} size="lg" />
        </button>
      </div>
      <FooterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;
