import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // 1. URL se ID nikalne ke liye
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice"; // Path check kar lena
import { toast } from "react-toastify";
import { Star, ShoppingBasket } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams(); // URL mein se ID (e.g., '5') yahan aayegi
  const dispatch = useDispatch();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Quantity state
  const [selectedImage, setSelectedImage] = useState(""); // Gallery ke liye

  // 2. DATA FETCHING (Jab bhi ID change hogi, ye chalega)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setSelectedImage(data.images[0]); // Pehli image ko main bana do
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // 3. ADD TO CART WITH QUANTITY
  const handleAddToCart = () => {
    dispatch(addToCart({
        id: product.id,
        title: product.title,
        image: selectedImage,
        price: product.price,
        quantity: quantity // Yahan hum user ki select ki hui quantity bhej rahe hain
    }));
    toast.success(`${product.title} Added to Cart!`);
  };

  if (loading) return <div className="text-center py-20 text-xl font-bold">Loading...</div>;
  if (!product) return <div className="text-center py-20 text-red-500">Product not found!</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans bg-white">
      
      {/* GRID LAYOUT (Left: Image, Right: Info) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* --- LEFT SIDE: IMAGES --- */}
        <div className="flex flex-col">
          {/* Main Big Image */}
          <div className="h-100 md:h-125 w-full bg-gray-100 rounded-xl overflow-hidden mb-4 border border-gray-200 shadow-sm relative group">
             <img src={selectedImage} alt={product.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
          </div>
          
          {/* Thumbnails (Choti Images) */}
          <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
             {product.images.map((img, index) => (
               <img 
                 key={index} 
                 src={img} 
                 alt=""
                 onClick={() => setSelectedImage(img)} // Click par Main Image change hogi
                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${selectedImage === img ? 'border-red-500 scale-105' : 'border-gray-200 hover:border-gray-400'}`}
               />
             ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: DETAILS --- */}
        <div className="flex flex-col justify-center">
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
           
           {/* Rating */}
           <div className="flex items-center gap-2 mb-6">
             <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
                ))}
             </div>
             <span className="text-gray-500 text-sm">({product.rating} Rating)</span>
           </div>

           {/* Price */}
           <p className="text-3xl font-bold text-red-600 mb-6">
              ${product.price} 
              <span className="text-gray-400 text-lg font-normal line-through ml-3">
                  ${(product.price * 1.2).toFixed(2)}
              </span>
           </p>

           <p className="text-gray-600 mb-8 leading-relaxed text-lg">
             {product.description}
           </p>

           {/* ACTIONS ROW */}
           <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              
              {/* Quantity Counter */}
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))} 
                  className="px-4 py-3 hover:bg-gray-100 text-xl font-bold"
                >-</button>
                <span className="px-6 py-3 font-bold text-lg border-x-2 border-gray-300">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)} 
                  className="px-4 py-3 hover:bg-gray-100 text-xl font-bold"
                >+</button>
              </div>

              {/* Add Button */}
              <button 
                onClick={handleAddToCart}
                className="flex-1 w-full bg-black text-white py-4 rounded-lg font-bold text-lg hover:bg-red-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingBasket /> ADD TO CART
              </button>
           </div>

           {/* Delivery Info */}
           <div className="border-t pt-6 text-sm text-gray-500 space-y-2">
             <p className="flex items-center gap-2">🚚 Free Delivery on orders over $50</p>
             <p className="flex items-center gap-2">✅ 30 Days Return Policy</p>
           </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;