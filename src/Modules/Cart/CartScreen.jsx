import React from 'react';
import MyImages from '../../Constants/MyImages.js';
import MyColors from '../../Constants/MyColors.js';
import TextField from '../../Components/Form/TextField.jsx';
import Button from '../../Components/Buttons/Button.jsx';
import { BsFillXCircleFill } from "react-icons/bs";

const CartScreen = () => {
    return (
        <div
            className='relative overflow-hidden'
            style={{ background: MyColors.white }}
        >

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
                    <span>Home / Cart </span>
                    <span>{' / '}</span>
                    <span style={{ color: '#B17A00' }}>Cart</span>
                </div>

                {/* Heading */}
                <h1
                    className="text-center text-2xl sm:text-4xl font-extrabold mb-8"
                    style={{
                        color: MyColors.main,
                        fontFamily: 'Urbanist',
                    }}
                >
                    Cart
                </h1>

                {/* Horizontal Line */}
                <hr
                    className="border-t-2 mb-8"
                    style={{ background: MyColors.main }}
                /> {/* Horizontal Line */}

                {/* Cart Items */}
                <div className="flex items-center justify-between mb-6 sm:mb-10">
                    {/* Cross Icon */}
                    <BsFillXCircleFill size={25} style={{ background: MyColors.white }} />

                    {/* Image with number inside */}
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 mr-2 mx-2">
                        <img src={MyImages.numberSqaure} alt="Item" className="w-full h-full object-cover" />
                        <span className="absolute inset-0 flex items-center justify-center font-bold text-xl sm:text-2xl" style={{ fontFamily: 'Urbanist', color: MyColors.white }}>
                            {27}
                        </span> {/* Number inside the image */}
                    </div>

                    {/* Cart Text and Price */}
                    <div className="text-centre sm:text-center">
                        <p className="text-md sm:text-xl" style={{ fontFamily: 'Urbanist' }}>Current Draw: 24-Apr-25 10 AM GST</p>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Urbanist' }}>${20}</p>

                </div>

                {/* Horizontal Line */}
                <hr
                    className="border-t-2 mb-8"
                    style={{ background: MyColors.main }}
                /> {/* Horizontal Line */}

                <div className="text-centre sm:text-center">
                    <p className="text-sm sm:text-xl font-bold" style={{ fontFamily: 'Urbanist' }}>Have a promo code? Redeem it before you pay!</p>
                </div>

                <div className="flex space-x-4 py-2 items-center">
                    {/* Email Input Field */}
                    <TextField placeholder="Enter Email" className="w-full sm:w-auto" />

                    {/* Button */}
                    <Button
                        onClick={() => console.log('Form Login Clicked')}
                        bgColor={MyColors.primary}
                        textColor={MyColors.main}
                        variant="solid"
                        borderColor={MyColors.tertiary}
                        className="sm:w-auto w-full"
                    >
                        Apply
                    </Button>
                </div>

                {/* Add Cart */}
                <div
                    className="w-full sm:w-auto mt-6 mb-10 px-4 py-5 rounded-2xl flex flex-col items-start"
                    style={{ background: MyColors.secondary }}
                >
                    {/* First Line: Left-aligned text, Right-aligned text */}
                    <div className="flex w-full justify-between items-center mb-4">
                        <p
                            className="text-md sm:text-xs font-medium"
                            style={{ fontFamily: 'Urbanist', color: MyColors.white }}
                        >
                            Wallet Balance
                        </p>
                        <p
                            className="text-md sm:text-xs font-medium"
                            style={{ fontFamily: 'Urbanist', color: MyColors.white }}
                        >
                            $0
                        </p>
                    </div>
                    <div className="flex w-full justify-between items-center mb-4">
                        <p
                            className="text-md sm:text-xs font-medium"
                            style={{ fontFamily: 'Urbanist', color: MyColors.white }}
                        >
                            Total Amount Payable
                        </p>
                        <p
                            className="text-md sm:text-xs font-medium"
                            style={{ fontFamily: 'Urbanist', color: MyColors.white }}
                        >
                            $20
                        </p>
                    </div>

                    {/* Second Line: Centered text */}
                    <Button
                        onClick={() => console.log('Form Login Clicked')}
                        bgColor={MyColors.primary}
                        textColor={MyColors.main}
                        variant="solid"
                        borderColor={MyColors.tertiary}
                        fullWidth={true}
                    >
                        Add Funds & Play
                    </Button>
                </div>


            </div>
        </div>
    );
};

export default CartScreen;