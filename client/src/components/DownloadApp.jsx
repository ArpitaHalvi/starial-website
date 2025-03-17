import { FaApple, FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function DownloadApp() {
  return (
    <div className="download-app">
      {/* <div className="app-info"> */}
      <div className="about-app">
        <h4>Download Our App</h4>
        <p>Get Book, Stationery and Uniform at your doorstep.</p>
        <div className="download-btns">
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
      <div className="app-decor">
        <img src="/starial-services.png" alt="Starial app" />
      </div>
    </div>
    //</div>
  );
}
