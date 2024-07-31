import React, { useCallback, useState } from "react";

const FormPasarela = () => {
  const [name, setName] = useState("");
  const [planTime, setPlanTime] = useState("");
  const [payDay, setPayDay] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // Implement form submission logic here
      console.log({ name, planTime, payDay });
    },
    [name, planTime, payDay]
  );

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
          <label htmlFor="name" className="dark:text-white">
            Nombre del Cliente
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
            placeholder="Nombre del Cliente"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Nombre del Cliente"
            autoComplete="name"
          />
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="w-full mb-5 group">
            <label htmlFor="plan_time" className="dark:text-white">
              Tiempo del plan
            </label>
            <select
              id="plan_time"
              name="plan_time"
              className="py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              required
              value={planTime}
              onChange={(e) => setPlanTime(e.target.value)}
              aria-label="Tiempo del plan"
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
              id="pay_day"
              name="pay_day"
              className="py-2.5 w-full text-md bg-transparent border-b-2 border-gray-400 focus:border-abitacoloGreen focus:outline-none focus:ring-0"
              placeholder="día"
              required
              min="1"
              max="31"
              value={payDay}
              onChange={(e) => setPayDay(e.target.value)}
              aria-label="Día de Cobro"
              autoComplete="off"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-abitacoloGreen text-white py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormPasarela;
