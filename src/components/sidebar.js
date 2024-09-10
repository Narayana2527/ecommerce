import React, { useState } from 'react';
import './sidebar.css';
import { FiMenu } from "react-icons/fi";

const Sidebar = ({ isLoggedIn, handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header ">
                <FiMenu onClick={toggleSidebar} className="menu-icon d-inline w-12 h-12 flex items-center" />
                <span className="logo text-2xl font-serif">Food Lover</span>
            </div>
            <ul className={`sidenav-links ps-3 ${isOpen ? 'show' : 'hide'}`}>
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
        </nav>
    );
};

export default Sidebar;
