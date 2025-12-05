import { useLocation, Link } from "react-router-dom";

const OrderConfirmation = () => { const { state } = useLocation(); 
if (!state) return <h2>No order found.</h2>; 
return ( <> <h2>Order Confirmed!</h2> <p>Thank you for your purchase.</p> 
<h4 className="mt-4">Order Summary</h4> {state.cart.map(item => ( <p key={item.id}> {item.title}  {item.qty} = ${item.price * item.qty} </p> ))} 
<h4 className="mt-3">Totals</h4> <p>Subtotal: ${state.subtotal.toFixed(2)}</p> 
<p>GST: ${state.gst.toFixed(2)}</p> {state.qst > 0 && <p>QST: ${state.qst.toFixed(2)}</p>} 
<h3>Total: ${state.total.toFixed(2)}</h3> 
<h4 className="mt-4">Shipping</h4> 
<p>{state.shipping.name}</p> 
<p>{state.shipping.address}</p> 
<p>{state.shipping.city}, {state.shipping.province}</p> 
<p>{state.shipping.postal}</p> 
<h4 className="mt-4">Payment Method</h4> 
<p>{state.payment}</p> <Link className="btn btn-primary mt-4" to="/">Back to Home</Link> 
</> 
); }; 
export default OrderConfirmation;
