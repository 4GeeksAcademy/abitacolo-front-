import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <>
      <h1>Hola, Font Awesome en React con Vite!</h1>
      <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faUser} />
    </>
  );
}

export default App;
