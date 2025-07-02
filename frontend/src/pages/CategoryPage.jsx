import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const USD_TO_INR = 85.5;
function convertToINR(usd) {
  return Math.round(usd * USD_TO_INR);
}

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [categoryName]);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 capitalize">{categoryName.replace(/-/g, ' ')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
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
            </Link>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
