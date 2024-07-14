import React, { useState } from "react"
import { useTranslation } from "react-i18next"



const SwitchLanguage = () => {

    const [t, i18n] = useTranslation("global")
    const [active , setIsActive] = useState(false)

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsActive(!active)

       
    }


    return(
        <div>
            {active === true ? (
            <>
            <button className="font-bold" onClick={() => handleChangeLanguage("es")}>ESP</button>
            <span>/</span>
            <button onClick={() => handleChangeLanguage("en")}>ENG</button>
            </> ):( 
             <>   
            <button  onClick={() => handleChangeLanguage("es")}>ESP</button>
            <span>/</span>
            <button className="font-bold" onClick={() => handleChangeLanguage("en")}>ENG</button>
            </>
            )}
            
        </div>
    )

}



export default SwitchLanguage;