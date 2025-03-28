import { AiOutlineShop } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa6";
import { TbShoppingCartDiscount, TbTruckDelivery } from "react-icons/tb";
import { NavLink } from "react-router-dom";

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
            <TbTruckDelivery className="service-icon" />
            Fast Delivery
          </div>
          <div>
            <TbShoppingCartDiscount className="service-icon" />
            Lower Prices
          </div>
          <div>
            <FaMoneyBillWave className="service-icon" />
            Cash on Delivery
          </div>
          <div>
            <AiOutlineShop className="service-icon" />
            Top Brands
          </div>
        </div>
      </div>
    </section>
  );
}
