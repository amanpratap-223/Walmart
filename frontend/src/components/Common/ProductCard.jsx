// frontend/src/components/Common/ProductCard.jsx
import React, { useEffect, useState } from 'react';
import { Link }                       from 'react-router-dom';
import { HiOutlineShoppingBag }       from 'react-icons/hi';
import Tippy                          from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function ProductCard({ product, onAdd }) {
  const [esg, setEsg] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/ai/esg?productId=${product.id}`)
      .then(r => r.json())
      .then(data => {
        if (!cancelled && data.sustainabilityRating) {
          setEsg(data);
        }
      })
      .catch(err => {
        console.error('ESG fetch failed', err);
      });
    return () => { cancelled = true; };
  }, [product.id]);

  return (
    <div className="border p-4 rounded-lg hover:shadow flex flex-col">
      <div className="w-full h-48 bg-gray-50 rounded overflow-hidden mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <h2 className="font-semibold mb-1">{product.name}</h2>
      <p className="text-green-600 mb-3">₹{product.price}</p>

      <div className="flex items-center space-x-2 mt-auto">
        <button
          onClick={onAdd || (() => {})}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="px-4 py-2 border rounded text-blue-600"
        >
          View
        </Link>
      </div>

      {esg && (
        <div className="mt-4 flex space-x-4">
          <Tippy content={`Our AI rates this ${esg.sustainabilityRating}% green`}>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
              🌿 {esg.sustainabilityRating}%
            </span>
          </Tippy>

          <Tippy content={`Product manufactured in ${esg.origin}`}>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              🏷️ {esg.origin}
            </span>
          </Tippy>
        </div>
      )}
    </div>
  );
}
