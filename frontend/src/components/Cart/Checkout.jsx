// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import PayPalButton from './PayPalButton'; // Adjust the path if needed

// const cart = {
//   products: [
//     {
//       name: "Stylish jacket",
//       size: "M",
//       color: "Black",
//       price: 120,
//       image: "https://picsum.photos/150?random=1",
//     },
//     {
//       name: "Casual sneakers",
//       size: "10",
//       color: "White",
//       price: 75,
//       image: "https://picsum.photos/150?random=2",
//     },
//   ],
//   totalPrice: 195,
// };

// const Checkout = () => {
//   const navigate = useNavigate();
//   const [checkoutId, setCheckoutId] = useState(null);
//   const [shippingAddress, setShippingAddress] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",  // ← was missing
//     phone: "",
//   });

//   const handleCreateCheckout = (e) => {
//     e.preventDefault();
//     setCheckoutId(123);
//   };

//   const handlePaymentSuccess = (details, data) => {
//     console.log("Payment successful:", details);
//     navigate("/order-confirmation");
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
//       {/* Left Section */}
//       <div className="bg-white rounded-lg p-6">
//         <h2 className="text-2xl uppercase mb-4">Checkout</h2>
//         <form onSubmit={handleCreateCheckout}>
//           <h3 className="text-lg mb-4">Contact Details</h3>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               value="user@example.com"
//               className="w-full p-2 border rounded"
//               disabled
//             />
//           </div>
//           <h3 className="text-lg mb-4">Delivery</h3>
//           <div className="mb-4 grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">First Name</label>
//               <input
//                 type="text"
//                 value={shippingAddress.firstName}
//                 onChange={(e) =>
//                   setShippingAddress({ ...shippingAddress, firstName: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Last Name</label>
//               <input
//                 type="text"
//                 value={shippingAddress.lastName}
//                 onChange={(e) =>
//                   setShippingAddress({ ...shippingAddress, lastName: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Address</label>
//             <input
//               type="text"
//               value={shippingAddress.address}
//               onChange={(e) =>
//                 setShippingAddress({ ...shippingAddress, address: e.target.value })
//               }
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4 grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">City</label>
//               <input
//                 type="text"
//                 value={shippingAddress.city}
//                 onChange={(e) =>
//                   setShippingAddress({ ...shippingAddress, city: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Postal Code</label>
//               <input
//                 type="text"
//                 value={shippingAddress.postalCode}
//                 onChange={(e) =>
//                   setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Country</label>
//             <input
//               type="text"
//               value={shippingAddress.country}
//               onChange={(e) =>
//                 setShippingAddress({ ...shippingAddress, country: e.target.value })
//               }
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Phone</label>
//             <input
//               type="tel"
//               value={shippingAddress.phone}
//               onChange={(e) =>
//                 setShippingAddress({ ...shippingAddress, phone: e.target.value })
//               }
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mt-6">
//             {!checkoutId ? (
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-3 rounded"
//               >
//                 Continue to Payment
//               </button>
//             ) : (
//               <div>
//                 <h3 className="text-lg mb-4">Pay with PayPal</h3>
//                 <PayPalButton
//                   amount={cart.totalPrice}
//                   onSuccess={handlePaymentSuccess}
//                   onError={(err) => alert("Payment failed. Try again.")}
//                 />
//               </div>
//             )}
//           </div>
//         </form>
//       </div>

//       {/* Right Section */}
//       <div className="bg-gray-50 rounded-lg p-6">
//         <h3 className="text-lg mb-4">Order Summary</h3>
//         <div className="border-t py-4 mb-4">
//           {cart.products.map((product, index) => (
//             <div key={index} className="flex items-start justify-between py-2 border-b">
//               <div className="flex items-start">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-20 h-24 object-cover mr-4"
//                 />
//                 <div>
//                   <h3 className="text-md">{product.name}</h3>
//                   <p className="text-sm text-gray-600">Size: {product.size}</p>
//                   <p className="text-sm text-gray-600">Color: {product.color}</p>
//                 </div>
//               </div>
//               <div className="text-lg font-semibold">₹{product.price.toLocaleString('en-IN')}</div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-between items-center text-lg mb-4">
//           <p>Subtotal</p>
//           <p>₹{cart.totalPrice?.toLocaleString('en-IN')}</p>
//         </div>
//         <div className="flex justify-between items-center text-lg">
//             <p>Shipping</p>
//             <p>Free</p>
//         </div>
//         <div className="flex justify-between items-center text-lg  mt-4 border-t pt-4">
//             <p>Total</p>
//             <p>₹{cart.totalPrice?.toLocaleString('en-IN')}</p>
//             </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


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
