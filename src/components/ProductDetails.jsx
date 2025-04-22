import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from URL params
  const [product, setProduct] = React.useState([]);

  const productId = parseInt(id);
  const { data } = useFetch(`https://dummyjson.com/products/${productId}`);

  useEffect(() => {
    setProduct(data);
  }, [data, productId]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Product Image */}
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column: Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            {product.title}
          </h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-gray-800">
              ${product.price}
            </div>
            <div className="text-sm text-green-500">
              {product.discountPercentage}% off
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="text-sm text-gray-700">
              <strong>Rating:</strong> {product.rating} / 5
            </div>
            <div className="text-sm text-gray-700">
              <strong>Stock:</strong> {product.stock}
            </div>
          </div>

          <div className="mt-4">
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">
              Add to Cart
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Product Details
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>SKU:</strong> {product.sku}
              </p>
              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>
              <p>
                <strong>Shipping Info:</strong> {product.shippingInformation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Return Policy */}
      <div className="mt-8 border-t pt-6">
        <h3 className="text-xl font-semibold text-gray-900">Return Policy</h3>
        <p className="text-gray-700">{product.returnPolicy}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
