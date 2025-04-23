import React from "react";
import { FiTrash2 } from "react-icons/fi";
import useCartStore from "../store/CartStore";
import { Link } from "react-router";

const CartSidebar = ({ setShowCartSidebar }) => {
  const {
    cart,
    handleIncrease,
    handleDecrease,
    handleRemove,
    clearCart,
    subtotal,
  } = useCartStore();

  return (
    <div className="h-full w-full flex flex-col p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-red-600 text-sm flex items-center gap-1 hover:underline"
          >
            <FiTrash2 /> Clear All
          </button>
        )}
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-1">
        {cart.length === 0 ? (
          <div className="text-center mt-20 text-gray-500">
            <p className="text-2xl">🛒</p>
            <p>Your cart is empty</p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center border-b pb-4"
            >
              <img
                src={item.thumbnail}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleDecrease(item.id)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold mt-1">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500"
              >
                <FiTrash2 />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Subtotal + Checkout */}
      {cart.length > 0 && (
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link
            to={"/cart"}
            onClick={() => setShowCartSidebar(false)}
            className="mt-4 w-full bg-black text-white py-3 rounded-md block text-center hover:bg-gray-800 transition"
          >
            View in Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
