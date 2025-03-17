import { FaClock } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="about-page">
      <h2>Know More about Us</h2>
      <div className="about-us">
        <h3>Get your Books and Stationery at your doorstep!</h3>
        <div className="about-company">
          {/* <img src="" alt="" /> */}
          <p>
            Starial is a startup providing convenient and efficient delivery of
            Stationery and Uniforms within an hour.
          </p>
          <FaClock className="clock-icon" />
        </div>
        <div className="about-ceo">
          <div>
            <img src="/stationery-items.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            animi sed quidem optio! Voluptates odit facere possimus deserunt
            consectetur praesentium nobis minima natus impedit dignissimos odio
            fuga nam labore, qui a? Nesciunt repellendus dolor quia voluptates
            velit, ipsum ullam quibusdam vitae tempora quae numquam sit.
            <blockquote> Rahul Rai (CEO at Starial)</blockquote>
          </p>
        </div>
      </div>
    </section>
  );
}
