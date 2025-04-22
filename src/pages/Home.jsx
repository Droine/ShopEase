import React from "react";
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import Categories from "../components/Categories";
const Home = () => {
  return (
    <div className="w-full h-full mb-[4em]">
      <div className="py-4">
        <Carousel />
      </div>
      <div className="px-16 py-5">
        <Products category={"smartphones"} />
      </div>
      <div className="px-16 py-5">
        <Categories />
      </div>
      <div className="px-16 py-5">
        <Products category={"laptops"} />
      </div>
      <div className="px-16 py-5">
        <Products category={"tablets"} />
      </div>
      <div className="px-16 py-5">
        <Products category={"sports-accessories"} />
      </div>
    </div>
  );
};

export default Home;
