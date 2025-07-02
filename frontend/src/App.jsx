import CategoryPage from "./pages/CategoryPage.jsx"; // <-- import this
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout.jsx";
import Home from "./pages/Home.jsx"; // <-- import Home page
const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          {/* Add this route for categories */}
          <Route path="category/:categoryName" element={<CategoryPage />} />
        </Route>
        <Route>
          {/*Admin Layout - add admin routes here if needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;