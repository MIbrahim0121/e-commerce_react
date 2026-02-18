import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, increment, decrement, removeToCart } from '../store/cartSlice';
import { useSelector } from 'react-redux';
import { X, ShoppingCart, Truck } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart = () => {

    const dispatch = useDispatch();
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [checkoutLoading, setCheckoutLoading] = useState(false);

    const products = useSelector((state) => state.products.cart);

    const subtotal = products.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + tax + shipping - discount;

    const handleApplyPromo = () => {
      if (promoCode.toUpperCase() === 'SAVE10') {
        const promoDiscount = subtotal * 0.1;
        setDiscount(promoDiscount);
        toast.success('Promo code applied! 10% discount ✨');
      } else if (promoCode.toUpperCase() === 'SAVE20') {
        const promoDiscount = subtotal * 0.2;
        setDiscount(promoDiscount);
        toast.success('Promo code applied! 20% discount ✨');
      } else if (promoCode.trim()) {
        toast.error('Invalid promo code');
      }
      setPromoCode('');
    };

    const handleRemoveItem = (id) => {
      dispatch(removeToCart(id));
      toast.success('Item removed from cart');
    };

    const handleCheckout = () => {
      setCheckoutLoading(true);
      setTimeout(() => {
        toast.success('Order placed successfully! 🎉');
        setCheckoutLoading(false);
      }, 1500);
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 },
      },
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

                {products.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
                        <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
                        <p className="text-gray-500 mb-6">Start shopping to add items to your cart</p>
                        <Link to="/shop" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition">
                          Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <p className="text-lg font-semibold text-gray-800 mb-4">
                                {products.length} {products.length === 1 ? 'item' : 'items'} in your cart
                            </p>
                            <motion.div 
                              className="space-y-4 relative"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                                {products.map((product) => (
                                    <motion.div 
                                      key={product.id} 
                                      className="bg-white rounded-lg shadow-md p-4 flex gap-4 hover:shadow-lg transition relative"
                                      variants={itemVariants}
                                      whileHover={{ scale: 1.02 }}
                                    >
                                        <button
                                            onClick={() => handleRemoveItem(product.id)}
                                            className='absolute top-2 right-2 p-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition hover:scale-110'
                                            title="Remove from cart"
                                        >
                                            <X size={18} />
                                        </button>
                                        {/* Image */}
                                        <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                                            <img
                                                // Check karein ke images exist karti hain ya nahi
                                                src={product.images[0]}
                                                // src={product.images && product.images.length > 0 ? product.images[0] : "https://via.placeholder.com/150"}
                                                alt={product.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 truncate">{product.title}</h3>
                                            <p className="text-lg font-bold text-blue-600 mt-1">${product.price.toFixed(2)}</p>
                                            <p className="text-sm text-gray-500 mt-1">Total: ${(product.price * product.quantity).toFixed(2)}</p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50">
                                                <button
                                                    onClick={() => dispatch(decrement(product.id))}
                                                    className="px-3 py-1 text-gray-600 hover:bg-gray-200 transition"
                                                >
                                                    −
                                                </button>
                                                <span className="px-4 py-1 font-semibold text-gray-800 border-l border-r border-gray-300">
                                                    {product.quantity}
                                                </span>
                                                <button
                                                    onClick={() => dispatch(increment(product.id))}
                                                    className="px-3 py-1 text-gray-600 hover:bg-gray-200 transition"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Order Summary */}
                        <motion.div 
                          className="lg:col-span-1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                                {/* Promo Code Section */}
                                <div className="mb-6 pb-6 border-b">
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">Promo Code</label>
                                  <div className="flex gap-2">
                                    <input
                                      type="text"
                                      value={promoCode}
                                      onChange={(e) => setPromoCode(e.target.value)}
                                      placeholder="Enter code"
                                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                    />
                                    <button
                                      onClick={handleApplyPromo}
                                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-semibold transition"
                                    >
                                      Apply
                                    </button>
                                  </div>
                                  <p className="text-xs text-gray-500 mt-2">Try: SAVE10 or SAVE20</p>
                                </div>

                                <div className="space-y-4 mb-6 border-b pb-4">
                                    <div className="flex justify-between text-gray-700">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span className="flex items-center gap-1">
                                          <Truck size={16} />
                                          Shipping
                                        </span>
                                        <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                                          {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Tax (10%)</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    {discount > 0 && (
                                      <div className="flex justify-between text-green-600 font-semibold">
                                        <span>Discount</span>
                                        <span>-${discount.toFixed(2)}</span>
                                      </div>
                                    )}
                                </div>

                                <div className="flex justify-between items-center mb-6 text-xl font-bold text-gray-900">
                                    <span>Total</span>
                                    <span className="text-red-600">${total.toFixed(2)}</span>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    disabled={checkoutLoading}
                                    className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-70 text-white font-bold py-3 px-4 rounded-lg transition mb-3 disabled:cursor-not-allowed"
                                >
                                    {checkoutLoading ? 'Processing...' : 'Proceed to Checkout'}
                                </button>
                                <Link to="/shop" className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-4 rounded-lg transition text-center">
                                    Continue Shopping
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart