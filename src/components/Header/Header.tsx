import { Link } from "react-router-dom";
import authService from "../../service/authService";

function Header() {
  const menu = [
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
    <header className="flex flex-row justify-between px-5 py-3 text-white border-b bg-primary">
      <div className="flex flex-row ">
        <h1 className="mx-5">LunchStack.Web</h1>
        <ul className="flex flex-row">
          {menu.map((el) => (
            <Link className="mx-2 hover:text-yellow-300" to={el.url}>
              {el.name}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <small>Bem vindo {user?.username}</small>
      </div>
    </header>
  );
}

export default Header;
