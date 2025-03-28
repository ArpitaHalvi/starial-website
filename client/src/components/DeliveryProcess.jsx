// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { FaPencilRuler } from "react-icons/fa";

const processes = [
  { id: 1, step: "Customer places order", cName: "step1", url: "step1.png" },
  {
    id: 2,
    step: "Starial assign vendor to prepare order",
    cName: "step2",
    url: "step2.png",
  },
  {
    id: 3,
    step: "Starial assigns delivery partner",
    cName: "step3",
    url: "step3.png",
  },
  {
    id: 4,
    step: " Delivery Partner reaches shop",
    cName: "step4",
    url: "step4.png",
  },
  {
    id: 5,
    step: " Order is picked up & delivered",
    cName: "step5",
    url: "step5.png",
  },
];

export default function DeliveryProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const delay = activeIndex === processes.length - 1 ? 3000 : 1500;
    const interval = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % processes.length);
    }, delay);
    return () => clearTimeout(interval);
  }, [activeIndex]);
  return (
    <section className="delivery-process">
      <h2>How we make it happen?</h2>
      <div className="process">
        {/* <img
          src="delivery-boy.svg"
          alt="Delivery Boy"
          className="delivery-boy"
        /> */}
        {/* <div className="step-route">
          <div></div>
        </div> */}
        <div className="process-div">
          {processes.map(({ id, step, cName, url }) => {
            return (
              <div className={`${cName} step`} key={id}>
                <div
                  className={`step-img ${
                    id - 1 === activeIndex ? "scaled" : ""
                  }`}
                >
                  {/* <FaPencilRuler className="icon" /> */}
                  <img src={url} alt="" />
                </div>
                <h5>
                  <sup
                    className={`${
                      id - 1 === activeIndex ? "show-step-no" : ""
                    }`}
                  >
                    {id}
                  </sup>
                  {step}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
