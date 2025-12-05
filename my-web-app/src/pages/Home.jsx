import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // Load product list
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.products);
      setDisplay(res.products);
    });
  }, []);

  // Filters + Search + Sorting
  useEffect(() => {
    let list = [...products];

    // 🔍 search
    if (search.trim() !== "") {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 🏷 category filter
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    // 💵 price filter
    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // ↕ sorting
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating-high") list.sort((a, b) => b.rating - a.rating);

    setDisplay(list);
  }, [search, category, sort, priceRange, products]);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      <h2 className="mb-3">Products</h2>

      {/* FILTER BAR */}
      <div className="row mb-4">
        {/* 🔍 Search */}
        <div className="col-md-4 mb-2">
          <input
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 🏷 Category Filter */}
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* ↕ Sort */}
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

        {/* 💰 Price range */}
        <div className="col-md-2 mb-2">
          <input
            type="range"
            className="form-range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          />
          <small>Max: ${priceRange[1]}</small>
        </div>
      </div>

      {/* 🛍 4-per-row GRID */}
      <div className="row">
        {display.map((p) => (
          <div className="col-md-3 mb-4" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
