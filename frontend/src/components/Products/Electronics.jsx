

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductModal from "./ProductModal";

const electronics = [
  {
    id: "electronics-1" ,
    title: "Dell 24'' Monitor",
    price: "₹8,279",
    image: "https://m.media-amazon.com/images/I/81r4H4+w+FL._AC_UY218_.jpg",
    description: "Full HD monitor with stunning visuals and a sleek design.",
  },
  {
    id: "electronics-2",
    title: "Noise Smartwatch",
    price: "₹1,099",
    image: "https://m.media-amazon.com/images/I/61916qAPLDL._AC_UY218_.jpg",
    description: "Stay connected and healthy with this smart wearable.",
  },
  {
    id: "electronics-3",
    title: "Fastrack Smartwatch",
    price: "₹1,399",
    image: "https://m.media-amazon.com/images/I/81RSrpHOiaL._AC_UY218_.jpg",
    description: "Trendy and functional smartwatch for everyday use.",
  },
  {
    id: "electronics-4",
    title: "Mobile Speaker",
    price: "₹499",
    image: "https://m.media-amazon.com/images/I/71b122pwbpL._AC_UY218_.jpg",
    description: "Portable speaker with deep bass and long battery life.",
  },
  {
    id: "electronics-5",
    title: "Sony Wireless Earbuds",
    price: "₹2,899",
    image: "https://m.media-amazon.com/images/I/51B6+Iyd3ML._AC_UY218_.jpg",
    description: "Premium sound, noise-canceling, with charging case.",
  },
  {
    id: "electronics-6",
    title: "Apple iPad (11th Gen)",
    price: "₹28,999",
    image: "https://m.media-amazon.com/images/I/61kMIKm23VL._AC_UY218_.jpg",
    description: "Versatile tablet for work and play.",
  },
  {
    id: "electronics-7",
    title: "Canon DSLR Camera",
    price: "₹23,500",
    image: "https://m.media-amazon.com/images/I/6122KmUSM4L._AC_UY218_.jpg",
    description: "Capture stunning photos and videos.",
  },
  {
    id: "electronics-8",
    title: "HP Pavilion Laptop",
    price: "₹48,999",
    image: "https://m.media-amazon.com/images/I/615itEeM5ZL._AC_UY218_.jpg",
    description: "Reliable laptop for everyday tasks.",
  },
  {
    id: "electronics-9",
    title: "Samsung Galaxy S23",
    price: "₹59,999",
    image: "https://m.media-amazon.com/images/I/719zApN1mhL._AC_UY218_.jpg",
    description: "Flagship smartphone with advanced features.",
  },
  {
    id: "electronics-10",
    title: "Google Chromecast",
    price: "₹2,499",
    image: "https://m.media-amazon.com/images/I/415kWNOHUiL._AC_UL320_.jpg",
    description: "Stream your favorite shows easily.",
  },
];

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

const Electronics = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="w-full bg-white py-10 px-20">
      <div className="max-w-[1600px] mx-auto px-0">
        <h2 className="text-2xl font-bold mb-2 text-center">Best of Electronics</h2>
        <p className="text-gray-500 text-center mb-8">
          Discover the latest electronics, handpicked for you. Shop top brands and trending gadgets at unbeatable prices!
        </p>
        <div className="relative px-2">
          <Slider {...sliderSettings}>
            {electronics.map((item) => (
              <div key={item.id} className="px-2">
                <div
                  className="rounded-xl border border-gray-300 bg-white shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center overflow-hidden cursor-pointer"
                  onMouseDown={(e) => (e.currentTarget.startX = e.clientX)}
                  onMouseUp={(e) => {
                    const endX = e.clientX;
                    const delta = Math.abs(endX - e.currentTarget.startX);
                    if (delta < 5) setSelectedProduct(item);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain rounded-t-lg"
                    draggable="true"
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
              relatedProducts={electronics.filter((p) => p.id !== selectedProduct.id)}
              onSelectRelated={(product) => setSelectedProduct(product)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Electronics;
