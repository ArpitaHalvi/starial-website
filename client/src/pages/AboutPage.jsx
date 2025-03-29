import { useEffect, useState } from "react";
// import Masonry from "react-masonry-css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  // const membersName = [
  //   "Rahul Rai - CEO",
  //   "Shubham Singh - CTO",
  //   "Deeksha Sen - Manager",
  //   "Shruti Khatri - Social Media Manager",
  //   "Anusha Pandey - People Operations",
  // ];
  const images = [
    "/glimpse2.jpg",
    "work1.jpg",
    "work8.jpg",
    "work17.jpg",
    "work18.jpg",
    "work3.jpg",
    "work5.jpg",
    "work19.jpg",
    "work10.jpg",
    "work13.jpg",
    "work16.jpg",
  ];
  // const breakPoints = {
  //   default: 3,
  //   1300: 2,
  //   900: 1,
  // };
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true,
  // };
  const teamMembers = [
    { name: "Rahul Rai", img: "", designation: "CEO" },
    { name: "Shubham Singh", img: "", designation: "CTO" },
    { name: "Deeksha Sen", img: "deekshaMaam.jpg", designation: "Manager" },
    {
      name: "Shruti Khatri",
      img: "shruti.png",
      designation: "Social Media Manager",
    },
    {
      name: "Anusha Pandey",
      img: "anushaMaam2.jpg",
      designation: "People Relations",
    },
  ];
  const about = [
    {
      title: "What is Starial?",
      text: "Your go-to destination for fast and reliable stationery delivery! We are here to revolutionize the way you get your stationery essentials, making sure you never have to wait for what you need.",
      img: "",
    },
    {
      title: "Who Are We?",
      text: "We are a passionate team of innovators, problem-solvers, and stationery enthusiasts dedicated to bringing convenience to your doorstep.",
      img: "",
    },
    {
      title: "What we do?",
      text: "At Starial, we provide an on-demand stationery delivery service, ensuring you get your supplies within just one hour. Whether you need notebooks, pens, art supplies, office essentials, or school materials, we’ve got you covered.",
      img: "",
    },
  ];
  return (
    <section className="about-page">
      <div className="about-us">
        <div className="about-members">
          <h2>Where creativity meets functionality</h2>
          <p>
            At Starial, we take pride in our commitment to speed, reliability,
            and quality. Our team works tirelessly to source the best stationery
            products and optimize our delivery network, ensuring that every
            order reaches you in record time.
          </p>
          {/* <div className="animate-text">
            <TypeWriter words={membersName} />
          </div> */}
          <div className="work-culture">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="about-starial">
            {about.map(({ title, text }, index) => {
              return (
                <div className="about" key={index}>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <img src="" alt="" />
                </div>
              );
            })}
          </div>
          <div className="team">
            <h2>Meet Our Team</h2>
            <div>
              {teamMembers.map((member, index) => {
                return (
                  <div
                    className="member"
                    key={index}
                    style={{
                      backgroundImage: `url("${member.img}") `,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    {/* <img src={member.img} alt="" /> */}
                    <div>
                      <h5>{member.name}</h5>
                      <h6>{member.designation}</h6>
                    </div>
                  </div>
                );
              })}
              {/* <Slider {...settings}> */}
              {/* {teamMembers.map((member, index) => {
                return (
                  <div
                    className="member"
                    key={index}
                    style={{ background: `url("${member.img}")` }}
                  >
                    <div>
                      <h5>{member.name}</h5>
                      <h6>{member.designation}</h6>
                    </div>
                  </div>
                );
              })} */}
              {/* </Slider> */}
            </div>
          </div>
          {/* <div className="team-members">
            <img src="glimpse5-final.jpg" alt="" />
          </div> */}
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
