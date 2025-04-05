import { useState } from "react";

export default function Clients() {
  const [openIdx, setOpenIdx] = useState(null);
  const clients = [
    {
      name: "Radhika Book Palace",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743863194/client-1_njy2gc.png",
    },
    {
      name: "Children Book House",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743863194/client-2_ekg3yb.png",
    },
    {
      name: "Novelty Uniforms",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      // img: "client-2.png",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688308/Rectangle_94_1_mppxvb.png",
    },
    {
      name: "Singhai Paper Mart",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "client-1.png",
    },
  ];
  return (
    <section className="clients-section">
      <h2>Our Clients</h2>
      <div className="clients">
        {clients.map((c, idx) => {
          return (
            <div
              className="client"
              key={idx}
              onMouseEnter={() => setOpenIdx(idx)}
              onMouseLeave={() => setOpenIdx(null)}
            >
              <img src={c.img} alt="Client Images" loading="lazy" />
              <div className={`accordian ${openIdx === idx ? "open" : ""}`}>
                <h5>{c.name}</h5>
                <p> {c.review} </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
