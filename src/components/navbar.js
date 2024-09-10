import React, { useState } from 'react';
import './navbar.css';

const Navbar = ({isLoggedIn,handleLogout}) => {
  return (
    <nav className="sticky  navbar pt-3">
      <div className='flex justify-between items-center w-full'>
        <div className=''>
          <h2 className="logo text-4xl font-serif text-white ms-[100px]">Food Lover</h2>
        </div>
        <div>
          <ul className="nav-links flex space-x-6">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT US</a></li>        
          <li className="dropdown">
            <a href="#menu">MENU</a>
            <div className="dropdown-content">
              <a href="#source1">Source 1</a>
              <a href="#source2">Source 2</a>
              <a href="#source3">Source 3</a>
            </div>
          </li>
          <li><a href="#reservation">RESERVATION</a></li> 
          <li><a href="#blog">BLOG</a></li> 
          <li><a href="#contact">CONTACT US</a></li>
          
          </ul> 
        </div>
      </div>     
      
    </nav>
  );
};

export default Navbar;
