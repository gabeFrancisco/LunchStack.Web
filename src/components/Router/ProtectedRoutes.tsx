import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header/Header.tsx";
import authService from "../../service/authService.ts";

function ProtectedRoutes() {
  const auth = authService.checkAuth()
  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProtectedRoutes;
