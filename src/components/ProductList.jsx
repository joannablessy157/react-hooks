import useFetch from "../hooks/useFetch";

function ProductList() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2 className="message">Loading...</h2>;
  }

  if (error) {
    return <h2 className="message">Error: {error}</h2>;
  }

  return (
    <div className="photo-grid">
      {data && data.map((product) => (
        <div className="photo-card" key={product.id}>
          <img src={product.images?.[0]} alt={product.title} />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
