import { Outlet, NavLink } from "react-router-dom";
import { FiFileText, FiLogOut } from "react-icons/fi";

export default function AdminPanel() {
  const links = [{ title: "Applications", link: "/admin-panel/applications" }];
  return (
    <section className="admin-panel">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.link}>
                  <FiFileText className="application-icon" /> {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <NavLink to="/logout" className="logout-btn">
          Logout
          <FiLogOut className="logout-icon" />
        </NavLink>
      </aside>
      <div className="collections">
        <Outlet />
      </div>
    </section>
  );
}
