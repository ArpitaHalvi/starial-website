// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom";

export default function Products() {
  // const stationeries = [
  //   { name: "Pencil Box", image: "/st1.jpg" },
  //   { name: "Geometry Box", image: "/st2.jpg" },
  //   { name: "Colorful Pencils", image: "/st3.jpg" },
  //   { name: "Sketch Pens", image: "/st4.jpg" },
  //   { name: "Painting canvas", image: "/st5.jpg" },
  //   { name: "Sketch Book", image: "/st6.jpg" },
  //   {
  //     name: "Explore More",
  //     image: "starial-logo.png",
  //     link: "https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1",
  //   },
  // ];
  // const uniforms = [
  //   { name: "GD Goenka Sports Uniform", image: "uniform1.jpg" },
  //   { name: "GD Goenka Trousers/Skirts", image: "" },
  //   { name: "GD Goenka Blazers", image: "uniform3.jpg" },
  //   { name: "Stemfield Sports Uniform ", image: "" },
  //   { name: "Stemfield Trousers/Skirts ", image: "" },
  //   { name: "Stemfield Blazers ", image: "" },
  //   {
  //     name: "Explore More",
  //     image: "starial-logo.png",
  //     link: "https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1",
  //   },
  // ];
  // const books = [
  //   { name: "State PSC Exam", image: "/book1.jpg" },
  //   { name: "CAT", image: "/book2.jpg" },
  //   { name: "UPSC", image: "/book3.jpg" },
  //   { name: "JEE Mains & Advanced", image: "/book4.jpg" },
  //   { name: "GATE", image: "/book5.jpg" },
  //   { name: "IBPS PO & Clerk", image: "/book6.jpg" },
  //   { name: "SBI PO & Clerk", image: "/book7.jpg" },
  //   {
  //     name: "Explore More",
  //     image: "starial-logo.png",
  //     link: "https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1",
  //   },
  // ];
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  const choices = ["cat1.png", "cat2.png", "cat3.png"];
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
      {/* <h2>Our Products</h2>
      <div className="products product-part1">
        <div className="category category-1">
          <h4>Stationery Items</h4>
        </div>
        <div className="items">
          <Slider {...settings}>
            {stationeries.map((product, index) => {
              return (
                <div className="product" key={index}>
                  {product.link ? (
                    <Link to={product.link}>
                      <img src={product.image}></img>
                    </Link>
                  ) : (
                    <img src={product.image}></img>
                  )}
                  <h4>{product.name}</h4>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="products product-part2">
        <div className="items">
          <Slider {...settings}>
            {uniforms.map((product, index) => {
              return (
                <div className="product" key={index}>
                  {product.link ? (
                    <Link to={product.link}>
                      <img src={product.image}></img>
                    </Link>
                  ) : (
                    <img src={product.image}></img>
                  )}
                  <h4>{product.name}</h4>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="category category-2">
          <h4>Uniforms</h4>
        </div>
      </div>
      <div className="products product-part3">
        <div className="category category-3">
          <h4>Competitive Exam Books</h4>
        </div>
        <div className="items">
          <Slider {...settings}>
            {books.map((product, index) => {
              return (
                <div className="product" key={index}>
                  {product.link ? (
                    <Link to={product.link}>
                      <img src={product.image}></img>
                    </Link>
                  ) : (
                    <img src={product.image}></img>
                  )}
                  <h4>{product.name}</h4>
                </div>
              );
            })}
          </Slider>
        </div>
      </div> */}
    </section>
  );
}
