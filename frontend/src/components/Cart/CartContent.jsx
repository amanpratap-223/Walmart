

// import React from "react";
// import { RiDeleteBin3Line } from "react-icons/ri";
// import { useCart } from "../../context/CartContext";

// const CartContent = () => {
//   const { cartProducts, increaseQty, decreaseQty, removeFromCart } = useCart();

//   if (cartProducts.length === 0) {
//     return <p className="text-gray-800">Your cart is empty.</p>;
//   }

//   return (
//     <div className="space-y-4">
//       {cartProducts.map((product) => (
//         <div
//           key={product.id || product._id}
//           className="flex items-start justify-between gap-4 py-4 border-b"
//         >
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-20 h-20 object-cover rounded"
//           />
//           <div className="flex-1">
//             <h3 className="font-semibold text-gray-900">{product.name}</h3>
//             <p className="text-sm text-gray-500">
//               Size: {product.size} | Color: {product.color}
//             </p>
//             <div className="flex items-center mt-2 space-x-4">
//               <button
//                 onClick={() => decreaseQty(product.id)}
//                 className="border rounded px-2 py-1 text-lg font-medium"
//               >
//                 -
//               </button>
//               <span>{product.quantity}</span>
//               <button
//                 onClick={() => increaseQty(product.id)}
//                 className="border rounded px-2 py-1 text-lg font-medium"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//           <div className="flex flex-col items-end justify-between h-full">
//             <p className="font-semibold">
//               ₹{(product.price * product.quantity).toFixed(2)}
//             </p>
//             <button onClick={() => removeFromCart(product.id)}>
//               <RiDeleteBin3Line className="h-5 w-5 text-red-500 mt-2" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartContent;
import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useCart } from "../../context/CartContext";

const CartContent = () => {
  const { cartProducts, increaseQty, decreaseQty, removeFromCart } = useCart();

  if (cartProducts.length === 0) {
    return <p className="text-gray-800">Your cart is empty.</p>;
  }

  return (
    <div className="space-y-6">
      {cartProducts.map((product) => (
        <div
          key={product.id}
          className="flex items-start justify-between gap-4 py-4 border-b"
        >
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-cover rounded"
          />

          {/* Name, Options & Quantity Controls */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{product.name}</h3>

            {/* Only show size/color if they exist */}
            {(product.size || product.color) && (
              <p className="text-sm text-gray-500 mt-1">
                {product.size && <>Size: {product.size}</>}
                {product.size && product.color && " | "}
                {product.color && <>Color: {product.color}</>}
              </p>
            )}

            {/* Quantity selector */}
            <div className="flex items-center mt-3 space-x-4">
              <button
                onClick={() => decreaseQty(product.id)}
                className="px-2 py-1 border rounded text-lg font-medium hover:bg-gray-100"
              >
                −
              </button>
              <span className="min-w-[1.5rem] text-center">{product.quantity}</span>
              <button
                onClick={() => increaseQty(product.id)}
                className="px-2 py-1 border rounded text-lg font-medium hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Price & Remove Button */}
          <div className="flex flex-col items-end justify-between">
            <p className="font-semibold">
              ₹{(product.price * product.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => removeFromCart(product.id)}
              className="mt-2"
              aria-label="Remove item"
            >
              <RiDeleteBin3Line className="h-5 w-5 text-red-500 hover:text-red-700" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
