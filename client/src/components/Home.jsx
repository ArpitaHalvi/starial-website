import About from "./About";
import Categories from "./Categories";
import DeliveryProcess from "./DeliveryProcess";
import DownloadApp from "./DownloadApp";
import Intro from "./Intro";
import ProcessOfDelivery from "./ProcessOfDelivery";
import Services from "./Services";

export default function Home() {
  return (
    <main className="home-page">
      <Intro />
      <Categories />
      <About />
      <DeliveryProcess />
      {/* <ProcessOfDelivery /> */}
      <DownloadApp />
    </main>
  );
}
