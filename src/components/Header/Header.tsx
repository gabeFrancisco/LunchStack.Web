import authService from "../../service/authService";
import { BiPowerOff } from "react-icons/bi";

function Header() {
  const user = authService.getUser();
  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between px-5 py-3 text-white border-b bg-primary">
      <div className="text-primary">LunchStack</div>
      <div className="flex flex-row items-center">
        <small>Bem vindo {user?.username}</small>
        <button title="Sair py-1">
          <BiPowerOff className="mx-2 text-xl hover:text-yellow-200" />
        </button>
      </div>
    </header>
  );
}

export default Header;
