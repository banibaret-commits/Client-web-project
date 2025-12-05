import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left side */}
        <Link className="navbar-brand" to="/">
          The Lady's Market
        </Link>

        {/* Right side */}
        <Link className="btn btn-outline-light" to="/cart">
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
