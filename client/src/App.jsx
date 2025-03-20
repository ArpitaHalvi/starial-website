import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import Logout from "./components/Logout";
import PageNotFound from "./pages/PageNotFound";
import Loading from "./pages/Loading";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="light" draggable />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
