import React from 'react'
import blog1 from '../assets/testimonialUser.jpg'
import blog2 from '../assets/testimonialUser2.jpg'
import blog3 from '../assets/testimonialUser3.jpg'
import blogBackground from '../assets/testimonialBackground.jpg'
import { FiUsers } from "react-icons/fi";
const Blog = () => {
  return (
    <div className='bg-cover bg-center block mx-auto' style={{backgroundImage:`url(${blogBackground})`}}>
        <div className='container py-5'>
            <div className=''>
                <FiUsers className='block mx-auto text-customGreen w-12 h-12' />
                <h1 className='text-xl text-customGreen text-center mt-2'>Food Lover</h1>
                <h2 className='mt-2 text-3xl text-white font-extrabold text-center'>CUSTOMER FEEDBACK</h2>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-4 mt-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide'>
                <div className='w-full md:w-70 p-4 flex-shrink-0 snap-center'>
                    <div className='card rounded-xl z-10 opacity-70 bg-bgBlogCard'>
                        <div className='card-body'>
                            <testimonial />
                            <p className='mt-1 text-sm text-black font-bold text-center'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                            <label className='text-sm text-customGreen flex justify-center'>Frinton Van</label>
                        </div>                  
                    </div>
                    <div className='flex justify-center mt-2'>
                            <img src={blog1} className='w-20 h-20 rounded-full' />
                    </div>
                </div>
                <div className='w-full md:w-70 p-4 flex-shrink-0 snap-center'>
                    <div className='card rounded-xl z-10 opacity-70 bg-bgBlogCard'>
                        <div className='card-body'>
                            <testimonial />
                            <p className='mt-1 text-sm text-black font-bold text-center'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                            <label className='text-sm text-customGreen flex justify-center'>Frinton Van</label>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                            <img src={blog2} className='w-20 h-20 rounded-full' />
                    </div>
                </div>
                <div className='w-full md:w-70 flex-shrink-0 snap-center p-4'>
                    <div className='card rounded-xl z-10 opacity-70 bg-bgBlogCard'>
                        <div className='card-body'>
                            <testimonial />
                            <p className='mt-1 text-sm text-black font-bold text-center'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                            <label className='text-sm text-customGreen flex justify-center'>Frinton Van</label>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                            <img src={blog3} className='w-20 h-20 rounded-full' />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Blog
