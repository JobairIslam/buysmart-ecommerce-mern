import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products } = useContext(ShopContext)
  const [showFilter,setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([])
  const [category,setCategory] = useState([])
  const [subCategory,setSubCategory] = useState([])


 

  useEffect(()=>{
    setFilterProducts(products)
  },[products])
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row">
        {/* Left Filter Section - w-full on mobile, sm:w-1/4 on larger */}
        <div className="w-full sm:w-1/4 pr-0 sm:pr-8 mb-8 sm:mb-0">
        <p onClick={()=>setShowFilter(!showFilter)} className="text-xl font-semibold mb-6 flex items-center gap-2 sm:cursor-default">
            FILTERS
            <img className={`h-3 sm:hidden ${showFilter? 'rotate-90':""}`} src={assets.dropdown_icon} alt="#" />
          </p>
          <div className={`${showFilter ? "" : 'hidden'} sm:block`}>
            {/* Categories Filter */}
            <div className="mb-6 border p-3 ">
              <h3 className="text-lg font-medium mb-3">CATEGORIES</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input value={"Men"} type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Men</span>
                </label>
                <label className="flex items-center">
                  <input value={"Women"} type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Women</span>
                </label>
                <label className="flex items-center">
                  <input value={"Kids"} type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Kids</span>
                </label>
              </div>
            </div>

            {/* Type Filter */}
            <div className='border p-3 '>
              <h3 className="text-lg font-medium mb-3">TYPE</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input value={'Topwear'} type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Topwear</span>
                </label>
                <label className="flex items-center">
                  <input value={'Bottomwear'} type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Bottomwear</span>
                </label>
                <label className="flex items-center">
                  <input value={"Winterwear"} type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Winterwear</span>
                </label>
              </div>
            </div>
          </div>



        </div>

        {/* Right Collections Section - w-full on mobile, sm:w-3/4 on larger */}
        <div className="w-full sm:w-3/4">
        <div className="flex flex-col md:flex-row  justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">ALL COLLECTIONS</h2>
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
              <select id="sort" className="border rounded px-2 py-1">
                <option value={'relavent'}>Relavent</option>
                <option value={'low-high'}>Low to High</option>
                <option value={'high-low'}>High to Low</option>
                {/* Add other sorting options here */}
              </select>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
            {filterProducts && filterProducts.map((item, index) => (
              <ProductItem 
                key={index} 
                price={item.price} 
                id={item._id} 
                image={item.image} 
                name={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection