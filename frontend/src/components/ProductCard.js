import { useCart } from "../context/CartContext";
import {
  getProductImage,
  handleProductImageError,
} from "../utils/productImage";

function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart();

  return (
    <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card product-card h-100">
        <img
          src={getProductImage(product)}
          className="card-img-top"
          alt={product.name}
          onError={handleProductImageError}
        />
        <div className="card-body d-flex flex-column">
          <span className="badge bg-primary category-badge mb-2 align-self-start">
            {product.category}
          </span>
          <h5 className="card-title">{product.name}</h5>
          <p className="text-success fw-bold mb-3">₹{product.price.toLocaleString()}</p>
          <div className="mt-auto d-grid gap-2">
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => onViewDetails(product)}
            >
              View Details
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
