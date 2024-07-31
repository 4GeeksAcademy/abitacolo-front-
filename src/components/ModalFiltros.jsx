import React, { useContext, useRef, useState } from "react";
import { Context } from "../context/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faSliders } from "@fortawesome/free-solid-svg-icons";

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

const ModalFiltros = ({ onClose }) => {
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
    {
      onClose();
    }
  };

  const handleClearFilters = () => {
    setFormData(initialFormData);
    formRef.current.reset();
    actions.filtrarMuebles(initialFormData);
    {
      onClose();
    }
  };

  const renderCheckboxList = (category, options) => (
    <div key={category} className={`list-${category} mt-10`}>
      <span className="text-3xl">
        <strong>{category}</strong>
      </span>
      <ul className="list-none mt-5">
        {options.map((option) => (
          <li key={`${category}-${option}`}>
            <input
              type="checkbox"
              id={`${category}-${option}-modal`}
              name={category}
              value={option}
              checked={formData[category].includes(option)}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor={`${category}-${option}-modal`}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="w-full dark:bg-prueba-color p-2">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="text-2xl mt-10 grid grid-cols-2 gap-4"
      >
        {Object.entries(filterOptions).map(([category, options]) =>
          renderCheckboxList(category, options)
        )}

        <div className="filter-Prize mt-10">
          <span className="text-3xl">
            <strong>precio</strong>
          </span>
          <div className="mt-4">
            {["precioDesde", "precioHasta"].map((name) => (
              <input
                key={name}
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className={`border-2 border-solid border-black text-sm rounded p-2 w-20 ${
                  name === "precioHasta" ? "sm:ml-5 max-sm:mt-3" : ""
                }`}
                placeholder={name === "precioDesde" ? "desde" : "hasta"}
              />
            ))}
          </div>
          <strong>(€/mes)</strong>
        </div>

        <div className="inline-block border-y-2 border-solid dark:border-abitacoloGray border-black mt-10 p-1">
          <div className="flex justify-center">
            <input
              type="checkbox"
              id="disponible-modal"
              name="disponible"
              checked={formData.disponible}
              onChange={handleInputChange}
            />
            <label className="ml-2" htmlFor="disponible-modal">
              <strong>ver solo muebles</strong> <br />
              <strong> disponibles ahora </strong>
            </label>
          </div>
        </div>

        {["aplicar filtros", "borrar filtros"].map((text, index) => (
          <div className="grid mt-5 h-fit" key={text}>
            <button
              type={index === 0 ? "submit" : "button"}
              onClick={index === 1 ? handleClearFilters : undefined}
              className={`p-3 border-2 ${
                index === 0 ? "bg-abitacoloGreen" : ""
              } dark:text-white dark:bg-abitacoloGrayShadow border-solid border-black dark:border-white rounded-md mt-4`}
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

export default ModalFiltros;
