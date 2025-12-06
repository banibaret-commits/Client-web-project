import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import { CartProvider } from "./context/CartContext";
import { ReviewsProvider } from "./context/ReviewsContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ReviewsProvider>
          <Navbar />
          <div className="container mt-4 mb-5 d-flex justify-content-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="/order-confirmation"
                element={<OrderConfirmation />}
              />
            </Routes>
          </div>

          <Footer />
        </ReviewsProvider>
      </CartProvider>
    </BrowserRouter>
  );
};
export default App;
