// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

export default function Products() {
  const choices = ["cate1.png", "cate3.png", "cate2.png"];
  return (
    <section className="products-section">
      <div className="choices-section">
        <h2>Choose what you need</h2>
        <p>
          Starial offers a wide range of products, including high-quality
          stationery, durable school uniforms, and essential exam books to
          support students in their academic journey.
        </p>
        <div className="choices">
          {choices.map((c, idx) => {
            return (
              <NavLink to="/categories" key={idx}>
                <img src={c} alt="Categories Image" />
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
