
import React, { useState } from "react";
import Slider from "react-slick";
import ProductModal from "./ProductModal";

// Products list
const foodItems = [
  {
    id: "food-1",
    title: "Basmati Rice 5kg",
    price: "₹499",
    image: "https://m.media-amazon.com/images/I/61XFtNhIx+L._AC_UL320_.jpg",
    description: "Premium aromatic basmati rice.",
  },
  {
    id: "food-2",
    title: "Fortune Sunflower Oil",
    price: "₹299",
    image: "https://m.media-amazon.com/images/I/81FbVYZJYyL._AC_UL320_.jpg",
    description: "Healthy cooking oil.",
  },
  {
    id: "food-3",
    title: "Amul Butter 500g",
    price: "₹249",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
    description: "Delicious and creamy butter.",
  },
  {
    id: "food-4",
    title: "Parle-G Biscuits",
    price: "₹30",
    image: "https://m.media-amazon.com/images/I/71bufOt9zAL._AC_UL320_.jpg",
    description: "Classic snack for all ages.",
  },
  {
    id: "food-5",
    title: "Maggi Noodles",
    price: "₹12",
    image: "https://m.media-amazon.com/images/I/812ujEPZcML._AC_UL320_.jpg",
    description: "Favorite instant noodles.",
  },
  {
    id: "food-6",
    title: "Haldiram's Chips",
    price: "₹50",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1dac661a-59d8-4d12-a779-ffac1f64d34b.jpg?ts=1736785731",
    description: "Crispy and tasty potato chips.",
  },
  {
    id: "food-7",
    title: "Tata Salt",
    price: "₹18",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/91920d93-6cd1-44a1-84fe-7d3ac7879c3b.jpg?ts=1742542931",
    description: "India's trusted salt brand.",
  },
  {
    id: "food-8",
    title: "Real Mixed Juice",
    price: "₹99",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bd885069-64a2-436e-bcea-8ce2af4064d4.jpg?ts=1741698447",
    description: "Refreshing fruit beverage.",
  },
  {
    id: "food-9",
    title: "Nescafe Instant Coffee",
    price: "₹249",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a572618f-d2ed-4c58-8eb8-99f9066661d0.jpg?ts=1746177569",
    description: "Perfect start to your day.",
  },
  {
    id: "food-10",
    title: "Britannia Cheese 200g",
    price: "₹110",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/15b1d5c4-2d7a-4437-acaf-aa189ed6f831.jpg?ts=1747379406",
    description: "Soft and creamy cheese.",
  },
];


// Arrow components
const NextArrow = ({ onClick }) => (
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

const PrevArrow = ({ onClick }) => (
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

const FoodItems = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dragStart, setDragStart] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  return (
    <div className="w-full bg-white py-10 px-20">
      <div className="max-w-[1600px] mx-auto px-0">
        <h2 className="text-2xl font-bold mb-2 text-center">Best of Food & Grocery</h2>
        <p className="text-gray-500 text-center mb-8">
          Daily groceries and food items at best prices.
        </p>
        <div className="relative px-2">
          <Slider {...sliderSettings}>
            {foodItems.map((item) => (
              <div key={item.id} className="px-2">
                <div
                  className="rounded-xl border border-gray-300 bg-white shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center overflow-hidden cursor-pointer"
                  onMouseDown={(e) => setDragStart(e.clientX)}
                  onMouseUp={(e) => {
                    const dist = Math.abs(e.clientX - dragStart);
                    setDragDistance(dist);
                    if (dist < 5) setSelectedProduct(item); // Only click if not dragged
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain rounded-t-lg"
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
              relatedProducts={foodItems.filter((p) => p.id !== selectedProduct.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
