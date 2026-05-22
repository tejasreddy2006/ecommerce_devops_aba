const PLACEHOLDER = "/images/products/placeholder.svg";

export const getProductImage = (product) => product?.image || PLACEHOLDER;

export const handleProductImageError = (event) => {
  if (event.target.src.endsWith("placeholder.svg")) return;
  event.target.src = PLACEHOLDER;
};
