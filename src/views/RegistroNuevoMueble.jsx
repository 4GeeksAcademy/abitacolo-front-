import React, { useContext, useState } from "react";
import { Context } from "../context/appContext";

/* FECHA ENTREGA y Fecha Recogida salen Null, tenemos que mirar de corregir eso */

function RegistroNuevoMueble() {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    nombre: "",
    id_codigo: "",
    disponible: true,
    color: "",
    espacio: "",
    estilo: "",
    categoria: "",
    precio_mes: "",
    fecha_entrega: "",
    fecha_recogida: "",
    ancho: "",
    altura: "",
    fondo: "",
    personalidad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "disponible" ? value === true : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    actions.registrarNuevoMueble(formData);
    console.log(formData);
  };

  return (
    <form
      className="max-w-md mx-auto rounded border-solid border-2  p-3"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-bold leading-tight tracking-tight pb-2.5 text-gray-900 md:text-2xl dark:text-white text-center">
        Cargar nuevo mueble
      </h1>
      <div className="relative w-full mb-5 group">
        <input
          type="text"
          name="nombre"
          id="floating_nombre"
          className="block py-2.5 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-abitacoloGreen -600 peer"
          placeholder=" "
          required
          value={formData.nombre}
          onChange={handleChange}
        />
        <label
          htmlFor="floating_nombre"
          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nombre del mueble
        </label>
      </div>

      <div className="relative  w-full mb-5 group">
        <input
          type="text"
          name="id_codigo"
          id="floating_id_codigo"
          className="block py-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-abitacoloGreen -600 peer"
          placeholder=" "
          required
          value={formData.id_codigo}
          onChange={handleChange}
        />
        <label
          htmlFor="floating_nombre"
          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-abitacoloGreen -500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          ID Mueble
        </label>
      </div>

      <div className="relative  w-full mb-5 group">
        <select
          name="disponible"
          id="floating_disponible"
          className="block p-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-abitacoloGreen -600 peer"
          required
          value={formData.disponible}
          onChange={handleChange}
        >
          <option value="">Seleccione disponibilidad</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <label
          htmlFor="floating_disponible"
          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Disponibilidad
        </label>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative  w-full mb-5 group">
          <select
            name="color"
            id="floating_color"
            className="block p-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-abitacoloGreen -500 focus:outline-none focus:ring-0 focus:border-abitacoloGreen -600 peer"
            required
            value={formData.color}
            onChange={handleChange}
          >
            <option value="">Seleccione su color</option>
            <option value="Natural">Natural</option>
            <option value="Blanco / Beige / Gris">Blanco / Beige / Gris</option>
            <option value="Negro / Gris Oscuro">Negro / Gris Oscuro</option>
            <option value="Tonos Pastel">Tonos Pastel</option>
            <option value="Tonos Vivos">Tonos Vivos</option>
            <option value="Dorado / Plateado">Dorado / Plateado</option>
          </select>
          <label
            htmlFor="floating_color"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-abitacoloGreen -500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Color
          </label>
        </div>
        <div className="relative  w-full mb-5 group">
          <select
            name="espacio"
            id="floating_espacio"
            className="block p-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-abitacoloGreen -500 focus:outline-none focus:ring-0 focus:border-abitacoloGreen -600 peer"
            required
            value={formData.espacio}
            onChange={handleChange}
          >
            <option value="">Seleccione su espacio</option>
            <option value="Salón / Comedor">Salón / Comedor</option>
            <option value="Dormitorio">Dormitorio</option>
            <option value="Recibidor">Recibidor</option>
            <option value="Zona de Trabajo">Zona de Trabajo</option>
            <option value="Exterior">Exterior</option>
            <option value="Otras">Otras</option>
          </select>
          <label
            htmlFor="floating_espacio"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-abitacoloGreen-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Espacio
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative  w-full mb-5 group">
          <select
            name="estilo"
            id="floating_estilo"
            className="block p-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            value={formData.estilo}
            onChange={handleChange}
          >
            <option value="">Seleccione su estilo</option>
            <option value="Industrial">Industrial</option>
            <option value="Clásico">Clásico</option>
            <option value="Minimalista">Minimalista</option>
            <option value="Nórdico">Nórdico</option>
            <option value="Rústico">Rústico</option>
            <option value="Vintage / Mid-Century">Vintage / Mid-Century</option>
            <option value="Otros">Otros</option>
          </select>
          <label
            htmlFor="floating_estilo"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Estilo
          </label>
        </div>
        <div className="relative  w-full mb-5 group">
          <select
            name="categoria"
            id="floating_categoria"
            className="block p-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-abitacoloGreen -500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            value={formData.categoria}
            onChange={handleChange}
          >
            <option value="">Seleccione su categoría</option>
            <option value="Armarios y Cómodas">Armarios y Cómodas</option>
            <option value="Estanterias y Baldas">Estanterias y Baldas</option>
            <option value="Mesas y Escritorios">Mesas y Escritorios</option>
            <option value="Aparadores">Aparadores</option>
            <option value="Camas y Cabeceros">Camas y Cabeceros</option>
            <option value="Mesillas">Mesillas</option>
            <option value="Sillones y Sofás">Sillones y Sofás</option>
            <option value="Lámparas">Lámparas</option>
            <option value="Sillas y Taburetes">Sillas y Taburetes</option>
            <option value="Percheros">Percheros</option>
            <option value="Marcos y Espejos">Marcos y Espejos</option>
            <option value="Otros Objetos">Otros Objetos</option>
          </select>
          <label
            htmlFor="floating_categoria"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacoloGreen tacologreen-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Categoría
          </label>
        </div>
      </div>

      <div className="relative  w-full mb-5 group">
        <input
          type="number"
          name="precio_mes"
          id="floating_precio_mes"
          className="block py-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-abitacoloGreen -500 focus:outline-none focus:ring-0 focus:border-abitacoloGreen -600 peer"
          placeholder=" "
          required
          value={formData.precio_mes}
          onChange={handleChange}
        />
        <label
          htmlFor="floating_precio_mes"
          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-abitacoloGreen -500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Precio por mes
        </label>
      </div>

      {/* <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative  w-full mb-5 group">
          <input
            type="date"
            name="fecha_entrega"
            id="floating_fecha_entrega"
            className="block py-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={formData.fecha_entrega}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_fecha_entrega"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacologreen-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Fecha de entrega
          </label>
        </div>
        <div className="relative  w-full mb-5 group">
          <input
            type="date"
            name="fecha_recogida"
            id="floating_fecha_recogida"
            className="block py-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={formData.fecha_recogida}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_fecha_recogida"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacologreen-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Fecha de recogida
          </label>
        </div>
      </div> */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative  w-full mb-5 group">
          <input
            type="number"
            name="ancho"
            id="floating_ancho"
            className="block py-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-abitacoloGreen -500 focus:outline-none focus:ring-0 focus:border-abitacoloGreen -600 peer"
            placeholder=" "
            required
            value={formData.ancho}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_ancho"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-abitacoloGreen -500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Ancho
          </label>
        </div>
        <div className="relative  w-full mb-5 group">
          <input
            type="number"
            name="altura"
            id="floating_altura"
            className="block py-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-abitacoloGreen peer"
            placeholder=" "
            required
            value={formData.altura}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_altura"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-abitacoloGreen -500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Altura
          </label>
        </div>
        <div className="relative  w-full mb-5 group">
          <input
            type="number"
            name="fondo"
            id="floating_fondo"
            className="block py-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-abitacoloGreen -500 focus:outline-none focus:ring-0 focus:border-abitacoloGreen -600 peer"
            placeholder=" "
            required
            value={formData.fondo}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_ancho"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-abitacoloGreen -500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Fondo
          </label>
        </div>
      </div>
      <div className="relative  w-full mb-5 group">
        <input
          type="text"
          name="personalidad"
          id="floating_personalidad"
          className="block py-2.5  w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-abitacoloGreen -500 focus:outline-none focus:ring-0 focus:border-abitacoloGreen -600 peer"
          placeholder=" "
          required
          value={formData.personalidad}
          onChange={handleChange}
        />
        <label
          htmlFor="floating_nombre"
          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-abitacoloGreen -600 peer-focus:dark:text-abitacoloGreen -500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Personalidad
        </label>
      </div>
      <div className="boton flex justify-center">
        <button
          type="submit"
          className="text-white bg-abitacoloDarkGrayShadow hover:bg-abitacoloGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Nuevo mueble
        </button>
      </div>
    </form>
  );
}

export default RegistroNuevoMueble;
