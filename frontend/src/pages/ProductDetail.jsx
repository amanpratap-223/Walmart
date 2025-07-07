// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { useCart } from '../context/CartContext';  // ✅ Import your custom hook

// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState(null);
// //   const { addToCart } = useCart();  // ✅ Use your hook to get addToCart

// //   useEffect(() => {
// //     fetch(`http://localhost:9000/api/products/${id}`)
// //       .then(res => res.json())
// //       .then(data => setProduct({ ...data, quantity: 1 })); // ✅ Add quantity on load
// //   }, [id]);

// //   if (!product) return <p>Loading...</p>;

// //   return (
// //     <div className="max-w-4xl mx-auto p-4">
// //       <div className="flex flex-col md:flex-row gap-8">
// //         <div className="w-full md:w-1/2">
// //           <img src={product.image} alt={product.name} className="rounded w-full" />
// //         </div>
// //         <div className="w-full md:w-1/2">
// //           <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
// //           <p className="text-xl mb-2">₹{product.price}</p>
// //           <p className="mb-4">Category: {product.category}</p>
// //           <button
// //             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //             onClick={() => addToCart(product)}  // ✅ Add to cart here
// //           >
// //             Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetail;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null); // ✅ useState properly imported
//   const { addToCart } = useCart();

// //   useEffect(() => {
// //     fetch(`http://localhost:9000/api/products/${id}`)
// //       .then(res => res.json())
// //       .then(data => setProduct({ ...data, quantity: 1 }));
// //   }, [id]);
// useEffect(() => {
//   fetch(`http://localhost:9000/api/products/${id}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data); // 👉 Add this line
//       setProduct({ ...data, quantity: 1 });
//     });
// }, [id]);


//   if (!product) return <p className="text-center py-10 text-lg">Loading...</p>;

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="object-contain h-96 w-full"
//           />
//         </div>
//         <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
//           <p className="text-2xl text-green-600 mb-2">₹{product.price}</p>
//           <p className="text-md mb-6 text-gray-700">
//             Category: <span className="capitalize">{product.category}</span>
//           </p>
//           <button
//             className="bg-blue-600 text-white text-lg px-6 py-3 rounded hover:bg-blue-700 transition duration-200"
//             onClick={() => addToCart(product)}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useEffect, useState } from 'react';
import { useParams }            from 'react-router-dom';
import { useCart }              from '../context/CartContext';

const clothingCats = ['men','women'];

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct]       = useState(null);
  const [qty, setQty]               = useState(1);
  const [size, setSize]             = useState('');
  const [color, setColor]           = useState('');
  const { addToCart }               = useCart();
  const isClothing = clothingCats.includes(product?.category);

  useEffect(() => {
    fetch(`http://localhost:9000/api/products/${id}`)
      .then(r => r.json())
      .then(data => {
        setProduct(data);
        if (data.sizes?.length)  setSize(data.sizes[0]);
        if (data.colors?.length) setColor(data.colors[0]);
      });
  }, [id]);

  if (!product) return <p className="text-center py-10">Loading…</p>;

  const onAdd = () => {
    addToCart({
      id:       product.id,
      name:     product.name,
      price:    product.price,
      image:    product.image,
      category: product.category,
      quantity: qty,
      ...(isClothing && { size, color }),
    });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg grid md:grid-cols-2 gap-10">
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="rounded-2xl w-full h-[360px] object-cover border"
      />

      {/* DETAILS */}
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-xl text-green-600 mb-2">₹{product.price}</p>
        <p className="mb-4 text-gray-500 capitalize">
          Category: {product.category}
        </p>
        {product.description && <p className="mb-2">{product.description}</p>}
        {product.material && (
          <p className="mb-4 text-sm text-gray-400">
            Material: {product.material}
          </p>
        )}

        {isClothing && (
          <>
            <div className="mb-4">
              <label className="block mb-1">Size:</label>
              <select
                value={size}
                onChange={e => setSize(e.target.value)}
                className="border rounded px-3 py-1"
              >
                {product.sizes.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Color:</label>
              <select
                value={color}
                onChange={e => setColor(e.target.value)}
                className="border rounded px-3 py-1"
              >
                {product.colors.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </>
        )}

        {/* QUANTITY */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
          >−</button>
          <span className="px-5 py-1 border bg-gray-50">{qty}</span>
          <button
            onClick={() => setQty(q => q + 1)}
            className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
          >+</button>
        </div>

        <button
          onClick={onAdd}
          className="w-full py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
