import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";


const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" width="80" height="90" className="me-2" />
      <Link className="navbar-brand text-white" to="/">
        The Lady's Market
      </Link>
      

      <Link className="btn btn-outline-light" to="/cart">
        Cart ({totalItems})
      </Link>
    </nav>
  );
};

export default Navbar;
