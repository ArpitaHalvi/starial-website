import { useState } from "react";

export default function Clients() {
  const [openIdx, setOpenIdx] = useState(null);
  const clients = [
    {
      name: "Client 1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
    },
    {
      name: "Client 2",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
    },
    {
      name: "Client 3",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
    },
    {
      name: "Client 4",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
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
              <div>
                <img src="" alt="" />
                <h3> {c.name} </h3>
              </div>
              <div className="accordian">
                <p>{c.review}</p>
              </div>
              <div className={`full-review ${openIdx === idx ? "open" : ""}`}>
                <p> {c.review} </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
