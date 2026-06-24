import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-orange-500"
        >
          Foodie
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>

          <Link to="/menu" className="hover:text-orange-500">
            Menu
          </Link>

          <Link to="/orders" className="hover:text-orange-500">
            Orders
          </Link>

          <Link to="/cart" className="hover:text-orange-500">
            Cart
          </Link>

          <Link
            to="/login"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-5 py-5">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>

          <Link to="/orders" onClick={() => setMenuOpen(false)}>
            Orders
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
          </Link>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;