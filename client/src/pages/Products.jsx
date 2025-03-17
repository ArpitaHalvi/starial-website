export default function Products() {
  const products = [{ name: "", image: "" }];
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products">
        {products.map((product, index) => {
          return (
            <div className="product" key={index}>
              <div>{product.image}</div>
              <h4>{product.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
