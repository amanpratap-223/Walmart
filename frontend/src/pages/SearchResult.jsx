

import React, { useEffect, useState } from "react";
import { useLocation, Link }          from "react-router-dom";
import { useCart }                    from "../context/CartContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const rawQ = useQuery().get("query") || "";
  // strip stray punctuation
  const query = rawQ.replace(/[^\p{L}\p{N}\s]/gu, "").trim();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:9000/api/products/search?q=${encodeURIComponent(query)}`)
      .then(r => r.json())
      .then(data => { setItems(data); setLoading(false); });
  }, [query]);

  if (loading) return <p className="p-4">Searching for “{query}”…</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Results for “{query}”</h2>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(p => (
            <div key={p.id} className="border p-4 rounded flex flex-col">
              <img src={p.image} alt={p.name} className="h-40 object-contain mb-2 bg-gray-50" />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-green-600">₹{p.price}</p>
              <div className="mt-auto flex space-x-2">
                <button
                  onClick={() => addToCart({ ...p, quantity: 1 })}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${p.id}`}
                  className="px-4 py-2 border rounded text-blue-600"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found matching “{query}.”</p>
      )}
    </div>
  );
}

