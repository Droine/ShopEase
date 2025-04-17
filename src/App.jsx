import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
