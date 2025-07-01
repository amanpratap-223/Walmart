

// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import toast from "react-hot-toast";
// import { useCart } from "../../context/CartContext";  // <-- Import global cart

// const ProductModal = ({ product, onClose, relatedProducts }) => {
//   const [currentProduct, setCurrentProduct] = useState(product);
//   const [qty, setQty] = useState(1);

//   const { addToCart } = useCart();  // <-- use context

//   const handleAddToCart = () => {
//     const productData = {
//       productId: currentProduct.id,
//       name: currentProduct.title,
//       price: parseFloat(currentProduct.price.replace("₹", "").replace(",", "")),
//       image: currentProduct.image,
//       size: "Default", // or make selectable
//       color: "Default", // or make selectable
//       quantity: qty,
//     };

//     addToCart(productData);
//     toast.success(`${currentProduct.title} added to cart!`);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
//       <div className="bg-white rounded-xl w-full max-w-5xl p-8 relative shadow-xl max-h-[92vh] overflow-y-auto">
//         {/* Close Button */}
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
//           <IoMdClose size={26} />
//         </button>

//         {/* Product Info */}
//         <div className="flex flex-col md:flex-row gap-8">
//           <img
//             src={currentProduct.image}
//             alt={currentProduct.title}
//             className="w-full md:w-72 h-72 object-cover rounded-lg border"
//           />

//           <div className="flex-1">
//             <h2 className="text-3xl font-bold mb-2 break-words">{currentProduct.title}</h2>
//             <p className="text-gray-600 mb-2">{currentProduct.description}</p>
//             <div className="font-semibold text-2xl mb-4">{currentProduct.price}</div>

//             {/* Quantity Selector */}
//             <div className="flex items-center gap-2 mb-4">
//               <button className="px-4 py-2 border rounded text-lg" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
//               <span className="text-xl">{qty}</span>
//               <button className="px-4 py-2 border rounded text-lg" onClick={() => setQty(qty + 1)}>+</button>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-700 text-white px-8 py-3 rounded hover:bg-blue-800 transition font-semibold text-lg"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>

//         {/* Related Products */}
//         <div className="mt-10">
//           <h3 className="font-semibold mb-3 text-gray-800 text-lg">Related Products</h3>
//           <div className="flex gap-5 overflow-x-auto pb-2">
//             {relatedProducts.map((prod) => (
//               <div
//                 key={prod.id}
//                 onClick={() => {
//                   setCurrentProduct(prod);
//                   setQty(1);
//                 }}
//                 className="min-w-[100px] cursor-pointer text-center"
//               >
//                 <img
//                   src={prod.image}
//                   alt={prod.title}
//                   className="w-20 h-20 object-cover rounded border mb-1 mx-auto"
//                 />
//                 <div className="text-xs truncate w-[100px]">{prod.title}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";
import { useCart } from "../../context/CartContext";

const ProductModal = ({ product, onClose, relatedProducts }) => {
  const [currentProduct, setCurrentProduct] = useState(product);
  const [qty, setQty] = useState(1);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const productData = {
      id: currentProduct.id, // ✅ Correct key for cart logic
      name: currentProduct.title,
      price: parseFloat(currentProduct.price.replace("₹", "").replace(",", "")),
      image: currentProduct.image,
      size: "Default",
      color: "Default",
      quantity: qty,
    };

    addToCart(productData);
    toast.success(`${currentProduct.title} added to cart!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl w-full max-w-5xl p-8 relative shadow-xl max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <IoMdClose size={26} />
        </button>

        {/* Product Info */}
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="w-full md:w-72 h-72 object-cover rounded-lg border"
          />

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2 break-words">{currentProduct.title}</h2>
            <p className="text-gray-600 mb-2">{currentProduct.description}</p>
            <div className="font-semibold text-2xl mb-4">{currentProduct.price}</div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2 mb-4">
              <button className="px-4 py-2 border rounded text-lg" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
              <span className="text-xl">{qty}</span>
              <button className="px-4 py-2 border rounded text-lg" onClick={() => setQty(qty + 1)}>+</button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-blue-700 text-white px-8 py-3 rounded hover:bg-blue-800 transition font-semibold text-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10">
          <h3 className="font-semibold mb-3 text-gray-800 text-lg">Related Products</h3>
          <div className="flex gap-5 overflow-x-auto pb-2">
            {relatedProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  setCurrentProduct(prod);
                  setQty(1);
                }}
                className="min-w-[100px] cursor-pointer text-center"
              >
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-20 h-20 object-cover rounded border mb-1 mx-auto"
                />
                <div className="text-xs truncate w-[100px]">{prod.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
