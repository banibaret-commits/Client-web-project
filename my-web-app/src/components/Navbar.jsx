import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";


const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="flex items-center gap-2">
  <img 
    src={logo} 
    alt="logo" 
    style={{ width: "35px", height: "35px" }}
  />
  <h1 className="text-2xl font-bold text-pink-700">The Lady’s Market</h1>
</div>

  );
};

export default Navbar;
