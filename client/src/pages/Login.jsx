import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios
        .post("http://localhost:5002/api/auth/login", user, {
          headers: { "Content-Type": "application/json" },
        })
        .then(() => {
          setUser({ email: "", password: "" });
          toast.success("Successfully Logged In!", {
            onClose: navigate("/categories"),
          });
        })
        .catch((e) => {
          console.log("Error", e.response.data.extraDetails);
          toast.error("Error while loggin in.");
          console.error(e);
        });
    } catch (e) {
      console.error("Error: ", e);
      toast.error(e.message);
    }
  };
  return (
    <section className="login-section">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button>LOGIN</button>
        <p>
          Don't have an account?
          <NavLink to="/signup">
            Sign Up <IoArrowForward />
          </NavLink>
        </p>
      </form>
    </section>
  );
}
