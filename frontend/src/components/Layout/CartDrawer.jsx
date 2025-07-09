

import React from 'react';
import { IoMdClose } from 'react-icons/io';
import CartContent from '../Cart/CartContent';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { cartProducts } = useCart();

  // calculate subtotal
  const subtotal = cartProducts
    .reduce((sum, p) => sum + p.price * p.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    navigate('/checkout');
    toggleCartDrawer();
  };

  return (
    <div
      className={
        `fixed top-0 right-0 w-3/4 sm:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col ` +
        (drawerOpen ? 'translate-x-0' : 'translate-x-full')
      }
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Cart content */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CartContent />
      </div>

      {/* Subtotal & Checkout */}
      <div className="p-4 border-t bg-white">
        <div className="flex justify-between mb-3 font-medium">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Checkout
        </button>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
