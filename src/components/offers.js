import React from 'react'
import fishCurry from '../assets/fishImage.jpg'
import fishCurry1 from '../assets/fishImage2.jpg'
import offer1 from '../assets/offerImage.jpg'
import offer2 from '../assets/offerImage2.jpg'
import offer3 from '../assets/offerImage3.jpg'
import offer4 from '../assets/offerImage4.webp'


const Offer = () => {
  return (
    <div className='grid grid-cols-12 bg-white my-5'>
      <div className='p-4 md:p-5 lg:col-span-6 col-span-12 md:col-span-6 md:block md:ms-[80px]'>
        <hr className='w-12 h-1 bg-customGreen' />
        <h1 className='mt-1 text-sm text-customGreen'>From The Menu</h1>
        <h2 className='mt-1 text-3xl text-black font-bold'>SPECIAL OFFERS</h2>
        <div className='mt-5 card shadow outline-none border-none rounded-3xl p-2'>
            <div className='flex justify-evenly'>
                <div className='block my-auto'>
                    <img src={fishCurry} className='w-20 h-20 rounded-full' />
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
        <div className='mt-4 card shadow rounded-3xl p-2'>
            <div className='flex justify-evenly '>
                <div className='block my-auto'>
                    <img src={fishCurry1} className='w-20 h-20 rounded-full' />
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
      <div className='lg:col-span-6 col-span-12 md:col-span-6 p-4'>
        <div className='grid grid-cols-2 gap-2 md:gap-4'>
            <div>
                <img src={offer1} className='w-70 h-60' />
            </div>
            <div>
                <img src={offer2} className='w-70 h-60' />
            </div>
        </div>
        <div className='grid grid-cols-2 gap-2 md:gap-4  mt-2'>
            <div>
                <img src={offer3} className='w-70 h-60' />
            </div>
            <div>
                <img src={offer4} className='w-70 h-60' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
