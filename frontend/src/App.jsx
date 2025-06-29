import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
    {/*User Layout*/}
    <Routes>
      <Route path="/" element={<UserLayout />}>
        
      </Route>

      <Route>
        {/*Admin Layout*/}
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App
