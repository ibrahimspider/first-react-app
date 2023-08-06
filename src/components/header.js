import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 bg-slate-600 ">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg text-white">
          <Link to="/">React App</Link>
        </div>
        <div>
          <ul className="flex text-slate-400">
            <li className="px-2">
              <NavLink to="/" className="transition">
                Home
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink to="/about" className="transition">
                About
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink to="/contact" className="transition">
                Contact
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink to="/help" className="transition">
                Help
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
