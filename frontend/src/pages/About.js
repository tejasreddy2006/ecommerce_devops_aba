function About() {
  const features = [
    {
      icon: "⚛️",
      title: "React Frontend",
      text: "Modern UI with reusable components, React Router, and Bootstrap.",
    },
    {
      icon: "🟢",
      title: "Node.js API",
      text: "Express REST API with Mongoose models and MongoDB storage.",
    },
    {
      icon: "🐳",
      title: "Docker DevOps",
      text: "Full stack runs with docker compose up --build.",
    },
    {
      icon: "🔄",
      title: "CI Pipeline",
      text: "GitHub Actions builds and validates the project on every push.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="about-hero mb-5">
        <h1 className="mb-3">About ShopDev</h1>
        <p className="lead text-muted">
          ShopDev is a beginner-friendly e-commerce DevOps portfolio project.
          It demonstrates a complete workflow from development to containerized
          deployment and continuous integration.
        </p>
      </div>

      <div className="row g-4">
        {features.map((feature) => (
          <div className="col-md-6 col-lg-3" key={feature.title}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="feature-icon">{feature.icon}</div>
                <h5>{feature.title}</h5>
                <p className="text-muted small mb-0">{feature.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-5 border-0 shadow-sm">
        <div className="card-body">
          <h4>What you can try</h4>
          <ul className="mb-0">
            <li>Browse and search products on the Products page</li>
            <li>Filter items by category</li>
            <li>Add items to cart — saved in localStorage</li>
            <li>Run the stack with Docker Compose</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
