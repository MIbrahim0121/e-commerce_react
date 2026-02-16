import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, increment, decrement, removeToCart } from '../store/cartSlice';
import { useSelector } from 'react-redux';
import { X } from 'lucide-react';

const Cart = () => {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.cart);
    console.log(products, "1");

    const totalPrice = products.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const hanndleAddToCart = () => {
        dispatch(addToCart());
    }
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

                {products.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
                        <p className="text-gray-500">Start shopping to add items to your cart</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <p className="text-lg font-semibold text-gray-800 mb-4">
                                {products.length} {products.length === 1 ? 'item' : 'items'} in your cart
                            </p>
                            <div className="space-y-4 relative">
                                {products.map((product) => (
                                    <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex gap-4 hover:shadow-lg transition relative">
                                        <button
                                            onClick={() => dispatch(removeToCart(product.id))}
                                            className='absolute top-2 right-2 p-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition hover:scale-110'
                                            title="Remove from cart"
                                        >
                                            <X size={18} />
                                        </button>
                                        {/* Image */}
                                        <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                                            <img
                                                // Check karein ke images exist karti hain ya nahi
                                                src={product.images && product.images.length > 0 ? product.images[0] : "https://via.placeholder.com/150"}
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

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6 border-b pb-4">
                                    <div className="flex justify-between text-gray-700">
                                        <span>Subtotal</span>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-semibold">Free</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Tax</span>
                                        <span>${(totalPrice * 0.1).toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-6 text-xl font-bold text-gray-900">
                                    <span>Total</span>
                                    <span className="text-blue-600">${(totalPrice * 1.1).toFixed(2)}</span>
                                </div>

                                <button
                                    onClick={hanndleAddToCart}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition mb-3"
                                >
                                    Proceed to Checkout
                                </button>
                                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-4 rounded-lg transition">
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart