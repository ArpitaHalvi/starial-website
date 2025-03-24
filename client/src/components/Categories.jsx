import { IoArrowForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
  const categories = [
    {
      name: "Stationery Items",
      img: "https://private-user-images.githubusercontent.com/169876450/425401878-b769996f-d40a-4987-bb35-fc43550c1fa9.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI4MTUxOTMsIm5iZiI6MTc0MjgxNDg5MywicGF0aCI6Ii8xNjk4NzY0NTAvNDI1NDAxODc4LWI3Njk5OTZmLWQ0MGEtNDk4Ny1iYjM1LWZjNDM1NTBjMWZhOS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNFQxMTE0NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYWY5ZmYwMzdjYzEzNjE4YzgzOWNkMDZkMGRkOWQzOWYzZWI0Mjg0YmJjNzhlZGEyM2I1MTNiNzgxMzA0ODhjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.St5hlEqPjN3x-lckXwk3qkNz6jFiqoBTCESgXypKPeQ",
    },
    {
      name: "Uniforms",
      img: "https://private-user-images.githubusercontent.com/169876450/426051101-1115419d-43de-4236-9433-9c46b35d39bf.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI4MTUxMDYsIm5iZiI6MTc0MjgxNDgwNiwicGF0aCI6Ii8xNjk4NzY0NTAvNDI2MDUxMTAxLTExMTU0MTlkLTQzZGUtNDIzNi05NDMzLTljNDZiMzVkMzliZi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNFQxMTEzMjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00YTg3ZDBjZjkxYzU4NzMwZTBmNzIyM2U4ZTBkZTM0YWFmNjc5OGU5MjVlYWFhMjRjMWZkM2QxZGViZmY3NmMyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ja3xTsPG2op_gVBHLMJdj7pp4m14RMXKBl4DLLV0F2s",
    },
    {
      name: "Exam Books",
      img: "https://private-user-images.githubusercontent.com/169876450/425401877-4f2ce0ee-00c6-42ca-afdc-974ba5ff327b.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI4MTUxOTMsIm5iZiI6MTc0MjgxNDg5MywicGF0aCI6Ii8xNjk4NzY0NTAvNDI1NDAxODc3LTRmMmNlMGVlLTAwYzYtNDJjYS1hZmRjLTk3NGJhNWZmMzI3Yi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNFQxMTE0NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMTY5ODA3MWIwMTkwYWM4ZjBlNWJmYzM3YTRjNGZlNWE5YzJkMzI0NWRiYTllMWMzZDIwNjVjNDQ2OWZlYzA1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Q6DhSwjktIjlYdF8qXwssj855BvZdQAMTfVMxnbDFbw",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <section className="categories-section">
      <h2>Category of products we offer</h2>
      <div className="categories">
        <Slider {...settings}>
          {categories.map((cat, index) => {
            return (
              <div key={index}>
                <img src={cat.img} alt="Categories" />
                {/* <NavLink to="/categories">{cat.name}</NavLink> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
