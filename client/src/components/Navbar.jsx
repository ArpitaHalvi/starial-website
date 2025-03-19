import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="head-section">
      <div className="logo">
        <NavLink to="/">
          <img src="/starial-black-logo.png" alt="Starial LOGO" />
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
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "a")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "a")}
            >
              Contact Us
            </NavLink>
          </li>
          {/* <li> */}
          <NavLink to="/signup" className="register signup">
            Sign Up
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
