import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ];

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow" data-testid="category-filter">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/shop/category/${category}`}
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              {category.replace("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
