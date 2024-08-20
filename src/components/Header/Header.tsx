import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="px-5 py-3 border-b flex flex-row bg-blue-700 text-white">
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
