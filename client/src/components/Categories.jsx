import { IoArrowForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const categories = [
    {
      name: "Stationery Items",
      // img: "/category1-2.jpg",
      img: "",
    },
    {
      name: "Uniforms",
      // img: "/category2.jpg",
      img: "",
    },
    {
      name: "Exam Books",
      // img: "/category3.jpg",
      img: "",
    },
  ];
  return (
    <section className="categories-section">
      <h2>Category of products we offer</h2>
      <div className="categories">
        {categories.map((cat, index) => {
          return (
            <div key={index}>
              <img src={cat.img} alt="Categories" />
              <NavLink to="/categories">{cat.name}</NavLink>
            </div>
          );
        })}
      </div>
    </section>
  );
}
