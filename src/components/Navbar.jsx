import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

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
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
          >
            Login
          </Link>
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg flex flex-col gap-4 px-6 py-4">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/menu" onClick={() => setOpen(false)}>
            Menu
          </Link>

          <Link to="/orders" onClick={() => setOpen(false)}>
            Orders
          </Link>

          <Link to="/cart" onClick={() => setOpen(false)}>
            Cart
          </Link>

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;