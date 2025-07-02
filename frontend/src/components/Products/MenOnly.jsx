


import React, { useState } from "react";
import Slider from "react-slick";
import ProductModal from "./ProductModal";

// Men’s fashion products
const menProducts = [
  {
    id: "men-1",
    title: "Men's Classic T-Shirt",
    price: "₹499",
    image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=400",
    description: "Soft cotton t-shirt in a relaxed fit.",
  },
  {
    id: "men-2",
    title: "Slim Fit Jeans",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    description: "Stretchy, comfortable and stylish.",
  },
  {
    id: "men-3",
    title: "Formal Shirt",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    description: "Perfect for office and parties.",
  },
  {
    id: "men-4",
    title: "Sports Shoes",
    price: "₹1,599",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80",
    description: "Lightweight, durable running shoes.",
  },
  {
    id: "men-5",
    title: "Casual Shorts",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Ideal for summer and lounge.",
  },
  {
    id: "men-6",
    title: "Men's Wallet",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    description: "Classic leather wallet with card slots.",
  },
  {
    id: "men-7",
    title: "Analog Watch",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    description: "Elegant timepiece for every outfit.",
  },
  {
    id: "men-8",
    title: "Polo T-shirt",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80",
    description: "Breathable, with a smart collar.",
  },
  {
    id: "men-9",
    title: "Track Pants",
    price: "₹849",
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80",
    description: "Perfect for sports and leisure.",
  },
  {
    id: "men-10",
    title: "Hooded Sweatshirt",
    price: "₹1,099",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Stay cozy and warm.",
  },
];

// Arrow components
function NextArrow({ onClick }) {
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full shadow w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition"
      onClick={onClick}
      aria-label="Next"
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4l6 6-6 6" />
      </svg>
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full shadow w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition"
      onClick={onClick}
      aria-label="Previous"
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 4l-6 6 6 6" />
      </svg>
    </button>
  );
}

// Slider config
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

const MenOnly = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dragStartX, setDragStartX] = useState(0);

  return (
    <div className="w-full bg-white py-10 px-20">
      <div className="max-w-[1600px] mx-auto px-0">
        <h2 className="text-2xl font-bold mb-2 text-center">Men Only</h2>
        <p className="text-gray-500 text-center mb-8">
          Top picks for men - clothing, accessories, and more.
        </p>
        <div className="relative px-2">
          <Slider {...sliderSettings}>
            {menProducts.map((item) => (
              <div key={item.id} className="px-2">
                <div
                  className="rounded-xl border border-gray-300 bg-white shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center overflow-hidden cursor-pointer"
                  onMouseDown={(e) => setDragStartX(e.clientX)}
                  onMouseUp={(e) => {
                    if (Math.abs(e.clientX - dragStartX) < 5) {
                      setSelectedProduct(item);
                    }
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    draggable="false"
                  />
                  <div className="w-full px-4 py-3">
                    <div className="text-base font-semibold text-gray-800 truncate">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              relatedProducts={menProducts.filter(
                (p) => p.id !== selectedProduct.id
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MenOnly;
