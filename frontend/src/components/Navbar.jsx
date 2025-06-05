import React from 'react'
import {assets} from '../assets/assets'
import { NavLink,Link } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {
  const [visible,setVisible] = useState(false)
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5 font-bold text-gray-700">
          <Link to='/'><img className="w-36" src={assets.logo} alt="logo" /></Link>
          <ul className="hidden sm:flex gap-5">
            <NavLink to="/" className="flex flex-col items-center">
              <p>Home</p>
              <span className="w-3/4 h-[2px] bg-gray-700 hidden"></span>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center'>
              <p>Collection</p>
              <span className='w-3/4 h-[2px] bg-gray-700 hidden'></span>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center'>
              <p>About</p>
              <span className='w-3/4 h-[2px] bg-gray-700 hidden'></span>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center'>
              <p>Contact</p>
              <span className='w-3/4 h-[2px] bg-gray-700 hidden'></span>
            </NavLink>
          </ul>
          <div className='flex items-center gap-6'>
            <img className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
            <div className='group relative'>
            <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
              <div className='group-hover:block hidden absolute dropdown-menu left-1/2 -translate-x-1/2 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg'>
                  <p className='cursor-pointer hover:text-black'>My Profile</p>
                  <p className='cursor-pointer hover:text-black'>Orders</p>
                  <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
              </div>
            </div>
            <Link to='/cart' className='relative'>
              <img className='w-5' src={assets.cart_icon} alt="" />
              <p className='absolute right-[-5px] bottom-[-5px] w-4 m-auto items-center bg-black text-white rounded-full text-[10px] fonst-sm flex justify-center '>1</p>
            </Link>
            <img onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
          </div>
        </div>
      </div>
      {/* side bar menu for small screen */}
      <div className={`absolute top-0 bottom-0 overflow-hidden bg-white translate-all ${visible ? 'w-[100%]' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-3 p-4 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>home</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar