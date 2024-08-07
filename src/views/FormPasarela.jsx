import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../context/appContext";
import BotonUelz from "../components/BotonUelz";

const FormPasarela = () => {
  const { store, actions } = useContext(Context);

  const [formUel, setFormUel] = useState({
    plan_time: "",
    pay_day: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormUel((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Implement form submission logic here
  }, []);

  useEffect(() => {
    const addUelzScript = () => {
      if (!document.querySelector("#uelz_test")) {
        const script = document.createElement("script");
        script.id = "uelz_test";
        script.src =
          "https://uelzpay-widget-cdn-demo.vercel.app/v1.0.0/uelz-widget.js?uelz-api-key=clz33572s0011q9012o9abjif&uelz-api-url=https://widget.demo.uelzpay.com";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    addUelzScript();

    return () => {
      document.querySelector("#uelz_test")?.remove();
    };
  }, []);

  return (
    <div className="dark:bg-abitacoloDarkGrayShadow bg-abitacoloGray py-10 px-20">
      <div className="grid grid-cols-8 px-5 my-5 max-w-full dark:text-white">
        {store.carrito && store.carrito.length > 0 ? (
          store.carrito.map((mueble) => (
            <div key={mueble.id_codigo} className="grid place-items-center">
              <p>{mueble.nombre}</p>
              <p className="w-fit">{mueble.precio_mes}€/mes</p>
              <p>{mueble.categoria}</p>
            </div>
          ))
        ) : (
          <p>No hay items en el carrito</p>
        )}
      </div>
      <form
        className="max-w-md mx-auto rounded border-solid border-2 p-3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center my-3 dark:text-white">
          Completa la información necesaria
        </h1>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-5 group">
            <label htmlFor="plan_time" className="dark:text-white">
              Duración del alquiler
            </label>
            <select
              name="plan_time"
              id="plan_time"
              className="py-2.5 w-full dark:text-white dark:bg-abitacoloDarkGrayShadow bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              required
              value={formUel.plan_time}
              onChange={handleChange}
              autoComplete="off"
            >
              <option value="">Selecciona tu plan</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
            </select>
          </div>
          <div className="w-full mb-5 group">
            <label htmlFor="pay_day" className="dark:text-white">
              Día de Cobro
            </label>
            <input
              type="number"
              name="pay_day"
              id="pay_day"
              className="py-2.5 w-full dark:text-white text-md bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              placeholder="día"
              required
              min="1"
              max="31"
              value={formUel.pay_day}
              onChange={handleChange}
              autoComplete="bday-day"
            />
          </div>
        </div>
      </form>
      <div className={formUel.plan_time && formUel.pay_day ? "" : "hidden"}>
        <BotonUelz formUel={formUel} />
      </div>
    </div>
  );
};

export default FormPasarela;
