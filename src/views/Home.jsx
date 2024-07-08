import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import HeaderHome from "/src/components/HeaderHome.jsx";
import FooterHome from "../components/FooterHome";
import Filters from "../components/Filters";
import Card from "../components/Card";
import { Context } from "../context/appContext";

function App() {
  
  const { store, actions } = useContext(Context);

  return (
    <>
      {/* <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faUser} /> */}
       <div className='bg-gray-300 h-100% px-20 py-10'>
        <HeaderHome/>
        <div className="flex mt-14">
       <Filters/>
       <div className="grid grid-cols-3 gap-y-4 gap-x-64">

       {store.muebles.map((mueble)=> (
        <Card categoria={mueble.categoria} color={mueble.color} disponibles={mueble.disponibilidad}/>
       ))}
        </div>
        </div>
        <FooterHome />
      </div>
    </>
  );
}

export default App;
