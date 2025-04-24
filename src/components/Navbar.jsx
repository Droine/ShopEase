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
import useCartStore from "../store/CartStore";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const { cart } = useCartStore();

  return (
    <nav className="sticky top-0 z-50 bg-white text-black" data-testid="navbar">
      {/* Top Strip */}
      <div className="w-full h-10 px-5 flex items-center justify-between text-sm text-white bg-blue-900">
        <div>Welcome to greater ShopEase!</div>
        <div className="hidden md:flex items-center gap-6">
          <span className="flex items-center gap-1">
            <CiLocationOn className="text-lg" /> Deliver 24/7 to your doorstep
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
      <div className="w-full px-5 py-4 border-b border-blue-200 flex items-center justify-between">
        {/* Logo */}
        <Link
          to={"/"}
          className="flex items-center gap-0.5"
          data-testid="brand-logo"
        >
          <GiShop className="text-3xl text-blue-700" />
          <div className="text-xl font-bold text-blue-900">ShopEase</div>
        </Link>

        {/* Desktop Nav */}
        <ul
          className="hidden md:flex gap-6 text-lg font-medium"
          data-testid="desktop-nav"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>

        {/* Search + Cart */}
        <div className="md:flex items-center gap-4">
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCartSidebar(true)}
            data-testid="cart-icon"
          >
            <CiShoppingCart className="text-3xl text-black" />
            {cart.length > 0 && (
              <span
                className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                data-testid="cart-count"
              >
                {cart.length}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu"
          >
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
            className="fixed top-0 left-0 z-50 w-3/4 h-full bg-blue-900 text-white p-6 md:hidden"
            data-testid="mobile-nav"
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
            <CartSidebar setShowCartSidebar={setShowCartSidebar} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
