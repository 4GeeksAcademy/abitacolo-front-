import React from "react";
import flechaLarga from "/src/assets/fecha-larga.png"
const Header = () => {
  return (
    <div className="flex pt-16 text-left">
      <div className="w-full md:w-1/2  text-3xl">
        <p>
          recuperamos<br/> muebles desechados<br/> y les damos una<br/>
          <span className="font-bold"> segunda vida </span>
        </p>
        <p className="mt-8 text-sm">
          (y una tercera, una cuarta y una quinta...)
        </p>
      </div>
      <div className="me-20">
        <p className="text-2xl">
          aquí es donde entras <span className="font-bold">tú</span>
        </p>
        <i className="fa-solid fa-caret-down fa-2xl"></i>
        <ol className="flex mt-5 list-decimal gap-14 text-xl">
          <li className="w-44">
            <span className="font-bold">selecciona tus muebles favoritos </span>
            y ajusta el alquiler a tu medida
          </li>
          <div className="grid place-items-center">
          <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
          </div>
          <li  className="w-44">
            <span className="font-bold">
              recíbelos gratis en casa y disfrútalos 
            </span> 
             estaremos en contacto para lo que necesites
          </li>
          <div className="grid place-items-center">
          <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
          </div>

          <li  className="w-44">
            <span className="font-bold">los recogeremos cuando quieras </span>
            ¡solo habrás pagado mientras los tienes !
          </li>
        </ol>
        <img src={flechaLarga} alt="fecha" />
        <div className="grid">
        <p className="w-44 justify-self-end me-56">
          <span className="font-bold">y lo mejor...</span><br/>¡ después podrá hacer
          lo mismo otra persona !
        </p>
        </div>
      </div>
    </div>
  );
};

export default Header;