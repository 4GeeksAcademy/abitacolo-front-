import React, { useContext, useState } from "react";
import abitacoloMadridNegro from "../assets/ModoClaro/Logos/AbitacoloMadridNegro.png";
import abitacoloMadridBlanco from "../assets/ModoOscuro/Logos/AbitacoloMadridBlanco.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";
import DarkButton from "./DarkButton";
import { useTranslation } from "react-i18next";
import SwitchLanguage from "./SwitchLanguage";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/appContext";
import ModalLogin from "./ModalLogin";
import Carrito from "./Carrito";

const Navbar = () => {
  const navigate = useNavigate();

  const [t, i18n] = useTranslation("global");
  const { store } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="sticky top-0 bg-white">
      <div className="px-5 lg:px-20 dark:text-abitacoloGray dark:bg-abitacoloDarkGrayShadow">
        <nav className="flex justify-between items-center py-4 border-b-4 border-black dark:border-white">
          <Link to={"/"}>
            <div className="max-laptop:w-40 w-60">
              <img
                src={
                  store.isDarkMode
                    ? abitacoloMadridBlanco
                    : abitacoloMadridNegro
                }
                alt="Logo Abitacolo"
              />
            </div>
          </Link>
          <div className="grid place-self-end max-sm:hidden dark:text-white">
            <ul className="flex items-center space-x-4 text-lg">
              {store.user && store.user.email === "asd@asd.com" && (
                <Link to="/NuevoMueble">
                  <li className="">
                    <p>Crear Mueble</p>
                  </li>
                </Link>
              )}

              <li className="">
                <DarkButton />
              </li>

              <li className="flex items-center">
                <SwitchLanguage />
                <span className="ms-3 text-xs leading-none"> ● </span>
              </li>
              <li className="flex items-center max-laptop:hidden">
                <a href="#" className="hover:underline ">
                  FAQ
                </a>
                <span className="ms-3 text-xs leading-none"> ● </span>
              </li>
              <li className="flex items-center max-laptop:hidden">
                <a href="#" className="hover:underline">
                  {t("navBar.mision")}
                </a>
                <span className="ms-3 text-xs leading-none"> ● </span>
              </li>
              <li className="relative">
                <FontAwesomeIcon icon={faUser} />{" "}
                {store.user ? (
                  <button
                    onClick={() => navigate("/ConfigurarCuenta")}
                    className="items-center"
                  >
                    {store.user?.name ? store.user.name : store.user.email}
                  </button>
                ) : (
                  <button onClick={openModal} className="items-center">
                    {t("navBar.profile")}
                  </button>
                )}
                {isModalOpen && <ModalLogin onClose={closeModal} />}
              </li>
              {store.user && store.carrito.length > 0 && (
                <li className="flex items-center">
                  <Carrito />
                </li>
              )}
            </ul>
          </div>
          <div className="sm:hidden">
            <DropDown />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
