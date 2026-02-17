import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* 1. Hero Section */}
      <section className="relative h-150 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1920&h=600&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="relative z-20 max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-4">Style That Moves With You</h1>
          <p className="text-lg italic font-light">Born from a passion for timeless design and everyday comfort</p>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section className="py-20 px-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">What Makes Velora Stand Out</h2>
        <p className="text-gray-500 mb-12">Style, Comfort & More – Here's Why You'll Love Us</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Premium Quality', desc: 'Crafted with care using soft, durable fabrics designed to last.' },
            { title: 'Timeless Style', desc: 'Clean silhouettes and versatile pieces you can wear season after season.' },
            { title: 'In-House Design', desc: 'Every detail is imagined by our in-house design team to bring you standout staples.' },
            { title: 'For Every Body', desc: 'Inclusive fits and sizes designed to flatter all shapes and ages.' }
          ].map((item, index) => (
            <div key={index} className="border p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center text-red-600">
                {/* Icon Placeholder */}
                <span className="text-xl">★</span>
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. More Than Just Clothing (Alternating) */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <LazyLoadImage
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&h=600&q=80"
              alt="About"
              className="rounded-xl shadow-xl"
              effect="blur"
              placeholderSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+"
            />
          </div>
          <div className="w-full md:w-1/2 bg-white p-12 rounded-xl shadow-sm border ml-0 md:-ml-20 z-10">
            <h2 className="text-3xl font-bold mb-6">More Than Just Clothing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Velora, we believe fashion should feel as good as it looks. Born from a passion for timeless design...
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're dressing up for a moment or down for the everyday, our collections are made to move with you.
            </p>
          </div>
        </div>
      </section>
       {/* 3. The Overlap Section - Visual Storytelling */}
      <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Row 1 */}
         
          {/* Row 2 - Thoughtfully Designed (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-0 md:gap-12">
            <div className="w-full md:w-3/5">
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Design"
                className="rounded-2xl shadow-2xl w-full h-100 object-cover"
                effect="blur"
                placeholderSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+"
              />
            </div>
            <div className="w-full md:w-2/5 bg-[#1a1a1a] text-white p-8 md:p-14 rounded-2xl shadow-lg -mt-12 md:mt-0 md:-mr-24 z-20 relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Thoughtfully Designed for All</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Our range covers Men, Women, and Kids, with each piece carefully crafted to combine form, function, and feeling. We obsess over fit, fabric, and finish so you don’t have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-20 px-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="border p-10 rounded-xl text-center">
          <div className="text-red-600 text-3xl mb-4 italic">👁</div>
          <h3 className="text-xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600 text-sm">To create timeless, high-quality fashion that blends comfort with confidence...</p>
        </div>
        <div className="border p-10 rounded-xl text-center">
          <div className="text-red-600 text-3xl mb-4 italic">🎯</div>
          <h3 className="text-xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-600 text-sm">To become a trusted, global fashion destination that redefines modern essentials...</p>
        </div>
      </section>

      {/* 5. Newsletter Section */}
      <section className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Get 10% Off on Your First Order</h2>
        <div className="flex max-w-md mx-auto gap-2">
          <input type="email" placeholder="ENTER YOUR EMAIL *" className="flex-1 p-3 border rounded focus:outline-none focus:border-red-500" />
          <button className="bg-red-600 text-white px-8 py-3 rounded font-bold uppercase hover:bg-red-700 transition">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;