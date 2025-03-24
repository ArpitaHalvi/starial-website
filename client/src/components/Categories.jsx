import { IoArrowForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
  const categories = [
    {
      name: "Stationery Items",
      img: "/categories-bg1.jpg",
    },
    {
      name: "Uniforms",
      img: "/categories-bg2.jpg",
    },
    {
      name: "Exam Books",
      img: "/categories-bg3.jpg",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <section className="categories-section">
      <h2>Category of products we offer</h2>
      <div className="categories">
        <Slider {...settings}>
          {categories.map((cat, index) => {
            return (
              <div key={index}>
                <img src={cat.img} alt="Categories" />
                {/* <NavLink to="/categories">{cat.name}</NavLink> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
