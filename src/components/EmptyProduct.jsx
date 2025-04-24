import React from "react";
import { Link } from "react-router-dom";
const EmptyProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-semibold text-blue-900">
        Product Not Available
      </h1>
      <p className="mt-4 text-lg text-blue-700">
        Sorry, the product you're looking for is no longer available.
      </p>
      <p className="mt-2 text-sm text-blue-600">
        It might be out of stock or removed from our catalog.
      </p>
      <Link
        to="/shop"
        className="mt-6 px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none"
      >
        Go Back to Shop
      </Link>
    </div>
  );
};

export default EmptyProduct;
