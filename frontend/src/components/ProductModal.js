import { useCart } from "../context/CartContext";
import {
  getProductImage,
  handleProductImageError,
} from "../utils/productImage";

function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product);
    onClose();
  };

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{product.name}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row g-4">
                <div className="col-md-6">
                  <img
                    src={getProductImage(product)}
                    alt={product.name}
                    className="modal-product-image"
                    onError={handleProductImageError}
                  />
                </div>
                <div className="col-md-6">
                  <span className="badge bg-primary mb-2">
                    {product.category}
                  </span>
                  <p className="text-muted">{product.description}</p>
                  <h4 className="text-success">
                    ₹{product.price.toLocaleString()}
                  </h4>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
              <button className="btn btn-primary" onClick={handleAdd}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose} />
    </>
  );
}

export default ProductModal;
