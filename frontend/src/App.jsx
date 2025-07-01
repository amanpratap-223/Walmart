
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";              // <-- IMPORT THIS!
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      {/* Toaster should be outside Routes so it's always present */}
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
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


