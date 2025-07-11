import React, { useState, useEffect } from 'react';
import { useWishlist } from '../context/WishlistContext';
import { Link }        from 'react-router-dom';
import { getRecommendations } from '../api/recommend';   // <--- import

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch recommendations only if wishlist is non-empty
    if (wishlist.length > 0) {
      setLoading(true);
      getRecommendations(wishlist.map(item => item.name))   // send product names
        .then(setSuggestions)
        .finally(() => setLoading(false));
    } else {
      setSuggestions([]);
    }
  }, [wishlist]);

  if (wishlist.length === 0) {
    return <p className="p-6">Your wishlist is empty.</p>;
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Your Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.map(item => (
          <div key={item.id} className="border p-4 rounded">
            <img
              src={item.image}
              alt={item.name}
              className="h-40 object-contain mb-2 bg-gray-50"
            />
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-green-600">₹{item.price}</p>
            <div className="mt-2 flex space-x-2">
              <Link
                to={`/product/${item.id}`}
                className="px-4 py-2 border rounded text-blue-600"
              >
                View
              </Link>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- RECOMMENDATIONS SECTION --- */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Recommended for you</h3>
        {loading && <div>Loading recommendations...</div>}
        {!loading && suggestions.length > 0 && (
          <ul className="list-disc pl-5 space-y-1">
            {suggestions.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        )}
        {!loading && suggestions.length === 0 && (
          <div className="text-gray-500">No recommendations yet.</div>
        )}
      </div>
    </div>
  );
}
