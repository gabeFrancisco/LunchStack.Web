import { Link } from "react-router-dom";

function Sidebar() {
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
    {
      name: "Mesas",
      url: "mesas",
    },
    {
      name: "Pessoal",
      url: "pessoal",
    },
  ];
  return (
    <aside className="sticky top-0 w-1/6 h-screen text-gray-600">
      <div className="w-full px-3 py-3 text-white shadow bg-primary">
        Lunckstack.Web
      </div>
      <ul className="w-full h-full py-3 border-r">
        <div>
          <p className="pl-1 bg-gray-200">Estabelecimento</p>
          <div className="px-3">
            {links.map((el) => (
              <li>
                <Link className="mx-2 hover:text-primary" to={el.url}>
                  {el.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
        <div>
          <p className="pl-1 bg-gray-200">Clientes</p>
          <div className="px-3">
            {links.map((el) => (
              <li>
                <Link className="mx-2 hover:text-primary" to={el.url}>
                  {el.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
        <div>
          <p className="pl-1 bg-gray-200">Configurações</p>
          <div className="px-3">
            {links.map((el) => (
              <li>
                <Link className="mx-2 hover:text-primary" to={el.url}>
                  {el.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
