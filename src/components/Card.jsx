import React from "react";
import mueble from "/src/assets/muebleabitacolo.png"

const Card = ({ imagen, categoria, color, disponibles }) => {
  return (
    <div className="container">
      <img src={mueble} className="rounded-full w-40 h-40"></img>
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