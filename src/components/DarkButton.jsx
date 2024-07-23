import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useContext } from "react";
import { Context } from "../context/appContext";

const DarkButton = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    const classList = document.documentElement.classList;
    store.isDarkMode ? classList.add("dark") : classList.remove("dark");
  }, [store.isDarkMode]);

  return (
    <div className="flex justify-center items-center">
      <button onClick={actions.toggleDarkMode} className="p-2">
        <FontAwesomeIcon icon={store.isDarkMode ? faMoon : faSun} size="xl" />
      </button>
    </div>
  );
};

export default DarkButton;
