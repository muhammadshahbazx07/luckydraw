import React from 'react';
import { useNavigate } from 'react-router-dom'
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import MyImages from '../../Constants/MyImages.js';
import MyColors from '../../Constants/MyColors.js';
import TicketCard from '../../Components/TicketCard/TicketCard.jsx';

const buttonStyles = {
  base: "px-6 py-2 bg-gradient-to-b from-[#FFFFFF] to-[#CACACA] text-white rounded-sm sm:rounded-md shadow-lg transform transition-all duration-300 cursor-pointer active:scale-90 focus:outline-none",
  width: "w-auto sm:w-40 md:w-48 lg:w-56",
  font: "font-medium text-xs sm:text-base md:text-sm lg:text-md",
  border: {
    color: 'white',
    style: '2px solid white',
  },
  boxShadow: '0 4px 10px rgba(255, 255, 255, 0.3)',
  fontFamily: 'Urbanist',
  color: MyColors.main,
};

const GuestHome = () => {
  const navigate = useNavigate();
  return (
    <div
      className='relative overflow-hidden'
      style={{ background: MyColors.white }}
    >

      {/* Left Coin Image */}
      <img
        src={MyImages.guestHomeLeftBlurCoin}
        alt='Left Coin'
        className='absolute left-0 bottom-1/3 sm:bottom-1/6 md:bottom-1/4 w-32 sm:w-40 md:w-52 pointer-events-none z-0'
        style={{
          animation: 'floaty 3s ease-in-out infinite',
        }}
      />

      {/* Right Coin Image */}
      <img
        src={MyImages.rightBlurCoin}
        alt='Right Coin'
        className='absolute right-0 top-1/8 sm:top-1/3 md:top-1/5 w-32 sm:w-40 md:w-52 pointer-events-none z-0'
        style={{
          animation: 'floaty 3s ease-in-out infinite',
        }}
      />

      {/* Content Page */}
      <div className='relative z-10 px-4 sm:px-8 md:px-30 py-10'>
        {/* Image Slider */}
        <ImageSlider />

        {/* Text Content */}
        <div className='text-center py-16 sm:py-20 md:py-24'>

          {/* Heading*/}
          <div
            className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'
            style={{ fontFamily: 'Urbanist', color: MyColors.main }}
          >
            Play to Win Real <br />
            <span style={{ color: MyColors.secondary }}>Cash Prizes</span> Instantly
          </div>

          {/* Text */}
          <div
            className='text-base sm:text-lg md:text-lg'
            style={{ fontFamily: 'Urbanist', color: MyColors.main }}

          >
            Earn Up to $1000 – Just Pick Your Favorite Number!
          </div>

          {/* Ticket Card */}
          <TicketCard
            size="large"
            onNumberSelect={(num) => console.log("Selected Number:", num)}
            bottomContent={
              <div className="flex justify-center mt-6">
                <button
                onClick={() => {
                console.log('Login Button Clicked');
                navigate('/userhome');
              }}
                  className={`${buttonStyles.base} ${buttonStyles.width} ${buttonStyles.font}`}
                  style={{
                    color: buttonStyles.color,
                    border: buttonStyles.border.style,
                    backgroundClip: 'padding-box',
                    boxShadow: buttonStyles.boxShadow,
                    fontFamily: buttonStyles.fontFamily,
                  }}
                >
                  Proceed to Play
                </button>
              </div>
            }
          />


        </div>

      </div>

      {/* Custom Animation Style */}
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

export default GuestHome;
