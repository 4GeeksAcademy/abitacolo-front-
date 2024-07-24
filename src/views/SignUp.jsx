import React, { useContext, useState } from "react";
import { Context } from "../context/appContext";

const SignUp = () => {
  const { actions } = useContext(Context);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    address: "",
    nationality: "",
  º
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    actions.registerUser(formData);
  };

  return (
    <div className="font-sans bg-abitacoloGray dark:bg-abitacoloDarkGrayShadow">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-abitacoloDarkGrayShadow shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6" />
          <div className="card bg-abitacoloGreen shadow-lg w-full h-full rounded-3xl absolute transform rotate-6" />
          <div className="relative w-full rounded-3xl px-6 py-4 bg-abitacoloGray -100 shadow-md">
            <h2 className="block mt-3 text-2xl text-gray-700 text-center font-semibold">
              Regístrate
            </h2>
            <form onSubmit={handleSubmit} className="mt-10">
              {[
                {
                  name: "name",
                  type: "text",
                  placeholder: "Nombres",
                  autoComplete: "name",
                },
                {
                  name: "birth_date",
                  type: "date",
                  placeholder: "Fecha de nacimiento",
                  autoComplete: "bday",
                },
                {
                  name: "nationality",
                  type: "text",
                  placeholder: "Nacionalidad",
                  autoComplete: "country-name",
                },
                {
                  name: "address",
                  type: "text",
                  placeholder: "Dirección",
                  autoComplete: "street-address",
                },
                {
                  name: "email",
                  type: "email",
                  placeholder: "Correo electrónico",
                  autoComplete: "email",
                },
                {
                  name: "password",
                  type: "password",
                  placeholder: "Contraseña",
                  autoComplete: "new-password",
                },
              ].map(({ name, type, placeholder, autoComplete }) => (
                <div className="mt-7" key={name}>
                  <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {placeholder}
                    <input
                      id={name}
                      onChange={handleChange}
                      value={formData[name]}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      autoComplete={autoComplete}
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                  </label>
                </div>
              ))}
              <div className="mt-7">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirmar contraseña
                  <input
                    id="confirmPassword"
                    type="password"
                    onChange={handleConfirmPasswordChange}
                    value={confirmPassword}
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    autoComplete="new-password"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </label>
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="bg-abitacoloGreen -500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Registrar
                </button>
              </div>
              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <span className="block font-medium text-sm text-gray-600 w-full">
                  Regístrate con
                </span>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>
              <div className="flex mt-7 justify-center w-full">
                <button
                  type="button"
                  className="mr-5 bg-abitacoloGreen -500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Facebook
                </button>
                <button
                  type="button"
                  className="bg-abitacoloGrayShadow -500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Google
                </button>
              </div>
              <div className="mt-7 flex justify-center items-center">
                <span className="mr-2">¿Ya tienes una cuenta?</span>
                <a
                  href="#"
                  className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Iniciar sesión
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
