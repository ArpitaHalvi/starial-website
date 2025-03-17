import { useEffect, useState } from "react";
import StatusModal from "../modals/StatusModal";
import axios from "axios";

const initialData = {
  fullname: "",
  email: "",
  phoneNumber: "",
  message: "",
};
export default function ContactUs() {
  const [contactData, setContactData] = useState(initialData);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5002/api/contact", contactData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          console.log("Message sent successfully.");
          setSuccess("Message sent successfully.");
          setOpenModal(true);
          setContactData(initialData);
        })
        .catch((e) => {
          setError(e.extraDetails ? e.extraDetails : e.message);
          setOpenModal(true);
          console.error("Error while sending message.", e);
        });
    } catch (e) {
      console.error("Error: ", e);
      setOpenModal(true);
      setError(e.message);
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
    <section className="contact-section">
      <StatusModal
        msg={error ? error : success}
        statusType={error ? "error" : "success"}
        onClose={() => setOpenModal(false)}
        isOpen={openModal}
      />
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Contact Us</h3>
        <input
          type="text"
          name="fullname"
          placeholder="Your fullname"
          value={contactData.fullname}
          onChange={handleChange}
        />
        <div>
          <input
            type="text"
            name="email"
            placeholder="Your email"
            value={contactData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Your phone number"
            value={contactData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          className="msg"
          placeholder="Your Message"
          value={contactData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-decor">
        <img src="/contact-us.jpg" alt="" />
      </div>
    </section>
  );
}
