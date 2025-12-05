import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");
  const [price, setPrice] = useState(2000);

  // Load products once
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.products);
      setDisplay(res.products);
    });
  }, []);

  // FILTER + SORT LOGIC
  useEffect(() => {
    let list = [...products];

    // Search
    if (search.trim()) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // CATEGORY FIX ✔
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    // Price filter
    list = list.filter((p) => p.price <= price);

    // Sorting
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating-high") list.sort((a, b) => b.rating - a.rating);

    setDisplay(list);
  }, [search, category, sort, price, products]);

  // Get categories list from products
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <>
      <h2 className="mb-4">Products</h2>

      {/* Filters */}
      <div className="row mb-4">
        {/* Search */}
        <div className="col-md-4 mb-2">
          <input
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* CATEGORY FIX ✔ */}
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort By</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="rating-high">Highest Rating</option>
          </select>
        </div>

        {/* Price Slider */}
        <div className="col-md-2 mb-2">
          <input
            type="range"
            className="form-range"
            min="0"
            max="2000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <small>Max: ${price}</small>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">
        {display.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
