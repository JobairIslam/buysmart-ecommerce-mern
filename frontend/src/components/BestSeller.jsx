import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { products } from '../assets/assets'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller,setBestSeller] = useState([])

    useEffect(()=>{
        const bestProduct = products.filter((item)=>{
            return item.bestseller
        })
        setBestSeller(bestProduct.slice(0,5))
    },[])
  return (
    <div className="w-full bg-white my-8 md:my-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Title title={"Best"} subtitle={"Seller"} paragraph={"Step into the season with our freshest arrivals! From trendsetting fashion and cutting"} />
                {/* rendaring products */}
                <div className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
                    {
                        bestSeller.map((item,index)=>(
                            <ProductItem key={index} price={item.price} id={item._id} image={item.image} name={item.name}/>
                        ))
                    }
                </div>


            </div>
        </div>
  )
}

export default BestSeller