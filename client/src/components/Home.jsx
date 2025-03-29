import About from "./About";
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
      <About />
      <DeliveryProcess />
      <Brands />
      <DownloadApp />
    </main>
  );
}
