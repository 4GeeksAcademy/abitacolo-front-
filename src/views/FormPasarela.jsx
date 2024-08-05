import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../context/appContext";
import BotonUelz from "../components/BotonUelz";

const FormPasarela = () => {
  const { store, actions } = useContext(Context);


  const [formUel, setFormUel] = useState({
    name: "",
    plan_time: "",
    pay_day: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormUel((prevState) => {
      const newState = { ...prevState, [name]: value };
      console.log(newState);
      return newState;
    });
    console.log(formUel);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    // Aquí puedes manejar el envío del formulario
  }, []);

  useEffect(() => {
    if (!document.querySelector("#uelz_test")) {
      console.log("condicion");
      const script = document.createElement("script");
      script.id = "uelz_test";
      script.src =
        "https://uelzpay-widget-cdn-demo.vercel.app/v1.0.0/uelz-widget.js?uelz-api-key=clz33572s0011q9012o9abjif&uelz-api-url=https://widget.demo.uelzpay.com";
      script.async = true;

      document.body.appendChild(script);
    }
    console.log("FormPasarela");
    // return () => {
    //   document.querySelector("#uelz_test")?.remove();
    //   console.log("remove");
    // };
  }, []);

  return (
    <div className="dark:bg-abitacoloDarkGrayShadow bg-abitacoloGray py-10 px-20">
      <div className="flex justify-between">
        {store.carrito.map((mueble) => (
          <div key={mueble.id_codigo} className="grid place-items-center">
            <p>{mueble.nombre}</p>
            <p className="w-fit">{mueble.precio_mes}€/mes</p>
            <p>{mueble.categoria}</p>
          </div>
        ))}
      </div>
      <form
        className="max-w-md mx-auto rounded border-solid border-2 p-3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center my-3 dark:text-white">
          Crear Plan
        </h1>
        <div className="w-full mb-5 group">
          <label htmlFor="name" className="dark:text-white">
            Nombre del Cliente
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
            placeholder="Nombre del Cliente"
            required
            value={formUel.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-5 group">
            <label htmlFor="plan_time" className="dark:text-white">
              Tiempo del plan
            </label>
            <select
              name="plan_time"
              id="plan_time"
              className="py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              required
              value={formUel.plan_time}
              onChange={handleChange}
              autoComplete="off"
            >
              <option value="">Selecciona tu plan</option>
              <option value="day">day</option>
              <option value="week">week</option>
              <option value="month">month</option>
              <option value="year">year</option>
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
              className="py-2.5 w-full text-md bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              placeholder="día"
              required
              min="0"
              value={formUel.pay_day}
              onChange={handleChange}
              autoComplete="bday-day"
            />
          </div>
        </div>
      </form>
      <BotonUelz formUel={formUel}/>
    </div>
  );
};

export default FormPasarela;
