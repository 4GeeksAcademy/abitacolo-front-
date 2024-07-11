import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const DarkButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex justify-center items-center">
      <button onClick={handleTheme} className="">
        {isDarkMode ? (
          <FontAwesomeIcon icon={faToggleOn} size="xl" />
        ) : (
          <FontAwesomeIcon icon={faToggleOff} size="xl" />
        )}
      </button>
    </div>
  );
};

export default DarkButton;
