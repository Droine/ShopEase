import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../api/data";
const Categories = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <h4>
          Shop from
          <span className="text-blue-500 font-bold ml-2">Top Categories</span>
        </h4>
      </div>
      <div className="line"></div>

      <div className="py-6 my-4">
        {/* Categories List */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-4">
          {categories.map(({ id, image, name, slug }) => (
            <Link to={`/shop/category/${slug}`} key={id} className="flex gap-6">
              <div className="w-56 flex flex-col items-center">
                <div className="h-48 w-48 rounded-full bg-gray-300/30 ">
                  <img src={image} alt={id} />
                </div>
                <div className="py-3">{name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
