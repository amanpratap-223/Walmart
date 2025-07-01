// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartProducts, setCartProducts] = useState([]);

//   const addToCart = (product) => {
//     setCartProducts((prev) => {
//       const existing = prev.find(p => p.productId === product.productId);
//       if (existing) {
//         return prev.map(p =>
//           p.productId === product.productId
//             ? { ...p, quantity: p.quantity + 1 }
//             : p
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartProducts(prev => prev.filter(p => p.productId !== productId));
//   };

//   const increaseQty = (productId) => {
//     setCartProducts(prev =>
//       prev.map(p =>
//         p.productId === productId ? { ...p, quantity: p.quantity + 1 } : p
//       )
//     );
//   };

//   const decreaseQty = (productId) => {
//     setCartProducts(prev =>
//       prev.map(p =>
//         p.productId === productId && p.quantity > 1
//           ? { ...p, quantity: p.quantity - 1 }
//           : p
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartProducts, addToCart, removeFromCart, increaseQty, decreaseQty }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

//   const addToCart = (product) => {
//     setCartProducts((prev) => {
//       const existing = prev.find(p => p.id === product.id);
//       if (existing) {
//         return prev.map(p =>
//           p.id === product.id
//             ? { ...p, quantity: p.quantity + 1 }
//             : p
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

// const addToCart = (product) => {
//   setCartProducts((prev) => {
//     const existing = prev.find(p => p.productId === product.productId);
//     if (existing) {
//       return prev.map(p =>
//         p.productId === product.productId
//           ? { ...p, quantity: p.quantity + product.quantity }  // ✅ Respect passed quantity
//           : p
//       );
//     } else {
//       return [...prev, { ...product }]; // ✅ Includes passed quantity
//     }
//   });
// };

const addToCart = (product) => {
  setCartProducts((prev) => {
    const existing = prev.find(p => p.id === product.id);
    if (existing) {
      return prev.map(p =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + product.quantity }  // ✅ Use passed quantity
          : p
      );
    } else {
      return [...prev, { ...product }];  // ✅ Already contains quantity
    }
  });
};



  const removeFromCart = (id) => {
    setCartProducts(prev => prev.filter(p => p.id !== id));
  };

  const increaseQty = (id) => {
    setCartProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decreaseQty = (id) => {
    setCartProducts(prev =>
      prev.map(p =>
        p.id === id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
