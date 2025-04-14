import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    e.preventDefault();
    if (
      user.email === import.meta.env.VITE_LOGIN_EMAIL &&
      user.password === import.meta.env.VITE_LOGIN_PASSWORD
    ) {
      localStorage.setItem("login-token", "shdsvdvreer45343vdfvdv");
      toast.success("Logged in successfully!", {
        onClose: navigate("/careers"),
      });
    } else {
      toast.error("Unable to login!");
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
        <button type="submit">LOGIN</button>
      </form>
    </section>
  );
}
