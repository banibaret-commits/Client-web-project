import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQty, removeFromCart } = useContext(CartContext);
  return (
    <div className="d-flex align-items-center border-bottom py-3">
      <img src={item.thumbnail} width="80" className="me-3" alt={item.title} />
      <div className="flex-grow-1">
        <h5>{item.title}</h5>
        <p className="mb-1">${(item.price * item.qty).toFixed(2)} (${item.price.toFixed(2)} each)</p>
        <button
          className="btn btn-sm btn-secondary me-2"
          // Prevent quantity from dropping below 1
          onClick={() => updateQty(item.id, -1)} 
          disabled={item.qty <= 1} 
        >
          -
        </button>
        <span>{item.qty}</span>
        <button
          className="btn btn-sm btn-secondary ms-2"
          onClick={() => updateQty(item.id, 1)}
        >
          +
        </button>
        <button
          className="btn btn-sm btn-danger ms-3"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;