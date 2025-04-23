import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black w-full text-gray-300 py-10 px-5">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About ShopEase</h3>
          <p className="text-sm leading-6">
            Nigeria's leading online shopping destination, offering everything
            from groceries to electronics, fashion, and home goods. Your
            one-stop shop for all your needs.
          </p>
        </div>

        {/* Column 2: Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/shop/category/electronics"
                className="hover:text-red-500"
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/shop/category/fashion" className="hover:text-red-500">
                Fashion
              </Link>
            </li>
            <li>
              <Link
                to="/shop/category/groceries"
                className="hover:text-red-500"
              >
                Groceries
              </Link>
            </li>
            <li>
              <Link to="/shop/category/home" className="hover:text-red-500">
                Home & Living
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-red-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-red-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-red-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@shopease.ng</li>
            <li>Phone: +234 803 702 0923</li>
            <li>Address: ACA, Unec Nigeria</li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
      <div className="text-center text-sm mt-2 border-t border-gray-700 pt-2">
        In collaboration with ACA meet your developers Edeh Chinedu and Joy
        Karenate-Egbuson
      </div>
    </footer>
  );
};

export default Footer;
