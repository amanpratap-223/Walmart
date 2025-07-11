import React, { useState } from "react";
import Slider from "react-slick";
import ProductModal from "./ProductModal";

// Toy data with appropriate images
const toys = [
  {
    id: "toy-1",
    title: "Lego Building Blocks",
    price: "₹1,299",
    image: "https://m.media-amazon.com/images/I/81wdfOPNv9L._AC_UL320_.jpg", // Lego blocks
    description: "Develops creativity and motor skills.",
  },
  {
    id: "toy-2",
    title: "Remote Car",
    price: "₹899",
    image: "https://m.media-amazon.com/images/I/61q+iNjjZEL._AC_UL320_.jpg", // Remote car
    description: "Fun and easy to use for kids.",
  },
  {
    id: "toy-3",
    title: "Teddy Bear",
    price: "₹499",
    image: "https://m.media-amazon.com/images/I/61p4rKoTJ6L._AC_UL320_.jpg", // Teddy bear
    description: "Soft and huggable plush toy.",
  },
  {
    id: "toy-4",
    title: "Puzzle Set",
    price: "₹349",
    image: "https://m.media-amazon.com/images/I/81ux39RV4zL._AC_UL320_.jpg", // Puzzle pieces
    description: "Boosts intelligence and memory.",
  },
  {
    id: "toy-5",
    title: "Action Figure",
    price: "₹649",
    image: "https://m.media-amazon.com/images/I/71XCnUr6FgL._AC_UL320_.jpg", // Action figure
    description: "For fun and imaginative play.",
  },
  {
    id: "toy-6",
    title: "Coloring Kit",
    price: "₹199",
    image: "https://m.media-amazon.com/images/I/81rwm2Z5tDL._AC_UL320_.jpg", // Coloring pencils
    description: "Includes colors, pencils, and sketches.",
  },
  {
    id: "toy-7",
    title: "Rubik's Cube",
    price: "₹299",
    image: "https://m.media-amazon.com/images/I/61DJtHM5q7L._AC_UL320_.jpg", // Rubik's cube
    description: "The original mind puzzle.",
  },
  {
    id: "toy-8",
    title: "Doctor Set",
    price: "₹349",
    image: "https://m.media-amazon.com/images/I/81ARZdKVaWL._AC_UL320_.jpg", // Toy stethoscope
    description: "Encourages role-play and fun.",
  },
  {
    id: "toy-9",
    title: "RC Helicopter",
    price: "₹1,899",
    image: "https://m.media-amazon.com/images/I/614N-qNXfyL._AC_UL320_.jpg", // RC helicopter
    description: "Easy controls for kids and adults.",
  },
  {
    id: "toy-10",
    title: "Doll House",
    price: "₹1,299",
    image: "https://m.media-amazon.com/images/I/71E+LENb8ML._AC_UL320_.jpg", // Doll house
    description: "A mini home for creative play.",
  },
];

// Arrows
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

// Slider Settings
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

const Toys = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dragStartX, setDragStartX] = useState(0);

  return (
    <div className="w-full bg-white py-10 px-20">
      <div className="max-w-[1600px] mx-auto px-0">
        <h2 className="text-2xl font-bold mb-2 text-center">Best of Toys</h2>
        <p className="text-gray-500 text-center mb-8">
          Exciting toys for all ages - learning, fun, and more.
        </p>

        <div className="relative px-2">
          <Slider {...sliderSettings}>
            {toys.map((item) => (
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
              relatedProducts={toys.filter((p) => p.id !== selectedProduct.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Toys;
