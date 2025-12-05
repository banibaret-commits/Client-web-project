import { createContext, useState, useEffect } from "react";
export const ReviewsContext = createContext();
export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("reviews")) || {}
  );
  const addReview = (productId, review) => {
    setReviews((prev) => {
      const updated = {
        ...prev,
        [productId]: [...(prev[productId] || []), review],
      };
      localStorage.setItem("reviews", JSON.stringify(updated));
      return updated;
    });
  };
  return (
    <ReviewsContext.Provider value={{ reviews, addReview }}>
      {" "}
      {children}{" "}
    </ReviewsContext.Provider>
  );
};
