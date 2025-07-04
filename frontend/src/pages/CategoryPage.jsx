import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
 // adjust path as needed
import CartDrawer from "../components/Layout/CartDrawer"
 // adjust path as needed

const USD_TO_INR = 85.5;
function convertToINR(usd) {
  return Math.round(usd * USD_TO_INR);
}

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // New: State to control cart drawer/modal
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Access cart context
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [categoryName]);

  const handleAddToCart = (product) => {
    // Prepare product data as expected by CartContext
    addToCart({
      id: product.id,
      name: product.title,
      price: convertToINR(product.price),
      image: product.thumbnail,
      size: "Default",
      color: "Default",
      quantity: 1,
    });
    setDrawerOpen(true); // Open the cart drawer/modal
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 capitalize">{categoryName.replace(/-/g, ' ')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map(product => (
            <div
              key={product.id}
              className="block border p-4 rounded hover:shadow-lg transition"
            >
              <div className="w-full h-35 bg-white flex items-center justify-center overflow-hidden rounded">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="mt-2 font-semibold">{product.title}</h2>
              <p>₹{convertToINR(product.price)}</p>
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
              {/* Optional: View Details Link */}
              <Link
                to={`/product/${product.id}`}
                className="block mt-2 text-blue-600 hover:underline text-sm"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
      {/* Cart Drawer Modal */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={() => setDrawerOpen(!drawerOpen)} />
    </div>
  );
};

export default CategoryPage;
