import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-10 font-medium">
      {/* Logo */}
      <img src={assets.logo} alt="logo" className='w-36'/>

      {/* Navigation Links */}
      <ul className="hidden  text-gray-700 sm:flex gap-5 text-sm" >

        <NavLink className="flex flex-col items-center gap-1" to="/" >
        <p>Home</p>
        <hr className='border-none h-[1.5px] w-2/4 bg-gray-700 hidden'/>
        </NavLink>

        <NavLink className="flex flex-col items-center gap-1" to="/collection" >
        <p>Collections</p>
        <hr className='border-none h-[1.5px] w-2/4 bg-gray-700 hidden'/>
        </NavLink>

        <NavLink className="flex flex-col items-center gap-1" to="/about" >
        <p>About</p>
        <hr className='border-none h-[1.5px] w-2/4 bg-gray-700 hidden'/>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/contact" >
        <p>Contact</p>
        <hr className='border-none h-[1.5px] w-2/4 bg-gray-700 hidden'/>
        </NavLink>

      </ul>

      <div className='flex item-center gap-6'>
        <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
        <div className='group relative'> 
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
          <div>
            
          </div>
        </div>
      </div>

      
      
    </div>
  )
}

export default Navbar