import React, { useState } from 'react'
import banner1 from '../assets/images1.jpg'
import banner2 from '../assets/images2.jpg'
import banner3 from '../assets/images3.jpg'
import banner4 from '../assets/images4.jpg'
import banner5 from '../assets/images5.jpg'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";

const BannerImages = () => {
    const [currentImage,setCurrentImage] = useState(0)
    const desktopImages =[
        banner1,banner2,banner3,banner4,banner5
    ]
    const nextImage =()=>{
        if(desktopImages.length -1 > currentImage){
            setCurrentImage(prev => prev +1)
        }
    }
    const prevImage =()=>{
        if(currentImage != 0){
            setCurrentImage(prev=> prev - 1)
        }
    }
  return (
    <div className="w-full">
        <div className="flex w-full  relative items-center">
            <div className="absolute z-10  flex justify-between w-full text-sm md:text-xl">
                <button
                    onClick={prevImage}
                    className="flex items-center bg-white rounded-full p-1 lg:p-2"
                >
                    <FaAngleLeft />
                </button>
                <button
                    onClick={nextImage}
                    className="flex items-center bg-white rounded-full p-1 lg:p-2"
                >
                    <FaAngleRight />
                </button>
            </div>
            <div className="flex w-full  h- md:h-96 overflow-hidden">
                {desktopImages.map((images, index) => {
                    return (
                    <div
                        key={index}
                        className="min-w-full min-h-full w-full h-full flex-shrink-0"
                    >
                        <img
                        src={images}
                        className="w-full h-auto md:h-full object-cover transition transform duration-500"
                        style={{
                            transform: `translateX(-${currentImage * 100}%)`,
                        }}
                        />
                    </div>
                    );
                    })
                }
            </div>
        </div>
    </div>

  )
}

export default BannerImages
