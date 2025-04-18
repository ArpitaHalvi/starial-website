import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("http://localhost:4002/api/applicants/", {
          method: "GET",
        });
        const res_data = await res.json();
        console.log("Response data from applicats controller: ", res_data);
        if (res.ok) {
          setApplications(res_data);
        } else {
          toast.error(res_data && res_data.message);
        }
      } catch (e) {
        toast.error(e.message);
      }
    };
    fetchApplications();
  }, []);

  return (
    <section className="applications-section">
      <h3>Applications</h3>
      <div className="applications">
        <table>
          <thead>
            <tr>
              <th>Fullname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Resume</th>
              <th>Portfolio</th>
              <th>Applied For</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => {
              const {
                _id,
                fullname,
                email,
                phone,
                resumeLink,
                portfolio,
                role,
              } = app;
              return (
                <tr key={_id}>
                  <td>{fullname}</td>
                  <td className="link">
                    <Link to={`mailto:${email}`}>{email}</Link>
                  </td>
                  <td>{phone}</td>
                  <td className="link">
                    <Link to={resumeLink}>{fullname} Resume</Link>
                  </td>
                  <td className="link">
                    <Link to={portfolio}>{fullname} Portfolio</Link>
                  </td>
                  <td className="role">{role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
