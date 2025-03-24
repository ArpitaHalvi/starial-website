import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./pages/PageNotFound";
import Loading from "./pages/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <BrowserRouter>
      <ToastContainer theme="light" draggable />
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/loading" element={<Loading />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
