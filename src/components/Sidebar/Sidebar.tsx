import {
  BiBarChart,
  BiCategory,
  BiChart,
  BiDish,
  BiFoodMenu,
  BiGroup,
  BiTable,
  BiUser,
  BiWrench,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"

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
      icon: <BiFoodMenu />,
    },
    {
      name: "Pedidos",
      url: "dashboard/pedidos",
      icon: <BiDish />,
    },
    {
      name: "Mesas",
      url: "dashboard/mesas",
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
  ]
  return (
    <div className="sticky mt-2 ml-2 text-gray-500 lg:w-1/6 -top-10">
      <ul className="sticky flex flex-col w-full py-3 bg-white border rounded-lg shadow-lg md:flex-col border-slate-100 top-14">
        <div>
          <p className="hidden pl-1 truncate bg-gray-200 lg:block">Estabelecimento</p>
          <div className="px-3 pt-1 pb-3">
            {shop.map((el, index) => (
              <li key={index} className="">
                <Link
                  className="flex flex-row items-center my-0.5 hover:text-primary"
                  to={el.url}
                >
                  <div className="my-1 mr-0 text-2xl text-gray-400 lg:text-xl lg:mr-2 lg:my-0">{el.icon}</div>
                  <span className="hidden lg:block">{el.name}</span>
                </Link>
              </li>
            ))}
          </div>
        </div>
          <p className="hidden pl-1 truncate bg-gray-200 lg:block">Configurações</p>
          <div className="px-3 pt-1 pb-3">
            {config.map((el, index) => (
              <li key={index}>
                <Link
                  className="flex flex-row items-center my-0.5 hover:text-primary"
                  to={el.url}
                >
                  <div className="my-1 mr-0 text-2xl text-gray-400 lg:text-xl lg:mr-2 lg:my-0">{el.icon}</div>
                  <span className="hidden lg:block">{el.name}</span>
                </Link>
              </li>
            ))}
            
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
