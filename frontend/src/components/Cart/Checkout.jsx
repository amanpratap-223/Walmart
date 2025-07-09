


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useCart } from "../../context/CartContext";
import PayPalButton from "./PayPalButton";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartProducts, clearCart } = useCart();   // ← pull clearCart
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // compute total
  const total = cartProducts
    .reduce((sum, p) => sum + p.price * p.quantity, 0)
    .toFixed(2);

  if (!cartProducts.length) {
    return <p className="p-6 text-center">Your cart is empty.</p>;
  }

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(Date.now()); // or call your backend
  };

  const handlePaymentSuccess = () => {
    toast.success("Payment successful!");
    clearCart();              // ← clear the cart
    navigate("/order-confirmation");
  };

  return (
    <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 p-6">
      {/* Shipping Form */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <form onSubmit={handleCreateCheckout} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={shippingAddress.firstName}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, firstName: e.target.value })
              }
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={shippingAddress.lastName}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, lastName: e.target.value })
              }
              required
              className="border p-2 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            value={shippingAddress.address}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, address: e.target.value })
            }
            required
            className="border p-2 rounded w-full"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              value={shippingAddress.city}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, city: e.target.value })
              }
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Postal Code"
              value={shippingAddress.postalCode}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
              }
              required
              className="border p-2 rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Country"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, country: e.target.value })
              }
              required
              className="border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, phone: e.target.value })
              }
              required
              className="border p-2 rounded"
            />
          </div>

          {!checkoutId ? (
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded"
            >
              Continue to Payment
            </button>
          ) : (
            <div>
              <h3 className="text-lg mb-2">Pay with PayPal</h3>
              <PayPalButton
                amount={total}
                onSuccess={handlePaymentSuccess}
                onError={() => toast.error("Payment failed")}
              />
            </div>
          )}
        </form>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-3">
          {cartProducts.map((p) => (
            <div key={p.id} className="flex justify-between">
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-gray-600">
                  {p.quantity} × ₹{p.price}
                </p>
              </div>
              <p className="font-medium">₹{(p.price * p.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>
    </div>
  );
}
