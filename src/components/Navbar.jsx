import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-20 w-full items-center justify-center shadow-md">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
