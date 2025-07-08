
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Toaster }    from 'react-hot-toast';
import ChatbotLoader from './components/ChatbotLoader';


import Mainnavbar     from './components/Layout/Mainnavbar';
import Home           from './pages/Home';
import CategoryPage   from './pages/CategoryPage';
import SearchResults  from './pages/SearchResult';
import ProductDetail  from './pages/ProductDetail';
import MyOrderPage    from './pages/MyOrderPage';
import Profile        from './pages/Profile';
import Login          from './pages/Login';
import Register       from './pages/Register';
import Checkout from './components/Cart/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* 1) Toaster must live outside of Routes so it's always there */}
        <Toaster position="top-right" />
        <Mainnavbar />
         <ChatbotLoader /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<MyOrderPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
