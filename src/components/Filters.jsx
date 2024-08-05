import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faSliders,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/appContext";

const initialFormData = {
  color: [],
  estilo: [],
  precioDesde: "",
  precioHasta: "",
  espacio: [],
  disponible: false,
};

const filterOptions = {
  color: [
    "Natural",
    "Blanco / Beige / Gris",
    "Negro / Gris Oscuro",
    "Tonos Pastel",
    "Tonos Vivos",
    "Dorado / Plateado",
  ],
  estilo: [
    "Industrial",
    "Clásico",
    "Minimalista",
    "Nórdico",
    "Rústico",
    "Vintage / Mid-Century",
    "Otros",
  ],
  espacio: [
    "Salón / Comedor",
    "Dormitorio",
    "Recibidor",
    "Zona de Trabajo",
    "Exterior",
    "Otras",
  ],
};

const Filters = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialFormData);
  const { actions } = useContext(Context);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox"
          ? name === "disponible"
            ? checked
            : checked
            ? [...prevState[name], value]
            : prevState[name].filter((item) => item !== value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.filtrarMuebles(formData);
  };

  const handleClearFilters = () => {
    setFormData(initialFormData);
    formRef.current.reset();
    actions.filtrarMuebles(initialFormData);
  };

  const renderCheckboxList = (category, options) => (
    <div key={category} className={`list-${category} mt-10`}>
      <span className="text-2xl">
        <strong>{category}</strong>
      </span>
      <ul className="list-none mt-5">
        {options.map((option) => (
          <li key={`${category}-${option}`}>
            <input
              type="checkbox"
              id={`${category}-${option}`}
              name={category}
              value={option}
              checked={formData[category].includes(option)}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor={`${category}-${option}`}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="me-8 dark:bg-prueba-color">
      <span className="text-3xl max-lg:text-xl ">
        <strong>
          estos filtros te <br />
          pueden servir
        </strong>
      </span>
      <p>
        <FontAwesomeIcon icon={faSortDown} size="2xl" />
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="text-md mt-10"
      >
        {Object.entries(filterOptions).map(([category, options]) =>
          renderCheckboxList(category, options)
        )}

        <div className="filter-Prize mt-10">
          <span className="text-2xl max-lg:text-2xl">
            <strong>precio(€/mes)</strong>
          </span>
          <div className="mt-4 ">
            {["precioDesde", "precioHasta"].map((name) => (
              <input
                key={name}
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className={`border-2 border-solid border-black text-sm rounded p-2 w-20 ${
                  name === "precioHasta" ? "ml-5" : ""
                }`}
                placeholder={name === "precioDesde" ? "desde" : "hasta"}
              />
            ))}
          </div>
        </div>

        <div className="inline-block border-y-2 border-solid dark:border-abitacoloGray border-black mt-10 p-1">
          <div className="flex justify-center">
            <input
              type="checkbox"
              id="disponible"
              name="disponible"
              checked={formData.disponible}
              onChange={handleInputChange}
            />
            <label className="ml-2" htmlFor="disponible">
              <strong>ver solo muebles</strong> <br />
              <strong> disponibles ahora </strong>
            </label>
          </div>
        </div>

        {["aplicar filtros", "borrar filtros"].map((text, index) => (
          <div className="grid mt-5" key={text}>
            <button
              type={index === 0 ? "submit" : "button"}
              onClick={index === 1 ? handleClearFilters : undefined}
              className={`p-1 border-2 w-48  ${
                index === 0 ? "bg-abitacoloGreen" : ""
              } dark:text-white dark:bg-abitacoloGrayShadow border-solid border-black dark:border-white rounded-full mt-4`}
            >
              <FontAwesomeIcon icon={index === 0 ? faSliders : faEraser} />
              <span className="ms-3">{text}</span>
            </button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Filters;