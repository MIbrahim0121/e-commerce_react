import React from 'react';
import { Truck, Package, CreditCard, Headphones } from 'lucide-react';

const Services = () => {
  const features = [
    { icon: <Truck size={28} />, title: "Free Standard Delivery", sub: "On all Orders Over $100" },
    { icon: <Package size={28} />, title: "Quick Delivery", sub: "Delivery within 3 Days across US" },
    { icon: <CreditCard size={28} />, title: "Secure Payments", sub: "Secure Payment Methods" },
    { icon: <Headphones size={28} />, title: "Top Rated Customer Service", sub: "Quick Responses & Solutions" },
  ];

  return (
    <section className="bg-pink-50 py-10 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-red-500 mb-3">
              {feature.icon}
            </div>
            <h3 className="font-bold text-gray-900 text-sm">{feature.title}</h3>
            <p className="text-gray-500 text-xs mt-1">{feature.sub}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;