// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { ShoppingBasket, Eye } from 'lucide-react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../store/cartSlice';
// import { toast } from 'react-toastify';
// const NewArrivals = () => {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     // Fetch new arrivals data from an API or database

//     const fetchnewArrivals = async () => {
//       const response = await fetch('https://dummyjson.com/products');
//       const data = await response.json();
//       console.log(data);
//       setProducts(data.products.slice(0, 10));

//     }
//     fetchnewArrivals()

//   }  
//     , [])

//   const dispatch = useDispatch();


//   const addCart = (product) => {
//     try {
//      dispatch(addToCart(product));
//      toast.success(` added to cart!`, {
//        position: 'top-center',
//        autoClose: 2000,
//        hideProgressBar: false,
//        closeOnClick: true,
//        pauseOnHover: true,
//        draggable: true,
//      });
//      } catch (error) {
//       console.log(error);
//       toast.error('Failed to add to cart', {
//         position: 'top-center',
//       });
//     }
//   }

//   const handleProduct = () => {
//     console.log("handle product ok");
    
//   }


//   return (
//     <div className=' grid md:grid-cols-4 grid-cols-2  gap-5'>

//       {products.length > 0 && products.map((product) => (
//         <div key={product.id} className='w-full  max-w-70 font-sans group cursor-pointer'>
//           <div className='' >
//             <div className="w-full  max-w-70 font-sans group cursor-pointer">

//               {/* 1. IMAGE PLACEHOLDER (Gray Box) */}
//               <div onClick={handleProduct} className="relative w-full h-95 bg-gray-200 mb-4 overflow-hidden">

//                 {/* Center Text just to show it's an image area */}
//                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
//                   <img src={product.images[0]} alt="" />
//                 </div>

//                 {/* Hover Action Buttons (CSS Only - No JS) */}
//                 {/* By default opacity-0 hai, hover karne par opacity-100 hogi */}
//                 <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
//                   <div className="bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition-colors">
//                     <ShoppingBasket size={18} />
//                   </div>
//                   <div className="bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition-colors">
//                     <Eye size={18} />
//                   </div>
//                 </div>
//               </div>

//               {/* 2. PRODUCT DETAILS */}
//               <div className="flex flex-col gap-1">

//                 {/* Title */}
//                 <h3 className="text-[17px] font-semibold text-gray-900 hover:text-red-600 transition-colors">
//                   {product.title}
//                 </h3>

//                 {/* Category */}
//                 <p className="text-sm text-gray-500">
//                   {product.category}
//                 </p>

//                 {/* Price */}
//                 <p className="text-[17px] font-bold text-gray-900 mt-1 mb-3">
//                   ₹{product.price}
//                 </p>

//                 {/* 3. SIZES (Hardcoded - No Loop) */}
//                 <div className="flex gap-2 mb-3">
//                   {/* Size M (Active Style) */}
//                   <div className="w-9 h-9 flex items-center justify-center border border-black font-medium text-black text-sm">
//                     M
//                   </div>

//                   {/* Size L (Inactive Style) */}
//                   <div className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-600 text-sm hover:border-gray-500">
//                     L
//                   </div>

//                   {/* Size XL (Inactive Style) */}
//                   <div className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-600 text-sm hover:border-gray-500">
//                     XL
//                   </div>
//                 </div>

//                 {/* 4. COLORS (Hardcoded - No Loop) */}
//                 <div className="flex gap-2">
//                   {/* Purple Color */}
//                   <div className="w-6 h-6 rounded-sm cursor-pointer hover:ring-1 ring-offset-1 ring-gray-400"
//                     style={{ backgroundColor: '#8E44AD' }}>
//                   </div>

//                   {/* Teal Color */}
//                   <div className="w-6 h-6 rounded-sm cursor-pointer hover:ring-1 ring-offset-1 ring-gray-400"
//                     style={{ backgroundColor: '#2E86C1' }}>
//                   </div>

