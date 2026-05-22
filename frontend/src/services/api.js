// API base URL — set in Docker via REACT_APP_API_URL
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to load product");
  }

  return response.json();
};
