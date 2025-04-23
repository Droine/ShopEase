import React from "react";
import useCartStore from "../store/CartStore";
import { Link, useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const {
    cart,
    handleIncrease,
    handleDecrease,
    handleRemove,
    subtotal,
    clearCart,
  } = useCartStore();
  const navigate = useNavigate();

  return (
    <div className="lg:p-8 p-2 max-w-6xl mx-auto space-y-8">
      <div className="text-sm text-gray-500">
        Home / <span className="text-black">Cart</span>
      </div>
      <div data-testid="cart-items">
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-5 items-center w-full p-2 lg:p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.thumbnail}
                alt={item.name}
                className="w-14 h-14 object-cover"
              />
              <span>{item.name}</span>
            </div>
            <div>${item.price}</div>
            <div>
              <div className="flex items-center">
                <button
                  className="px-2 py-1 border rounded-l"
                  onClick={() => handleDecrease(item.id)}
                >
                  −
                </button>
                <span className="lg:px-3 px-1 border-t border-b">
                  {item.quantity}
                </span>
                <button
                  className="px-2 py-1 border rounded-r"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </div>
            </div>
            <div>${(item.price * item.quantity).toFixed(2)}</div>
            <div className="">
              <FiTrash2
                onClick={() => handleRemove(item.id)}
                className="cursor-pointer text-red-700"
                data-testid="remove-item"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex  justify-between gap-6">
        <div className="flex gap-4">
          <Link
            className="px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
            to={"/shop"}
          >
            Return To Shop
          </Link>
        </div>

        <div className="flex gap-2">
          <button
            onClick={clearCart}
            className="px-3 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white"
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="border p-6 rounded-md w-full md:max-w-md ml-auto space-y-4">
        <h3 className="text-lg font-semibold">Cart Total</h3>
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span data-testid="cart-total">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <button
          onClick={() => navigate("/checkout", { state: { cart, subtotal } })}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          data-testid="checkout-button"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
