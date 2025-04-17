import React, { useState } from "react";
import {
  CiLocationOn,
  CiDiscount1,
  CiDeliveryTruck,
  CiShoppingCart,
  CiMenuBurger,
} from "react-icons/ci";
import { GiShop } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CartSidebar from "./CartSidebar";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCartSidebar, setShowCartSidebar] = useState(false);

  return (
    <motion.div className="sticky top-0 z-50 bg-white text-black">
      {/* Top Strip */}

      <div className="w-full h-10 px-5 flex items-center justify-between text-sm text-white bg-black">
        <div>Welcome to greater ShopEase!</div>
        <div className="hidden md:flex items-center gap-6">
          <span className="flex items-center gap-1">
            <CiLocationOn className="text-lg" /> Deliver to 423651
          </span>
          <span className="flex items-center gap-1">
            <CiDeliveryTruck className="text-lg" /> Track your order
          </span>
          <span className="flex items-center gap-1">
            <CiDiscount1 className="text-lg" /> All Offers
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full px-5 py-4 border-b border-stone-300 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <GiShop className="text-3xl text-blue-700" />
          <div className="text-xl font-bold">ShopEase</div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </ul>

        {/* Search + Cart */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex">
            <input
              type="text"
              placeholder="what are you looking for?"
              className="w-64 h-10 px-4 text-black rounded-md outline-none bg-[#eee] "
            />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCartSidebar(true)}
          >
            <CiShoppingCart className="text-3xl text-black" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <RxCross2 className="text-3xl" />
            ) : (
              <CiMenuBurger className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 z-50 w-3/4 h-full bg-black text-white p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCartSidebar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg p-2"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setShowCartSidebar(false)}
                className="text-black font-bold text-xl"
              >
                <IoMdClose />
              </button>
            </div>
            <CartSidebar />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
