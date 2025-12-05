import { useContext, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
 import { getProduct } from "../services/api"; 
 import { CartContext } from "../context/CartContext";
  import { ReviewsContext } from "../context/ReviewsContext"; 
  import ReviewList from "../components/ReviewList"; 
  import ReviewForm from "../components/ReviewForm";
   import RatingStars from "../components/RatingStars"; 
   
   const ProductDetail = () => { const { id } = useParams(); const { addToCart } = useContext(CartContext); const { reviews } = useContext(ReviewsContext); 
   const [product, setProduct] = useState(null); useEffect(() => { getProduct(id).then(setProduct); }, [id]); 
   if (!product) return <p>Loading...</p>;
    const userReviews = reviews[id] || []; 
    const combinedReviews = [...product.reviews, ...userReviews]; 
    const avgRating = combinedReviews.reduce((sum, r) => sum + r.rating, 0) / combinedReviews.length || 0; return ( <div className="row"> <div className="col-md-6">
         <img src={product.thumbnail} alt="" className="img-fluid rounded" />
          </div> <div className="col-md-6"> <h2>{product.title}</h2>
           <RatingStars rating={avgRating} /> <p className="mt-2">{product.description}</p>
            <h4 className="text-primary">${product.price}</h4> 
            <button className="btn btn-success my-3" onClick={() => addToCart(product)} > Add to Cart </button> 
            <h4 className="mt-4">Reviews</h4> <ReviewList reviews={combinedReviews} /> <ReviewForm productId={id} /> 
            </div> 
            </div> 
            ); };
             export default ProductDetail;
