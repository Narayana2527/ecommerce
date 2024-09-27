import React, { useState } from 'react';
import './sidebar.css';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Sidebar = ({ isLoggedIn, handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <nav  className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className='sidebar'>
            <div className="sidebar-header flex justify-between">
                <div className="text-2xl font-bold">Food Lover</div>
                    <div className="me-2">
                        {isOpen ? (
                            <RxCross1 className="d-inline h-6 w-6" onClick={toggleSidebar} />
                        ) : (
                            <FiMenu className="w-6 h-6 d-inline" onClick={toggleSidebar} />
                        )}
                    </div>
                </div>  
                <ul  className={`sidenav-links ps-3 pt-2 ${isOpen ? 'show' : 'hide'} `}>
                    <li><a href="#home">HOME</a></li>
                    
                    <li><a href="#about">ABOUT US</a></li>  
                                
                    <li className="dropdown">
                        <a href="#menu">MENU</a>
                        <div className="dropdown-content">
                            <a href="#source1">Source 1</a>
                            <a href="#source2">Source 2</a>
                            <hr className='w-60 mt-1' />
                            <a href="#source3">Source 3</a>
                        </div>
                    </li>
                    
                    <li><a href="#reservation">RESERVATION</a></li> 
                    
                    <li><a href="#blog">BLOG</a></li> 
                    
                    <li><a href="#contact">CONTACT US</a></li> 
                    
                </ul>
            </div>
            
        </nav>
    );
};

export default Sidebar;