//                   {/* Green Color */}
//                   <div className="w-6 h-6 rounded-sm cursor-pointer hover:ring-1 ring-offset-1 ring-gray-400"
//                     style={{ backgroundColor: '#82E0AA' }}>
//                   </div>
//                 </div>
//                 <button className='bg-red-600 text-white px-5 py-2 ' onClick={() => addCart(product)} >add to cart</button>

//               </div>
//             </div>
//           </div>
//         </div>


//       ))}
//     </div>
//   )
// }

// export default NewArrivals



import React, { useState, useEffect } from 'react'
import { ShoppingBasket, Eye } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice'; // Make sure path is correct
import { toast } from 'react-toastify';
// 1. IMPORT LINK
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchnewArrivals = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products.slice(0, 8));
    }
    fetchnewArrivals()
  }, [])

  // 2. UPDATED ADD CART FUNCTION
  const addCart = (e, product) => {
    e.stopPropagation(); // Link ko click hone se roko
    e.preventDefault();  // Page refresh/navigate se roko

    try {
    //   dispatch(addToCart(
    //     {
    //     id: product.id,
    //     title: product.title,
    //     price: product.price,
    //     image: product.images[0],
    //      // Use first image if available
    // }
    //   ));
      dispatch(addToCart(product)); 
      toast.success(`${product.title} added to cart!`, {
        position: 'top-center',
        autoClose: 2000,
      });
    } catch (error) { 
      console.log(error);
      toast.error('Failed to add to cart');
    }
  }

  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
      {products.length > 0 && products.map((product) => (
        
        // 3. MAIN WRAPPER KO 'LINK' BANA DIYA
        // Ab kahin bhi click kroge to '/shop/id' par jaoge
        <Link 
            to={`/shop/${product.id}`} 
            key={product.id} 
            className='w-full max-w-70 font-sans group cursor-pointer block' // 'block' add kiya taake link full width le
        >
          <div className='w-full'>
            
              {/* IMAGE SECTION */}
              <div className="relative w-full h-95 bg-gray-200 mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  <img src={product.images[0]} alt="" className='w-full h-full object-cover'/>
                </div>

                {/* HOVER ICONS */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {/* Agar aap chahein to is icon par bhi addCart laga sakte hain */}
                  <div 
                    onClick={(e) => addCart(e, product)}
                    className="bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition-colors z-10"
                  >
                    <ShoppingBasket size={18} />
                  </div>
                  <div className="bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition-colors">
                    <Eye size={18} />
                  </div>
                </div>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="flex flex-col gap-1">
                <h3 className="text-[17px] font-semibold text-gray-900 hover:text-red-600 transition-colors truncate">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 capitalize">
                  {product.category}
                </p>
                <p className="text-[17px] font-bold text-gray-900 mt-1 mb-3">
                  ₹{product.price}
                </p>

                {/* Sizes & Colors (Visual Only) */}
                <div className="flex gap-2 mb-3">
                   <div className="w-9 h-9 flex items-center justify-center border border-black font-medium text-black text-sm">M</div>
                   <div className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-600 text-sm">L</div>
                   <div className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-600 text-sm">XL</div>
                </div>

                <div className="flex gap-2 mb-4">
                  <div className="w-6 h-6 rounded-sm bg-[#8E44AD]"></div>
                  <div className="w-6 h-6 rounded-sm bg-[#2E86C1]"></div>
                  <div className="w-6 h-6 rounded-sm bg-[#82E0AA]"></div>
                </div>
                
                {/* 4. MAIN BUTTON with FIXED EVENT */}
                {/* Yahan 'e' pass karna zaroori hai */}
                <button 
                    className='bg-red-600 text-white px-5 py-2 w-full hover:bg-red-700 transition' 
                    onClick={(e) => addCart(e, product)} 
                >
                    Add to Cart
                </button>

              </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NewArrivals