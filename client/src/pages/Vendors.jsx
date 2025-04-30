import ContactUs from "./ContactUs";

export default function Vendors() {
  const sellers = [
    {
      text: "",
      imgUrl:
        "https://res.cloudinary.com/dgkv2gft7/image/upload/v1746011141/seller3-2_tbdlyy.jpg",
    },
    {
      text: "The Book House",
      imgUrl:
        "https://res.cloudinary.com/dgkv2gft7/image/upload/v1746011144/seller1-2_s60sk0.jpg",
    },
    {
      text: "Akash Pustak Sadan",
      imgUrl:
        "https://res.cloudinary.com/dgkv2gft7/image/upload/v1746011149/seller2-2_emwc37.jpg",
    },
  ];
  return (
    <section className="vendors-section">
      <div className="become-seller">
        <h2>Partner With Us - Sell Your Stationery Online</h2>
        <p>
          Reach thousands of customers by listing your products on our platform.
        </p>
      </div>
      <div className="sellers-testimonies">
        <h2>Shop That Trust Sellers</h2>
        <div className="sellers">
          {sellers.map((seller, index) => {
            return (
              <div key={index} className="seller">
                <img src={seller.imgUrl} alt="Seller Photo" />
                <h6 className="img-desc">{seller.text}</h6>
              </div>
            );
          })}
        </div>
      </div>
      {/* <h2 className="contact-heading">Become a Seller - Contact Us Today!</h2> */}
      <ContactUs />
    </section>
  );
}
