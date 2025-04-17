import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm leading-6">
            We are a tech company committed to delivering digital solutions that
            help businesses grow and thrive online.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>UI/UX Design</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Our Projects</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: hello@company.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Tech Street, City</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
