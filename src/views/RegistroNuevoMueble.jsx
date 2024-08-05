import React, { useContext, useState } from "react";
import { Context } from "../context/appContext";

function RegistroNuevoMueble() {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    nombre: "",
    id_codigo: "",
    disponible: true,
    novedad: false,
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
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "select-one" && (name === "disponible" || name === "novedad")
          ? value === "true"
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.registrarNuevoMueble(formData);
    console.log(formData);
  };

  return (
    <div className="dark:bg-abitacoloDarkGrayShadow py-12 dark:text-white">
      <form
        className="max-w-md mx-auto rounded border-solid border-2 p-3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center my-3 dark:text-white">
          Cargar nuevo mueble
        </h1>
        <div className="w-full mb-5 group">
          <label htmlFor="floating_nombre" className="dark:text-white">
            Nombre del mueble
          </label>
          <input
            type="text"
            name="nombre"
            id="floating_nombre"
            className="py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
            placeholder="Nombre del mueble"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="w-full mb-5 group">
          <label htmlFor="floating_id_codigo" className="dark:text-white">
            ID Mueble
          </label>
          <input
            type="text"
            name="id_codigo"
            id="floating_id_codigo"
            className="py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
            placeholder="ID Mueble"
            required
            value={formData.id_codigo}
            onChange={handleChange}
          />
        </div>

        <div className="w-full mb-5 group">
          <label htmlFor="floating_disponible" className="dark:text-white">
            Disponibilidad
          </label>
          <select
            name="disponible"
            id="floating_disponible"
            className="py-2.5 w-full bg-transparent border-b-2 dark:bg-abitacoloDarkGrayShadow border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
            required
            value={formData.disponible.toString()}
            onChange={handleChange}
          >
            <option value="true">Disponible</option>
            <option value="false">No disponible</option>
          </select>
        </div>
        <div className="w-full mb-5 group">
          <label htmlFor="floating_novedad" className="dark:text-white">
            Novedad
          </label>
          <select
            name="novedad"
            id="floating_novedad"
            className="py-2.5 w-full bg-transparent dark:bg-abitacoloDarkGrayShadow border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
            required
            value={formData.novedad.toString()}
            onChange={handleChange}
          >
            <option value="true">Es novedad</option>
            <option value="false">No es novedad</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 ">
          <div className="w-full mb-5 group">
            <label htmlFor="floating_color" className="dark:text-white">
              Color
            </label>
            <select
              name="color"
              id="floating_color"
              className="py-2.5 w-full bg-transparent dark:bg-abitacoloDarkGrayShadow  border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              required
              value={formData.color}
              onChange={handleChange}
            >
              <option value="">Seleccione su color</option>
              <option value="Natural">Natural</option>
              <option value="Blanco / Beige / Gris">
                Blanco / Beige / Gris
              </option>
              <option value="Negro / Gris Oscuro">Negro / Gris Oscuro</option>
              <option value="Tonos Pastel">Tonos Pastel</option>
              <option value="Tonos Vivos">Tonos Vivos</option>
              <option value="Dorado / Plateado">Dorado / Plateado</option>
            </select>
          </div>
          <div className="w-full mb-5 group">
            <label htmlFor="floating_espacio" className="dark:text-white">
              Espacio
            </label>
            <select
              name="espacio"
              id="floating_espacio"
              className="py-2.5 w-full bg-transparent border-b-2 dark:bg-abitacoloDarkGrayShadow border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
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
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-5 group">
            <label htmlFor="floating_estilo" className="dark:text-white">
              Estilo
            </label>
            <select
              name="estilo"
              id="floating_estilo"
              className="py-2.5 w-full bg-transparent dark:bg-abitacoloDarkGrayShadow border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none  focus:ring-0"
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
              <option value="Vintage / Mid-Century">
                Vintage / Mid-Century
              </option>
              <option value="Otros">Otros</option>
            </select>
          </div>
          <div className="w-full mb-5 group">
            <label htmlFor="floating_categoria" className="dark:text-white">
              Categoría
            </label>
            <select
              name="categoria"
              id="floating_categoria"
              className="py-2.5 w-full bg-transparent dark:bg-abitacoloDarkGrayShadow border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
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
          </div>
        </div>

        <div className="w-full mb-5 group">
          <label htmlFor="floating_precio_mes" className="dark:text-white">
            Precio por mes
          </label>
        </div>

        <div className="w-full mb-5 group">
          <input
            type="number"
            name="precio_mes"
            id="floating_precio_mes"
            className="py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
            placeholder="€/mes"
            required
            value={formData.precio_mes}
            onChange={handleChange}
          />
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-5 group">
            <input
              type="date"
              name="fecha_entrega"
              id="floating_fecha_entrega"
              className="py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              value={formData.fecha_entrega}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="w-full mb-5 group">
            <label htmlFor="floating_ancho" className="dark:text-white">
              Ancho (cm)
            </label>
            <input
              type="number"
              name="ancho"
              id="floating_ancho"
              className="py-2.5 w-full text-md bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              placeholder="cm"
              required
              min="0"
              value={formData.ancho}
              onChange={handleChange}
            />
          </div>

          <div className="w-full mb-5 group">
            <label htmlFor="floating_altura" className="dark:text-white">
              Altura (cm)
            </label>
            <input
              type="number"
              name="altura"
              id="floating_altura"
              className="py-2.5 w-full text-md bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              placeholder="cm"
              required
              min="0"
              value={formData.altura}
              onChange={handleChange}
            />
          </div>

          <div className="w-full mb-5 group">
            <label htmlFor="floating_fondo" className="dark:text-white">
              Fondo (cm)
            </label>
            <input
              type="number"
              name="fondo"
              id="floating_fondo"
              className="py-2.5 w-full text-md bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              placeholder="cm"
              required
              min="0"
              value={formData.fondo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full my-5 group">
          <label
            className="dark:text-white text-lg"
            htmlFor="floating_personalidad"
          >
            Personalidad
          </label>
          <input
            type="text"
            name="personalidad"
            id="floating_personalidad"
            className="py-2.5 w-full text-md bg-transparent  border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
            placeholder="Personalidad"
            required
            value={formData.personalidad}
            onChange={handleChange}
          />
        </div>
        <div className="boton flex justify-center">
          <button
            type="submit"
            className=" bg-abitacoloGray dark:bg-abitacoloGrayShadow hover:bg-abitacoloGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Nuevo mueble
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistroNuevoMueble;
