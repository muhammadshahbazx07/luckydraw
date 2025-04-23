import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import MyColors from '../../Constants/MyColors.js';
import MyImages from '../../Constants/MyImages.js';

const Header = ({ rightContent = null }) => {
    const navigate = useNavigate();
    return (
        <div
            className='w-full fixed top-0 left-0 z-50'
            style={{ backgroundColor: MyColors.main }}
        >

            {/* Social Media Bar */}
            <div
                className='flex justify-center items-center py-3 shadow-md shadow-black/30'
                style={{
                    backgroundImage: `url(${MyImages.socialMediaBarImage})`,
                    backgrbackgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div
                    className='flex gap-4 text-xl'
                    style={{ color: MyColors.white }}
                >
                    <FaTwitter className='cursor-pointer hover:scale-110 transition' />
                    <FaFacebookF className='cursor-pointer hover:scale-110 transition' />
                    <FaInstagram className='cursor-pointer hover:scale-110 transition' />
                </div>
            </div>

             {/* Header */}
            <div className='flex justify-between items-center px-4 md:px-30 py-4'>
                {/* Logo */}
                <div
                onClick={() => navigate('/')}
                className='w-35 h-12 bg-no-repeat bg-contain cursor-pointer hover:scale-110 transition'
                style={{
                    backgroundImage: `url(${MyImages.logo})`,
                }}
                ></div>

                {/* Right Content */}
                <div className='flex gap-4'>
                    {rightContent}
                </div>
            </div>
        </div>
    );
};

export default Header;