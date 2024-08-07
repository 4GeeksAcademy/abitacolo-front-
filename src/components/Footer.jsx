import React, { useState, useContext } from 'react';
import FooterBody from './FooterBody';
import FooterModal from './FooterModal';
import abitacolo from "../assets/ModoClaro/Logos/AbitacoloNegro.png";
import abitacoloMadridNegro from "../assets/ModoClaro/Logos/AbitacoloMadridNegro.png";
import abitacoloMadridBlanco from "../assets/ModoOscuro/Logos/AbitacoloMadridBlanco.png";
import { Context } from "../context/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { store } = useContext(Context);

  return (
    <>
      <FooterBody />
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-abitacoloDarkGrayShadow dark:text-abitacoloGray border-t border-gray-200 dark:border-abitacoloGrayShadow">
        <div className="flex justify-between items-center px-4 py-2 border-b-2 dark:border-abitacoloGrayShadow border-black">
          <img className="w-32" src={
                  store.isDarkMode
                    ? abitacoloMadridBlanco
                    : abitacoloMadridNegro
                } alt="Abitacolo" />
          <p className="text-lg">MADRID</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full py-2 bg-abitacoloGray text-white text-sm flex items-center justify-center hover:bg-abitacoloGreen -80 transition-all duration-300"
        >
          Nosotros

          <svg
            className="ps-1 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l4 4 4-4"
            />
          </svg>
        </button>
      </div>
      <FooterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Footer