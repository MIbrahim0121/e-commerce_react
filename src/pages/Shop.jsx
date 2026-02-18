import React, { useMemo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ShoppingBasket, Eye, Heart } from 'lucide-react';
import { Filter } from 'lucide-react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart, addToWishlist, removeFromWishlist } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import SearchBar from '../components/SearchBar';
import { motion } from 'framer-motion';



const Shop = () => {
  const [allProducts, setallProducts] = useState([])
  const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([]);   
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

// Filters 
        const [selectedCategory, setSelectedCategory] = useState("All");
const [priceRange, setPriceRange] = useState(2000); 
const [sortOrder, setSortOrder] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 9;

const wishlist = useSelector((state) => state.products.wishlist)

  useEffect(() => {

    const fetchnewArrivals = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      setallProducts(data.products);
      setProducts(data.products);


      const uniqueCategories = ["All", ...new Set(data.products.map(item => item.category))];
      setCategories(uniqueCategories);
      setLoading(false);

    }
    fetchnewArrivals()

  }
    , [])

  const filteredProducts = useMemo(() => {
    let tempProducts = [...allProducts];
 
    // Search filter
    if (searchTerm.trim()) {
      tempProducts = tempProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filtering
    if(selectedCategory !== "All"){
      tempProducts = tempProducts.filter(product => product.category === selectedCategory);
    }

    // Filter by price
    tempProducts = tempProducts.filter(product => product.price <= priceRange);
    
    // Sorting logic
    if(sortOrder === "low-high"){
      tempProducts.sort((a,b) => a.price - b.price);
    }
    else if(sortOrder === "high-low"){
      tempProducts.sort((a,b) => b.price - a.price);
    }

    return tempProducts;
   }, [selectedCategory, priceRange, sortOrder, allProducts, searchTerm])

   useEffect(() => {
    setCurrentPage(1); 
   }, [filteredProducts])
    
    const dispatch = useDispatch();

    const addCart = (product) => {
      try {
        dispatch(addToCart(product));
        toast.success(`${product.title.substring(0, 20)}... added to cart! 🛒`)
      } catch (error) {
        console.log(error);
        toast.error('Failed to add to cart')
      }
    }

    const toggleWishlist = (product) => {
      const inWishlist = wishlist?.some(item => item.id === product.id)
      if (inWishlist) {
        dispatch(removeFromWishlist(product.id))
        toast.success('Removed from wishlist')
      } else {
        dispatch(addToWishlist(product))
        toast.success('Added to wishlist ❤️')
      }
    }

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    };

    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    };

  return (
    <div className='px-20' >
      <div>
        <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center md:text-left  text-gray-900 mb-8">Shop</h1>

        

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar 
            onSearch={setSearchTerm}
            placeholder="Search by product name or description..."
          />
        </div>

        {/* Filter and Sorting Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-6 space-y-4 sm:space-y-0">

          {/* Results Counter */}
          <p className="text-gray-600 text-sm">
            Showing <span className="font-medium text-gray-900">{(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredProducts.length)}</span> of <span className="font-medium text-gray-900">{filteredProducts.length}</span> results
          </p>

          {/* Custom Sorting Dropdown */}
          <div className="relative inline-block w-full sm:w-auto">
            <select onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
              className="block w-full sm:w-48 appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-sm"
            >
              <option value="">Sort by latest</option>
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
                  checked={selectedCategory === cat}
                  onChange={()=>setSelectedCategory(cat)}
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
        value={priceRange}
        onChange={(e)=> setPriceRange(e.target.value) }
          type="range" 
          min="0" 
          max="2000"
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
      
    
      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {loading ? (
          // Show skeletons while loading
          Array.from({ length: 9 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : (
          filteredProducts.length > 0 && filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => (
          <motion.div 
            key={product.id} 
            className='w-full font-sans group cursor-pointer'
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <Link
             to={`/shop/${product.id}`} 
             className='block'>
              
                {/* 1. IMAGE PLACEHOLDER */}
                <div className="relative w-full h-75 bg-gray-200 mb-4 overflow-hidden rounded-md">
                  
                  <LazyLoadImage
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    effect="blur"
                    placeholderSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+"
                    wrapperClassName="absolute inset-0"
                  />

                  {/* Hover Icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <div className="bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); addCart(product); }}>
                      <ShoppingBasket size={18} />
                    </div>
                    <div 
                      className={`p-2 rounded-full shadow transition-colors cursor-pointer ${
                        wishlist?.some(item => item.id === product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white hover:bg-red-500 hover:text-white'
                      }`}
                      onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
                    >
                      <Heart size={18} fill={wishlist?.some(item => item.id === product.id) ? 'currentColor' : 'none'} />
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
                    ${product.price}
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
               </Link>
             <button className='bg-red-600 text-white px-5 py-2 mt-3 w-full rounded hover:bg-red-700 transition-colors' onClick={() => addCart(product)} >Add to Cart</button>

          
          </motion.div>
        )))}

      </motion.div>

      {/* Pagination Section */}
      <div className='flex justify-center mt-8'>
        <Stack spacing={2}>
          <Pagination 
            count={Math.ceil(filteredProducts.length / itemsPerPage)} 
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