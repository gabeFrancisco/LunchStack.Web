import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { useAppDispatch, useAppSelector } from "./store/store.ts";
import { useLayoutEffect } from "react";
import { getActualUser } from "./store/slices/authSlice.ts";

function UserRoutes() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    dispatch(getActualUser()).then(() => {
      if (user === undefined) {
        navigate("/login")
      }
    })
  }, []);

  return (
    <div className="flex flex-row flex-grow">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-5 text-gray-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserRoutes;
