import React from "react";
import { founders } from "../api/data";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="px-4 md:px-20 py-10 text-[#000] bg-white">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">Home / About</p>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2020, ShopEase has grown to become Nigeria's leading
            online shopping destination, offering everything from groceries to
            electronics, fashion, and home goods. With a commitment to quality,
            convenience, and customer satisfaction, we've built a platform that
            serves millions of customers across the country.
          </p>
          <p className="text-gray-700">
            Today, ShopEase offers over 1 million products across 20+
            categories, making it your one-stop shop for all your shopping
            needs. Our platform connects thousands of verified sellers with
            customers, ensuring a safe and reliable shopping experience.
          </p>
        </div>
        <div>
          <img
            src={
              "https://images.pexels.com/photos/31631127/pexels-photo-31631127/free-photo-of-graceful-woman-in-desert-wearing-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="About ShopEase"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center"
        data-testid="stats-section"
      >
        <div className="border p-6 rounded">
          <div className="text-2xl font-bold mb-2">5k+</div>
          <p className="text-gray-600">Verified Sellers</p>
        </div>
        <div className="border p-6 rounded bg-red-500 text-white">
          <div className="text-2xl font-bold mb-2">1M+</div>
          <p>Products Available</p>
        </div>
        <div className="border p-6 rounded">
          <div className="text-2xl font-bold mb-2">2M+</div>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div className="border p-6 rounded">
          <div className="text-2xl font-bold mb-2">24/7</div>
          <p className="text-gray-600">Customer Support</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Leadership Team
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {founders.map((person, idx) => (
            <div key={idx} className="text-center" data-testid="team-member">
              <img
                src={person.img}
                alt={person.name}
                className="mx-auto mb-4 rounded-md object-cover h-60 w-60"
              />
              <h4 className="font-semibold text-lg">{person.name}</h4>
              <p className="text-sm text-gray-500">{person.title}</p>
              <div
                className="flex justify-center mt-2 space-x-4 text-gray-500"
                data-testid="social-links"
              >
                <Link
                  to="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  <FaTwitter className="text-xl" />
                </Link>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  <FaInstagram className="text-xl" />
                </Link>
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  <FaLinkedinIn className="text-xl" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
