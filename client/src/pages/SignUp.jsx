import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

const initialData = {
  fullname: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const [user, setUser] = useState(initialData);
  const [openModal, setOpenModal] = useState(false);
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5002/api/auth/signup", user, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log("Response: ");
          storeTokenInLS(res.data.token);
          setUser(initialData);
          toast.success("Successfully signed up!", { onClose: navigate("/") });
        })
        .catch((e) => {
          console.log("Error", e.response.data.extraDetails);
          toast.error("Error while creating account.");
        });
    } catch (e) {
      toast.error("Error while signing up!");
      console.error("Error: ", e);
    }
  };
  useEffect(() => {
    if (openModal) {
      const timer = setTimeout(() => {
        setOpenModal(false);
      }, 3000);
      return () => clearInterval(timer);
    }
  });
  return (
    <section className="signup-section">
      <div></div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            value={user.fullname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">SIGN UP</button>
        <div className="already-acc">
          <p>
            Already have an account?
            <NavLink to="/login">
              Login <BiLogIn />
            </NavLink>
          </p>
        </div>
      </form>
    </section>
  );
}
