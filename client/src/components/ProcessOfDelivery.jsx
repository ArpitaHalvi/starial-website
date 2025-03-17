import { IoLocationSharp } from "react-icons/io5";

export default function ProcessOfDelivery() {
  return (
    <section className="process-section">
      <h2>How we make it happen?</h2>
      <div className="process">
        <IoLocationSharp className="location" />
        <div className="step-route">
          <div></div>
        </div>
        <div className="first-div step">
          <div className="step-decor step-1"></div>
          <h5>
            <sup>1</sup> Customer places order
          </h5>
          <div className="path path1"></div>
        </div>
        <div className="second-div step">
          <h5>
            <sup>2</sup> Starial assign vendor to prepare order
          </h5>
          <div className="path path2"></div>
          <div className="step-decor step-2"></div>
        </div>
        <div className="third-div step">
          <div className="step-decor step-3"></div>
          <h5>
            <sup>3</sup> Starial assigns delivery partner
          </h5>
          <div className="path path3"></div>
        </div>
        <div className="fourth-div step">
          <h5>
            <sup>4</sup> Delivery Partner reaches shop
          </h5>
          <div className="path path4"></div>
          <div className="step-decor step-4"></div>
        </div>
        <div className="fifth-div step">
          <div className="step-decor step-5"></div>
          <h5>
            <sup>5</sup> Order is picked up & delivered
          </h5>
          <div className="path path5"></div>
        </div>
      </div>
    </section>
  );
}
