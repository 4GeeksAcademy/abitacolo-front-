import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../context/appContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { store, actions } = useContext(Context);
  const { t } = useTranslation("global");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="dropdownButton"
        onClick={toggleDropdown}
        className="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="ml-2">{store.carrito.length}</span>
        <svg
          className="w-2.5 h-2.5 ms-3"
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

      {isOpen && (
        <div
          id="dropdownMenu"
          className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-abitacoloGray"
        >
          <ul
            className="py-2 text-gray-700 font-bold text-xl max-h-60 overflow-y-auto"
            aria-labelledby="dropdownButton"
          >
            {store.carrito && store.carrito.length > 0 ? (
              store.carrito.map((mueble, index) => (
                <li key={index} className="px-4 py-2 border-b">
                  <div className="flex justify-between items-center">
                    <Link to={`/mueble/${mueble.id_codigo}`}>
                      <span>{mueble.nombre}</span>
                    </Link>
                    <button
                      onClick={() =>
                        actions.removeMuebleFromCarrito(mueble.id_codigo)
                      }
                    >
                      <FontAwesomeIcon
                        icon={faXmark}
                        style={{ color: "#c70000" }}
                      />
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li>
                <span className="block px-4 py-2">El carrito está vacío</span>
              </li>
            )}
          </ul>
          {store.carrito && store.carrito.length > 0 && (
            <div className="border-gray-200 py-2 px-4 flex justify-between">
              <span>
                <span>Total: {store.precioCarrito}€</span>
              </span>
              <Link to={"/FormPasarela"}>
                <button className="bg-abitacoloGreen rounded-md p-2">
                  Completar
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;
