import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5>ShopDev</h5>
            <p className="small mb-0">
              A modern e-commerce demo built with React, Node.js, MongoDB, and
              Docker — perfect for DevOps portfolios.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled small">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Tech Stack</h5>
            <p className="small mb-0">
              React · Express · MongoDB · Docker · GitHub Actions
            </p>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} ShopDev E-Commerce. Portfolio demo
          project.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
