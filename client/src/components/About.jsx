import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <section className="about-section">
      <div className="decor">
        <img src="/stationery-items.png" alt="" />
      </div>
      <div className="about-us">
        <h2>About Company</h2>
        <p>
          Starial is a startup providing convenient and efficient delivery of
          Stationery and Uniforms within an hour.
        </p>
        <NavLink to="/about">Know More</NavLink>
      </div>
    </section>
  );
}
