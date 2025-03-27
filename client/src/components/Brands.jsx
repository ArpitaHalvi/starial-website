export default function Brands() {
  const brands = [
    "apsara.png",
    "cello.png",
    "classmate.svg",
    "doms.png",
    "faber-castell2.png",
    "pidilite.png",
    "reynolds.jpg",
    "youva2.jpg",
  ];
  return (
    <section className="brands-section">
      <h2>Shop the top brands</h2>
      <div className="brands">
        {brands.map((b, index) => {
          return <img src={b} alt="" className="brand" key={index} />;
        })}
        {brands.map((b, index) => {
          return <img src={b} alt="" className="brand" key={index} />;
        })}
      </div>
    </section>
  );
}
