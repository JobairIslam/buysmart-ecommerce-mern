import React from 'react'

const NewsLetter = () => {
    const onSubmitHandler = (event)=>{
       event.preventDefault()
    }
  return (
    <div className="w-full bg-white py-10 lg:py-20 flex justify-center items-center">
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Subscribe now & get 20% off
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form onSubmit={onSubmitHandler} className="flex justify-center">
          <input
            required
            type="email"
            placeholder="Your email address"
            className="px-4 py-2  border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full md:w-auto flex-grow"
          />
          <button type='submit' className="px-6 py-2 bg-black text-white font-semibold rounded-r-md hover:bg-gray-800 focus:outline-none">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter