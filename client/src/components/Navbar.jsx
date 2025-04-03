import { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <header className="head-section">
      <div className="logo">
        <NavLink to="/">
          {/* <img src="/starial-black-logo.png" alt="Starial LOGO" /> */}
          <img
            src="https://res.cloudinary.com/dgkv2gft7/image/upload/v1743688541/starial-black-logo_u6xvbw.png"
            alt="Starial LOGO"
          />
        </NavLink>
      </div>
      <nav className="navbar">
        <ul className={`links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "a")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? "active" : "a")}
            >
              Categories
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "a")}
            >
              Products
            </NavLink>
          </li> */}
          {/* <li> */}
          <NavLink to="/contact" className="contact-us">
            Contact Us
          </NavLink>
          {/* </li> */}
        </ul>
        <div className="menu" onClick={toggleMenu}>
          {isOpen ? (
            <CgClose className="menu-icon" />
          ) : (
            <CiMenuFries className="menu-icon" />
          )}
        </div>
      </nav>
    </header>
  );
}
