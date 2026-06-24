import { Link } from "react-router-dom";

const Navbar = () => {
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

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link to="/menu" className="hover:text-orange-500 transition">
            Menu
          </Link>

          <Link to="/orders" className="hover:text-orange-500 transition">
            Orders
          </Link>

          <Link to="/cart" className="hover:text-orange-500 transition">
            Cart
          </Link>
        </div>

        {/* Auth Button */}
        <Link
          to="/login"
          className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Login
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;