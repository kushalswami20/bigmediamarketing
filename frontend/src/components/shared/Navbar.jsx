import React from 'react';
import logo from '../../assets/logo.svg.png';
import '../../css/Navbar.css';
const Navbar =()=>{
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='nav-links'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/career">Career</a>
            </div>
            <div className='Menu-btn'>
                <a href="/">Menu | | |</a>
            </div>
        </div>
    )
}
export default Navbar;