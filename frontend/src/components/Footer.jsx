import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-200 pb-8">
          {/* Left Section: Logo and Description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <img className='w-32 pb-6' src={assets.logo} alt="#" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Middle Section: Company Links */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <div className="text-lg font-semibold text-gray-800 mb-4">COMPANY</div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/" className='hover:underline'>Home</Link></li>
              <li><Link to="/about" className='hover:underline'>About</Link></li>
              <li><Link to="/collection" className='hover:underline'>Collection</Link></li>
              <li><Link to="/contact" className='hover:underline'>Contact</Link></li>
              
            </ul>
          </div>

          {/* Right Section: Get In Touch */}
          <div className="md:w-1/4">
            <div className="text-lg font-semibold text-gray-800 mb-4">GET IN TOUCH</div>
            <div className="space-y-2 text-gray-600 text-sm">
              <div>+1-000-000-0000</div>
              <div>greatstackdev@gmail.com</div>
              <div>Instagram</div> {/* This could be a link or just text based on the SS */}
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="text-center text-gray-500 text-sm mt-8">
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer