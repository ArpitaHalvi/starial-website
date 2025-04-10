/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Clients() {
  // const [openIdx, setOpenIdx] = useState(null);
  const [index, setIndex] = useState(0);
  const clients = [
    {
      name: "Radhika Book Palace",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743863194/client-2_ekg3yb.png",
    },
    {
      name: "Children Book House",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743863194/client-1_njy2gc.png",
    },
    {
      name: "Novelty Dresses",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "novelty3.png",
    },
    {
      name: "Om Book",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743863194/client-1_njy2gc.png",
    },
    {
      name: "The Book House",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "book-house2.jpg",
    },
    {
      name: "Akash Pustak Sadan",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743863194/client-1_njy2gc.png",
    },
    // {
    //   name: "Singhai Paper Mart",
    //   review:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore alias, temporibus ipsa aperiam ex nobis quam dolor magni deserunt.",
    //   img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743863194/client-1_njy2gc.png",
    // },
  ];
  const ANIMATION_DURATION = 0.6;
  const DELAY_BETWEEN_CARDS = 500;
  const TOTAL_INTERVAL = ANIMATION_DURATION * 5 * 1000 + DELAY_BETWEEN_CARDS;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, TOTAL_INTERVAL);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="clients-section">
      <h2>Our Clients</h2>
      <div className="clients">
        {/* {clients.map((c, idx) => { */}
        {/* return ( */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
            className="motion-div"
          >
            <div className="client" key={index}>
              <motion.img
                src={clients[index].img}
                loading="lazy"
                alt="Client Images"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.3 + 0.2 }}
                className="client-img"
              />
              <motion.div
                className="review"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.3 + 0.2 }}
              >
                <h5>{clients[index].name}</h5>
                <p> {clients[index].review} </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* ); */}
        {/* })} */}
      </div>
    </section>
  );
}

// <div
//   className="client"
//   key={idx}
//   onMouseEnter={() => setOpenIdx(idx)}
//   onMouseLeave={() => setOpenIdx(null)}
// >
//   <img src={c.img} alt="Client Images" loading="lazy" />
//   <div className={`accordian ${openIdx === idx ? "open" : ""}`}>
//     <h5>{c.name}</h5>
//     <p> {c.review} </p>
//   </div>
// </div>
