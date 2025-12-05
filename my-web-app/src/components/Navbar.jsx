import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-4">
      {" "}
      <Link className="navbar-brand" to="/">
        E-Commerce
      </Link>{" "}
      <div className="ms-auto">
        {" "}
        <Link className="btn btn-outline-light" to="/cart">
          {" "}
          Cart ({totalItems}){" "}
        </Link>{" "}
      </div>{" "}
    </nav>
  );
};
export default Navbar;
