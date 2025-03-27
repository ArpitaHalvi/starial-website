import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

const TypeWriter = ({ words, speed = 100, delay = 1000 }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const word = words[index];
    if (!isDeleting && text === word) {
      setTimeout(() => setIsDeleting(true), delay);
      return;
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }
    const typing = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? word.slice(0, prev.length - 1)
            : word.slice(0, prev.length + 1)
        );
      },
      isDeleting ? speed / 4 : speed
    );
    return () => clearTimeout(typing);
  }, [text, isDeleting, index, words, speed, delay]);
  return <h4>{text}</h4>;
};

export default function AboutPage() {
  const membersName = [
    "Rahul Rai - CEO",
    "Shubham Singh - CTO",
    "Deeksha Sen - Manager",
    "Shruti Khatri - Social Media Manager",
    "Anusha Pandey - People Operations",
  ];
  const images = [
    "/glimpse5.jpg",
    "/glimpse2.jpg",
    "/glimpse4.jpg",
    "/glimpse3.jpg",
    "/glimpse1.jpg",
  ];
  // const breakPoints = {
  //   default: 3,
  //   1300: 2,
  //   900: 1,
  // };
  const teamMembers = [
    { name: "Rahul Rai (CEO)", img: "" },
    { name: "Shubham Singh (CTO)", img: "" },
    { name: "Deeksha Sen (Manager)", img: "deekshaMaam.jpg" },
    { name: "Shruti Khatri (Social Media Manager)", img: "shruti.jpg" },
    { name: "Anusha Pandey (Anusha Pandey)", img: "" },
  ];
  return (
    <section className="about-page">
      <div className="about-us">
        <div className="about-members">
          <h2>Where creativity meets functionality - Introducing Our Team!</h2>
          <div className="animate-text">
            <TypeWriter words={membersName} />
          </div>
          <div className="team">
            {teamMembers.map((member, index) => {
              return (
                <div className="member" key={index}>
                  <img src={member.img} alt="Team Member" />
                  <h6>{member.name}</h6>
                </div>
              );
            })}
          </div>
          <div className="team-members">
            <img src="glimpse5-final.jpg" alt="" />
          </div>
        </div>
        <div className="some-glimpes">
          <h3>A Peek into our world!</h3>
          {/* <Masonry
            breakpointCols={breakPoints}
            columnClassName="masonry-col"
            className="masonry-grid"
          >
            {images.map((url, index) => {
              return (
                <div key={index} className="masonry-item">
                  <img src={url} alt="Image" />
                </div>
              );
            })}
          </Masonry> */}
          <div className="masonry-grid">
            {images.map((url, index) => {
              return (
                <div key={index} className="masonry-item">
                  <img src={url} alt="Image" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
