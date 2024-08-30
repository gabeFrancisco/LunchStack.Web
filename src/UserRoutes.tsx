import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import authService from "./service/authService.ts";
import Sidebar from "./components/Sidebar/Sidebar.tsx";

function UserRoutes() {
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

export default UserRoutes;
