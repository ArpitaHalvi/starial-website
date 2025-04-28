import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Logout() {
  useEffect(() => {
    const logoutUser = () => {
      localStorage.removeItem("auth-token");
    };
    logoutUser();
  }, []);
  return <Navigate to="/" />;
}
