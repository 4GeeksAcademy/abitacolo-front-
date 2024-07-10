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
      <div className="bg-gray-300 px-5 lg:px-20 py-10">
        <div className=" max-xl:hidden">
          <HeaderHome />
        </div>
        <div className="flex mt-14">
          <div className="max-xl:hidden">
            <Filters />
          </div>

          <div className="grid md:grid-cols-2 gap-y-4 gap-x-4 lg:gap-x-32 xl:gap-x-64">
            {store.muebles.map((mueble) => (
              <Card
                key={mueble.id}
                categoria={mueble.categoria}
                color={mueble.color}
                disponibles={mueble.disponibilidad}
              />
            ))}
          </div>
        </div>
        <FooterHome />
      </div>
    </>
  );
}

export default App;
