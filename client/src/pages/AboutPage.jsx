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
    "Anusha - HR",
    "Deeksha Sen - Manager",
    "Ashish - Graphic Designer",
  ];
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
  ];
  const breakPoints = {
    default: 3,
    1100: 2,
    768: 1,
  };
  return (
    <section className="about-page">
      <div className="about-us">
        <div className="about-members">
          <h3>Where creativity meets functionality - Introducing Our Team!</h3>
          <div className="animate-text">
            <TypeWriter words={membersName} />
            {/* <h4>Team Member</h4> */}
          </div>
          <div className="team-members">
            <img src="team.jpg" alt="" />
          </div>
        </div>
        <div className="some-glimpes">
          <h3>A Peek into our world!</h3>
          <Masonry
            breakpointCols={breakPoints}
            columnClassName="masonry-col"
            className="masonry-grid"
          >
            {images.map((url, index) => {
              return (
                <div>
                  <img src={url} alt="Image" key={index} />
                </div>
              );
            })}
          </Masonry>
        </div>
      </div>
    </section>
  );
}
