import React from 'react';
import { LuCalendarClock } from "react-icons/lu";
import bookingImage from '../assets/appointmentBackgroundImage.jpg';

const Booking = () => {
  return (
    <div 
      className="grid grid-cols-12 h-[500px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${bookingImage})` }}
    >
      <div className="col-span-12 md:col-span-6 lg:col-span-5 md:ms-[100px] sm-0  bg-black z-10 opacity-90">
        <div className="p-4 md:p-6">
          <hr className="w-10 h-1 bg-yellow-900" />
          <h1 className="mt-2 text-2xl md:text-3xl text-white font-bold">Book Your Table</h1>
          <form className="mt-4">
            <div className="form-group">
              {/* Name Field */}
              <div className="mt-2">
                <input 
                  className="p-2 w-full outline-none bg-white text-black" 
                  type="text" 
                  placeholder="Name" 
                />
              </div>
              {/* Email Field */}
              <div className="mt-2">
                <input 
                  className="p-2 w-full outline-none bg-white text-black" 
                  type="email" 
                  placeholder="Email" 
                />
              </div>
              {/* Date Picker */}
              <div className="mt-2 flex">
                <div className="w-full">
                  <input 
                    className="p-2 w-full outline-none bg-white text-black" 
                    type="text" 
                    placeholder="Date" 
                  />
                </div>
                <div className="cursor-pointer text-xl pt-2 bg-white">
                  <span><LuCalendarClock /></span>
                </div>
              </div>
              {/* Message Field */}
              <div className="mt-2">
                <textarea 
                  className="w-full p-2 bg-white text-black" 
                  rows="3" 
                  placeholder="Message"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="mt-4">
                <button className="bg-bookingButton text-lg font-semibold text-white px-4 py-2 w-full md:w-40">
                  Book Now!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
