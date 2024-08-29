import { Link } from "react-router-dom";
import authService from "../../service/authService";
import { BiPowerOff } from "react-icons/bi";

function Header() {
  const links = [
    {
      name: "Dashboard",
      url: "dashboard",
    },
    {
      name: "Produtos",
      url: "produtos",
    },
    {
      name: "Pedidos",
      url: "pedidos",
    },
  ];
  const user = authService.getUser();
  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between px-5 py-3 text-white border-b bg-primary">
      <div className="flex flex-row ">
        <ul className="flex flex-row">
          {links.map((el) => (
            <Link className="mx-2 hover:text-yellow-300" to={el.url}>
              {el.name}
            </Link>
          ))}
        </ul>
      </div>
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
