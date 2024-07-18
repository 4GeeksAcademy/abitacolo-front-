import React, { useContext } from "react";
import abitacoloMadridNegro from "../assets/ModoClaro/Logos/AbitacoloMadridNegro.png";
import abitacoloMadridBlanco from "../assets/ModoOscuro/Logos/AbitacoloMadridBlanco.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";
import DarkButton from "./DarkButton";
import { useTranslation } from "react-i18next";
import SwitchLanguage from "./SwitchLanguage";
import { Link } from "react-router-dom";
import { Context } from "../context/appContext";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const { store } = useContext(Context);
  return (
    <div className="sticky top-0 bg-white">
      {/* <div className=" text-center h-5 bg-abitacoloDarkGrayShadow border-b"></div>
      <div className=" text-center h-5 bg-abitacoloDarkGrayShadow border-b"></div> */}
      <div className="px-5 lg:px-20 dark:text-abitacoloGray dark:bg-abitacoloDarkGrayShadow">
        <nav className="flex justify-between items-center py-4 border-b-4 border-black dark:border-white">
          <Link to={"/"}>
            <div className="w-60">
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
      </div>
    </div>
  );
};

export default Navbar;
