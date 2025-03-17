import { IoArrowForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <section className="login-section">
      <form className="login-form">
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
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
