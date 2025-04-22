import React from "react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="text-sm text-gray-500">Home / <span className="text-black">Cart</span></div>

      <div className="border rounded-md overflow-hidden">
        <div className="grid grid-cols-4 bg-gray-100 text-sm font-medium p-4">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        <div className="divide-y">
          {/* Item 1 */}
          <div className="grid grid-cols-4 items-center p-4">
            <div className="flex items-center gap-4">
              <img src="/images/lcd-monitor.png" alt="LCD Monitor" className="w-16 h-16 object-cover" />
              <span>LCD Monitor</span>
            </div>
            <div>$650</div>
            <div>
              <select className="border rounded px-2 py-1">
                <option>01</option>
              </select>
            </div>
            <div>$650</div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-4 items-center p-4">
            <div className="flex items-center gap-4">
              <img src="/images/gamepad.png" alt="Gamepad" className="w-16 h-16 object-cover" />
              <span>H1 Gamepad</span>
            </div>
            <div>$550</div>
            <div>
              <select className="border rounded px-2 py-1">
                <option>01</option>
                <option selected>02</option>
              </select>
            </div>
            <div>$1100</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex gap-4">
          <Button variant="outline">Return To Shop</Button>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-4 py-2 rounded w-48"
          />
          <Button className="bg-red-500 hover:bg-red-600 text-white">Apply Coupon</Button>
        </div>
      </div>

      <div className="border p-6 rounded-md w-full md:max-w-md ml-auto space-y-4">
        <h3 className="text-lg font-semibold">Cart Total</h3>
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>$1750</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>$1750</span>
        </div>
        <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Proceed to checkout</Button>
      </div>
    </div>
  );
}
