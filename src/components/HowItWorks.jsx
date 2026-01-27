import React from 'react';
import { ShoppingBag, Clock, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingBag size={24} />,
      title: "Shop Styles",
      desc: "Browse our curated collections for Men, Women, Kids & Accessories."
    },
    {
      icon: <Clock size={24} />,
      title: "Pick Your Fit",
      desc: "Find your perfect size with our detailed fit guides and style notes."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Checkout Fast",
      desc: "Enjoy a quick and secure checkout experience with flexible payment options."
    }
  ];

  return (
    <section className="py-12 bg-pink-50 flex justify-center px-4">
      {/* Main White Box */}
      <div className="bg-white max-w-6xl w-full rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
          <p className="text-xs text-gray-500 uppercase tracking-wide mt-2">Just Pick, Pack and Ship</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              {/* Icon Circle */}
              <div className="bg-red-50 text-red-500 p-4 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;