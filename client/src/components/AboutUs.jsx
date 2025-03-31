import { NavLink } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="about-us-section">
      <div className="about-us">
        <h2>Why choose us?</h2>
        <p>
          starial is a startup providing convinent and efficient delivery of
          stationery and uniforms within an hour
        </p>
        <NavLink to="/about">Know More</NavLink>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
}
