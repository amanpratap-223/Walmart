

const products = [
  // --- Clothing (with sizes/colors) ---
  {
    name: "Men's T-Shirt",
    price: 599,
    category: "men",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    description: "Soft cotton T-shirt with a relaxed fit.",
    material: "100% Cotton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Red"],
  },
  {
    name: "Women's Dress",
    price: 1499,
    category: "women",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    description: "Elegant midi dress, perfect for any occasion.",
    material: "Polyester Blend",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "Green", "Navy"],
  },

  // --- Non-clothing (no sizes/colors) ---
  {
    name: "Phone",
    price: 12999,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description: "Latest 5G smartphone with powerful battery.",
    material: "Glass & Aluminum",
  },
  {
    name: "Chair",
    price: 2500,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    description: "Minimalist wooden chair with ergonomic design.",
    material: "Solid Oak",
  },

  // …add the rest of your 50 products here…
];

module.exports = products;
