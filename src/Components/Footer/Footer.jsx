import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri';
import MyImages from '../../Constants/MyImages.js';
import MyColors from '../../Constants/MyColors.js';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div
            className='w-full bg-cover bg-center py-30 px-4 flex flex-col items-center gap-6 z-10'
            style={{ backgroundImage: `url(${MyImages.footerImage})` }}
        >
            {/* Logo */}
            <div
                onClick={() => navigate('/')}
                className='w-40 h-16 bg-no-repeat bg-contain bg-center cursor-pointer hover:scale-110 active:scale-90 transition'
                style={{ backgroundImage: `url(${MyImages.logo})` }}
            ></div>

            {/* Links */}
            <div
                className='flex flex-wrap justify-center gap-4 text-sm sm:text-base font-medium'
                style={{ color: MyColors.white }}
            >
                <p className='cursor-pointer hover:underline'>Terms & Conditions</p>
                <span className='hidden sm:inline'>|</span>
                <p className='cursor-pointer hover:underline'>Privacy</p>
                <span className='hidden sm:inline'>|</span>
                <p className='cursor-pointer hover:underline'>Contact Us</p>
                <span className='hidden sm:inline'>|</span>
                <p className='cursor-pointer hover:underline'>About</p>
            </div>

            {/* Social Icons */}
            <div
                className='flex gap-4 text-xl'
                style={{ color: MyColors.white }}
            >
                <RiTwitterXFill className='cursor-pointer hover:scale-110 active:scale-90 transition' />
                <FaFacebookF className='cursor-pointer hover:scale-110 active:scale-90 transition' />
                <RiInstagramFill className='cursor-pointer hover:scale-110 active:scale-90 transition' />
            </div>
        </div>
    );
};

export default Footer;
