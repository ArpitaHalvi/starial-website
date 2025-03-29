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
      setError(e.message);
      setOpenModal(true);
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
      <div className="contact-decor">
        <img src="/contact-bg.png" alt="" />
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <h3>Get in touch</h3>
          <input
            type="text"
            name="fullname"
            placeholder="Fullname"
            value={contactData.fullname}
            onChange={handleChange}
          />
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone"
              value={contactData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            className="msg"
            placeholder="Message"
            value={contactData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
