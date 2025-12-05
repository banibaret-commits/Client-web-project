import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link className="navbar-brand text-white" to="/">
        The Lady's Market
      </Link>

      <Link className="btn btn-outline-light cart-btn" to="/cart">
        Cart ({totalItems})
      </Link>
    </nav>
  );
};

export default Navbar;
