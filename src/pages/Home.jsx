import React from "react";
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div className="w-full h-full mb-[4em]">
      <div className="py-4" data-testid="carousel-section">
        <Carousel />
      </div>
      <div
        className="lg:px-16 lg:py-5 px-4 py-3"
        data-testid="featured-products"
      >
        <Products category={"smartphones"} />
      </div>
      <div
        className="lg:px-16 lg:py-5 px-4 py-3"
        data-testid="categories-section"
      >
        <Categories />
      </div>
      <div className="lg:px-16 lg:py-5 px-4 py-3" data-testid="laptops-section">
        <Products category={"laptops"} />
      </div>
      <div className="lg:px-16 lg:py-5 px-4 py-3" data-testid="tablets-section">
        <Products category={"tablets"} />
      </div>
      <div className="lg:px-16 lg:py-5 px-4 py-3" data-testid="sports-section">
        <Products category={"sports-accessories"} />
      </div>
    </div>
  );
};

export default Home;
