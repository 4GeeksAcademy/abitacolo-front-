import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SwitchLanguage = () => {
  const { t, i18n } = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState("es");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div>
      <button
        className={currentLanguage === "es" ? "font-bold" : ""}
        onClick={() => handleChangeLanguage("es")}
      >
        ESP
      </button>
      <span>/</span>
      <button
        className={currentLanguage === "en" ? "font-bold" : ""}
        onClick={() => handleChangeLanguage("en")}
      >
        ENG
      </button>
    </div>
  );
};

export default SwitchLanguage;
