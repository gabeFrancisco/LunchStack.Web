import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header/Header.tsx";

function ProtectedRoutes() {
  const user = true;
  if (!user) {
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