import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function DownloadApp() {
  const [isPhoneSelected, setIsPhoneSelected] = useState(false);
  const [isEmailSelected, setIsEmailSelected] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email) {
        await axios
          .post(
            "http://localhost:5002/api/download/using-email",
            { email },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(() => {
            toast.success(
              "Email sent successfully! Check your email for the link."
            );
          })
          .catch((e) => {
            console.error("Error: ", e);
            toast.error("Error while sending download link!");
          });
      }
      if (phoneNumber) {
        await axios
          .post(
            "http://localhost:5002/api/download/using-phone-number",
            { phoneNumber },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(() => {
            console.log("Message sent!");
            toast.success(
              "Message sent successfully! Check your whatsapp for the link."
            );
          })
          .catch((e) => {
            console.error("Error: ", e);
            toast.error("Error while sending download link!");
          });
      }
    } catch (e) {
      console.error("Error: ", e);
      toast.error("Error while sending download link!");
    }
  };
  return (
    <div className="download-app">
      <div className="about-app">
        <h4>Get the Best Stationery at your Fingertips</h4>
        <p>
          Enter your email or phone number, and we'll send you a link to explore
          our latest collections of premium stationery products.
        </p>
        <div className="download-options">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="radio"
              name="download-option"
              id="email"
              onChange={() => {
                setIsEmailSelected(true);
                setIsPhoneSelected(false);
              }}
              checked={isEmailSelected}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="radio"
              name="download-option"
              id="phoneNumber"
              onChange={() => {
                setIsPhoneSelected(true);
                setIsEmailSelected(false);
              }}
              checked={isPhoneSelected}
            />
          </div>
        </div>
        <div className="download-form">
          <form method="post" onSubmit={handleSubmit}>
            {isEmailSelected && (
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}
            {isPhoneSelected && (
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            )}
            <button type="submit">Send Link</button>
          </form>
        </div>
        <div className="download-btns">
          <h6>Download app from</h6>
          <div>
            <Link
              to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1"
              className="download-btn"
            >
              PlayStore <IoLogoGooglePlaystore className="store-icon" />
            </Link>
            <Link
              to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1"
              className="download-btn"
            >
              AppStore <FaApple className="store-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="app-decor">
        <img src="/starial-services.png" alt="Starial app" />
      </div>
    </div>
  );
}
