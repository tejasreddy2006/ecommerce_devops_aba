import { useCart } from "../context/CartContext";
import {
  getProductImage,
  handleProductImageError,
} from "../utils/productImage";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="row align-items-center g-3">
          <div className="col-4 col-md-2">
            <img
              src={getProductImage(item)}
              alt={item.name}
              className="img-fluid rounded cart-item-image"
              onError={handleProductImageError}
            />
          </div>
          <div className="col-8 col-md-4">
            <h6 className="mb-1">{item.name}</h6>
            <small className="text-muted">{item.category}</small>
            <p className="text-success mb-0 mt-1">
              ₹{item.price.toLocaleString()}
            </p>
          </div>
          <div className="col-6 col-md-3">
            <div className="input-group input-group-sm">
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateQuantity(item._id, item.quantity - 1)}
              >
                −
              </button>
              <input
                type="text"
                className="form-control text-center"
                value={item.quantity}
                readOnly
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateQuantity(item._id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="col-6 col-md-2 text-md-end fw-bold">
            ₹{(item.price * item.quantity).toLocaleString()}
          </div>
          <div className="col-12 col-md-1 text-md-end">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => removeFromCart(item._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
