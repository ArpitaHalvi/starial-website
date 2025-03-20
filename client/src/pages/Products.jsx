import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Products() {
  const products = [
    { name: "Pencil Box", image: "" },
    { name: "Geometry Box", image: "" },
    { name: "Lunch Box", image: "" },
    { name: "Painting canvas", image: "" },
    { name: "Sketch Book", image: "" },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products">
        <div className="category">
          <h4>Stationery Items</h4>
        </div>
        <div className="items">
          <Slider {...settings}>
            {products.map((product, index) => {
              return (
                <div className="product" key={index}>
                  <img src={product.image}></img>
                  <h4>{product.name}</h4>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
