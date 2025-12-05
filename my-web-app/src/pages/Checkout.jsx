import { useContext, useState } from "react"; 
import { CartContext } from "../context/CartContext"; 
import { useNavigate } from "react-router-dom"; 


const Checkout = () => { const { cart, subtotal, clearCart } = useContext(CartContext); 
const navigate = useNavigate(); const [shipping, setShipping] = useState({ name: "", address: "", city: "", province: "", postal: "" });
 const [payment, setPayment] = useState(""); const gst = subtotal * 0.05; const qst = shipping.province === "Quebec" ? subtotal * 0.09975 : 0; 
 const total = subtotal + gst + qst; const submitOrder = (e) => { e.preventDefault(); 
 navigate("/order-confirmation", { state: { cart, subtotal, gst, qst, total, shipping, payment } }); 
 clearCart(); }; return ( <form onSubmit={submitOrder}> <h2>Checkout</h2> 
 <h4 className="mt-4">Shipping Address</h4> 
 <input className="form-control mb-2" placeholder="Name" required onChange={(e) => setShipping({ ...shipping, name: e.target.value })} /> 
 <input className="form-control mb-2" placeholder="Address" required onChange={(e) => setShipping({ ...shipping, address: e.target.value })} /> 
 <input className="form-control mb-2" placeholder="City" required onChange={(e) => setShipping({ ...shipping, city: e.target.value })} /> 
 <select className="form-select mb-2" required onChange={(e) => setShipping({ ...shipping, province: e.target.value })}> 
    <option>Select Province</option>
     <option>Quebec</option> 
     <option>Ontario</option>
      <option>British Columbia</option> 
      <option>Alberta</option> </select> 
      <input className="form-control mb-4" placeholder="Postal Code" required onChange={(e) => setShipping({ ...shipping, postal: e.target.value })} />
       <h4>Payment Method</h4> <select className="form-select mb-3" required onChange={(e) => setPayment(e.target.value)}> 
        <option value="">Select Payment</option> 
        <option>Credit Card</option>
         <option>PayPal</option> 
         <option>Bank Transfer</option> 
         </select> 
         <h4>Order Summary</h4> <p>Subtotal: ${subtotal.toFixed(2)}</p> <p>GST (5%): ${gst.toFixed(2)}</p> {shipping.province === "Quebec" && ( <p>QST (9.975%): ${qst.toFixed(2)}</p> )} 
         <h3>Total: ${total.toFixed(2)}</h3> 
         <button className="btn btn-success mt-3" type="submit"> Place Order </button> </form>
          ); }; 
          export default Checkout;
