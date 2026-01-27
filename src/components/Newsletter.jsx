import React from 'react';
import { Instagram } from 'lucide-react';

const Newsletter = () => {
  // Dummy Images for the Instagram Grid
  const images = [
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1664202526475-8f43ee70166d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhzfGVufDB8fDB8fHww"
  ];

  return (
    <section className="py-16 bg-white text-center px-4">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Get 10% Off on Your First Order
      </h2>
      <p className="text-gray-500 mb-8 text-sm">
        Plus exclusive access to product drops, style tips, and insider deals.
      </p>

      {/* Input Form */}
      <div className="flex justify-center mb-12">
        <form className="flex w-full max-w-md gap-2">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL *" 
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
          />
          <button className="bg-red-500 text-white px-6 py-3 text-sm font-bold uppercase hover:bg-red-600 transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* Instagram Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl h-64 cursor-pointer group">
            <img 
              src={img} 
              alt="Insta feed" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* Follow Us Link */}
      <div className="flex items-center justify-center gap-2 text-gray-800 font-medium">
        <Instagram size={18} className="text-red-500" />
        <span>Follow us</span>
        <span className="text-gray-400">@VeloraStyle</span>
      </div>

    </section>
  );
};

export default Newsletter;