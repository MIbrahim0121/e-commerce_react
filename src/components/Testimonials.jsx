import React from 'react';
import { Quote } from 'lucide-react'; // Make sure you have lucide-react installed: npm install lucide-react

const testimonials = [
  {
    id: 1,
    quote: "Velora has completely transformed how I shop for clothes. Every piece feels thoughtfully designed and incredibly comfortable — from their polos to their jackets. It’s rare to find a brand that gets the fit, style, and quality right every single time.",
    name: "Jessica M.",
    location: "San Diego",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" // Sample woman image
  },
  {
    id: 2,
    quote: "I’m always looking for clean, versatile styles I can wear to work or on the weekends — and Velora delivers. I picked up a few items from their Men's collection and was blown away by the craftsmanship. The trousers, especially, have become my go-to.",
    name: "Darren L.",
    location: "New York",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" // Sample man image
  },
  {
    id: 3,
    quote: "Shopping for myself and my daughter usually means bouncing between stores, but Velora made it easy. I loved the quality of the dresses I ordered, and my daughter adored her Mini Mode pieces. Stylish, comfortable, and built to last — we’re both fans for life!",
    name: "Michelle T.",
    location: "Chicago",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" // Sample woman image
  }
];

const TestimonialsSection = () => {
  return (
    // Main Section Container with background color
    <section className="py-16 bg-white">
      
      {/* 1. Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          What Our Shoppers Say
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Store that nails fashion and comfort.
        </p>
      </div>

      {/* 2. Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout: 1 column on mobile, 3 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {testimonials.map((testimonial) => (
            // Individual Testimonial Card
            <div 
              key={testimonial.id} 
              className="bg-[#F9F1F0] p-8 rounded-2xl shadow-sm flex flex-col h-full" // h-full ensures cards are same height
            >
              
              {/* Quote Icon */}
              <div className="text-rose-500 mb-6">
                {/* Using lucide-react Quote icon, you can also use an SVG */}
                <Quote size={40} fill="currentColor" strokeWidth={0} className="transform -scale-x-100" /> 
              </div>

              {/* Testimonial Text */}
              {/* flex-grow pushes the user profile to the bottom */}
              <p className="text-gray-700 leading-relaxed mb-8 grow">
                "{testimonial.quote}"
              </p>

              {/* User Profile Section */}
              <div className="flex items-center mt-auto">
                {/* User Image */}
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                
                {/* User Name and Location */}
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <span className="text-gray-500 text-sm">
                    {testimonial.location}
                  </span>
                </div>
              </div>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;