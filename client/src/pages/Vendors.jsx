import ContactUs from "./ContactUs";

export default function Vendors() {
  const sellers = [{}, {}, {}];
  return (
    <section className="vendors-section">
      <div className="become-seller">
        <h2>Partner With Us - Sell Your Stationery Online</h2>
        <p>
          Reach thousands of customers by listing your products on our platform.
        </p>
      </div>
      <div className="sellers-testimonies">
        <h2>Hear from Our Sellers</h2>
        <div className="sellers">
          {sellers.map((seller, index) => {
            return <div key={index} className="seller"></div>;
          })}
        </div>
      </div>
      <h2 className="contact-heading">Become a Seller - Contact Us Today!</h2>
      <ContactUs />
    </section>
  );
}
