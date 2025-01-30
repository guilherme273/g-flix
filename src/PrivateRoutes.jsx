import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticator } from "./contexts/login";

export const PrivateRoute = () => {
  const { logado } = useAuthenticator();

  return logado ? <Outlet /> : <Navigate to="/login" />;
};
