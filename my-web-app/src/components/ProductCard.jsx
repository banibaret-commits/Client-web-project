import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100">
      <img src={product.thumbnail} className="card-img-top" />

      <div className="card-body">
        <h5>{product.title}</h5>

        <p className="text-primary">${product.price}</p>

        <Link
          to={`/product/${product.id}`}
          className="btn btn-sm btn-outline-primary"
        >
          View Details
        </Link>

        <button
          className="btn btn-sm btn-success ms-2"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
