import { Link } from "react-router-dom";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

export default function AboutPage() {
  const images = [
    "/glimpse2.jpg",
    "work1.jpg",
    "work8.jpg",
    "work14.jpg",
    "work2.jpg",
    "work11.jpg",
    "work3.jpg",
    "work15.jpg",
    "work5.jpg",
    "work10.jpg",
    "work13.jpg",
    "work16.jpg",
  ];
  const teamMembers = [
    { name: "Rahul Rai", img: "rahulSir2.jpg", designation: "CEO" },
    { name: "Shubham Singh", img: "appDev2.jpg", designation: "CTO" },
    { name: "Deeksha Sen", img: "dkmaam2.jpg", designation: "Manager" },
    {
      name: "Anusha Pandey",
      img: "anushaMaam2.jpg",
      designation: "Human Resources",
    },
    {
      name: "Shruti Khatri",
      img: "shruti.png",
      designation: "Social Media Manager",
    },
    {
      name: "Resham Katariya",
      img: "",
      designation: "Human Resources",
    },
    {
      name: "Mayank",
      img: "",
      designation: "Graphic Designer",
    },
    {
      name: "Arpita Halvi",
      img: "",
      designation: "Web Developer",
    },
  ];
  const about = [
    {
      title: "What is Starial?",
      text: "Your go-to destination for fast and reliable stationery delivery! We are here to revolutionize the way you get your stationery essentials, making sure you never have to wait for what you need.",
      img: "about1.jpg",
    },
    {
      title: "Who Are We?",
      text: "We are a passionate team of innovators, problem-solvers, and stationery enthusiasts dedicated to bringing convenience to your doorstep.",
      img: "team.jpg",
    },
    {
      title: "What we do?",
      text: "At Starial, we provide an on-demand stationery delivery service, ensuring you get your supplies within just one hour. Whether you need notebooks, pens, art supplies, office essentials, or school materials, we’ve got you covered.",
      img: "delivery.jpg",
    },
  ];
  const workculture = [
    "starial4.jpg",
    "starial2.jpg",
    "starial3.jpg",
    "starial1.jpg",
  ];
  // const images = ["","",""];
  return (
    <section className="about-page">
      <div className="about-landing">
        {/* <img src="about-landing.png" alt="" /> */}
        <div className="landing-image">
          <div>
            <h2>Where creativity meets functionality</h2>
            <p>
              At Starial, we take pride in our commitment to speed, reliability,
              and quality. Our team works tirelessly to source the best
              stationery products and optimize our delivery network, ensuring
              that every order reaches you in record time.
            </p>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="about-members">
          <h2>Where creativity meets functionality</h2>
          <p>
            At Starial, we take pride in our commitment to speed, reliability,
            and quality. Our team works tirelessly to source the best stationery
            products and optimize our delivery network, ensuring that every
            order reaches you in record time.
          </p>
          <div className="work-culture">
            {workculture.map((w, idx) => {
              return (
                <div key={idx}>
                  <img src={w} alt="" />
                </div>
              );
            })}
          </div>
          <div className="about-starial">
            {about.map(({ title, text, img }, index) => {
              return (
                <div className="about" key={index}>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <img src={img} alt="Pictures about us" />
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
                    <div>
                      <h5>{member.name}</h5>
                      <h6>{member.designation}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="interns-section">
            <div className="intern-intro">
              <h3>Our Interns:</h3>
              <h4>The Heart of Innovation at Starial</h4>
              <p>
                At Starial, we believe that fresh perspectives and innovative
                ideas are the driving force behind growth. Our interns play a
                crucial role in shaping the future of our platform, bringing
                creativity, dedication, and a passion for storytelling.
              </p>
            </div>
            <div className="intern-decor">
              <div className="single-pic">
                <img src="stationery2.png" alt="" />
              </div>
              <div>
                <img src="stationery1.png" alt="" />
                <img src="stationery1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="some-glimpes">
          <h3>A Peek into our world!</h3>
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
      <div className="download-now">
        <div className="download">
          <h3>Download the app now!</h3>
          <div className="download-links">
            <Link to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1">
              <IoLogoGooglePlaystore className="link-icon" /> Play Store
            </Link>
            <Link to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1">
              <FaApple className="link-icon" /> App Store
            </Link>
          </div>
          <div className="left-div">
            <img src="click1.png" alt="" className="img-2" />
            {/* <img src="rich-click-me.png" alt="" className="img-1" /> */}
          </div>
          <div className="right-div">
            <img src="click2.png" alt="" className="img-1" />
            {/* <img src="click-me.png" alt="" className="img-2" /> */}
          </div>
        </div>
        <div className="starial-app">
          <img src="starial.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
