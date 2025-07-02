

import React, { useState } from "react";
import Slider from "react-slick";
import ProductModal from "./ProductModal";

// Sample furniture data
const furniture = [
  {
    id: "furniture-1",
    title: "Sofa Set",
    price: "₹19,999",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
    description: "Luxurious 3-seater for your living room.",
  },
  {
    id: "furniture-2",
    title: "Dining Table",
    price: "₹8,299",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80",
    description: "6-seater with elegant wooden finish.",
  },
  {
    id: "furniture-3",
    title: "Queen Bed",
    price: "₹12,499",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a07b7?auto=format&fit=crop&w=400&q=80",
    description: "With soft mattress for great sleep.",
  },
  {
    id: "furniture-4",
    title: "Study Desk",
    price: "₹2,399",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
    description: "Perfect for students and WFH.",
  },
  {
    id: "furniture-5",
    title: "Office Chair",
    price: "₹2,799",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80",
    description: "Ergonomic and comfortable.",
  },
  {
    id: "furniture-6",
    title: "Bookshelf",
    price: "₹1,799",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a07b7?auto=format&fit=crop&w=400&q=80",
    description: "Spacious and modern design.",
  },
  {
    id: "furniture-7",
    title: "Bean Bag",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
    description: "Comfy and light, moves anywhere.",
  },
  {
    id: "furniture-8",
    title: "Shoe Rack",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80",
    description: "Keep your footwear organized.",
  },
  {
    id: "furniture-9",
    title: "Coffee Table",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a07b7?auto=format&fit=crop&w=400&q=80",
    description: "Stylish and practical.",
  },
  {
    id: "furniture-10",
    title: "Wall Shelf",
    price: "₹749",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
    description: "Decorative wall shelf for all rooms.",
  },
];

// Custom arrows
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

const Furniture = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dragStart, setDragStart] = useState(0);

  return (
    <div className="w-full bg-white py-10 px-20">
      <div className="max-w-[1600px] mx-auto px-0">
        <h2 className="text-2xl font-bold mb-2 text-center">Best of Furniture</h2>
        <p className="text-gray-500 text-center mb-8">
          Furniture for every room, handpicked for style and comfort.
        </p>
        <div className="relative px-2">
          <Slider {...sliderSettings}>
            {furniture.map((item) => (
              <div key={item.id} className="px-2">
                <div
                  className="rounded-xl border border-gray-300 bg-white shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center overflow-hidden cursor-pointer"
                  onMouseDown={(e) => setDragStart(e.clientX)}
                  onMouseUp={(e) => {
                    if (Math.abs(e.clientX - dragStart) < 5) {
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
              relatedProducts={furniture.filter(
                (p) => p.id !== selectedProduct.id
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Furniture;
