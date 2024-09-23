import React from 'react'
import fishCurry from '../assets/fishImage.jpg'
import fishCurry1 from '../assets/fishImage2.jpg'
import offer1 from '../assets/offerImage.jpg'
import offer2 from '../assets/offerImage2.jpg'
import offer3 from '../assets/offerImage3.jpg'
import offer4 from '../assets/offerImage4.webp'
import { LuUtensilsCrossed } from "react-icons/lu";

const Offer = () => {
  return (
    <div className='grid grid-cols-12 bg-white my-5'>
      {/* Left Section */}
      <div className='p-4 md:p-5 lg:col-span-6 col-span-12 md:col-span-6 md:block md:ms-[80px]'>
        <hr className='w-12 h-1 bg-customGreen transition-all duration-300 ease-in-out transform hover:scale-x-110' />
        <h1 className='mt-1 text-sm text-customGreen'>From The Menu</h1>
        <h2 className='mt-1 text-3xl text-black font-bold'>SPECIAL OFFERS</h2>

        {/* Card 1 */}
        <div className='mt-5 card shadow outline-none border-none rounded-3xl p-2 hover:shadow-lg transition-transform transform hover:scale-105 duration-300'>
            <div className='flex justify-evenly'>
                <div className='block my-auto'>
                    <img src={fishCurry} alt='description' className='w-20 h-20 rounded-full transition-transform transform hover:scale-110 duration-300' />
                </div>
                <div>
                    <h3 className='text-2xl text-customGreen'>Fish Curry</h3>
                    <p className='w-[200px] mt-2 text-sm text-black font-semibold'>Lorel ipsum dolor sit amet,
                        consectetur Vesti ullumcorper.
                    </p>
                </div>
                <div className='mt-3'>
                    <span className='text-customGreen text-xl block'>₹249</span>
                    <span className='text-center striked text-sm'>₹599</span>
                </div>
            </div>            
        </div>

        {/* Card 2 */}
        <div className='mt-4 card shadow rounded-3xl p-2 hover:shadow-lg transition-transform transform hover:scale-105 duration-300'>
            <div className='flex justify-evenly '>
                <div className='block my-auto'>
                    <img src={fishCurry1} alt='description' className='w-20 h-20 rounded-full transition-transform transform hover:scale-110 duration-300' />
                </div>
                <div>
                    <h3 className='text-2xl text-customGreen'>Fish Curry</h3>
                    <p className='w-[200px] mt-2 text-sm text-black font-semibold'>Lorel ipsum dolor sit amet,
                        consectetur Vesti ullumcorper.
                    </p>
                </div>
                <div className='mt-3'>
                    <span className='text-customGreen text-xl block'>₹249</span>
                    <span className='text-center striked text-sm'>₹599</span>
                </div>
            </div>            
        </div>
      </div>

      {/* Right Section */}
      <div className='lg:col-span-6 col-span-12 md:col-span-6 p-4 relative'>
        <div className='grid grid-cols-2 gap-2 md:gap-4'>
            {/* Images */}
            <div className='transition-transform transform hover:scale-105 duration-300'>
                <img src={offer1} alt='description' className='w-70 h-60 object-cover' />
            </div>
            <div className='transition-transform transform hover:scale-105 duration-300'>
                <img src={offer2} alt='description' className='w-70 h-60 object-cover' />
            </div>
        </div>

        <div className='grid grid-cols-2 gap-2 md:gap-4 mt-2'>
            <div className='transition-transform transform hover:scale-105 duration-300'>
                <img src={offer3} alt='description' className='w-70 h-60 object-cover' />
            </div>
            <div className='transition-transform transform hover:scale-105 duration-300'>
                <img src={offer4} alt='description' className='w-70 h-60 object-cover' />
            </div>
        </div>

        {/* Icon in the Center with Animation */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-offerIcon rounded-full w-[90px] h-[90px] outline outline-6 outline-white 
                        transition-transform  hover:scale-110 hover:rotate-12 duration-500 ease-in-out'>
            <LuUtensilsCrossed className='text-white text-4xl flex justify-center items-center ms-4 mt-4'/>
        </div>
      </div>
    </div>
  )
}

export default Offer;
