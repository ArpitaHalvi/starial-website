import { IoArrowForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <section className="categories-section">
      <h2>Category of products we offer</h2>
      <div className="categories">
        <div>
          <img src="/stationery.jpg" alt="Categories" />
          <NavLink to="/categories">
            Stationery Items <IoArrowForward />
          </NavLink>
        </div>
        <div>
          <img src="/unfiorm.jpg" alt="Categories" />
          <NavLink to="/categories">
            School Uniforms <IoArrowForward />
          </NavLink>
        </div>
        <div>
          <img src="/exam.jpg" alt="Categories" />
          <NavLink to="/categories">
            Competitive Exam Books <IoArrowForward />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
