import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated =
    ""; /* Lógica para verificar si el usuario está autenticado */

  if (!isAuthenticated) {
    // Redirige al usuario a la página de inicio de sesión si no está autenticado
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
