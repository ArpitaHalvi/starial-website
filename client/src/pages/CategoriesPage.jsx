import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

const stationery = [
  { name: "Art & Craft", img: "stationery1.png" },
  { name: "Writing materials", img: "stationery2.png" },
  { name: "Fancy Stationaries", img: "stationery3.png" },
  { name: "Glue & Cutters", img: "stationery4.png" },
  { name: "Paper sheets", img: "stationery5.png" },
  { name: "Notebooks", img: "stationery6.png" },
  { name: "Geometry box & Pencil case", img: "stationery7.png" },
  { name: "Covers & Name slips", img: "stationery8.png" },
  { name: "Pens", img: "stationery9.png" },
];

const uniforms = [
  { name: "Aditya Convent School", img: "Stationery1.png" },
  { name: "Ajay Satya Prakash Public School", img: "Stationery1.png" },
  { name: "Angel's Nursery School", img: "Stationery1.png" },
  { name: "Army Public School - APS Jabalpur No. 1", img: "Stationery1.png" },
  { name: "Ashoka Hall School", img: "Stationery1.png" },
  { name: "Bachpan A Play School ", img: "Stationery1.png" },
  { name: "Belbaugh School", img: "Stationery1.png" },
  {
    name: "Billabong High International School (BHIS)",
    img: "Stationery1.png",
  },
  {
    name: "Christ Church Boys' Senior Secondary School",
    img: "Stationery1.png",
  },
  {
    name: "Christ Church Girls' Senior Secondary School",
    img: "Stationery1.png",
  },
  { name: "Cosmos Pre and Junior School", img: "Stationery1.png" },
  { name: "Delhi Public School (DPS Jabalpur)", img: "Stationery1.png" },
  { name: "Desilva Ratanshi Higher Secondary School", img: "Stationery1.png" },
  { name: "Dream India School", img: "Stationery1.png" },
  {
    name: "EuroKids Government Pt. LSJ Model School of Excellence",
    img: "Stationery1.png",
  },
  { name: "Gyan Ganga International School", img: "Stationery1.png" },
  { name: "Gyan Ganga Public School", img: "Stationery1.png" },
  { name: "Hello Kids - Rockstars", img: "Stationery1.png" },
  { name: "Ideal Play School", img: "Stationery1.png" },
];

const books = [
  { name: "SSC CHSL", img: "Stationery1.png" },
  { name: "SSC MTS", img: "Stationery1.png" },
  { name: "SSC GD", img: "Stationery1.png" },
  { name: "SSC Stenographer", img: "Stationery1.png" },
  { name: "RRB ALP", img: "Stationery1.png" },
  { name: "RRB/RRC Group D", img: "Stationery1.png" },
  { name: "Indian Army Exam", img: "Stationery1.png" },
  { name: "Indian Navy Exam", img: "Stationery1.png" },
  { name: "BSF Exam", img: "Stationery1.png" },
  { name: "CRPF Exam", img: "Stationery1.png" },
  { name: "SSB Exam", img: "Stationery1.png" },
  { name: "ITBP Exam", img: "Stationery1.png" },
  { name: "CISF Exam", img: "Stationery1.png" },
  { name: "Indian Coast Guard Exam", img: "Stationery1.png" },
  { name: "NDA Exam", img: "Stationery1.png" },
];

const categories = [
  { name: "Stationery", items: stationery },
  { name: "School Uniforms", items: uniforms },
  { name: "Competitive Exam Books", items: books },
];

export default function CategoriesPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchText, setSearchText] = useState("");
  const filteredCategories = categories.map((cate) => ({
    ...cate,
    items: cate.items.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    ),
  }));
  const filteredCount = filteredCategories.reduce(
    (count, cat) => count + cat.items.length,
    0
  );
  return (
    <section className="categories-page">
      {!isOpen && (
        <div className="menu" onClick={() => setIsOpen(true)}>
          <RiMenu2Fill className="menu-icon" />
        </div>
      )}
      <aside className={`side-bar ${isOpen && "open"}`}>
        <h2>CATEGORIES</h2>
        <div onClick={() => setIsOpen(false)}>
          {isOpen && <IoClose className="close-icon" />}
        </div>
        <div className="cate-gories">
          <div className="cat stationery">
            <h5>Stationery</h5>
            <ul>
              {stationery.map((s, idx) => {
                return (
                  <li key={idx}>
                    <NavLink to="#stationery">{s.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cat uniforms">
            <h5>Uniforms</h5>
            <ul>
              {uniforms.map((s, idx) => {
                return (
                  <li key={idx}>
                    <NavLink to="#stationery">{s.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cat books">
            <h5>Competitive Exam Books</h5>
            <ul>
              {books.map((s, idx) => {
                return (
                  <li key={idx}>
                    <NavLink to="#stationery">{s.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
      <main className="categories">
        <div className="search-container">
          <input
            type="search"
            placeholder="Search by Categories"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <p>
            Showing results for
            <span> {filteredCount} </span>
            categories...
          </p>
        </div>
        <div className="cate-go-ries">
          {filteredCategories.map((category) =>
            category.items.length > 0 ? (
              <div className="stationeries" id="stationery" key={category.name}>
                <h5>{category.name}</h5>
                <div className="cat">
                  {category.items.map((s, idx) => {
                    return (
                      <div className="item" key={idx}>
                        <img src={s.img} alt="" />
                        <h6>{s.name}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null
          )}
        </div>
      </main>
    </section>
  );
}
