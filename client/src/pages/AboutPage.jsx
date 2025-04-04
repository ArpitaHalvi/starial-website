import { Link } from "react-router-dom";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
// import { useEffect, useState } from "react";

export default function AboutPage() {
  // const internImages1 = [
  //   "stationery4.png",
  //   "stationery5.png",
  //   "stationery6.png",
  // ];
  // const internImages2 = [
  //   "stationery1.png",
  //   "stationery2.png",
  //   "stationery3.png",
  // ];
  // const internImages3 = [
  //   "stationery7.png",
  //   "stationery8.png",
  //   "stationery9.png",
  // ];
  // const [image1, setImage1] = useState(internImages1[0]);
  // const [image2, setImage2] = useState(internImages2[0]);
  // const [image3, setImage3] = useState(internImages3[0]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [fade, setFade] = useState(true);
  const images = [
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743690953/glimpse2_g4rket.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687427/work1-1_ohncui.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687462/work8_fgzzxn.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687514/work14_dnmsly.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687494/work4-1_ayt8sj.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687421/work2-1_mqo9le.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687490/work12-1_bb7p7b.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687511/work3_woje1c.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687506/work19-1_nm4aoa.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687505/work5_cfbc5e.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687441/work10_ws5eg7.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687454/work13-1_azyu3y.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687489/work16_im5hx3.jpg",
  ];
  const teamMembers = [
    {
      name: "Rahul Rai",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687045/rahulSir2_pyq8mx.jpg",
      designation: "Founder & CEO",
    },
    {
      name: "Shubham Singh",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687039/appDev2_lakx8t.jpg",
      designation: "CTO",
    },
    {
      name: "Deeksha Sen",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743708362/deeksha_kvfowm.jpg",
      designation: "Manager",
    },
    {
      name: "Anusha Pandey",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687039/anushaMaam2_b8tee9.jpg",
      designation: "Talent Acquisition Manager",
    },
    {
      name: "Shruti Khatri",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687050/shruti_b8detu.jpg",
      designation: "Social Media Manager",
    },
    {
      name: "Resham Katariya",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743708510/resham2_u9gyeh.jpg",
      designation: "Human Resources",
    },
    {
      name: "Mayank Meshram",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743708384/mayank2_txndx3.jpg",
      designation: "Graphic Designer",
    },
    {
      name: "Arpita Halvi",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743708382/arpita2_pbphhi.jpg",
      designation: "Web Developer",
    },
  ];
  const about = [
    {
      title: "What is Starial?",
      text: "Your go-to destination for fast and reliable stationery delivery! We are here to revolutionize the way you get your stationery essentials, making sure you never have to wait for what you need.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687785/about1_m6mygv.jpg",
    },
    {
      title: "Who Are We?",
      text: "We are a passionate team of innovators, problem-solvers, and stationery enthusiasts dedicated to bringing convenience to your doorstep.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687791/team_bejk64.jpg",
    },
    {
      title: "What we do?",
      text: "At Starial, we provide an on-demand stationery delivery service, ensuring you get your supplies within just one hour. Whether you need notebooks, pens, art supplies, office essentials, or school materials, we’ve got you covered.",
      img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687785/delivery_pblvqr.jpg",
    },
  ];
  const workculture = [
    // "starial4.jpg",
    // "starial2.jpg",
    // "starial3.jpg",
    // "work7.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687669/starial4_rqnxzy.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687665/starial2_q4se9w.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687668/starial3_svrs1o.jpg",
    "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687672/work7_zm4qus.jpg",
  ];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFade(false);
  //     setTimeout(() => {
  //       setCurrentIndex((prevIdx) => (prevIdx + 1) % internImages1.length);
  //       setFade(true);
  //     }, 500);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFade(false);
  //     setTimeout(() => {
  //       setCurrentIndex((prevIdx) => (prevIdx + 1) % internImages2.length);
  //       setFade(true);
  //     }, 500);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFade(false);
  //     setTimeout(() => {
  //       setCurrentIndex((prevIdx) => (prevIdx + 1) % internImages3.length);
  //       setFade(true);
  //     }, 500);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <section className="about-page">
      <div className="about-landing">
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
                  <img
                    src={w}
                    alt="Images that depicts creativity"
                    loading="lazy"
                  />
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
                  <img src={img} alt="Pictures about us" loading="lazy" />
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
          {/* <div className="interns-section">
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
                <img
                  src={internImages1[currentIndex]}
                  alt="Intern Images"
                  className={`${fade ? "fade-in" : "fade-out"}`}
                />
              </div>
              <div>
                <img
                  src={internImages2[currentIndex]}
                  alt="Intern Images"
                  className={`${fade ? "fade-in" : "fade-out"}`}
                />
                <img
                  src={internImages3[currentIndex]}
                  alt="Intern Images"
                  className={`${fade ? "fade-in" : "fade-out"}`}
                />
              </div>
            </div>
          </div> */}
        </div>
        <div className="some-glimpes">
          <h3>A Peek into our world!</h3>
          <div className="masonry-grid">
            {images.map((url, index) => {
              return (
                <div key={index} className="masonry-item">
                  <img src={url} alt="Image" loading="lazy" />
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
            {/* <img src="click1.png" alt="" className="img-2" /> */}
            {/* <img src="rich-click-me.png" alt="" className="img-1" /> */}
          </div>
          <div className="right-div">
            {/* <img src="click2.png" alt="" className="img-1" /> */}
            {/* <img src="click-me.png" alt="" className="img-2" /> */}
          </div>
        </div>
        <div className="starial-app">
          {/* <img src="starial.jpg" alt="" /> */}
          <img
            src="https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687822/starial_ewf2vu.jpg"
            alt="Starial Brochure"
          />
        </div>
      </div>
    </section>
  );
}
