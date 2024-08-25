import { Link } from "react-router-dom";
import authService from "../../service/authService";

function Header() {
  const user = authService.getUser();
  return (
    <header className="flex flex-row justify-between px-5 py-3 text-white border-b bg-primary">
      <div className="flex flex-row ">
        <h1 className="mx-5">LunchStack.Web</h1>
        <ul className="flex flex-row">
          <li>
            <Link to={`dashboard`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`login`}>login</Link>
          </li>
        </ul>

      </div>
        <div>
          <small>Bem vindo {user?.username}</small>
        </div>
    </header>
  );
}

export default Header;
