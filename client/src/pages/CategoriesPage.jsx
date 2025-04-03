import { useState } from "react";
import { Link } from "react-router-dom";

const stationery = [
  {
    name: "Paper Sheets",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687290/stationery5_vjhyxu.png",
  },
  {
    name: "Notebooks",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687291/stationery6_toeeqf.png",
  },
  {
    name: "Pens",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687293/stationery9_quuocg.png",
  },
  {
    name: "Glue & Cutters",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687196/stationery4_hpkwck.png",
  },
];

const uniforms = [
  {
    name: "Billabong High International School (BHIS)",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687164/school1_k22tix.jpg",
  },
  {
    name: "Little World School",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687167/school4_xucuox.jpg",
  },
  {
    name: "StemField International School",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687167/school3_ejn0wb.jpg",
  },
  {
    name: "Delhi Public School (DPS Jabalpur)",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687167/school2_s2skvq.jpg",
  },
];

const books = [
  {
    name: "MPPSC",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687120/exam1_tii4sq.jpg",
  },
  {
    name: "UPSC",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687121/exam2_o4pxyu.jpg",
  },
  {
    name: "SSC",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687122/exam3_qnhttj.jpg",
  },
  {
    name: "Railway",
    img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687124/exam4_okqo1s.jpg",
  },
];

const categories = [
  { name: "Stationery", items: stationery },
  { name: "School Uniforms", items: uniforms },
  { name: "Competitive Exam Books", items: books },
];

export default function CategoriesPage() {
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
                        <Link to="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1">
                          Order Now
                        </Link>
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
