import {
  faEraser,
  faSliders,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useRef, useState } from "react";
import { Context } from "../context/appContext";

const initialFormData = {
  color: [],
  estilo: [],
  precioDesde: "",
  precioHasta: "",
  espacio: [],
  disponible: false,
};

const Filters = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialFormData);
  const { store, actions } = useContext(Context);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "disponibilidad") {
        setFormData((prevState) => ({ ...prevState, [name]: checked }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [name]: checked
            ? [...prevState[name], value]
            : prevState[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.filtrarMuebles(formData);
  };

  const handleClearFilters = () => {
    setFormData(initialFormData);
    formRef.current.reset();
    console.log("Filtros reseteados:", initialFormData);
  };

  const renderCheckboxList = (category, options) => (
    <div className={`list-${category} mt-10`}>
      <span className="text-3xl">
        <strong>{category}</strong>
      </span>
      <ul className="list-none mt-5">
        {options.map((option) => (
          <li key={option}>
            <input
              type="checkbox"
              id={option}
              name={category}
              value={option}
              checked={formData[category].includes(option)}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor={option}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="mr-20 dark:bg-prueba-color">
      <span className="text-3xl">
        <strong>
          estos filtros te <br />
          pueden servir
        </strong>
      </span>
      <p className="">
        <FontAwesomeIcon icon={faSortDown} size="2xl" />
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="text-2xl mt-10">
        {renderCheckboxList("color", [
          "Natural",
          "Blanco / Beige / Gris",
          "Negro / Gris Oscuro",
          "Tonos Pastel",
          "Tonos Vivos",
          "Dorado / Plateado",
        ])}

        {renderCheckboxList("estilo", [
          "Industrial",
          "Clásico",
          "Minimalista",
          "Nórdico",
          "Rústico",
          "Vintage / Mid-Century",
          "Otros",
        ])}

        <div className="filter-Prize mt-10">
          <span className="text-3xl">
            <strong>precio(€/mes)</strong>
          </span>
          <div className="mt-4">
            <input
              type="text"
              name="precioDesde"
              value={formData.precioDesde}
              onChange={handleInputChange}
              className="border-2 border-solid border-black rounded w-20"
              placeholder="desde"
            />
            <input
              type="text"
              name="precioHasta"
              value={formData.precioHasta}
              onChange={handleInputChange}
              className="border-2 border-solid border-black rounded w-20 ml-5"
              placeholder="hasta"
            />
          </div>
        </div>

        {renderCheckboxList("espacio", [
          "Salón / Comedor",
          "Dormitorio",
          "Recibidor",
          "Zona de Trabajo",
          "Exterior",
          "Otras",
        ])}

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

        <div className="grid mt-5">
          <button
            type="submit"
            className="p-3 border-2 bg-abitacoloGreen dark:text-white dark:bg-abitacoloGrayShadow border-solid border-black dark:border-white rounded-full mt-4"
          >
            <FontAwesomeIcon icon={faSliders} />
            <span className="ms-3">aplicar filtros</span>
          </button>
        </div>
        <div className="grid mt-5">
          <button
            type="button"
            onClick={handleClearFilters}
            className="p-3 border-2 dark:text-white dark:bg-abitacoloGrayShadow border-solid border-black dark:border-white rounded-full mt-4"
          >
            <FontAwesomeIcon icon={faEraser} />
            <span className="ms-3">borrar filtros</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
