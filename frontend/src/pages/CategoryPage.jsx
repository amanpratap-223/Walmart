
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// const CategoryPage = () => {
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     setLoading(true);
//     fetch(`http://localhost:9000/api/products/category/${categoryName}`)
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [categoryName]);

//   if (loading) return <p>Loading products…</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4 capitalize">
//         {categoryName.replace(/-/g, ' ')}
//       </h1>
//       {products.length === 0 ? (
//         <p>No products found in this category.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map(prod => (
//             <div key={prod.id} className="border p-4 rounded-lg hover:shadow">
//               <img
//                 src={prod.image}
//                 alt={prod.name}
//                 className="w-full h-48 object-cover rounded"
//               />
//               <h2 className="mt-2 font-semibold">{prod.name}</h2>
//               <p className="text-green-600">₹{prod.price}</p>
//               <div className="mt-2 space-x-2">
//                 <button
//                   onClick={() => {
//                     addToCart({ ...prod, quantity: 1 });
//                     setDrawerOpen(true);
//                   }}
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Add to Cart
//                 </button>
//                 <Link
//                   to={`/product/${prod.id}`}
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
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
              <div className="w-full h-48 bg-gray-50 rounded overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-contain"
                />
              </div>
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
