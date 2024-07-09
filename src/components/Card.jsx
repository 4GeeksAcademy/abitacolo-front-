import React from "react";
import mueble from "/src/assets/muebleabitacolo.png"

const Card = ({ imagen, categoria, color, disponibles }) => {
  return (
    <div className="">
      <img src={mueble} className="rounded-full w-fit h-fit"></img>
      <h2>{categoria}</h2>
      <span>Color: {color}</span>
      <br />
      <span>
        <strong>El mueble {disponibles}</strong>
      </span>
    </div>
  );
};

export default Card;