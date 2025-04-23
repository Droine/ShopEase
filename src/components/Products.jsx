import React from "react";
import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/UseFetch.js";

const Products = ({ category }) => {
  const { data } = useFetch(
    `https://dummyjson.com/products/category/${category}?limit=4`
  );

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <h4>
          Grab the best deal on
          <span className="text-blue-500 font-bold ml-2 uppercase">
            {category}
          </span>
        </h4>

        <div className="flex items-center">
          <Link to={`/shop/category/${category}`}>View All</Link>

          <LuChevronRight />
        </div>
      </div>
      <div className="line"></div>

      <div className="py-6 my-4">
        <ProductCard data={data} category={category} />
      </div>
    </div>
  );
};

export default Products;
