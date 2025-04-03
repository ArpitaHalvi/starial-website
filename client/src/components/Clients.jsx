import { useState } from "react";

export default function Clients() {
  const [openIdx, setOpenIdx] = useState(null);
  const clients = [
    {
      name: "Client 1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      // img: "client1.png",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688313/Rectangle_94_iv69t3.png",
    },
    {
      name: "Client 2",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688308/Rectangle_94_1_mppxvb.png",
    },
    {
      name: "Client 3",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "client3.png",
    },
    {
      name: "Client 4",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "client4.png",
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
              <img src={c.img} alt="" />
              <div className={`accordian ${openIdx === idx ? "open" : ""}`}>
                <p> {c.review} </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
