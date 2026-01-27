import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 text-sm font-sans w-screen  ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-1">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
             {/* Logo Icon (Simple Red Circle V) */}
             <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg italic">
                V
             </div>
             <span className="text-white text-xl font-bold tracking-wide">VELORA</span>
          </div>
          
          <p className="mb-6 leading-relaxed">
            Classic looks for Men, Women & Kids.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="/" className="text-red-500 font-medium">Home</a></li>
            <li><a href="/shop" className="hover:text-white transition">Shop</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Shop */}
        <div>
          <h3 className="text-white font-bold mb-4">Shop</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">Mens Wear</a></li>
            <li><a href="#" className="hover:text-white transition">Womens Wear</a></li>
            <li><a href="#" className="hover:text-white transition">Kids Wear</a></li>
            <li><a href="#" className="hover:text-white transition">Accessories</a></li>
          </ul>
        </div>

        {/* Column 4: Help */}
        <div>
          <h3 className="text-white font-bold mb-4">Help</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">FAQ's</a></li>
            <li><a href="#" className="hover:text-white transition">Return Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Order Status</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping & Delivery</a></li>
          </ul>
        </div>

        {/* Column 5: My Profile */}
        <div>
          <h3 className="text-white font-bold mb-4">My Profile</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">My Account</a></li>
            <li><a href="#" className="hover:text-white transition">Track Order</a></li>
            <li><a href="#" className="hover:text-white transition">My Cart</a></li>
            <li><a href="#" className="hover:text-white transition">Order History</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 max-w-7xl mx-auto px-4 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright Text */}
        <p className="text-xs">
          Copyright © 2026 Clothing Store All rights reserved
        </p>

        {/* Payment Methods (Images from Icons8 CDN for realistic look) */}
        <div className="flex gap-2">
            <img src="https://img.icons8.com/color/36/paypal.png" alt="PayPal" />
            <img src="https://img.icons8.com/color/36/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/36/mastercard.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/36/amex.png" alt="Amex" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;