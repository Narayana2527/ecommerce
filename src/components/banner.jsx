import React from 'react'
import imagebanner from '../assets/vegetarian.png'
const Banner = () => {
  return (
    <div className='relative'>
      <div className='relative grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12'>
        <div className='bg-bannerFirstBg flex items-center h-[400px] lg:h-[500px] md:h-[500px] md:col-span-8 col-span-full'>
          <div className='sm:ps-2 md:ps-5 lg:ps-6 w-[500px]'>
            <h1 className='text-2xl lg:text-4xl md:text-4xl text-white font-extrabold'>Taste the flavours of</h1>
            <h2 className='text-3xl lg:text-6xl md:text-6xl mt-2 text-customGreen font-bold'>SOUTH INDIA</h2>
            <p className='mt-2 text-sm text-white'>
                Order from a weekly menu of tasty meals at theclick of a 
                button. say goodbye to meal planning and grocery shopping!
            </p>
            <div className='flex'>
              <button className='w-[140px] bg-orange-600 text-white text-sm px-3 py-2'>
                  Book Table
              </button>

              <button className='w-[140px] ms-3 bg-black outline outline-2 outline-white  text-white text-sm'>
                  Our Menu
              </button>
            </div>
          </div>
        </div>        
        <div className='bg-bannerSecondBg md:col-span-4 '>            
        </div>
        {/* image abosulte positioned */}
        <img src={imagebanner} alt='description' className='hidden md:block absolute w-[400px] h-[400px] top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-50' />            
      </div>
    </div>
  )
}

export default Banner
