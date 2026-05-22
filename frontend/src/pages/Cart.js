import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";

function Cart() {
  const { cart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-5">
        <h1 className="mb-4">Shopping Cart</h1>
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Shopping Cart</h1>
        <button className="btn btn-outline-danger btn-sm" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <div className="row">
        <div className="col-lg-8">
          {cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>
        <div className="col-lg-4">
          <div className="cart-summary">
            <h5>Order Summary</h5>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold">Total</span>
              <span className="fw-bold text-success fs-5">
                ₹{cartTotal.toLocaleString()}
              </span>
            </div>
            <p className="small text-muted">
              Cart is saved in your browser (localStorage). Payment is not
              included in this demo.
            </p>
            <Link to="/products" className="btn btn-primary w-100">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
