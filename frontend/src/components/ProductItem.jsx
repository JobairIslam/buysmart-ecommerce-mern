import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from "react-router-dom"

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image[0]} className='' alt="#" />
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='font-medium text-sm'>{currency} {price}</p>

        </div>
      
    </Link>
  )
}

export default ProductItem