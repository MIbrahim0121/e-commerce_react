import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/header-logo.webp'
import { FaRegUserCircle } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, X } from 'lucide-react'; // Icons import kiye
import { useState } from 'react';



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(false)


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQs', path: '/faqs' },
  ];

  const userProfile = () => {
    console.log("User Profile clicked");
    setUser(!user)
  };

  return (<>
    <div className='bg-white w-full  p-4  flex justify-around items-center' >
      {/* mobile menu button  */}
      <button
        className="md:hidden text-gray-700 hover:text-red-600"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* mobile menu overlay  */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >

        {/* Drawer Header (Logo + Close Button) */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <span className="text-xl font-bold text-red-600">VELORA</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-500 hover:text-red-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-5 gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'black'
              })}
              className="text-gray-800 font-medium text-lg hover:text-red-600 transition border-b border-gray-50 pb-2"
              onClick={() => setIsMobileMenuOpen(false)} // Link click par menu band ho jaye
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>


      {/* logo  */}
      <div>
        <NavLink to="/"><img src={logo} alt="" /></NavLink>
        </div>
      {/* tabs  */}
      <div className="hidden md:flex gap-8 font-medium text-gray-700">
        {navLinks.map((link) => (
          <NavLink key={link.name} to={link.path} style={({ isActive }) => ({
            color: isActive ? '#dc2626' : 'black'
          })} className="hover:text-red-600 transition">
            {link.name}
          </NavLink>
        ))}
      </div>
      {/* icons  */}
      <div className='flex gap-6 text-2xl items-center' >
        <FaRegUserCircle className='cursor-pointer' onClick={userProfile} />
        <NavLink to="/cart"><FaOpencart  className='cursor-pointer' /></NavLink>


      </div>


    </div>
    <div className='bg-gray-950 w-full  flex justify-center items-center text-white text-xs md:text-base font-medium tracking-wide'>
      Get 15% off on your first order
    </div>


    { user && (
      <div className='absolute inset-0   bg-black/50 flex items-center justify-center  border rounded-md p-4 w-full z-50'>
        <div>
          <div className='bg-white p-6 rounded-md shadow-lg w-80 relative'>
            <h2 className='text-xl text-center font-semibold mb-4'>User Profile</h2>
            <p onClick={userProfile} className='text-2xl cursor-pointer hover:text-red-600 absolute right-5 top-3 '>x</p>
            <label htmlFor="username">Username or Email:</label>
            <input type="text" id="username" className='w-full border border-gray-300 rounded-md p-2 mb-4' />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className='w-full border border-gray-300 rounded-md p-2 mb-4' />

            <button className='flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700' onClick={userProfile}>login</button>  
            <p className='text-center mt-5' >forget your Password</p>
          </div>
          
           
          
        </div>
      </div>
    )}
  </>
  )
}

export default Navbar
