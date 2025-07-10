import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Toaster }     from 'react-hot-toast'

import Mainnavbar     from './components/Layout/Mainnavbar'
import ChatbotLoader  from './components/ChatbotLoader'
import Home           from './pages/Home'
import CategoryPage   from './pages/CategoryPage'
import SearchResults  from './pages/SearchResult'
import ProductDetail  from './pages/ProductDetail'
import MyOrderPage    from './pages/MyOrderPage'
import Profile        from './pages/Profile'
import Login          from './pages/Login'
import Register       from './pages/Register'
import Checkout       from './components/Cart/Checkout'

import AdminLayout    from './components/Admin/AdminLayout'
import AdminHomePage  from './pages/AdminHomePage'
import UserManagement from './components/Admin/UserManagement'
import ProductManagement from './components/Admin/ProductManagement'
import OrderManagement from './components/Admin/OrderManagement'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Toaster position="top-right" />

        <Routes>
          {/* Public routes */}
          
          <Route element={<PublicLayout />}>
          
            <Route path="/"                        element={<Home />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/search"                 element={<SearchResults />} />
            <Route path="/product/:id"            element={<ProductDetail />} />
            <Route path="/checkout"               element={<Checkout />} />
            <Route path="/orders"                 element={<MyOrderPage />} />
            <Route path="/profile"                element={<Profile />} />
            <Route path="/login"                  element={<Login />} />
            <Route path="/register"               element={<Register />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* this will render at /admin */}
            <Route index element={<AdminHomePage />} />
            <Route path="users" element = {<UserManagement />} />
            <Route path="products" element = {<ProductManagement />} />
            <Route path="orders" element = {<OrderManagement />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

function PublicLayout() {
  return (
    <>
      <Mainnavbar />
      <ChatbotLoader />
      <Outlet />    {/* renders whichever public route matched above */}
    </>
  )
}
