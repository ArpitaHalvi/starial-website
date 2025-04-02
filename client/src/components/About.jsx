import { AiOutlineShop } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { MdDeliveryDining, MdSportsBasketball } from "react-icons/md";

export default function About() {
  return (
    <section className="about-section">
      <div className="decor">
        <div className="box-1"></div>
        <div className="box-2"></div>
      </div>
      <div className="about-us">
        <h2>Why Choose Us?</h2>
        <p>
          Starial is a startup providing convenient and efficient delivery of
          Stationery and Uniforms within an hour.
        </p>
        {/* <NavLink to="/about">Know More</NavLink> */}
        <div className="services">
          <div>
            <MdDeliveryDining className="service-icon" />
            Quick Delivery
          </div>
          <div>
            <FaBookOpen className="service-icon" />
            All Study Materials
          </div>
          <div>
            <GiClothes className="service-icon" />
            Uniforms
          </div>
          <div>
            <MdSportsBasketball className="service-icon" />
            Sports Items
          </div>
        </div>
      </div>
    </section>
  );
}
