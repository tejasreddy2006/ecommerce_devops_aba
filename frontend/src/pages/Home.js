import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchProducts } from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.slice(0, 4));
      } catch {
        setError("Could not load products. Is the backend running?");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      <Hero
        title="Welcome to ShopDev123"
        subtitle="Discover quality electronics and accessories at great prices. Built as a DevOps portfolio e-commerce demo."
      />

      <div className="container pb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Featured Products</h2>
          <Link to="/products" className="btn btn-outline-primary">
            View All
          </Link>
        </div>

        {loading && <LoadingSpinner />}
        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && !error && (
          <div className="row">
            {products.map((product) => (
              <ProductCard
                key={product._id || product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default Home;
