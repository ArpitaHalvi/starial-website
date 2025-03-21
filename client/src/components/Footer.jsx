import { BsLinkedin } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall, IoLogoGooglePlaystore } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  const links1 = [
    { title: "Products", url: "/products" },
    { title: "Terms & Conditions", url: "" },
    { title: "Shipping Policy", url: "" },
    { title: "About Us", url: "/about" },
  ];
  const links2 = [
    { title: "Category", url: "/categories" },
    { title: "Privacy", url: "" },
    { title: "Return Policy", url: "" },
    { title: "Contact Us", url: "/contact" },
  ];
  const socialLinks = [
    { url: "", icon: <FaXTwitter className="social-icon" />, color: "black" },
    {
      url: "https://www.linkedin.com/company/starial/?originalSubdomain=in",
      icon: <FaLinkedin className="social-icon" />,
      color: "#0A66C2",
    },
    {
      url: "https://www.instagram.com/starial_/?hl=en",
      icon: <FaInstagram className="social-icon" />,
      color: "#E4405F",
    },
  ];
  return (
    <footer className="footer-section">
      <div className="links-section">
        <div className="useful-links">
          <h4>Useful Links</h4>
          <div>
            <ul>
              {links1.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.url}> {link.title}</Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {links2.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.url}> {link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="social-links">
          <img src="/starial-white-logo.png" alt="LOGO" />
          <div className="socials">
            <h6>Follow Us</h6>
            <div className="links">
              {socialLinks.map((link, index) => {
                return (
                  <Link
                    to={link.url}
                    key={index}
                    style={{ "--accent-color": link.color }}
                  >
                    {link.icon}
                  </Link>
                );
              })}
            </div>
            <Link
              className="download-btn"
              to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1"
            >
              Download Now <IoLogoGooglePlaystore className="icon" />
            </Link>
          </div>
        </div>
        <div className="more-info">
          <ul>
            <li>
              <CiLocationOn className="location-icon" />
              <span>
                <span>Find Us</span>
                Plot No.93, JDA Scheme No. 5, Deendayal Chowk, Vijaynagar,
                Jabalpur - 482002, Madhya Pradesh , India
              </span>
            </li>
            <li>
              <IoCall className="connect-icon" />
              <span>
                <span>Call Us</span>
                <NavLink to="tel:+919329885817">+91 9329885817</NavLink>
              </span>
            </li>
            <li>
              <CgMail className="connect-icon" />
              <span>
                <span>Mail Us</span>
                <NavLink to="mailto:Starialofficial@gmail.com">
                  business@starial.in
                </NavLink>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; {year} All Rights Reserved. Starial Pvt. Ltd.</p>
    </footer>
  );
}
