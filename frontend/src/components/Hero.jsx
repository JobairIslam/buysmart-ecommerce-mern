import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className='flex flex-col md:flex-row items-center justify-between border'>
        {/* Left Column - Text Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 pl-5 md:pl-10 lg:pl-[100px]">
          <p className="text-sm text-gray-600 tracking-widest mb-2 uppercase">
            OUR BESTSELLERS
          </p>
          <h1 className="outfit text-5xl md:text-6xl font-serif text-gray-800 mb-6">
            Latest Arrivals
          </h1>
          <button className="text-sm text-gray-800 border-b border-gray-800 pb-1">
            SHOP NOW &mdash;
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src={assets.hero_img}
            alt="Latest Arrivals"
            className="w-full h-auto object-cover"
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero