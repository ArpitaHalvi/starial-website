import ContactUs from "./ContactUs";

export default function Vendors() {
  const sellers = [
    {
      text: "Children Book House",
      imgUrl:
        "https://res.cloudinary.com/dgkv2gft7/image/upload/v1746011141/seller3-2_tbdlyy.jpg",
    },
    {
      text: "The Book House",
      imgUrl:
        "https://res.cloudinary.com/dgkv2gft7/image/upload/v1746011144/seller1-2_s60sk0.jpg",
    },
    {
      text: "Om Book",
      imgUrl:
        "https://res.cloudinary.com/dgkv2gft7/image/upload/v1746011149/seller2-2_emwc37.jpg",
    },
  ];
  const steps = [
    {
      title: "Submit Seller Application",
      desc: "Fill out the seller registration form in the Seller App. Upload required documents including identity proof, a clear photo, and basic business details.",
      img: "/application.svg",
    },
    {
      title: "Verification Process",
      desc: "Our team will verify the submitted documents and photo for authenticity. We’ll also review the stationery products you intend to sell to ensure they meet our platform standards.",
      img: "/verification.svg",
    },
    {
      title: "Start Selling",
      desc: "Once verified and approved, you’ll gain access to your seller dashboard where you can list your stationery products and begin selling to customers.",
      img: "/sell.svg",
    },
  ];
  return (
    <section className="vendors-section">
      <div className="become-seller">
        <h2>Partner With Us - Sell Your Study Materials</h2>
        <p>
          Reach thousands of customers by listing your products on our platform.
        </p>
      </div>
      <div className="sellers-testimonies">
        <h2>Shop That Trust Us</h2>
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
      <div className="seller-verify">
        <h2>Become a Seller in 3 Steps</h2>
        <div className="steps">
          {steps.map((step, index) => {
            return (
              <div className="step" key={index}>
                <div className="step-desc">
                  <h4>
                    <span>1</span> {step.title}
                  </h4>
                  <p>{step.desc}</p>
                </div>
                <img src={step.img} alt="Step Graphics" loading="lazy" />
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
