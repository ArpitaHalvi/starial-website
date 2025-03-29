import { useState } from "react";
import { FaPencilRuler } from "react-icons/fa";

const categories = [
  { name: "Art  & Crafts", image: "" },
  { name: "Books and Notebooks", image: "" },
  { name: "Map", image: "" },
  { name: "Cover and Nameslips", image: "" },
  { name: "Writing Materials", image: "" },
  { name: "CBSE and NCERT", image: "" },
  { name: "Clipboard", image: "" },
  { name: "Geometry Box and Pencil Case", image: "" },
  { name: "Pariksha Adhyayan", image: "" },
  { name: "Bachelors", image: "" },
  { name: "Pen", image: "" },
  { name: "Paper Sheet", image: "" },
  { name: "File Folder", image: "" },
  { name: "Glue and Cutter", image: "" },
  { name: "ICSE", image: "" },
  { name: "MP Board", image: "" },
  { name: "Diploma", image: "" },
  { name: "Exam Preparation", image: "" },
  { name: "Stickers and Sticking Chart", image: "" },
  { name: "Fancy Stationeries", image: "" },
  { name: "Project Materials and Science Kits", image: "" },
  { name: "Competition Materials", image: "" },
  { name: "Christ Church Boy", image: "" },
  { name: "Christ Church Girls", image: "" },
  { name: "GD Goenka School", image: "" },
  { name: "St. Joseph's School", image: "" },
  { name: "Novelty Dresses", image: "" },
  { name: "Kendriya Vidhyalaya", image: "" },
  { name: "Billabong School", image: "" },
  { name: "Kangaroo School", image: "" },
  { name: "Stemfield School", image: "" },
  { name: "Wings of Joy School", image: "" },
  { name: "Little World School", image: "" },
  { name: "Nachiketa School", image: "" },
  { name: "Mount Litera Zee School", image: "" },
  { name: "Masters", image: "" },
  { name: "MBBS", image: "" },
  { name: "Law", image: "" },
  { name: "B.Ed", image: "" },
  { name: "BA", image: "" },
];

export default function CategoriesPage() {
  const [searchText, setSearchText] = useState("");
  const filteredCategories = categories.filter((cate) =>
    cate.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <section className="categories-page">
      <h2>Category of Products</h2>
      <div>
        <input
          type="search"
          placeholder="Search by Categories"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <p>Showing results for {filteredCategories.length} categories...</p>
      </div>
      <div className="categories">
        {filteredCategories.map((product, index) => {
          return (
            <div className="category" key={index}>
              <div>
                {/* <img src={product.image} alt="" /> */}
                {/* <img src="/category.jpg" alt="" loading="lazy" /> */}
                <FaPencilRuler className="pencil-ruler-icon" />
              </div>
              <h4>{product.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
