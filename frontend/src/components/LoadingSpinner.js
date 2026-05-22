function LoadingSpinner({ message = "Loading products..." }) {
  return (
    <div className="loading-container">
      <div className="spinner-border text-primary mb-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mb-0">{message}</p>
    </div>
  );
}

export default LoadingSpinner;
