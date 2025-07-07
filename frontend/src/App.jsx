

// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";              // <-- IMPORT THIS!
// import UserLayout from "./components/Layout/UserLayout";
// import Home from "./pages/Home";
// import Login from './pages/Login';
// import Register from './pages/Register';
// import CategoryPage from './pages/CategoryPage';
// import Profile from './pages/Profile';
// import Checkout from './components/Cart/Checkout'; // <-- import Checkout component
// import ProductDetail from './pages/ProductDetail';


// const App = () => {
//   return (
//     <BrowserRouter>
//       {/* Toaster should be outside Routes so it's always present */}
//       <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
//       <Routes>
//         <Route path="/" element={<UserLayout />}>
//           <Route index element={<Home />} />
//           <Route path="/category/:categoryName" element={<CategoryPage />} />
//           <Route path="login" element={<Login/>}/>
//           <Route path="register" element={<Register/>}/>
//           <Route path="profile" element={<Profile/>}/>
//           <Route path="checkout" element={<Checkout/>} />
//             <Route path="/product/:id" element={<ProductDetail />} />
//           {/* ...add more routes here as needed */}
//         </Route>
//         <Route>
//           {/*Admin Layout - add admin routes here if needed */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Mainnavbar     from './components/Layout/Mainnavbar';
import Home           from './pages/Home';
import CategoryPage   from './pages/CategoryPage';
import ProductDetail  from './pages/ProductDetail';
import MyOrderPage    from './pages/MyOrderPage';
import Profile        from './pages/Profile';
import Login          from './pages/Login';
import Register       from './pages/Register';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Mainnavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:id"       element={<ProductDetail />} />
          <Route path="/orders"            element={<MyOrderPage />} />
          <Route path="/profile"           element={<Profile />} />
          <Route path="/login"             element={<Login />} />
          <Route path="/register"          element={<Register />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
