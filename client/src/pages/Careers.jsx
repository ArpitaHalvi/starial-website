import { NavLink } from "react-router-dom";
import { MdDelete, MdWorkspacePremium } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "../modals/Modal";
import AddRoles from "../components/AddRoles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { toast } from "react-toastify";
import ConfirmModal from "../modals/ConfirmModal";

const stats = [
  { title: "Team Members", count: "25+" },
  { title: "Happy Clients", count: "10+" },
  { title: "Interns Trained", count: "170+" },
];
const perks = [
  "Certificate of Completion",
  "Letter of Recommendation (Based on Performance)",
  "Real-World Exprience",
  "Skill Development",
  "Collaborative Team Culture",
];
const faqs = [
  {
    ques: "Are the Internships paid?",
    ans: "Yes, the internships are paid. Interns receive compensationfor their work during the internship period.",
  },
  {
    ques: "Is the internship remote or in-office?",
    ans: "All roles are currently in office unless specified otherwise.",
  },
  {
    ques: "What's the duration of the internship?",
    ans: "Most internships last 2 to 3 months, depending on the role and your availability.",
  },
  {
    ques: " Can I get a Letter of Recommendation?",
    ans: " Yes! Based on your dedication and performance, we provide a personalized LOR.",
  },
  {
    ques: "Do I need prior experience to apply?",
    ans: "Yes, basic knowledge is required, but prior work experience is not necessary.",
    // ans: "Not at all! We welcome passionate learners, even if you're just starting out.",
  },
];

export default function Careers() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openRoles, setOpenRoles] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const handleClick = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 750,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const openConfirmModal = (id) => {
    setSelectedRoleId(id);
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setSelectedRoleId(null);
    setIsConfirmModalOpen(false);
  };

  const confirmDelete = async () => {
    if (selectedRoleId) {
      await deleteRole(selectedRoleId);
    }
    closeConfirmModal();
  };
  useEffect(() => {
    const checkAdmin = () => {
      const token = localStorage.getItem("auth-token");
      if (token) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, []);
  const fetchRoles = async () => {
    try {
      const res = await fetch("http://localhost:4002/api/roles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res) {
        const res_data = await res.json();
        console.log("Roles Fetched.", res_data);
        setOpenRoles(res_data);
      } else {
        console.error("Unable to load roles.");
        toast.error("Unable to load roles.");
      }
    } catch (e) {
      console.error("Error while loading roles.", e);
      toast.error("Unable to load roles.");
    }
  };
  useEffect(() => {
    fetchRoles();
  }, []);
  const deleteRole = async (id) => {
    try {
      const res = await fetch(`http://localhost:4002/api/roles/${id}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res_data = await res.json();
      if (res.ok) {
        fetchRoles();
        toast.success("Role deleted Successfully!");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (e) {
      console.error(e);
      toast.error("Unable to delete role.");
    }
  };
  return (
    <section className="careers-page">
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <AddRoles roles={openRoles} setRole={setOpenRoles} />
        </Modal>
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          isClose={closeConfirmModal}
          onConfirm={confirmDelete}
        />
      )}
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
          <img src="fvdf" alt="" />
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
          {openRoles.length !== 0 ? (
            <Slider {...settings}>
              {openRoles.map((roles) => {
                const { _id, imgUrl, title } = roles;
                return (
                  <div className="role" key={_id}>
                    {isAdmin && (
                      <button
                        className="delete-btn"
                        onClick={() => openConfirmModal(_id)}
                      >
                        <MdDelete className="delete-icon" />
                      </button>
                    )}
                    <img src={imgUrl} alt="Role Image" />
                    <h4>{title}</h4>
                    <NavLink to="/careers/apply-now">Apply Now</NavLink>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <p>No hirings posted.</p>
          )}
        </div>
        {isAdmin && (
          <button onClick={() => setIsModalOpen(true)} className="add-roles">
            Add Roles
          </button>
        )}
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
                <div key={index}>
                  <p
                    className={`ques ${openIndex === index ? "active" : ""}`}
                    onClick={() => handleClick(index)}
                  >
                    <FaChevronDown className="down-arrow" /> {faq.ques}
                  </p>
                  <div
                    className={`answer-wrapper ${
                      openIndex === index ? "open" : ""
                    }`}
                  >
                    <p className="ans">{faq.ans}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
