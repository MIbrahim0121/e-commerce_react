import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-[#ffe3f9] font-sans text-gray-900">
      {/* 1. Header Section */}
      <section className="py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Have a question about your order, sizing, shipping, or just want to say hello? 
          Our team at Velora is always happy to hear from you.
        </p>
      </section>

      {/* 2. Form & Info Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Send Us Message Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
            <h2 className="text-xl font-bold mb-8">Send Us Message</h2>
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Name *" 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-400"
              />
              <input 
                type="email" 
                placeholder="Email *" 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-400"
              />
              <textarea 
                placeholder="Comment *" 
                rows="5" 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-400"
              ></textarea>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <input type="checkbox" id="save-info" className="accent-red-500" />
                <label htmlFor="save-info">Save my name, email and website in this browser</label>
              </div>

              <button className="bg-[#ef4444] text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-all">
                SEND
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-6">
            {[
              { icon: '✉️', label: 'Email', value: 'contact@info.com' },
              { icon: '📞', label: 'Phone', value: '929-242-6868' },
              { icon: '📍', label: 'Address', value: '123 Fifth Avenue, New York, NY 10160' },
              { icon: '❤️', label: 'Follow Us', value: 'Social Icons' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl flex items-center gap-6 shadow-sm border border-gray-50">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-sm uppercase text-gray-400 tracking-wider">{item.label}</p>
                  <p className="text-gray-800 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Support Topics Grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Explore Our Support Topics</h2>
          <p className="text-gray-500">From returns and shipping to sizing and payments, we've got answers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Returns & Exchanges', links: ['Returns & Exchanges', 'How to Start a Return', 'Check Return Status'] },
            { title: 'Ordering & Payment', links: ['Modify or Cancel an Order', 'Pre-order Items', 'Payment Methods'] },
            { title: 'Shipping & Delivery', links: ['Shipping Options & Costs', 'Estimated Delivery Times', 'Track Your Order'] },
            { title: 'Product Information', links: ['Materials & Fabrics', 'Care Instructions', 'Availability & Restocks'] },
            { title: 'Account & Privacy', links: ['Create or Manage Your Account', 'Password Reset Help', 'Privacy Policy'] },
            { title: 'Sizing & Fit', links: ['Size Guide', 'Fit Tips & Recommendations', 'Product Measurements'] }
          ].map((topic, idx) => (
            <div key={idx} className="bg-[#fdf6f6] p-10 rounded-3xl border border-transparent hover:border-red-100 transition-all">
              <h3 className="font-bold mb-6 text-lg border-b border-red-100 pb-2 inline-block">{topic.title}</h3>
              <ul className="space-y-3">
                {topic.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-sm text-gray-600 hover:text-red-500 transition-colors underline-offset-4 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;