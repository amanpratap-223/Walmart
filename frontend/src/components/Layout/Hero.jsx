import React from 'react';

// Card data with new images and categories
const cards = [
  {
    title: "Save on Sunsscreen",
    subtitle: "Shop now",
    // Miscellaneous daily use items (groceries)
    image: "https://images.unsplash.com/photo-1594527964562-32ed6eb11709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3Vuc2NyZWVufGVufDB8fDB8fHww", // grocery bag
    bg: "bg-white",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Hot July 4th savings",
    subtitle: "Shop now",
    // Miscellaneous household items
    image: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3RzfGVufDB8fDB8fHww", // household items
    bg: "bg-white-100",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    bigText: true,
    
  },
  {
    title: "Shop the latest in electronics",
    subtitle: "Shop now",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D", // beauty products
    bg: "bg-white",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Toys & More",
    subtitle: "Shop now",
    image: "https://images.unsplash.com/photo-1676483302554-ff6c7ae9e8d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fFRveXMlMjBhbmQlMjBtb3JlfGVufDB8fDB8fHww", // toys
    bg: "bg-white",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    title: "Makeup essentials",
    subtitle: "Shop now",
    // Makeup flatlay
    image: "https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3RzfGVufDB8fDB8fHww", // makeup
    bg: "bg-pink-50",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Up to 55% off",
    subtitle: "Shop now",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80", // electronics
    bg: "bg-yellow-100",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Last-minute grocery",
    subtitle: "Shop now",
    image: "https://images.unsplash.com/photo-1586090643003-b2bfb4fbd833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D", // gadgets
    bg: "bg-blue-100",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Save big on furniture",
    subtitle: "Shop now",
    // Miscellaneous household items (kitchen utensils)
    image: "https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D", // utensils
    bg: "bg-blue-100",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
];

const Hero = () => (
  <div className="min-h-screen bg-blue-50 py-8 px-20">
    <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[280px] px-2 md:px-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`relative rounded-2xl shadow-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 ${card.bg} ${card.colSpan} ${card.rowSpan}`}
          style={{ minHeight: card.bigText ? '480px' : undefined }}
        >
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative z-10 p-6 flex flex-col h-full justify-between">
            <div>
              <h2 className={`font-extrabold ${card.bigText ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'} tracking-tight text-black-900 `}>

                {card.title}
              </h2>
              <p className="text-gray-900 font-medium">{card.subtitle}</p>
            </div>
            {card.button && (
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition">
                {card.button}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Hero;