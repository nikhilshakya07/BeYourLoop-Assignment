import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const navItem = "text-gray-600 hover:text-black font-medium transition";

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        BeYourLoop
      </Link>
      <ul className="flex space-x-6">
        <li><Link className={navItem} to="/">Home</Link></li>
        <li><Link className={navItem} to="/about">About</Link></li>
        <li><Link className={navItem} to="/contact">Contact</Link></li>
        <li><Link className={navItem} to="/dashboard">Dashboard</Link></li>
        <li><Link className={navItem} to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
