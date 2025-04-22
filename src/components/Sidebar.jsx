import React from "react";
import { NavLink } from "react-router-dom";

const brands = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

const Sidebar = () => {
  return (
    <div className="w-full md:w-60 bg-white p-4 border rounded shadow-sm h-fit sticky top-4">
      <h3 className="text-lg font-semibold mb-3">Brands</h3>
      <ul className="space-y-2">
        {brands.map((brand) => (
          <li key={brand}>
            <NavLink
              to={`/shop/category/${brand}`}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-700 hover:text-blue-400"
              }
            >
              {brand.replace("-", " ")}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
