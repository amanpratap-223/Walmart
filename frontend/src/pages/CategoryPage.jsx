// // import React, { useEffect, useState } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import { useCart } from "../context/CartContext";
// //  // adjust path as needed
// // import CartDrawer from "../components/Layout/CartDrawer"
// //  // adjust path as needed

// // const USD_TO_INR = 85.5;
// // function convertToINR(usd) {
// //   return Math.round(usd * USD_TO_INR);
// // }

// // const CategoryPage = () => {
// //   const { categoryName } = useParams();
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // New: State to control cart drawer/modal
// //   const [drawerOpen, setDrawerOpen] = useState(false);

// //   // Access cart context
// //   const { addToCart } = useCart();

// //   // useEffect(() => {
// //   //   setLoading(true);
// //   //   fetch(`https://dummyjson.com/products/category/${categoryName}`)
// //   //     .then(res => res.json())
// //   //     .then(data => {
// //   //       setProducts(data.products || []);
// //   //       setLoading(false);
// //   //     })
// //   //     .catch(() => setLoading(false));
// //   // }, [categoryName]);

// //   useEffect(() => {
// //   setLoading(true);
// //   fetch(`http://localhost:9000/api/products/${categoryName}`)
// //     .then(res => res.json())
// //     .then(data => {
// //       setProducts(data);
// //       setLoading(false);
// //     })
// //     .catch(() => setLoading(false));
// // }, [categoryName]);



// //   const handleAddToCart = (product) => {
// //     // Prepare product data as expected by CartContext
// //     // addToCart({
// //     //   id: product.id,
// //     //   name: product.title,
// //     //   price: convertToINR(product.price),
// //     //   image: product.thumbnail,
// //     //   size: "Default",
// //     //   color: "Default",
// //     //   quantity: 1,
// //     // });
// //     addToCart({
// //   id: product.id || product._id, // fallback for MongoDB _id
// //   name: product.name,
// //   price: convertToINR(product.price),
// //   image: product.image,
// //   size: "Default",
// //   color: "Default",
// //   quantity: 1,
// // });

// //     setDrawerOpen(true); // Open the cart drawer/modal
// //   };

// //   if (loading) return <p>Loading products...</p>;

// //   return (
// //     <div>
// //       <h1 className="text-2xl font-bold mb-4 capitalize">{categoryName.replace(/-/g, ' ')}</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //         {products.length > 0 ? (
// //           products.map(product => (
// //             <div
// //               key={product.id}
// //               className="block border p-4 rounded hover:shadow-lg transition"
// //             >
// //               <div className="w-full h-35 bg-white flex items-center justify-center overflow-hidden rounded">
// //                 <img
// //                   src={product.price}
// //                   alt={product.title}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //               <h2 className="mt-2 font-semibold">{product.name}</h2>
// //               <p>₹{convertToINR(product.price)}</p>
// //               {/* Add to Cart Button */}
// //               <button
// //                 onClick={() => handleAddToCart(product)}
// //                 className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
// //               >
// //                 Add to Cart
// //               </button>
// //               {/* Optional: View Details Link */}
// //               <Link
// //                 to={`/product/${product.id}`}
// //                 className="block mt-2 text-blue-600 hover:underline text-sm"
// //               >
// //                 View Details
// //               </Link>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No products found in this category.</p>
// //         )}
// //       </div>
// //       {/* Cart Drawer Modal */}
// //       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={() => setDrawerOpen(!drawerOpen)} />
// //     </div>
// //   );
// // };

// // export default CategoryPage;

// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useCart } from "../context/CartContext";
// import CartDrawer from "../components/Layout/CartDrawer";

// const CategoryPage = () => {
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const { addToCart } = useCart();

//   // useEffect(() => {
//   //   setLoading(true);
//   //   fetch(`http://localhost:9000/api/products/${categoryName}`)
//   //     .then(res => res.json())
//   //     .then(data => {
//   //       setProducts(data);
//   //       setLoading(false);
//   //     })
//   //     .catch(err => {
//   //       console.error("Error fetching products:", err);
//   //       setLoading(false);
//   //     });
//   // }, [categoryName]);

//   useEffect(() => {
//   setLoading(true);
//   fetch(`http://localhost:9000/api/products/category/${categoryName}`)
//     .then(res => res.json())
//     .then(data => {
//       setProducts(data);
//       setLoading(false);
//     })
//     .catch(() => setLoading(false));
// }, [categoryName]);


//   const handleAddToCart = (product) => {
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price, // ✅ Direct INR price
//       image: product.image,
//       size: "Default",
//       color: "Default",
//       quantity: 1,
//     });
//     setDrawerOpen(true);
//   };

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4 capitalize">{categoryName.replace(/-/g, ' ')}</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {products.length > 0 ? (
//           products.map(product => (
//             <div
//               key={product.id}
//               className="border p-4 rounded hover:shadow-lg transition"
//             >
//               <div className="w-full h-40 bg-white flex items-center justify-center overflow-hidden rounded">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="mt-2 font-semibold">{product.name}</h2>
//               <p>₹{product.price}</p> {/* ✅ Use price directly */}
//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//               >
//                 Add to Cart
//               </button>
//               <Link
//                 to={`/product/${product.id}`}
//                 className="block mt-2 text-blue-600 hover:underline text-sm"
//               >
//                 View Details
//               </Link>
//             </div>
//           ))
//         ) : (
//           <p>No products found in this category.</p>
//         )}
//       </div>
//       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={() => setDrawerOpen(!drawerOpen)} />
//     </div>
//   );
// };

// export default CategoryPage;
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:9000/api/products/category/${categoryName}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [categoryName]);

  if (loading) return <p>Loading products…</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize">
        {categoryName.replace(/-/g, ' ')}
      </h1>
      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(prod => (
            <div key={prod.id} className="border p-4 rounded-lg hover:shadow">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="mt-2 font-semibold">{prod.name}</h2>
              <p className="text-green-600">₹{prod.price}</p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => {
                    addToCart({ ...prod, quantity: 1 });
                    setDrawerOpen(true);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${prod.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
