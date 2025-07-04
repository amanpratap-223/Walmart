// import CategoryPage from "./pages/CategoryPage.jsx"; // <-- import this
// import { BrowserRouter } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { Route, Routes } from "react-router-dom";
// import UserLayout from "./components/Layout/UserLayout.jsx";
// import Home from "./pages/Home.jsx"; // <-- import Home page
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
//       <Routes>
//         <Route path="/" element={<UserLayout />}>
//           <Route index element={<Home />} />
//           {/* Add this route for categories */}
//           <Route path="category/:categoryName" element={<CategoryPage />} />
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";              // <-- IMPORT THIS!
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import CategoryPage from './pages/CategoryPage';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      {/* Toaster should be outside Routes so it's always present */}
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="profile" element={<Profile/>}/>
          {/* ...add more routes here as needed */}
        </Route>
        <Route>
          {/*Admin Layout - add admin routes here if needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

