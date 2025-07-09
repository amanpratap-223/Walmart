
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
        className="rounded-2xl w-full h-[360px] object-contain border bg-gray-50"
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
