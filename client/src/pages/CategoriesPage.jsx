// import { useState } from "react";
import { Link } from "react-router-dom";

const stationery = [
  {
    name: "Art & Crafts",
    img: "craft.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687290/stationery5_vjhyxu.png",
  },
  {
    name: "Notebooks",
    img: "notebooks.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687291/stationery6_toeeqf.png",
  },
  {
    name: "Writing Materials",
    img: "pens.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687293/stationery9_quuocg.png",
  },
  {
    name: "Office Stationery",
    img: "office.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687196/stationery4_hpkwck.png",
  },
];

const uniforms = [
  {
    // name: "Billabong High International School (BHIS)",
    name: "Regular Dresses",
    img: "regular-uniform.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687164/school1_k22tix.jpg",
  },
  {
    // name: "Little World School",
    name: "House Dresses",
    img: "house-uniforms.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687167/school4_xucuox.jpg",
  },
  {
    // name: "StemField International School",
    name: "Seasonal Dresses",
    img: "coats.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687167/school3_ejn0wb.jpg",
  },
  {
    // name: "Delhi Public School (DPS Jabalpur)",
    name: "Essentials",
    img: "",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687167/school2_s2skvq.jpg",
  },
];

const books = [
  {
    name: "Academic Books",
    img: "academic2.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687120/exam1_tii4sq.jpg",
  },
  {
    name: "Civil Services",
    img: "compBook.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687121/exam2_o4pxyu.jpg",
  },
  {
    name: "Novels",
    img: "novels2.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687122/exam3_qnhttj.jpg",
  },
  {
    name: "Kids Books",
    img: "kidsBook2.jpg",
    // img: "https://res.cloudinary.com/dgkv2gft7/image/upload/v1743687124/exam4_okqo1s.jpg",
  },
];

const categories = [
  { name: "Stationery", items: stationery },
  { name: "School Uniforms", items: uniforms },
  { name: "Books", items: books },
];

export default function CategoriesPage() {
  // const [searchText, setSearchText] = useState("");
  // const filteredCategories = categories.map((cate) => ({
  //   ...cate,
  //   items: cate.items.filter((item) =>
  //     item.name.toLowerCase().includes(searchText.toLowerCase())
  //   ),
  // }));
  // const filteredCount = filteredCategories.reduce(
  //   (count, cat) => count + cat.items.length,
  //   0
  // );
  return (
    <section className="categories-page">
      <main className="categories">
        {/* <div className="search-container">
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
        </div> */}
        <h2>Choose what you need</h2>
        <div className="cate-go-ries">
          {categories.map((category) =>
            category.items.length > 0 ? (
              <div className="stationeries" id="stationery" key={category.name}>
                <h5>{category.name}</h5>
                <div className="cat">
                  {category.items.map((s, idx) => {
                    return (
                      <div className="item" key={idx}>
                        <img src={s.img} alt="" />
                        <Link to="/download-app">Order Now</Link>
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
