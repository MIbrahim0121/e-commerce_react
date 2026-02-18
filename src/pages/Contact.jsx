import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all fields correctly');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon. ✉️');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="bg-[#ffe3f9] font-sans text-gray-900">
      {/* 1. Header Section */}
      <motion.section 
        className="py-16 text-center px-4"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Have a question about your order, sizing, shipping, or just want to say hello? 
          Our team at Velora is always happy to hear from you.
        </p>
      </motion.section>

      {/* 2. Form & Info Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Left: Send Us Message Form */}
          <motion.div 
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold mb-8">Send Us Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *" 
                  className={`w-full p-4 bg-gray-50 border rounded-lg focus:outline-none focus:border-red-400 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *" 
                  className={`w-full p-4 bg-gray-50 border rounded-lg focus:outline-none focus:border-red-400 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject *" 
                  className={`w-full p-4 bg-gray-50 border rounded-lg focus:outline-none focus:border-red-400 transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *" 
                  rows="5" 
                  className={`w-full p-4 bg-gray-50 border rounded-lg focus:outline-none focus:border-red-400 transition-colors ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'SEND MESSAGE'
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Details */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
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
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Support Topics Grid */}
      <motion.section 
        className="bg-white py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Explore Our Support Topics</h2>
          <p className="text-gray-500">From returns and shipping to sizing and payments, we've got answers.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
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
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ContactPage;