import React, { useContext } from "react";
import { Context } from "../context/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

const FavButton = ({ mueble }) => {
  const { store, actions } = useContext(Context);
  const isFav = store.user.favourites.some(
    (fav) => fav.mueble_id === mueble.id_codigo
  );
  const handleFavClick = () => {
    if (isFav) {
      console.log(mueble.id_codigo);
    } else {
      actions.addFav(mueble.id_codigo);
    }
  };

  return (
    <button onClick={handleFavClick}>
      {isFav ? (
        <FontAwesomeIcon icon={faHeartCrack} />
      ) : (
        <FontAwesomeIcon icon={faHeart} />
      )}
    </button>
  );
};

export default FavButton;
