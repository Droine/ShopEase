// ProductCard.jsx
import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import useCartStore from "../store/CartStore";

const ShopCard = ({ products }) => {
  const { addToCart } = useCartStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md p-4"
          data-testid="product-card"
        >
          <Link to={`/product/${product.id}`}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            data-testid="add-to-cart"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
