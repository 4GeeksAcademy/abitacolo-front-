import React from "react";
import logoAbitacolo from "../assets/A_identidad-PNG/A_claro-01.png";
import logoMueble from "../assets/muebleabitacolo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";
import DarkButton from "./DarkButton";
import { useTranslation } from "react-i18next";
import SwitchLanguage from "./SwitchLanguage";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="">
      <div className=" text-center h-5 bg-abitacoloDarkGrayShadow border-b"></div>
      <div className=" text-center h-5 bg-abitacoloDarkGrayShadow border-b"></div>
      <div className="px-5 lg:px-20 dark:text-abitacoloGray dark:bg-abitacoloDarkGrayShadow">
        <nav className="flex justify-between items-center py-4 border-b-4 border-black dark:border-white">
          <Link to={"/"}>
            <div className="w-60">
              <img src={logoAbitacolo} alt="Logo Abitacolo" />
            </div>
          </Link>
          <div className="grid place-self-end max-sm:hidden dark:text-white">
            <ul className="flex items-center space-x-4 text-lg">
              <li className="">
                <DarkButton />
              </li>
              <li className="flex items-center">
                <SwitchLanguage />
                <span className="ms-3 text-xs leading-none"> ● </span>
              </li>
              <li className="flex items-center">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
                <span className="ms-3 text-xs leading-none"> ● </span>
              </li>
              <li className="flex items-center">
                <a href="#" className="hover:underline">
                  {t("navBar.mision")}
                </a>
                <span className="ms-3 text-xs leading-none"> ● </span>
              </li>
              <li className="relative">
                <a href="#" className="hover:underline">
                  <FontAwesomeIcon icon={faUser} /> {t("navBar.profile")}
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:hidden">
            {" "}
            <DropDown />
          </div>
        </nav>
        <header className="text-center my-12 flex flex-col md:flex-row justify-between md:mx-48">
          <div className="">
            <Markdown className="mt-4 text-3xl text-left">
              {t("navBar.body")}
            </Markdown>

            <div className="mt-8 text-sm dark:border-abitacoloGray border-b-2 border-black flex justify-between">
              <p>{t("navBar.until")}</p>
              <span className="font-bold">{t("navBar.recovered")}</span>
            </div>
          </div>
          <img
            src={logoMueble}
            alt="Mueble Abitacolo"
            className="mt-4 md:mt-0 w-full md:w-auto"
          />
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
    </div>
  );
};

export default Navbar;
