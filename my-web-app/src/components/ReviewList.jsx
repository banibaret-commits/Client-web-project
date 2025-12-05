const ReviewList = ({ reviews }) => (
  <div className="mt-3">
    {" "}
    {reviews.map((r, i) => (
      <div key={i} className="border rounded p-2 mb-2">
        {" "}
        <strong>{r.user || "Anonymous"}</strong> <p>Rating: {r.rating}/5</p>{" "}
        <p>{r.comment}</p>{" "}
      </div>
    ))}{" "}
  </div>
);
export default ReviewList;
