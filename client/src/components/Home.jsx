import About from "./About";
import AboutUs from "./AboutUs";
import Brands from "./Brands";
import Categories from "./Categories";
import DeliveryProcess from "./DeliveryProcess";
import DownloadApp from "./DownloadApp";
import Intro from "./Intro";

export default function Home() {
  return (
    <main className="home-page">
      <Intro />
      <Categories />
      {/* <About /> */}
      <AboutUs />
      <DeliveryProcess />
      <Brands />
      <DownloadApp />
    </main>
  );
}
