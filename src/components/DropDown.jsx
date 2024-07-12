import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        id="dropdownButton"
        onClick={toggleDropdown}
        className="text-black  bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Menu
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

      <div
        id="dropdownMenu"
        className={`z-10 ${
          isOpen ? "block" : "hidden"
        } bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-auto mt-2 absolute right-5`}
      >
        <ul
          className="py-2 text-gray-700 font-bold text-xl"
          aria-labelledby="dropdownButton"
        >
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              <FontAwesomeIcon icon={faUser} /> mi cuenta
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              nuestra misión
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              ESP/ENG
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              ¿podemos ayudarte?
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              ajustes y configuración de cookies
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
