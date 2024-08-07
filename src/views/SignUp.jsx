import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/appContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { actions } = useContext(Context);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    setPasswordMismatch(
      formData.password !== confirmPassword && confirmPassword !== ""
    );
  }, [formData.password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      return;
    }

    const filledFormData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "")
    );

    actions.registerUser(filledFormData);
    navigate("/");
  };

  return (
    <div className="bg-abitacoloGray dark:bg-abitacoloDarkGrayShadow">
      <div className="min-h-screen flex flex-col sm:justify-center items-center">
        <div className="relative sm:max-w-sm w-full">
          <div className="bg-abitacoloDarkGrayShadow shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6" />
          <div className="bg-abitacoloGreen shadow-lg w-full h-full rounded-3xl absolute transform rotate-6" />
          <div className="relative w-full rounded-3xl px-6 py-4 bg-abitacoloGray -100 shadow-md">
            <h2 className="block mt-3 text-2xl text-gray-700 text-center font-semibold">
              Regístrate
            </h2>
            <form onSubmit={handleSubmit} className="mt-10">
              {[
                {
                  name: "email",
                  type: "email",
                  placeholder: "Correo electrónico",
                  autoComplete: "email",
                  required: true,
                },
                {
                  name: "password",
                  type: "password",
                  placeholder: "Contraseña",
                  autoComplete: "new-password",
                  required: true,
                },
              ].map(({ name, type, placeholder, autoComplete, required }) => (
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
                      required={required}
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl p-2.5 shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
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
                    required
                    className="mt-1 block w-full p-2.5 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </label>
                {passwordMismatch && (
                  <p className="text-red-500 font-bold mt-4">
                    Las contraseñas no coinciden.
                  </p>
                )}
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="bg-abitacoloGreen w-full py-3 rounded-xl text-black shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Registrar
                </button>
              </div>

              <div className="mt-7 flex justify-center items-center">
                <span className="mr-2">¿Ya tienes una cuenta?</span>
                <Link to={"/"}>
                  <button className="text-blue-500 transition duration-500 ease-in-out transform hover:scale-105">
                    Iniciar sesión
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
