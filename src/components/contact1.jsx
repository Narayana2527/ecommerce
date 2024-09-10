import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-customGreen bg-cover py-5'>
        <div className='text-center'>
            <FaEnvelopeOpenText className='block mx-auto text-xl outline p-2 outline-2 outline-white rounded-full w-12 h-12' />
            <h1 className='mt-2 text-2xl text-white'>Subscribe to our Newsletter</h1>
            <p className=' mt-2 text-sm text-white whitespace-prewrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent ultrices, purus ut sagittis auctor, velit velit facilisis tellus, sit amet laoreet nibh quam non augue.</p>
            <div className='flex justify-center mt-2'>
                <div className=" w-60 md:w-[600px]">
                  <input 
                    className="p-2 w-full outline-none bg-white text-black" 
                    type="email" 
                    placeholder="Enter Your Email" 
                  />
                </div>
                <div className='ms-3'>
                    <button className='text-white bg-black w-30 px-4 py-2'>Subscribe</button>
                </div>
            </div>
            <div className='mt-2'>
                <label className='text-white text-sm'>
                    Your email is safe with us. We won't spam you.
                </label>
            </div>
        </div>      
    </div>
  )
}

export default Contact
