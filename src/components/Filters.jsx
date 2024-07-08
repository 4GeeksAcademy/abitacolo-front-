import React from "react"



const Filters = () => {

    return(
        <>
        <div className=" mr-20">
        <span className="text-3xl"><strong>estos filtros te <br/>pueden servir</strong></span>
        <p className=""><i className="fa-solid fa-arrow-down-short-wide"></i></p>
        {/* Filtros Colores */}
        <div className="list-color text-2xl mt-10">
            <span className="text-3xl"><strong>color</strong></span>
            <ul className="list-color mt-5">
                <li>
                    <input id="natural_color" type="checkbox" className="mr-2"></input>
                    <label htmlFor="natural_color">Color Natural</label>
                </li>
                <li>
                    <input id="blanco/beige/gris" type="checkbox" className="mr-2"></input>
                    <label htmlFor="blanco/beige/gris">blanco/beige/gris</label>
                </li>
                <li>
                    <input id="negro/gris oscuro" type="checkbox" className="mr-2"></input>
                    <label htmlFor="negro/gris oscuro">negro/gris oscuro</label>
                </li>
                <li>
                    <input id="colores pastel" type="checkbox" className="mr-2"></input>
                    <label htmlFor="colores pastel">colores pastel</label>
                </li>
                <li>
                    <input id="colores vivos" type="checkbox" className="mr-2"></input>
                    <label htmlFor="colores vivos">colores vivos</label>
                </li>
                <li>
                    <input id="dorado/plateado" type="checkbox" className="mr-2"></input>
                    <label htmlFor="dorado/plateado">dorado/plateado</label>
                </li>
            </ul>
            {/* Filtros Estilos */}
            <div className="list-style  mt-10">
            <span className="text-3xl"><strong>estilo</strong></span>
            <ul className="list-none mt-5">
                <li>
                    <input id="industrial" type="checkbox" className="mr-2"></input>
                    <label htmlFor="industrial">industrial</label>
                </li>
                <li>
                    <input id="clásico" type="checkbox" className="mr-2"></input>
                    <label htmlFor="clásico">clásico</label>
                </li>
                <li>
                    <input id="minimalista" type="checkbox" className="mr-2"></input>
                    <label htmlFor="minimalista">minimalista</label>
                </li>
                <li>
                    <input id="nórdico" type="checkbox" className="mr-2"></input>
                    <label htmlFor="nórdico">nórdico</label>
                </li>
                <li>
                    <input id="rústico" type="checkbox" className="mr-2"></input>
                    <label htmlFor="rústico">rústico</label>
                </li>
                <li>
                    <input id="vintage/mid-century" type="checkbox" className="mr-2"></input>
                    <label htmlFor="vintage/mid-century">vintage/mid-century</label>
                </li>
                <li>
                    <input id="otros" type="checkbox" className="mr-2"></input>
                    <label htmlFor="otros">otros</label>
                </li>
            </ul>
            </div>
            {/* Filtro Precio */}
            <div className="filter-Prize mt-10">
                <div className="">

                <span className="text-3xl"><strong>precio(€/mes)</strong></span>
                <br/>
                <div className="mt-4">
                <input type="text" className="border-2 border-solid border-black rounded w-20  " placeholder="desde"></input>
                <input type="text" className="border-2 border-solid border-black rounded w-20 ml-5" placeholder="hasta"></input>
                </div>
                </div>

            </div>
            {/* Filtros espacios */}
            <div className="list-space  mt-10">
            <span className="text-3xl"><strong>espacios</strong></span>
            <ul className="list-none mt-5">
                <li>
                    <input id="salón/comedor" type="checkbox" className="mr-2"></input>
                    <label htmlFor="salón/comedor">salón/comedor</label>
                </li>
                <li>
                    <input id="dormitorio" type="checkbox" className="mr-2"></input>
                    <label htmlFor="dormitorio">dormitorio</label>
                </li>
                <li>
                    <input id="recibidor" type="checkbox" className="mr-2"></input>
                    <label htmlFor="recibidor">recibidor</label>
                </li>
                <li>
                    <input id="zona-de-trabajo" type="checkbox" className="mr-2"></input>
                    <label htmlFor="zona-de-trabajo">zona de trabajo</label>
                </li>
                <li>
                    <input id="exterior" type="checkbox" className="mr-2"></input>
                    <label htmlFor="exterior">exterior</label>
                </li>
                <li>
                    <input id="otras" type="checkbox" className="mr-2"></input>
                    <label htmlFor="otras">otras</label>
                </li>
            </ul>
            </div>

            {/* Ver disponibilidad */}
            <div className="inline-block border-y-4 border-solid border-black mt-10 p-1 ">
                <div className="flex justify-center">
                <input type="checkbox" id="disponibilidad" ></input>
                <label className="ml-2"><strong>Ver solo muebles</strong> <br/><strong> disponibles ahora </strong></label>
                </div>
            </div>

            {/* Boton aplicar filtros */}
            <div className="button mt-5">
                <button className="p-3 border-4 border-solid border-black rounded-xl mt-4 ml-2 hover:bg-gray-200" ><i className="fa-solid fa-filter"></i>Aplicar filtros</button>
            </div>

        </div>

        </div>
        </>
    )
}



export default Filters