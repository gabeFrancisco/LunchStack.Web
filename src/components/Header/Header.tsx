import { BiPowerOff } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import { getActualUser } from "../../store/slices/authSlice";

function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user)
  useEffect(() => {
    dispatch(getActualUser())
  }, [])
  return (
    <header className="sticky top-0 flex flex-row justify-between px-5 py-3 mb-2 text-white shadow-lg bg-gradient-to-r from-primary to-cyan-500">
      <div className="text-white">LunchStack</div>
      <div className="flex flex-row items-center">
        <small>Bem vindo {user?.username}</small>
        <button title="Sair">
          <BiPowerOff className="mx-2 text-xl hover:text-yellow-200" />
        </button>
      </div>
    </header>
  );
}

export default Header;
