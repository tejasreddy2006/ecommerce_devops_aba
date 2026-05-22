import { Link } from "react-router-dom";

function Hero({ title, subtitle, showCta = true }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-5 mb-3">{title}</h1>
            <p className="lead mb-4">{subtitle}</p>
            {showCta && (
              <Link to="/products" className="btn btn-warning btn-lg me-2">
                Shop Now
              </Link>
            )}
            <Link to="/about" className="btn btn-outline-light btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
