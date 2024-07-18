import React from "react";
import flechaLarga from "../assets/ModoClaro/Flechas/FlechaLargaNegro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const steps = [
    {
      text: "selecciona tus muebles favoritos y ajusta el alquiler a tu medida",
    },
    {
      text: "recíbelos gratis en casa y disfrútalos, estaremos en contacto para lo que necesites",
    },
    {
      text: "los recogeremos cuando quieras, ¡solo habrás pagado mientras los tienes!",
    },
  ];
  return (
    <div className="flex pt-16 text-left justify-between ">
      <div className="text-3xl">
        <p>
          recuperamos
          <br /> muebles desechados
          <br /> y les damos una
          <br />
          <span className="font-bold"> segunda vida </span>
        </p>
        <p className="mt-8 text-sm">
          (y una tercera, una cuarta y una quinta...)
        </p>
      </div>
      <div className="">
        <p className="text-2xl">
          aquí es donde entras <span className="font-bold">tú</span>
        </p>
        <FontAwesomeIcon icon={faSortDown} size="2xl" />
        <ol className="flex mt-5 list-decimal gap-14 text-xl ">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <li className="w-44">
                <span className="font-bold">{step.text.split(" ")[0]} </span>
                {step.text.slice(step.text.indexOf(" ") + 1)}
              </li>
              {index < steps.length - 1 && (
                <div className="grid place-items-center">
                  <FontAwesomeIcon icon={faArrowRightLong} size="2xl" />
                </div>
              )}
            </React.Fragment>
          ))}
        </ol>
        <img className="" src={flechaLarga} alt="fecha" />
        <div className="grid">
          <p className="w-44 justify-self-end me-56">
            <span className="font-bold">y lo mejor...</span>
            <br />¡ después podrá hacer lo mismo otra persona !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
