

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   HiOutlineUser,
//   HiOutlineShoppingBag,
//   HiBars3BottomRight,
//   HiXMark,
// } from 'react-icons/hi2';
// import SearchBar from '../Common/SearchBar';
// import CartDrawer from './CartDrawer';

// const Mainnavbar = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleCartDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const menuItems = [
//     'Men',
//     'Women',
//     'Trending',
//     'Only at Walmart',
//     'Pharmacy',
//     'Electronics',
//     'Grocery',
//   ];

//   return (
//     <>
//       {!isSearchOpen && (
//         <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
//           <div className="container mx-auto flex items-center justify-between py-3 px-6">
//             {/* Logo */}
//             <Link to="/" className="text-3xl font-extrabold text-gray-900 tracking-tight">
//               Walmart
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item}
//                   to="#"
//                   className="text-sm font-semibold uppercase text-gray-800 hover:underline underline-offset-4"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>

//             {/* Desktop Icons */}
//             <div className="hidden md:flex items-center space-x-6">
//               <HiOutlineUser className="h-6 w-6 text-gray-800 cursor-pointer" />
//               <div className="relative cursor-pointer" onClick={toggleCartDrawer}>
//                 <HiOutlineShoppingBag className="h-6 w-6 text-gray-800" />
//                 <span className="absolute -top-2 -right-2 bg-[#ea2e0e] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
//                   3
//                 </span>
//               </div>
//             </div>

//             {/* Mobile - Hamburger */}
//             <div className="md:hidden" onClick={toggleMobileMenu}>
//               {mobileMenuOpen ? (
//                 <HiXMark className="h-6 w-6 text-gray-800 cursor-pointer" />
//               ) : (
//                 <HiBars3BottomRight className="h-6 w-6 text-gray-800 cursor-pointer" />
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Dropdown */}
//           {mobileMenuOpen && (
//             <div className="md:hidden px-6 pb-4 space-y-4">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item}
//                   to="#"
//                   className="block text-sm font-semibold uppercase text-gray-800 hover:underline"
//                 >
//                   {item}
//                 </Link>
//               ))}
//               <div className="flex space-x-6 pt-2 border-t pt-4">
//                 <HiOutlineUser className="h-6 w-6 text-gray-800 cursor-pointer" />
//                 <div className="relative cursor-pointer" onClick={toggleCartDrawer}>
//                   <HiOutlineShoppingBag className="h-6 w-6 text-gray-800" />
//                   <span className="absolute -top-2 -right-2 bg-[#ea2e0e] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
//                 3
//                   </span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </nav>
//       )}

//       {isSearchOpen && <SearchBar isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />}
//       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
//     </>
//   );
// };

// export default Mainnavbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
  HiXMark,
} from 'react-icons/hi2';
import SearchBar from '../Common/SearchBar';
import CartDrawer from './CartDrawer';
import { useCart } from '../../context/CartContext';

const Mainnavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const { cartProducts } = useCart(); 
  const totalItems = cartProducts.reduce((sum, item) => sum + item.quantity, 0); 

  const menuItems = [
    'Men',
    'Women',
    'Trending',
    'Only at Walmart',
    'Pharmacy',
    'Electronics',
    'Grocery',
  ];

  return (
    <>
      {!isSearchOpen && (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
          <div className="container mx-auto flex items-center justify-between py-3 px-6">
            <Link to="/" className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Walmart
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-sm font-semibold uppercase text-gray-800 hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <HiOutlineUser className="h-6 w-6 text-gray-800 cursor-pointer" />
              <div className="relative cursor-pointer" onClick={toggleCartDrawer}>
                <HiOutlineShoppingBag className="h-6 w-6 text-gray-800" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ea2e0e] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                    {totalItems}
                  </span>
                )}
              </div>
            </div>

            {/* Mobile - Hamburger */}
            <div className="md:hidden" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <HiXMark className="h-6 w-6 text-gray-800 cursor-pointer" />
              ) : (
                <HiBars3BottomRight className="h-6 w-6 text-gray-800 cursor-pointer" />
              )}
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden px-6 pb-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="block text-sm font-semibold uppercase text-gray-800 hover:underline"
                >
                  {item}
                </Link>
              ))}
              <div className="flex space-x-6 pt-2 border-t pt-4">
                <HiOutlineUser className="h-6 w-6 text-gray-800 cursor-pointer" />
                <div className="relative cursor-pointer" onClick={toggleCartDrawer}>
                  <HiOutlineShoppingBag className="h-6 w-6 text-gray-800" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#ea2e0e] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                      {totalItems}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      )}

      {isSearchOpen && <SearchBar isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default Mainnavbar;



