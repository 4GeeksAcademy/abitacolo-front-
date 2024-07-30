import React, { useCallback, useContext, useState } from "react";
import { Context } from "../context/appContext";
import BotonUelz from "../components/BotonUelz";

const FormPasarela = () => {
  const { store } = useContext(Context);

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
  return (
    <div className="dark:bg-abitacoloGrayShadow">
      <form
        className="max-w-md mx-auto rounded border-solid border-2 p-3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center my-3 dark:text-white">
          Crear Plan
        </h1>
        <div className="w-full mb-5 group">
          <label htmlFor="floating_name" className="dark:text-white">
            Nombre del Cliente
          </label>
          <input
            type="text"
            name="name"
            id="floating_name"
            className="py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
            placeholder="Nombre del Cliente"
            required
            value={formUel.name}
            onChange={handleChange}
          />
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-5 group">
            <label htmlFor="floating_color" className="dark:text-white">
              Tiempo del plan
            </label>
            <select
              name="plan_time"
              id="floating_plan_time"
              className="py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              required
              value={formUel.plan_time}
              onChange={handleChange}
            >
              <option value="">Selecciona tu plan</option>
              <option value="day">day</option>
              <option value="week">week</option>
              <option value="month">month</option>
              <option value="year">year</option>
            </select>
          </div>
          <div className="w-full mb-5 group">
            <label htmlFor="floating_dia_cobro" className="dark:text-white">
              Día de Cobro
            </label>
            <input
              type="number"
              name="pay_day"
              id="floating_pay_day"
              className="py-2.5 w-full text-md bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              placeholder="día"
              required
              min="0"
              value={formUel.pay_day}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="boton flex justify-center">
          {/*           <button
            className="uelz-button uelz-button-styles"
            id="uelz-button"
            data-service-name={formUel.name}
            data-plan-name="Regional"
            data-plan-description="Descripción del servicio"
            data-plan-amount={store.precioCarrito}
            data-plan-currency="EUR"
            data-plan-type="Subscription"
            data-type-subscription="variable"
            data-future-charge-action="last_charge"
            data-consume-units="1"
            data-external-usage-id="abc2sr5tgd"
            data-plan-frequency={formUel.plan_time}
            data-plan-payment-day={formUel.pay_day}
          >
            Comprar
          </button> */}
        </div>
      </form>
      <BotonUelz />
    </div>
  );
};

export default FormPasarela;
