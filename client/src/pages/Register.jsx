import { useState } from "react";
import StatusModal from "../modals/StatusModal";
import axios from "axios";

const initialData = {
  fullname: "",
  phoneNumber: "",
  address: "",
  city: "",
  zipcode: "",
};

export default function Register() {
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
        .post("http://localhost:5002/api/auth/register", { user })
        .then((res) => {
          setSuccess(res.data.message);
          console.log("Successfully signed up!");
        })
        .catch((e) => {
          setError(e.message);
          console.error("Error while creating account.");
        });
    } catch (e) {
      setError(e.message);
      console.error("Error: ", e);
    }
  };
  return (
    <section className="register-section">
      <StatusModal
        msg={error ? error : success}
        statusType={error ? "error" : "success"}
        onClose={() => setOpenModal(false)}
        isOpen={openModal}
      />
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <div>
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Your fullname"
              value={user.fullname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="phNo">Phone Number</label>
            <input
              type="text"
              id="phNo"
              name="phoneNumber"
              placeholder="Your phone number"
              value={user.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="addr">Address</label>
            <input
              type="text"
              placeholder="Your address"
              id="addr"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Your city"
              value={user.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="zipcode">Zipcode</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="Zipcode"
              value={user.zipcode}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  );
}
