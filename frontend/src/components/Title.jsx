import React from 'react'

const Title = ({ title, subtitle, paragraph }) => {
    return (
        
                <div className="text-center">
                    <h2 className="outfit text-5xl md:text-6xl font-serif text-gray-800 mb-6">
                        <span className="text-gray-900">{title}</span>{' '}
                        <span className="text-gray-800">{subtitle}</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        {paragraph}
                    </p>
                </div>
           
    )
}

export default Title