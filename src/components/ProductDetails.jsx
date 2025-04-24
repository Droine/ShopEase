import React from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/ProductStore";
import { useCartStore } from "../store/CartStore";
import EmptyProduct from "./EmptyProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useProductStore((state) => state.products);
  const { addToCart } = useCartStore();

  // Convert id to number and handle potential NaN
  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  if (!product || isNaN(productId)) {
    return <EmptyProduct />;
  }

  return (
    <div className="container mx-auto px-4 py-8" data-testid="product-details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">
            {product.title}
          </h1>
          <p className="text-blue-700 mb-4">{product.description}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-blue-900">
              ${product.price}
            </span>
            {product.discountPercentage && (
              <span className="text-blue-600">
                {Math.round(product.discountPercentage)}% off
              </span>
            )}
          </div>
          <div className="mb-4">
            <span className="font-semibold text-blue-900">Rating:</span>{" "}
            <span className="text-blue-700">{product.rating}/5</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold text-blue-900">Stock:</span>{" "}
            <span className="text-blue-700">{product.stock} units</span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition-colors"
            data-testid="add-to-cart"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
