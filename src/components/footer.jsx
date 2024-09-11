import React from 'react'
// import { CiMail,CiInstagram,CiFacebook } from "react-icons/ci"
import { FaRegCopyright } from "react-icons/fa";
import footer1 from '../assets/images1.jpg'
import footer2 from '../assets/images2.jpg'
import footer3 from '../assets/images3.jpg'
import footer4 from '../assets/images4.jpg'
import footer5 from '../assets/images5.jpg'


const Footer = () => {
  return (
    <div>
    <div className='container-fluid bg-bgFooter '>
      <div className='p-5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-4'>
        <div className='' >
            <div className=''>
                <h3 className='text-white text-3xl mb-2'>Food Lover</h3>
                <p className='mt-2 text-sm text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent ultrices, purus ut sagittis auctor, velit velit facilisis tellus, sit amet laoreet nibh quam non augue. 
                </p>
                <p className='mt-1 text-white text-sm'>Nulla purus orci, placerat id quam in, aliquet fringilla nulla. 
                Morbi hendrerit vel felis sed egestas. Ut ut lacus eget mauris luctus molestie
                </p>
                <button className='border-none text-customGreen text-xl '>Read More</button>
            </div>
        </div>
        <div className='' >
            <div className=''>
              <h3 className='text-white text-xl mb-2'>Opening Hours </h3>
                <label className='text-customGreen mt-3 text-sm'>MONDAY:<span className='text-white text-sm ms-1'>Closed</span></label>
                <label className='text-customGreen mt-3 text-sm block'>TUE - FRI:<span className='text-white text-sm ms-1'>------- 10 AM - 9 PM </span></label>
                <label className='text-customGreen mt-3 text-sm block'>SATURDAY:<span className='text-white text-sm ms-1'>----- 10 AM - 11 PM</span></label>
                <label className='text-customGreen mt-3 text-sm block'>SUNDAY:<span className='text-white text-sm ms-1'>------- 10 AM - 12 PM</span></label>
            </div>
        </div>
        <div className='' >
            <div className=''>
                <h3 className='text-white text-xl mb-2'>Latest Tweets</h3>
                
                
            </div>
        </div>
        <div className='' >
          <h3 className='text-white text-xl mb-2'>Instagram</h3>
          <div className='grid grid-cols-3 gap-1'>
            <div>
              <img src={footer1} alt='description' className='w-30 h-30' />
              <img src={footer2} alt='description' className='w-30 h-30' />
              
            </div>
            <div>
              <img src={footer3} alt='description' className='w-30 h-30' />
              <img src={footer4} alt='description' className='w-30 h-30' />
            </div>
            <div>
              
              <img src={footer5} alt='description' className='w-30 h-30' />
              <img src={footer2} alt='description' className='w-30 h-30' />
            </div>
          </div>
            
        </div>
      </div>
      
    </div>
    <div className='container-fluid flex justify-center bg-green-900 py-2'>
    <span className='text-white text-sm'>Copyright 2022 <FaRegCopyright className='inline-block me-2'/> Food Lover restaurant</span>
  </div>
  </div>
  )
}

export default Footer
