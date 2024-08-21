import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row px-5 py-3 text-white border-b bg-primary">
      <h1>LunchStack.Web</h1>
      <ul className="flex flex-row">
        <li>
          <Link to={`dashboard`}>Dashboard</Link>
        </li>
        <li>
          <Link to={`login`}>login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
