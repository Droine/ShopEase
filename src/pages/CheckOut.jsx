import React from "react";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const { cart = [], subtotal = 0 } = location.state || {};

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Billing Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        <form className="space-y-4">
          <input
            className="w-full border rounded p-2"
            placeholder="First Name*"
          />
          <input
            className="w-full border rounded p-2"
            placeholder="Company Name"
          />
          <input
            className="w-full border rounded p-2"
            placeholder="Street Address*"
          />
          <input
            className="w-full border rounded p-2"
            placeholder="Apartment, floor, etc. (optional)"
          />
          <input
            className="w-full border rounded p-2"
            placeholder="Town/City*"
          />
          <input
            className="w-full border rounded p-2"
            placeholder="Phone Number*"
          />
          <input
            className="w-full border rounded p-2"
            placeholder="Email Address*"
          />
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" className="accent-red-500" />
            <span>Save this information for faster check-out next time</span>
          </label>
        </form>
      </div>

      {/* Order Summary */}
      <div className="border rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <hr className="my-4" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-base">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>

        <hr className="my-4" />

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" className="accent-red-500" />
            <span>Bank</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              defaultChecked
              className="accent-red-500"
            />
            <span>Cash on delivery</span>
          </label>
        </div>

        <button className="mt-6 w-full bg-red-500 text-white py-3 rounded hover:bg-red-600">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
