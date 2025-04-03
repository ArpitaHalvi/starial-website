// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

export default function Products() {
  // const choices = ["cate1.png", "cate3.png", "cate2.png"];
  const choices = [
    // { title: "Stationery", img: "stationery.jpg" },
    {
      title: "Stationery",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688008/stationery_rttxkz.jpg",
    },
    // { title: "School Uniforms", img: "uniforms.jpg" },
    {
      title: "School Uniforms",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688036/uniforms_kscbha.jpg",
    },
    {
      title: "Exam Books",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688005/books_gt3z0r.jpg",
    },
  ];
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
                <img src={c.img} alt="Categories Image" loading="lazy" />
                <h6>{c.title}</h6>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
