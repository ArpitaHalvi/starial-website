import { Outlet, NavLink } from "react-router-dom";

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
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
        {/* <div>
          <img src="/starial-white-logo.png" alt="" />
        </div> */}
      </aside>
      <div className="collections">
        <Outlet />
      </div>
    </section>
  );
}
