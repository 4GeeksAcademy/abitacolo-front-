import React, { useContext, useState } from "react";
import LoginForm from "./LoginForm";
import { Context } from "../context/appContext";



const SignUp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const {store, actions} = useContext(Context)
  const [formData, setFormData] = useState({
    email : "",
    name : "",
    password : "",
    address: "",
    nacionality:"",
    birthDate: ""
  })

   

  const handleChange = (e) => {
    const {name ,value} = e.target
    setFormData({...formData , [name] : value})
    console.log(formData)
  } 
/*
  const handlePassword = (e) => {
    
      verificationPassword = e.target.value
  }

  const verifiPassword = () => {
    
    if (formData.password  === verificationPassword){

    }

  }  */

  if (showLogin) {
    return <LoginForm />;
  }
  return (
    <div className="font-sans bg-abitacoloGray dark:bg-abitacoloDarkGrayShadow">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-abitacoloDarkGrayShadow shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-abitacoloGreen shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-abitacoloGray -100 shadow-md">
            <label
              htmlFor=""
              className="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Registrate
            </label>
            <form onSubmit={(e) => {
              e.preventDefault()
              actions.registerUser(formData)}} className="mt-10">
              <div>
                <input onChange={handleChange} value={formData.name} name="name"
                  type="text"
                  placeholder="Nombres"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input 
                  type="date" onChange={handleChange} value={formData.birthDate} name="birthDate"
                  placeholder="Fecha de nacimiento"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="text" onChange={handleChange} value={formData.nacionality} name="nacionality"
                  placeholder="Nacionalidad"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="text" onChange={handleChange} value={formData.address} name="address"
                  placeholder="Dirección"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                 type="email" onChange={handleChange} value={formData.email} name="email"
                  placeholder="Correo electronico"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password" onChange={handleChange} value={formData.password} name="password"
                  placeholder="Contraseña"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password" /* onChange={handlePassword} */
                  placeholder="Confirmar contraseña"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <button  type="submit" className="bg-abitacoloGreen -500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Registrar
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Registrate con
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-abitacoloGreen -500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>

                <button className="bg-abitacoloGrayShadow -500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">¿Ya tienes una cuenta?</label>
                  <a
                    href="#"
                    className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowLogin(true);
                    }}
                  >
                    Iniciar sesión
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
