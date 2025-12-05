import { useContext, useState } from "react";
import { ReviewsContext } from "../context/ReviewsContext";
const ReviewForm = ({ productId }) => {
  const { addReview } = useContext(ReviewsContext);
  const [form, setForm] = useState({ user: "", rating: 5, comment: "" });
  const submit = (e) => {
    e.preventDefault();
    addReview(productId, form);
    setForm({ user: "", rating: 5, comment: "" });
  };
  return (
    <form onSubmit={submit} className="mt-4">
      {" "}
      <h5>Add a Review</h5>{" "}
      <input
        className="form-control mb-2"
        placeholder="Name (optional)"
        value={form.user}
        onChange={(e) => setForm({ ...form, user: e.target.value })}
      />{" "}
      <select
        className="form-select mb-2"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
      >
        {" "}
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r}>{r}</option>
        ))}{" "}
      </select>{" "}
      <textarea
        className="form-control mb-2"
        placeholder="Your review..."
        value={form.comment}
        required
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
      ></textarea>{" "}
      <button className="btn btn-primary">Submit</button>{" "}
    </form>
  );
};
export default ReviewForm;
