import React from 'react';
import { useNavigate } from 'react-router-dom'
import MyColors from '../../Constants/MyColors';
import CountdownCard from '../CountCard/CountCard';
import MyImages from '../../Constants/MyImages';

const OfferCard = () => {
    const navigate = useNavigate();

    return (
        <div
            className="w-full mt-6 max-w-md sm:max-w-lg mx-auto rounded-2xl p-4 sm:p-6 md:p-8 bg-gradient-to-b from-[#FEEC6E] to-[#F4A126]"
        >
            <div className="flex flex-col items-center text-center">
                {/* pick Text */}
                <p
                    className="text-base sm:text-2xl md:text-2xl font-bold my-2"
                    style={{ color: MyColors.main, fontFamily: 'Urbanist' }}

                >
                    Pick the choose of your <br /> number as much as you want
                </p>

                <div className="my-2"> {/* yahan pe top-bottom margin */}
                    <p
                        className="text-base sm:text-2xl md:text-2xl font-bold"
                        style={{ color: MyColors.main, fontFamily: 'Urbanist' }}
                    >
                        Price upto
                    </p>
                    <p
                        className="text-2xl sm:text-3xl md:text-4xl font-bold"
                        style={{ color: MyColors.secondary, fontFamily: 'Urbanist' }}
                    >
                        $1000
                    </p>
                </div>



                {/* Win 20x Your Entry Value */}
                <div className="my-2">
                    <p
                        className="text-base sm:text-2xl md:text-2xl font-bold"
                        style={{ color: MyColors.main, fontFamily: 'Urbanist' }}

                    >
                        WIN
                    </p>
                    <p
                        className="text-2xl sm:text-3xl md:text-4xl font-bold"
                        style={{ color: MyColors.secondary, fontFamily: 'Urbanist' }}
                    >
                        20x
                    </p>
                    <p
                        className="text-base sm:text-2xl md:text-2xl font-bold"
                        style={{ color: MyColors.main, fontFamily: 'Urbanist' }}
                    >
                        Your Entry Value
                    </p>

                </div>

                <div className="my-2">
                    {/* Next Draw */}
                    <p
                        className="text-base sm:text-2xl md:text-2xl font-bold"
                        style={{ color: MyColors.main, fontFamily: 'Urbanist' }}
                    >
                        Next Draw
                    </p>

                    {/* Countdown */}
                    <div className="flex gap-2 sm:gap-4">
                        <CountdownCard value="05" label="HOURS" />
                        <CountdownCard value="30" label="MINUTES" />
                    </div>

                </div>

                <div className="my-2">
                    {/* Buy Now Button */}
                    <img
                        onClick={() => navigate('/userhome')}
                        src={MyImages.buyNowButton}
                        alt="Buy Now"
                        className="w-50 sm:w-60 md:w-60 mt-2 active:scale-80 cursor-pointer transition-all"
                    />  
                </div>
            </div>
        </div>
    );
};

export default OfferCard;
