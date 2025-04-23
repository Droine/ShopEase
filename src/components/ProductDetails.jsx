import React from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/ProductStore";
import { useCartStore } from "../store/CartStore";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useProductStore((state) => state.products);
  const { addToCart } = useCartStore();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
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
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.discountPercentage && (
              <span className="text-red-500">
                {Math.round(product.discountPercentage)}% off
              </span>
            )}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Rating:</span> {product.rating}/5
          </div>
          <div className="mb-4">
            <span className="font-semibold">Stock:</span> {product.stock} units
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600"
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
