import React from 'react';
import MyImages from '../../Constants/MyImages.js';
import MyColors from '../../Constants/MyColors.js';
import SignupForm from '../../Components/Form/SignupForm.jsx';

const Signup = () => {
    return (
        <div
            className='relative overflow-hidden'
            style={{ background: MyColors.white }}
        >

            {/* Right Red Coin Only */}
            <img
                src={MyImages.rightRedBlurCoin}
                alt='Right Coin'
                className='absolute right-0 top-1/2  w-32 sm:w-40 md:w-52 pointer-events-none z-0'
                style={{
                    animation: 'floaty 3s ease-in-out infinite',
                }}
            />
            

            {/* Login Content */}
            <div className='relative z-10 px-4 sm:px-8 md:px-30 py-10'>

                {/* Breadcrumbs */}
                <div
                    className='text-sm sm:text-base font-bold mb-10'
                    style={{
                        fontFamily: 'Urbanist',
                        color: MyColors.main
                    }}
                >
                    <span>Home</span>
                    <span>{' / '}</span>
                    <span style={{ color: '#B17A00' }}>Sign Up</span>
                </div>

                {/* SignUp Form*/}
                <SignupForm />

            </div>

            {/* Animation Style */}
            <style>{`
                @keyframes floaty {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-30px); }
                100% { transform: translateY(0px); }
                }
            `}</style>
        </div>
    );
};

export default Signup;