import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import BannerImages from '../components/bannerImages';
import ChickenRecipesSlider from '../components/biryaniCarousels';
import FoodLover from '../components/foodLover';
import HomeAbout from '../components/homeAbout';
import Banner from '../components/banner'
import Booking from '../components/bookanAppoitment';
import Offer from '../components/offers';
import Blog from '../components/testimonial';
import Contact from '../components/contact1';
import Contact1 from '../components/contact2';
const Home = () => {  
  return (
    <div className='w-full mt-1'>
      <Banner />
      {/* <BannerImages className='' /> */}
      <HomeAbout />
      <FoodLover />
      <ChickenRecipesSlider className='mt-2 container px-5' />
      <Booking />
      <Offer />
      <Blog />
      <Contact1 />
      <Contact />
    </div>
  );
};
export default Home;
