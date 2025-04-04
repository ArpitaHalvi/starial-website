import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./pages/PageNotFound";
import Loading from "./pages/Loading";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  AOS.init({
    offset: 300,
    duration: 1000,
  });
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer theme="light" draggable />
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
