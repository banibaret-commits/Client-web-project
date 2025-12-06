import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  // STATE & LOGIC SECTION (Correctly merged into the single Home component)
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");

  const [maxPrice, setMaxPrice] = useState(2000);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // Effect to fetch products and set max price
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.products);
      setDisplay(res.products);

      // Calculate the actual maximum price for the slider
      const max = Math.max(...res.products.map((p) => p.price));
      setMaxPrice(max);
      setPriceRange([0, max]);
    });
  }, []);

  // Effect to handle filtering and sorting
  useEffect(() => {
    let list = [...products];

    // Search
    if (search.trim()) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category Filter
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    // Price Filter
    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sorting
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating-high") list.sort((a, b) => b.rating - a.rating);

    setDisplay(list);
  }, [search, category, sort, priceRange, products]);

  const categories = [...new Set(products.map((p) => p.category))];

  // RETURN SECTION (The content will be centered if App.jsx uses container-fluid)
  return (
    // 1. Centering Wrapper: Uses Bootstrap row and column to constrain and center
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <h2 className="mb-3">Products</h2>

        {/* Filters: MUST be inside a ROW to contain COLs */}
        <div className="row mb-4">
          <div className="col-md-4 mb-2">
            <input
              className="form-control"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-3 mb-2">
            <select
              className="form-select"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-2">
            <select
              className="form-select"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="none">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating-high">Highest Rating</option>
            </select>
          </div>
          <div className="col-md-2 mb-2">
            <input
              type="range"
              className="form-range"
              min="0"
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            />
            <small>Max: ${priceRange[1]}</small>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {display.map((p) => (
            <div className="col-md-3 mb-4" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
