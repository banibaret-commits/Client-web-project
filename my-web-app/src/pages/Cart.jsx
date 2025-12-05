import { useContext } from "react";
 import { CartContext } from "../context/CartContext"; 
 import CartItem from "../components/CartItem"; 
 import { Link } from "react-router-dom"; 
 
 const Cart = () => { const { cart, subtotal } = useContext(CartContext); 
 if (cart.length === 0) 
    return <h3>Your cart is empty.</h3>;
  return ( <> <h2>Your Cart</h2> {cart.map(item => ( <CartItem key={item.id} item={item} /> ))} 
  <h3 className="mt-4">Subtotal: ${subtotal.toFixed(2)}</h3> <Link className="btn btn-primary mt-3" to="/checkout"> Proceed to Checkout </Link> </> ); }; export default Cart;