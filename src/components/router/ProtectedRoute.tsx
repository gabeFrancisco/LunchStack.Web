import { Navigate, Outlet } from "react-router-dom";
import Header from "../header/Header";

function ProtectedRoute() {
  const user = true;
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default ProtectedRoute;
