import React from 'react'
import banner from "../assets/home-hero-bg.webp"
import NewArrivals from '../components/NewArrivals'
import OurCategories from '../components/OurCategories'
import CountdownTimer from '../components/CountdownTimer'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks';
import Newsletter from '../components/Newsletter';
import Services from '../components/Services';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <>
            {/* Top Notification Bar */}
            {/* text-xs mobile ke liye, md:text-base desktop ke liye */}
            

            {/* Hero Section */}
            <div
                style={{ backgroundImage: `url(${banner})` }}
                className="relative h-[60vh]  md:h-150 w-full bg-cover bg-center"
            >
                {/* Overlay */}
                <div className='absolute inset-0 w-full h-full bg-black/50 flex flex-col justify-center items-center px-4'>


                    <h1 className='text-white text-3xl md:text-5xl lg:text-7xl font-extrabold text-center w-full md:w-[80%] lg:w-[60%] leading-tight drop-shadow-lg'>
                        Timeless Fashion for the <br className="hidden md:block" /> Modern Wardrobe
                    </h1>

                    <p className='text-gray-200 text-sm md:text-lg mt-4 text-center max-w-2xl'>
                        Discover comfort and style tailored for you.
                    </p>

                    <button className='mt-6 bg-[#EF233C] text-white rounded-3xl px-5 py-2 md:px-8 md:py-3  font-bold hover:bg-[#e0384d] transition duration-300'>
                        EXPLORE COLLECTION
                    </button>

                </div>
            </div>
            {/* new arrivals SECTION */}
            <div className='w-full h-auto pt-12 p-12 ' >
                {/* new arrivals top  */}
                <div className='md:flex  md:justify-between space-y-9 md:space-y-0 items-center mb-12 ' >
                    <div className='space-y-4 md:block flex flex-col  items-center ' >
                        <h1 className='md:text-4xl text-3xl font-bold' >New Arrivals</h1>
                        <p className='md:text-lg text-sm md:w-[80%] md:text-left text-center' >Be the first to wear this season’s latest looks. Handpicked and freshly styled.</p>
                    </div>
                    <div className='flex justify-center  md:block  '>
                        <button className='border hover:bg-[#EF233C] hover:text-white  transition duration-900 border-[#EF233C] text-[#EF233C] rounded-2xl px-5 py-3 font-medium '>SEE WHAT'S NEW</button>
                    </div>

                </div>

                <div className='w-full h-full ' >
                    {/* product grid  */}

                    <NewArrivals />
                    <OurCategories />



                    <CountdownTimer />
                    <Testimonials />
                    <HowItWorks />
                    <Newsletter />
                    <Services />


{/* <Footer/> */}
                </div>




            </div>

        </>
    )
}

export default Home