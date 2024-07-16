import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const DarkButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const classList = document.documentElement.classList;
    isDarkMode ? classList.add("dark") : classList.remove("dark");
  }, [isDarkMode]);

  return (
    <div className="flex justify-center items-center">
      <button onClick={toggleTheme} className="p-2">
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} size="xl" />
      </button>
    </div>
  );
};

export default DarkButton;
