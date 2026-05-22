import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="empty-cart-icon mb-3">🛒</div>
      <h3>Your cart is empty</h3>
      <p className="text-muted mb-4">
        Browse our products and add items to get started.
      </p>
      <Link to="/products" className="btn btn-primary">
        Browse Products
      </Link>
    </div>
  );
}

export default EmptyCart;
