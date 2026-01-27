import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ShoppingBasket, Eye } from 'lucide-react';
import { Filter } from 'lucide-react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../store/cartSlice';



const Shop = () => {
  const [allProducts, setallProducts] = useState([])
  const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([]);   

// Filters 
        const [selectedCategory, setSelectedCategory] = useState("All");
const [priceRange, setPriceRange] = useState(2000); 
const [sortOrder, setSortOrder] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 9;

  useEffect(() => {

    const fetchnewArrivals = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      setallProducts(data.products);
      setProducts(data.products);


      const uniqueCategories = ["All", ...new Set(data.products.map(item => item.category))];
      setCategories(uniqueCategories);
      

    }
    fetchnewArrivals()

  }
    , [])

    useEffect(() => {
     let tempProducts = [...allProducts];
  
    //   filtering 
     if(selectedCategory !== "All"){
      tempProducts = tempProducts.filter(product => product.category === selectedCategory);
    }
// filter by price 
    tempProducts = tempProducts.filter(product => product.price <= priceRange);
    
    if(sortOrder === "low-high"){
      tempProducts.sort((a,b) => a.price - b.price);
    }
    else if(sortOrder === "high-low"){
      tempProducts.sort((a,b) => b.price - a.price);
    }
    // update ui 
    setProducts(tempProducts);

    }, [selectedCategory, priceRange, sortOrder, allProducts])
    
    const dispatch = useDispatch();

    const addCart = (product) => {
      try {
        dispatch(addToCart(product));
        toast.success(` added to cart!`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (error) {
        console.log(error);
        toast.error('Failed to add to cart', {
          position: 'top-center',
        });
      }
    }
  return (
    <div className='px-20' >
      <div>
        <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center md:text-left  text-gray-900 mb-8">Shop</h1>

        

        {/* Filter and Sorting Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-6 space-y-4 sm:space-y-0">

          {/* Results Counter */}
          <p className="text-gray-600 text-sm">
            Showing <span className="font-medium text-gray-900">{(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, products.length)}</span> of <span className="font-medium text-gray-900">{products.length}</span> results
          </p>

          {/* Custom Sorting Dropdown */}
          <div className="relative inline-block w-full sm:w-auto">
            <select onChange={(e) => setSortOrder(e.target.value)}
              className="block w-full sm:w-48 appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-sm"
            >
              {/* <option>Sort by latest</option> */}
              <option value="low-high" >Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>

            {/* Custom Dropdown Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
      </div>
      <div className='mx-auto max-w-7xl px-4 py-8'>
  
  
  <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

  
    <div className='md:col-span-1'>
                          <div className="w-64 bg-white p-5 border border-gray-300 rounded-lg shadow-sm">
      
      {/* --- CATEGORIES SECTION --- */}
      <div className="mb-8">
        {/* Header */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Filter size={20} /> Categories
        </h3>
        
        {/* Scrollable List */}
        {/* 'custom-scrollbar' class neeche CSS me defined hai */}
        <div className="h-48 overflow-y-auto pr-2 custom-scrollbar"> 
          <ul className="space-y-3">
            {categories.map((cat, index) => (
              <li key={index} className="flex items-center gap-2">
                
                {/* Radio Button */}
                <input 
                  type="radio" 
                  name="category" 
                  id={cat}
                  onChange={()=>setSelectedCategory(cat)}
                  // Pehla item 'All' selected dikhane ke liye:
                  defaultChecked={index === 0} 
                  className="w-4 h-4 cursor-pointer accent-gray-800" 
                />
                
                {/* Label Text */}
                <label 
                  htmlFor={cat} 
                  className="text-gray-600 text-sm cursor-pointer hover:text-black"
                >
                  {cat}
                </label>

              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- PRICE FILTER SECTION --- */}
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-4">Max Price: $2000</h3>
        <h3 className="text-base font-bold text-gray-900 mb-4">Selected Price: ${priceRange}</h3>

        
        {/* Range Slider */}
        <input 
        onChange={(e)=> setPriceRange(e.target.value) }
          type="range" 
          min="0" 
          max="2000"
          defaultValue="2000"
          // 'accent-red-500' se slider ka button RED hoga (Image jaisa)
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
        />
        
        {/* Min/Max Labels */}
        <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
            <span>$0</span>
            <span>$2000</span>
        </div>
      </div>

    </div>



    
       </div>

 
    <div className='md:col-span-3'>
      
    
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        
        {products.length > 0 && products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => (
          <div key={product.id} className='w-full font-sans group cursor-pointer'>
            
              {/* 1. IMAGE PLACEHOLDER */}
              <div className="relative w-full h-75 bg-gray-200 mb-4 overflow-hidden rounded-md">
                
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  {/* Image fit karne ke liye object-cover add kiya */}
                  <img src={product.images[0]} alt="" className="w-full h-full object-cover"/>
                </div>

                {/* Hover Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <div className="bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition-colors">
                    <ShoppingBasket size={18} />
                  </div>
                  <div className="bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition-colors">
                    <Eye size={18} />
                  </div>
                </div>
              </div>

              {/* 2. PRODUCT DETAILS */}
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

                {/* SIZES */}
                <div className="flex gap-2 mb-3">
                  <div className="w-9 h-9 flex items-center justify-center border border-black font-medium text-black text-sm">M</div>
                  <div className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-600 text-sm hover:border-gray-500">L</div>
                  <div className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-600 text-sm hover:border-gray-500">XL</div>
                </div>

                {/* COLORS */}
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-sm cursor-pointer hover:ring-1 ring-offset-1 ring-gray-400" style={{ backgroundColor: '#8E44AD' }}></div>
                  <div className="w-6 h-6 rounded-sm cursor-pointer hover:ring-1 ring-offset-1 ring-gray-400" style={{ backgroundColor: '#2E86C1' }}></div>
                  <div className="w-6 h-6 rounded-sm cursor-pointer hover:ring-1 ring-offset-1 ring-gray-400" style={{ backgroundColor: '#82E0AA' }}></div>
                </div>
              </div>
             <button className='bg-red-600 text-white px-5 py-2 ' onClick={() => addCart(product)} >add to cart</button>

          
          </div>
        ))}

      </div>

      {/* Pagination Section */}
      <div className='flex justify-center mt-8'>
        <Stack spacing={2}>
          <Pagination 
            count={Math.ceil(products.length / itemsPerPage)} 
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            color="primary" 
            size="large"
          />
        </Stack>
      </div>
    </div>

  </div>
</div></div>
  )
}

export default Shop


/////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { ShoppingBasket, Eye, Filter } from 'lucide-react';

// const Shop = () => {
//     const [allProducts, setAllProducts] = useState([]); 
//     const [products, setProducts] = useState([]);       
//     const [categories, setCategories] = useState([]);   
    
//     // Filters States
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [priceRange, setPriceRange] = useState(2000); 

//     // --- NEW: Sorting State ---
//     const [sortOrder, setSortOrder] = useState(""); // Default empty

//     // 1. Data Fetching (Same as before)
//     useEffect(() => {
//         const fetchNewArrivals = async () => {
//             try {
//                 const response = await fetch('https://dummyjson.com/products?limit=100');
//                 const data = await response.json();
                
//                 setAllProducts(data.products);
//                 setProducts(data.products);

//                 const uniqueCategories = ["All", ...new Set(data.products.map(item => item.category))];
//                 setCategories(uniqueCategories);
                
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         };
//         fetchNewArrivals();
//     }, []);

//     // 2. FILTER & SORT LOGIC (Updated)
//     useEffect(() => {
//         // Hamesha original data ki COPY banao, taake original kharab na ho
//         let tempProducts = [...allProducts];

//         // A. Category Filter
//         if (selectedCategory !== "All") {
//             tempProducts = tempProducts.filter(product => product.category === selectedCategory);
//         }

//         // B. Price Filter
//         tempProducts = tempProducts.filter(product => product.price <= priceRange);

//         // --- NEW: C. Sorting Logic ---
//         if (sortOrder === "low-high") {
//             // Sasta pehle (Ascending)
//             tempProducts.sort((a, b) => a.price - b.price);
//         } else if (sortOrder === "high-low") {
//             // Mehnga pehle (Descending)
//             tempProducts.sort((a, b) => b.price - a.price);
//         }

//         setProducts(tempProducts);
        
//     }, [selectedCategory, priceRange, sortOrder, allProducts]); // sortOrder ko dependency me dala


//     return (
//         <div className='px-4 md:px-20 py-8 font-sans'>
//             <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">Shop</h1>

//             <div className="flex flex-col md:flex-row gap-8">

//                 {/* Left Sidebar (Same as before) */}
//                 <div className="w-full md:w-1/4 h-fit border p-4 rounded-lg shadow-sm">
//                     <div className="mb-6">
//                         <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
//                             <Filter size={18} /> Categories
//                         </h3>
//                         <ul className="space-y-2 text-sm text-gray-600 max-h-60 overflow-y-auto">
//                             {categories.map((cat) => (
//                                 <li key={cat} className="flex items-center gap-2">
//                                     <input 
//                                         type="radio" 
//                                         name="category" 
//                                         checked={selectedCategory === cat}
//                                         onChange={() => setSelectedCategory(cat)}
//                                         className="cursor-pointer"
//                                     />
//                                     <span onClick={() => setSelectedCategory(cat)} className="capitalize cursor-pointer hover:text-red-500">
//                                         {cat}
//                                     </span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div>
//                         <h3 className="text-lg font-bold mb-2">Max Price: ${priceRange}</h3>
//                         <input 
//                             type="range" min="0" max="2000" value={priceRange} 
//                             onChange={(e) => setPriceRange(Number(e.target.value))}
//                             className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
//                         />
//                     </div>
//                 </div>

//                 {/* Right Grid */}
//                 <div className="w-full md:w-3/4">
                    
//                     {/* --- NEW: Updated Select Dropdown --- */}
//                     <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//                         <p className="text-gray-600 text-sm">
//                             Showing <span className="font-bold text-black">{products.length}</span> results
//                         </p>
                        
//                         {/* Dropdown par onChange lagaya hai */}
//                         <select 
//                             onChange={(e) => setSortOrder(e.target.value)}
//                             className="border border-gray-300 rounded px-3 py-1 text-sm outline-none cursor-pointer"
//                         >
//                             <option value="">Sort by latest</option>
//                             <option value="low-high">Price: Low to High</option>
//                             <option value="high-low">Price: High to Low</option>
//                         </select>
//                     </div>

//                     {/* Product Grid (Same as before) */}
//                     {products.length > 0 ? (
//                         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
//                             {products.map((product) => (
//                                 <div key={product.id} className='w-full font-sans group cursor-pointer'>
//                                     <div className="relative w-full h-75 bg-gray-200 mb-4 overflow-hidden rounded-md">
//                                         <div className="absolute inset-0 flex items-center justify-center">
//                                             <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
//                                         </div>
//                                         {/* Hover Icons code... */}
//                                     </div>
//                                     <div className="flex flex-col gap-1">
//                                         <h3 className="text-[16px] font-semibold text-gray-900 truncate">{product.title}</h3>
//                                         <p className="text-sm text-gray-500 capitalize">{product.category}</p>
//                                         <p className="text-[16px] font-bold text-gray-900 mt-1 mb-3">₹{product.price}</p>
//                                         {/* Sizes/Colors code... */}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     ) : (
//                         <div className="text-center py-20 text-gray-500">No products found.</div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Shop