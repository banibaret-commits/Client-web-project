import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartItem = ({ item }) => {
  const { updateQty, removeFromCart } = useContext(CartContext);
  return (
    <div className="d-flex align-items-center border-bottom py-3">
      {" "}
      <img src={item.thumbnail} width="80" className="me-3" />{" "}
      <div className="flex-grow-1">
        {" "}
        <h5>{item.title}</h5> <p>${item.price}</p>{" "}
        <button
          className="btn btn-sm btn-secondary me-2"
          onClick={() => updateQty(item.id, -1)}
        >
          -
        </button>{" "}
        <span>{item.qty}</span>{" "}
        <button
          className="btn btn-sm btn-secondary ms-2"
          onClick={() => updateQty(item.id, 1)}
        >
          +
        </button>{" "}
        <button
          className="btn btn-sm btn-danger ms-3"
          onClick={() => removeFromCart(item.id)}
        >
          {" "}
          Remove{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
export default CartItem;
