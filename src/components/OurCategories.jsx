import React from 'react';

const categories = [
  {
    id: 1,
    title: "Mens Wear",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhzfGVufDB8fDB8fHww", // Men Fashion
    link: "Shop Now"
  },
  {
    id: 2,
    title: "Womens Wear",
    image: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhzfGVufDB8fDB8fHww", // Women Group
    link: "Shop Now"
  },
  {
    id: 3,
    title: "Kids Wear",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop", // Kids Fashion
    link: "Shop Now"
  },
  {
    id: 4,
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=800&auto=format&fit=crop", // Accessories
    link: "Shop Now"
  },
];

const CategorySection = () => {
  return (
    // Main Container with light pinkish background
    <div className="py-16 bg-pink-50">
      
      {/* 1. Header Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Categories</h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Explore a wide range of styles, handpicked to suit every taste and need.
        </p>
      </div>

      {/* 2. Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {categories.map((cat) => (
            // Individual Card
            <div 
              key={cat.id} 
              className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Background Image */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating White Box (Magic here) */}
              {/* Absolute positioning se bottom par laye, left-1/2 aur -translate-x-1/2 se center kiya */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl py-5 text-center shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900">{cat.title}</h3>
                <span className="text-rose-500 font-semibold text-sm mt-1 inline-block">
                  {cat.link}
                </span>
              </div>
              
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default CategorySection;