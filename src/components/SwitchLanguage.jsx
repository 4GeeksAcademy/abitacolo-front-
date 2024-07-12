import React from "react"
import { useTranslation } from "react-i18next"


const SwitchLanguage = () => {

    const [t, i18n] = useTranslation("global")

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }


    return(
        <div>

            <button onClick={() => handleChangeLanguage("en")}>EN</button>
            <span>/</span>
            <button onClick={() => handleChangeLanguage("es")}>ES</button>
        </div>
    )

}



export default SwitchLanguage;