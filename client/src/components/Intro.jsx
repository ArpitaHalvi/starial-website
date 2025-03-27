import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  const [index, setIndex] = useState(0);
  const words = ["Books", "Stationery", "Uniforms", "Books"];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="intro-part">
      <div className="intro">
        <div className="intro-heading" data-aos="slide-right">
          <div>
            <h2>Get</h2>
            <div className="word-slider">
              {words.map((word, idx) => {
                return (
                  <h1
                    key={idx}
                    style={{ transform: `translateY(-${index * 100}%)` }}
                  >
                    {word}
                  </h1>
                );
              })}
            </div>
            <h2>at your doorstep.</h2>
          </div>
          <p>Starial delivers your favorite stationery within an hour</p>
          <Link to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1">
            Download App
          </Link>
        </div>
      </div>
      <div className="intro-img">
        <img src="starial-services.png" alt="" />
      </div>
    </section>
  );
}
