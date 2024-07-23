import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../context/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const ModalLogin = ({ onClose }) => {
  const { actions } = useContext(Context);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginStatus, setLoginStatus] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginStatus(null);
    try {
      const response = await actions.loginUser(formData);
      if (response.token) {
        onClose();
      } else {
        setLoginStatus(
          response.msg === "No existe el usuario"
            ? "Usuario no encontrado"
            : "Error al acceder a la web"
        );
      }
    } catch (error) {
      setLoginStatus("Email o Contraseña incorrectos");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="rounded-lg  max-w-fit max-h-fit mx-auto relative">
        <section className="bg-abitacoloGray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="space-y-4 md:space-y-6 sm:p-7">
                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className="text-black hover:text-gray-700"
                  >
                    <FontAwesomeIcon icon={faCircleXmark} size="xl" />{" "}
                  </button>
                </div>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Iniciar sesión en su cuenta.
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Su Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-3 text-sm text-gray-500 dark:text-gray-300"
                      >
                        Recordarme
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Olvido su contraseña?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Entrar en la cuenta
                  </button>
                  {loginStatus && (
                    <p
                      className={
                        loginStatus === "Login correcto"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {loginStatus}
                    </p>
                  )}
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Aun no tienes cuenta?{" "}
                    <button
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      onClick={onClose}
                    >
                      Resgistrate
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

ModalLogin.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalLogin;
