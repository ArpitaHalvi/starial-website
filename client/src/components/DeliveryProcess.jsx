// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { FaPencilRuler } from "react-icons/fa";

const processes = [
  { id: 1, step: "Customer places order", cName: "step1" },
  {
    id: 2,
    step: "Starial assign vendor to prepare order",
    cName: "step2",
  },
  { id: 3, step: "Starial assigns delivery partner", cName: "step3" },
  { id: 4, step: " Delivery Partner reaches shop", cName: "step4" },
  { id: 5, step: " Order is picked up & delivered", cName: "step5" },
];

export default function DeliveryProcess() {
  // const [scrollPos, setScrollPos] = useState(0);
  // const [targetPos, setTargetPos] = useState(0);
  // const maxScroll = 300;
  // useEffect(() => {
  //   let animationFrame;
  //   let scrollTimeout;
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const maxWidth = window.innerWidth - 250;
  //     const newPosition = Math.min((scrollY / maxScroll) * maxWidth, maxWidth);
  //     setScrollPos(newPosition);
  //     clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(() => {
  //       cancelAnimationFrame(animationFrame);
  //     }, 100);
  //   };
  //   const animateIcon = () => {
  //     setScrollPos((prev) => {
  //       const diff = targetPos - prev;
  //       return Math.abs(diff) < 0.5 ? targetPos : prev + diff * 0.5;
  //     });
  //     animationFrame = requestAnimationFrame(animateIcon);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   animationFrame = requestAnimationFrame(animateIcon);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     cancelAnimationFrame(animationFrame);
  //   };
  // }, [targetPos]);
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
        <img
          src="delivery-boy.svg"
          alt="Delivery Boy"
          className="delivery-boy"
        />
        <div className="step-route">
          <div></div>
        </div>
        <div className="process-div">
          {processes.map(({ id, step, cName }) => {
            return (
              <div className={`${cName} step`} key={id}>
                <div
                  className={`step-img ${
                    id - 1 === activeIndex ? "scaled" : ""
                  }`}
                >
                  <FaPencilRuler className="icon" />
                </div>
                <h5>
                  <sup>{id}</sup> {step}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
