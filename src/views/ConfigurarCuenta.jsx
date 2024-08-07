import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/appContext";
import ModalFavoritos from "../components/ModalFavoritos";
import { useNavigate } from "react-router-dom";

const ConfigurarCuenta = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const [formData, setFormData] = useState({
    email: store.user?.email || "",
    name: store.user?.name || "",
    password: store.user?.password || "",
    address: store.user?.address || "",
    nationality: store.user?.nationality || "",
    birth_date: store.user?.birth_date || "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogout = () => {
    actions.logout();
    navigate("/");
  };

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
    actions.editUser(filledFormData);
  };

  return (
    <div className="px-20 py-5 bg-abitacoloGray dark:bg-abitacoloDarkGrayShadow dark:text-white">
      <div className="flex justify-between">
        <p className="text-2xl py-5">Configurar cuenta:</p>
        <button
          className="bg-abitacoloGreen h-fit rounded-md p-2"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>

      {store.user &&
        store.user.favourites &&
        store.user.favourites.length > 0 && (
          <div className=" rounded-lg p-2 bg-gray-100 dark:text-black">
            <p className="p-2 text-xl">Mis favoritos:</p>
            <div className="grid grid-cols-8 px-5 my-5 max-w-full">
              <ModalFavoritos />
            </div>
          </div>
        )}

      <form onSubmit={handleSubmit}>
        <fieldset className="">
          <legend>Información personal</legend>
          <div className="flex flex-col p-2 space-y-2">
            <label className="text-lg font-bold" htmlFor="name">
              Nombre:
            </label>
            <input
              className="p-2 rounded-md"
              type="text"
              id="name"
              name="name"
              placeholder="Ingrese su nombre"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label className="text-lg font-bold" htmlFor="contraseña">
              Nueva contraseña:
            </label>
            <input
              className="p-2 rounded-md"
              type="password"
              name="password"
              id="contraseña"
              placeholder="Ingrese su contraseña"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
            />
            <label className=" text-lg font-bold" htmlFor="confirmarContraseña">
              Confirmar contraseña:
            </label>
            <input
              className="p-2 rounded-md"
              type="password"
              name="confirmPassword"
              id="confirmarContraseña"
              placeholder="Ingrese su contraseña"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {passwordMismatch && (
              <p className="text-red-500 font-bold mt-4">
                Las contraseñas no coinciden.
              </p>
            )}
            <label className=" text-lg font-bold" htmlFor="email">
              Email:
            </label>
            <input
              className="p-2 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label className=" text-lg font-bold" htmlFor="direccion">
              Dirección:
            </label>
            <input
              className="p-2 rounded-md"
              type="text"
              placeholder="Ingrese su dirección"
              name="address"
              id="direccion"
              autoComplete="street-address"
              value={formData.address}
              onChange={handleChange}
            />
            <label className=" text-lg font-bold" htmlFor="nacionalidad">
              Nacionalidad:
            </label>
            <input
              className="p-2 rounded-md"
              type="text"
              name="nationality"
              id="nacionalidad"
              placeholder="Ingrese su nacionalidad"
              autoComplete="country-name"
              value={formData.nationality}
              onChange={handleChange}
            />
            <label className=" text-lg font-bold" htmlFor="fecha_nacimiento">
              Fecha de nacimiento:
            </label>
            <input
              className="p-2 rounded-md"
              type="date"
              id="fecha_nacimiento"
              name="birth_date"
              placeholder="Ingrese su fecha de nacimiento"
              autoComplete="bday"
              value={formData.birth_date}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <div className="flex justify-center mt-4">
          <button
            className="bg-abitacoloGreen hover:ring-2 ring-green-900 px-10 py-3 rounded-md text-center"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfigurarCuenta;
