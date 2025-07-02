import React, { useState } from "react";
import Slider from "react-slick";
import ProductModal from "./ProductModal";

const womenProducts = [
  { id: "women-1", title: "Floral Dress", price: "₹1,299", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", description: "Elegant dress for any occasion." },
  { id: "women-2", title: "Ladies Handbag", price: "₹1,099", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", description: "Trendy handbag, lots of space." },
  { id: "women-3", title: "Sandals", price: "₹499", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80", description: "Comfortable and stylish sandals." },
  { id: "women-4", title: "Scarf", price: "₹299", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", description: "Soft and colorful scarf." },
  { id: "women-5", title: "Stud Earrings", price: "₹199", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80", description: "Minimalist and cute." },
  { id: "women-6", title: "Ladies Watch", price: "₹799", image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80", description: "Chic watch with leather strap." },
  { id: "women-7", title: "Makeup Kit", price: "₹1,499", image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80", description: "All your essentials in one box." },
  { id: "women-8", title: "Kurti", price: "₹799", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", description: "Traditional and comfortable." },
  { id: "women-9", title: "Sling Bag", price: "₹649", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", description: "Lightweight & easy to carry." },
  { id: "women-10", title: "Yoga Pants", price: "₹599", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", description: "Stretchy & comfy for fitness." },
];

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

function NextArrow({ onClick }) {
  return (
    <button onClick={onClick} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full shadow w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition" aria-label="Next">
      <svg width="20" height="20" stroke="currentColor" strokeWidth="2.5"><path d="M7 4l6 6-6 6" /></svg>
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button onClick={onClick} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white rounded-full shadow w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition" aria-label="Previous">
      <svg width="20" height="20" stroke="currentColor" strokeWidth="2.5"><path d="M13 4l-6 6 6 6" /></svg>
    </button>
  );
}

const WomenOnly = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dragStartX, setDragStartX] = useState(0);

  return (
    <div className="w-full bg-white py-10 px-20">
      <div className="max-w-[1600px] mx-auto px-0">
        <h2 className="text-2xl font-bold mb-2 text-center">Women Only</h2>
        <p className="text-gray-500 text-center mb-8">Latest trends and essentials for women.</p>
        <div className="relative px-2">
          <Slider {...sliderSettings}>
            {womenProducts.map((item) => (
              <div key={item.id} className="px-2">
                <div
                  onMouseDown={(e) => setDragStartX(e.clientX)}
                  onMouseUp={(e) => {
                    if (Math.abs(e.clientX - dragStartX) < 5) {
                      setSelectedProduct(item);
                    }
                  }}
                  className="rounded-xl border border-gray-300 bg-white shadow-md hover:shadow-lg transition flex flex-col items-center overflow-hidden cursor-pointer"
                >
                  <img src={item.image} alt={item.title} className="w-full h-44 object-cover object-center" draggable="false" />
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
              relatedProducts={womenProducts.filter((p) => p.id !== selectedProduct.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WomenOnly;
