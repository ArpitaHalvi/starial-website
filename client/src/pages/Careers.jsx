import { NavLink } from "react-router-dom";
import { MdWorkspacePremium } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

export default function Careers() {
  const openRoles = [
    { title: "Social Media Manager" },
    { title: "Graphic Designer" },
    { title: "Web Developer" },
    { title: "Product Manager" },
  ];
  const stats = [
    { title: "Team Members", count: "1k" },
    { title: "Happy Clients", count: 10 },
    { title: "Interns Trained", count: 10 },
  ];
  const perks = [
    "Certificate of Completion",
    "Letter of Recommendation (Based on Performance)",
    "Real-World Exprience",
    "Skill Development",
    "Collaborative Team Culture",
  ];
  const faqs = [
    { ques: "Are the Internships paid?", ans: "" },
    { ques: "Is the internship remote or in-office?", ans: "" },
    { ques: "What's the duration of the internship?", ans: "" },
    { ques: "Do I need prior experience to apply?", ans: "" },
  ];
  return (
    <section className="careers-page">
      <div className="career-intro">
        <h1>Grow with us - Explore Opportunities to Learn, Build & Create.</h1>
        <img src="/careers.jpg" alt="" />
      </div>
      <div className="about-company">
        <div className="about">
          <p>
            At Starial, we believe in giving fresh minds a platform to shine.
            Whether you're a student looking for hands-on experience or a
            creative thinker wanting to leave a mark - we have a place for you.
          </p>
          <NavLink to="/about">Know More</NavLink>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="stats-section">
        <h3>Our Journey in Figures</h3>
        <div className="stats">
          {stats.map((stats, index) => {
            return (
              <div className="stat" key={index}>
                <h4>{stats.count}</h4>
                <p>{stats.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="open-roles">
        <h3>We're Hiring!</h3>
        <div className="roles">
          {openRoles.map((roles, index) => {
            return (
              <div className="role" key={index}>
                <img src="" alt="" />
                {/* <div> */}
                <h4>{roles.title}</h4>
                <NavLink to="/careers/apply-now">Apply Now</NavLink>
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
      <div className="perks-faqs">
        <div className="perks">
          <h3>Perks & Benefits</h3>
          <ul>
            {perks.map((perk, index) => {
              return (
                <li className="perk" key={index}>
                  <MdWorkspacePremium /> {perk}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="faqs">
          <h3>FAQs</h3>
          <div className="faq">
            {faqs.map((faq, index) => {
              return (
                <p key={index}>
                  <FaChevronDown /> {faq.ques}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
