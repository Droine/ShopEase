// ProductCard.jsx
import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import useCartStore from "../store/CartStore";

const ShopCard = ({ products }) => {
  const { addToCart } = useCartStore();

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-72 min-h-[20rem] max-h-96 bg-white/20 rounded-md shadow-lg hover:border border-blue-400 relative"
        >
          {/* Discount UI */}
          <div className="absolute w-12 h-14 right-0 rounded-tr-md rounded-bl-3xl bg-blue-700 flex items-center justify-center">
            <span className="text-white text-sm font-medium w-8 text-start uppercase leading-4">
              {Math.floor(product.discountPercentage) || 10}% off
            </span>
          </div>

          {/* Image */}
          <Link to={`/product/${product.id}`} className="w-full h-48">
            <div className="bg-black/10 h-[15rem] rounded-t-md">
              <img
                className="cardImage bg-center object-cover w-full h-full"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
          </Link>

          {/* Product info + cart icon */}
          <div className="flex justify-between items-center px-3">
            <div className="py-3 px-2">
              <dl>
                <dt>{product.title}</dt>
                <dt>${product.price}</dt>
              </dl>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <CiShoppingCart
                onClick={() => addToCart(product)}
                className="text-4xl text-blue-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
