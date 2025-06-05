import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {


    const { products } = useContext(ShopContext)
    
    const [latestProduct,setlatestProduct] = useState([])

    useEffect(()=>{
        setlatestProduct(products.slice(0,10))
    },[])


    return (
        <div className="w-full bg-white my-8 md:my-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Title title={"Latest"} subtitle={"Collections"} paragraph={"Step into the season with our freshest arrivals! From trendsetting fashion and cutting"} />
                {/* rendaring products */}
                <div className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
                    {
                        latestProduct.map((item,index)=>(
                            <ProductItem key={index} price={item.price} id={item._id} image={item.image} name={item.name}/>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default LatestCollection