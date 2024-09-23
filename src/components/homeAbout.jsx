import React from 'react';
import aboutImage from '../assets/bImage.png';

const HomeAbout = () => {
  return (
    <div className='my-5 bg-white py-2' id='about'>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 my-5'>
        {/* Left Content Section */}
        <div className='px-4 lg:px-10 md:px-6'>
          <hr className='w-[60px] h-1 bg-red-950' />
          <h1 className='text-xl text-customGreen mt-1'>About</h1>
          <h2 className='text-3xl text-black font-extrabold'>FOOD LOVER</h2>
          <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent ultrices, purus ut sagittis auctor, velit velit facilisis tellus, sit amet laoreet nibh quam non augue. 
            Nulla purus orci, placerat id quam in, aliquet fringilla nulla. 
            Morbi hendrerit vel felis sed egestas. Ut ut lacus eget mauris luctus molestie
          </p>
          <p className='text-sm mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent ultrices, purus ut sagittis auctor, velit velit facilisis tellus, sit amet laoreet nibh quam non augue. 
            Nulla purus orci, placerat id quam in, aliquet fringilla nulla. 
            Morbi hendrerit vel felis sed egestas. Ut ut lacus eget mauris luctus molestie
          </p>
          <button className='border-none text-xl text-customGreen mt-2'>Read More</button>
        </div>
        {/* Right Image Section */}
        <div className='relative hidden md:block'>
          {/* Outer Background Container */}
          <div className='bg-aboutsecondGrid p-4 w-full max-w-[90%] lg:max-w-[595px] h-[355px] mx-auto'></div>
          {/* Image Positioned on top of the Background */}
          <img
            src={aboutImage}
            alt='description'
            className='w-full max-w-[90%] lg:max-w-[600px] h-auto absolute left-5 top-5'
          />
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
