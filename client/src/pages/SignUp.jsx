import { useState } from "react";
import StatusModal from "../modals/StatusModal";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

const initialData = {
  fullname: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const [user, setUser] = useState(initialData);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState("");
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
        .then(() => {
          setSuccess("Successfully signed up!");
          setOpenModal(true);
          setUser(initialData);
          console.log("Successfully signed up!");
        })
        .catch((e) => {
          console.log("Error", e.response.data.extraDetails);
          setError(
            e.response.data.extraDetails
              ? e.response.data.extraDetails
              : e.response.data.message
          );
          setOpenModal(true);
          console.error("Error while creating account.");
        });
    } catch (e) {
      setError(e.message);
      setOpenModal(true);
      console.error("Error: ", e);
    }
  };
  return (
    <section className="signup-section">
      <StatusModal
        msg={error ? error : success}
        statusType={error ? "error" : "success"}
        onClose={() => setOpenModal(false)}
        isOpen={openModal}
      />
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
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
