import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../store/auth";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
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
        .then((res) => {
          storeTokenInLS(res.data.token);
          console.log("Response: ", res);
          setUser({ email: "", password: "" });
          toast.success(res.data.message, {
            onClose: navigate("/categories"),
          });
        })
        .catch((e) => {
          toast.error(
            e.response.data.extraDetails
              ? e.response.data.extraDetails
              : e.response.data.message
          );
          console.error(e);
        });
    } catch (e) {
      console.error("Error: ", e);
      toast.error("Error while loggin in.");
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
            required
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
            required
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
