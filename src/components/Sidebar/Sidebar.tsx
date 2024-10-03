import {
  BiBarChart,
  BiCategory,
  BiChart,
  BiDollar,
  BiFoodMenu,
  BiGroup,
  BiTable,
  BiUser,
  BiWrench,
} from "react-icons/bi";
import { Link } from "react-router-dom";

function Sidebar() {
  const shop = [
    {
      name: "Dashboard",
      url: "dashboard",
      icon: <BiBarChart />,
    },
    {
      name: "Categorias",
      url: "dashboard/categorias",
      icon: <BiCategory />,
    },
    {
      name: "Produtos",
      url: "dashboard/produtos",
      icon: <BiDollar />,
    },
    {
      name: "Pedidos",
      url: "pedidos",
      icon: <BiFoodMenu />,
    },
    {
      name: "Mesas",
      url: "mesas",
      icon: <BiTable />,
    },
    {
      name: "Clientes",
      url: "clientes",
      icon: <BiChart />,
    },
    {
      name: "Pessoal",
      url: "pessoal",
      icon: <BiGroup />,
    },
  ];
  const config = [
    {
      name: "Conta",
      url: "conta",
      icon: <BiUser />,
    },
    {
      name: "Preferências",
      url: "preferencias",
      icon: <BiWrench />,
    },
  ];
  return (
    <div className="sticky top-0 w-1/6 text-gray-500">
      <div className="w-full px-3 py-3 text-white shadow bg-primary">
        Lunckstack.Web
      </div>
      <ul className="sticky top-0 w-full py-3 overflow-y-auto border-r">
        <div>
          <p className="pl-1 bg-gray-200">Estabelecimento</p>
          <div className="px-3 pt-1 pb-3">
            {shop.map((el) => (
              <li className="">
                <Link
                  className="flex flex-row items-center my-0.5 hover:text-primary"
                  to={el.url}
                >
                  <div className="mr-2 text-xl">{el.icon}</div>
                  {el.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
          <p className="pl-1 bg-gray-200">Configurações</p>
          <div className="px-3 pt-1 pb-3">
            {config.map((el) => (
              <li>
                <Link
                  className="flex flex-row items-center my-0.5 hover:text-primary"
                  to={el.url}
                >
                  <div className="mr-2 text-xl">{el.icon}</div>
                  {el.name}
                </Link>
              </li>
            ))}
            
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
