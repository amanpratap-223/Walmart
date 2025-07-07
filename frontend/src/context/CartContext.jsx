
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);



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
