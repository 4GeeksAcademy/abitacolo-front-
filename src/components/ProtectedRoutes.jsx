import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/appContext";

const ProtectedRoutes = ({ children, user }) => {
  const { store, actions } = useContext(Context);
  console.log(user);

  if (user.email !== "asd@asd.com") {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoutes;
