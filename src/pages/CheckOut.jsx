import React from "react";

const CheckOut = () => {
  return <div className="w-full h-screen">CheckOut</div>;
  <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Billing Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        <form className="space-y-4">
          <Input placeholder="First Name*" />
          <Input placeholder="Company Name" />
          <Input placeholder="Street Address*" />
          <Input placeholder="Apartment, floor, etc. (optional)" />
          <Input placeholder="Town/City*" />
          <Input placeholder="Phone Number*" />
          <Input placeholder="Email Address*" />
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-red-500" />
            <span>Save this information for faster check-out next time</span>
          </label>
        </form>
      </div>

      {/* Order Summary */}
      <div>
        <Card className="p-6">
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>LCD Monitor</span>
                <span>$650</span>
              </div>
              <div className="flex justify-between">
                <span>H1 Gamepad</span>
                <span>$1100</span>
              </div>
            </div>
            <hr />
            <div className="space-y-2">
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
            </div>
            <hr />
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="accent-red-500" />
                <span>Bank</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" defaultChecked className="accent-red-500" />
                <span>Cash on delivery</span>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Input placeholder="Coupon Code" className="flex-1" />
              <Button className="bg-red-500 hover:bg-red-600">Apply Coupon</Button>
            </div>
            <Button className="w-full bg-red-500 hover:bg-red-600">Place Order</Button>
          </CardContent>
        </Card>
      </div>
    </div>
};

export default CheckOut;
