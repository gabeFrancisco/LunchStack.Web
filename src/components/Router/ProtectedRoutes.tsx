import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header/Header.tsx";
import authService from "../../service/authService.ts";
import Sidebar from "../Sidebar/Sidebar.tsx";

function ProtectedRoutes() {
  const auth = authService.checkAuth();
  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return (
      <div className="flex flex-row flex-grow">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="p-5 text-gray-500 ">
            <Outlet />
          </div>
        </div>
      </div>
  );
}

export default ProtectedRoutes;
