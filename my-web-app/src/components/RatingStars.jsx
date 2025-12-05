const RatingStars = ({ rating }) => {
  const stars = Math.round(rating);
  return (
    <div>
      {" "}
      {"★".repeat(stars)}
      {"☆".repeat(5 - stars)}{" "}
      <small className="ms-2">({rating.toFixed(1)})</small>{" "}
    </div>
  );
};
export default RatingStars;
