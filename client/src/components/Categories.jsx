import { IoArrowForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
  // const categories = [
  //   {
  //     name: "Stationery Items",
  //     img: "https://i.pinimg.com/736x/34/3e/00/343e0061db2d963ac8b6b05e9c7d39ce.jpg",
  //   },
  //   {
  //     name: "Uniforms",
  //     img: "https://i.pinimg.com/736x/ac/94/99/ac949927f1aeaaadd22976f072d1eabd.jpg",
  //   },
  //   {
  //     name: "Exam Books",
  //     img: "https://i.pinimg.com/736x/5c/d9/35/5cd935371340d403afd678a076f450be.jpg",
  //   },
  // ];
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
  const category1 = ["category.jpg", "", ""];
  const category2 = ["", "", ""];
  const category3 = ["", "", ""];
  return (
    <section className="categories-section">
      <h2>Category of products we offer</h2>
      <div className="categories">
        {/* <Slider {...settings}>
          {categories.map((cat, index) => {
            return (
              <div key={index}>
                <img src={cat.img} alt="Categories" />
              </div>
            );
          })}
        </Slider> */}
        <div className="category category-1">
          <Slider {...settings}>
            {category1.map((cat, index) => {
              return <img src={cat} alt="Category" key={index} />;
            })}
          </Slider>
          <NavLink to="/categories">Stationery Items</NavLink>
        </div>
        <div className="category category-2">
          <Slider {...settings}>
            {category2.map((cat, index) => {
              return <img src={cat} alt="Category" key={index} />;
            })}
          </Slider>
          <NavLink to="/categories">Uniforms</NavLink>
        </div>
        <div className="category category-3">
          <Slider {...settings}>
            {category3.map((cat, index) => {
              return <img src={cat} alt="Category" key={index} />;
            })}
          </Slider>
          <NavLink to="/categories">Exam Books</NavLink>
        </div>
      </div>
    </section>
  );
}
