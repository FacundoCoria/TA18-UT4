import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const token = localStorage.getItem("token");

  // Si el token existe, renderiza las rutas protegidas
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
