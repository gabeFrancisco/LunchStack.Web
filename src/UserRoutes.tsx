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
        navigate("/login");
      }
    });
  }, []);

  return (
    <div className="flex flex-col bg-slate-50">
      <Header />
      <div className="flex flex-row w-full">
        <Sidebar />
        <div className="w-full p-2 overflow-y-visible text-gray-500">
          <div className="p-3 m-3 my-0 overflow-y-scroll bg-white border rounded shadow">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRoutes;
