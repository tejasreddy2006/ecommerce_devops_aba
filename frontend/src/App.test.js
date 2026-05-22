import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page hero section", () => {
  render(<App />);
  expect(screen.getByText(/Featured Products/i)).toBeInTheDocument();
  expect(screen.getByText(/Welcome to ShopDev/i)).toBeInTheDocument();
});
