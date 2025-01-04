import React from 'react';
import logo from '../../src/assets/main-logo-website.png'
const Footer = () => {
    return (
        <div className=' py-5 bg-black'>
            <div className='flex xl:mx-32 2xl:mx-64 items-center justify-between '>
                <img className='w-28' src={logo} alt="" />
                <h1 className='text-white'>© 2025 Azmir Uddin.All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;