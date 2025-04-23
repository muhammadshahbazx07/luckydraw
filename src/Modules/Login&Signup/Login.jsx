import React, { useState, useEffect } from 'react';
import MyImages from '../../Constants/MyImages.js';
import MyColors from '../../Constants/MyColors.js';
import LoginForm from '../../Components/Form/Loginform.jsx';
import ForgotPasswordForm from '../../Components/Form/ForgotPasswordForm.jsx';
import EmailSentCard from '../../Components/Form/EmailSentCard.jsx';

const Login = () => {
    const [showForgot, setShowForgot] = useState(false);
    const [showSentEmail, setShowSentEmail] = useState(false);

    useEffect(() => {
        const handlePopState = () => {
            if (showSentEmail) {
                setShowSentEmail(false);
                setShowForgot(true);
            } else if (showForgot) {
                setShowForgot(false);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [showForgot, showSentEmail]);

    const handleForgotPassword = () => {
        setShowForgot(true);
        window.history.pushState(null, '', window.location.href);
    };

    const handleSentEmail = () => {
        setShowSentEmail(true);
        window.history.pushState(null, '', window.location.href);
    };

    const handleChangeEmail = () => {
        setShowSentEmail(false);
        setShowForgot(true);
        window.history.pushState(null, '', window.location.href);
    };
    
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
                    className='text-sm sm:text-base font-bold'
                    style={{
                        fontFamily: 'Urbanist',
                        color: MyColors.main
                    }}
                >
                    <span>Home</span>
                    <span>{' / '}</span>
                    <span style={{ color: '#B17A00' }}>Log In</span>
                </div>

                {/* Content Section */}
                <div className='mt-10 flex flex-col md:flex-col lg:flex-row justify-between items-center'>

                    {/* Image */}
                    <div className='w-full lg:w-1/2 flex justify-center'>
                        <img
                            src={MyImages.winSpinWheel}
                            alt='Spin Wheel Image'
                            className='w-full h-auto sm:w-[80%]' />
                    </div>

                    {/* Form */}
                    <div className='w-full lg:w-1/2 text-center mt-4 lg:mt-0'>
                    {showSentEmail ? (
                            <EmailSentCard onChangeEmail={handleChangeEmail} />
                        ) : showForgot ? (
                            <ForgotPasswordForm
                                onBackToLogin={() => setShowForgot(false)}
                                onSentEmail={handleSentEmail}
                            />
                        ) : (
                            <LoginForm onForgotPassword={handleForgotPassword} />
                        )}  
                        {/* <LoginForm/> */}

                        {/* FourTextFields */}
                        {/* <TextField placeholder='Enter email' />

                        <TextField isPassword placeholder='Enter password' />

                        <TextField
                            isDropdown
                            placeholder='Select option'
                            options={['Option 1', 'Option 2', 'Option 3']}
                        />

                        <TextField isCalendar placeholder='Select date' /> */}

                        {/* FourTextFields */}

                    </div>
                </div>

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

export default Login;
