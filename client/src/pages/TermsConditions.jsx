import { termsConditions } from "../TermsConditions";
import { Link } from "react-router-dom";

export default function TermsConditions() {
  return (
    <section className="terms-conditions">
      <h2>Terms & Conditions</h2>
      <h4>Last Updated - 07-06-2022</h4>
      <div className="terms">
        {termsConditions.map((terms, index) => {
          return (
            <div className="term">
              <h3>
                {index + 1}. {terms.title}
              </h3>
              {terms.caution && <p className="caution">{terms.caution}</p>}
              <p>{terms.desc}</p>
            </div>
          );
        })}
        <div className="term">
          <h3>23. Contact Us</h3>
          <p>
            Please send your feedback, comments, requests for technical support
            by email:
            <br />
            <br />
            <Link to="mailto:Starialofficial@gmail.com">
              Starialofficial@gmail.com
            </Link>
            .
            <br />
            <br />
            These Terms of Service were created for
            <span> </span>
            <Link to="https://www.starial.shop/">
              https://www.starial.shop/
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
