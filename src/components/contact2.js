import React from 'react'

const Contact1 = () => {
  return (
    <div className='bg-white py-5 container'>
      <div className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 '>
        <div className='block mx-auto'>
            <label className='text-2xl font-extrabold text-customGreen rounded-full outline outline-3 outline-customGreen w-20 h-20 flex justify-center items-center'>
                220+
            </label>
            <p className='text-black text-center mt-3'>Best Dishes</p>
        </div>
        <div className='block mx-auto'>
            <label className='text-2xl font-extrabold text-customGreen rounded-full outline outline-3 outline-customGreen w-20 h-20 flex justify-center items-center'>
                50+
            </label>
            <p className='text-black text-center mt-3'>Awards Won</p>
        </div>
        <div className='block mx-auto'>
            <label className='text-2xl font-extrabold text-customGreen rounded-full outline outline-3 outline-customGreen w-20 h-20 flex justify-center items-center'>
                80+
            </label>
            <p className='text-black text-center mt-3'>Our Chefs</p>
        </div>
        <div className='block mx-auto'>
            <label className='text-2xl font-extrabold text-customGreen rounded-full outline outline-3 outline-customGreen w-20 h-20 flex justify-center items-center'>
                200+
            </label>
            <p className='text-black text-center mt-3'>Daily Customers</p>
        </div>
      </div>
    </div>
  )
}

export default Contact1
