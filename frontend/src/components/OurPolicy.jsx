import React from 'react'
import { assets } from '../assets/assets'


const OurPolicy = () => {
    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl my-10 lg:my-[100px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-around items-center text-center"> {/* Flex container, vertical on small, horizontal on medium+ */}

                    {/* Easy Exchange Policy */}
                    <div className="flex flex-col items-center mb-6 md:mb-0"> {/* Column layout, add margin bottom on small screens */}
                        {/* Replace with actual icon component */}
                        {/* <ExchangeIcon className="w-12 h-12 mb-4" /> */}
                        <img className='w-12 h-12 mb-4' src={assets.exchange_icon} alt="" /> {/* Placeholder */}
                        <h3 className="text-lg font-semibold mb-2">Easy Exchange Policy</h3>
                        <p className="text-gray-600">We offer hassle free exchange policy</p>
                    </div>

                    {/* 7 Days Return Policy */}
                    <div className="flex flex-col items-center mb-6 md:mb-0"> {/* Column layout, add margin bottom on small screens */}
                        {/* Replace with actual icon component */}
                        {/* <ReturnIcon className="w-12 h-12 mb-4" /> */}
                        <img className='w-12 h-12 mb-4' src={assets.quality_icon} alt="" /> {/* Placeholder */}
                        <h3 className="text-lg font-semibold mb-2">7 Days Return Policy</h3>
                        <p className="text-gray-600">We provide 7 days free return policy</p>
                    </div>

                    {/* Best Customer Support */}
                    <div className="flex flex-col items-center"> {/* Column layout */}
                        {/* Replace with actual icon component */}
                        {/* <SupportIcon className="w-12 h-12 mb-4" /> */}
                        <img className='w-12 h-12 mb-4' src={assets.support_img} alt="" /> {/* Placeholder */}
                        <h3 className="text-lg font-semibold mb-2">Best customer support</h3>
                        <p className="text-gray-600">we provide 24/7 customer support</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurPolicy