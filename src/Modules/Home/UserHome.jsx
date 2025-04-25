import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyImages from '../../Constants/MyImages';
import MyColors from '../../Constants/MyColors';
import CountdownCard from '../../Components/CountCard/CountCard';
import TicketSection from '../../Components/TicketSection/TicketSection';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import Button from '../../Components/Buttons/Button';


const UserHome = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Background Image Section */}
            <div
                className="w-full bg-cover bg-center py-5 h-auto"
                style={{ backgroundImage: `url(${MyImages.homeBg})` }}
            >
                <div className="relative px-4 sm:px-8 md:px-30 py-10 flex flex-col md:flex-row justify-between items-center">
                    {/* Left Content */}
                    <div className="text-center md:text-left space-y-2 mt-6 mb-6 md:mb-0">

                        <h1
                            className="text-4xl sm:text-5xl md:text-4xl font-extrabold"
                            style={{ color: MyColors.main, fontFamily: 'Urbanist' }}
                        >
                            PICK 1
                        </h1>

                        <h2
                            className="text-xl sm:text-2xl md:text-xl font-bold"
                            style={{ color: MyColors.secondary, fontFamily: 'Urbanist' }}
                        >
                            PRIZE UP TO
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold"
                            style={{ color: MyColors.main, fontFamily: 'Urbanist' }}
                        >
                            $1000
                        </h1>
                    </div>

                    {/* Right Countdown Content */}
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold"
                            style={{ color: MyColors.main, fontFamily: 'Urbanist' }}
                        >
                            NEXT DRAW
                        </h1>
                        <h2
                            className="text-xl sm:text-3xl md:text-xl font-extrabold"
                            style={{ color: MyColors.secondary, fontFamily: 'Urbanist' }}
                        >
                            Friday, 25 Apr 2025
                        </h2>
                        <div className="flex gap-2 sm:gap-3">
                            <CountdownCard value="12" label="DAYS" />
                            <CountdownCard value="05" label="HOURS" />
                            <CountdownCard value="30" label="MINUTES" />
                            <CountdownCard value="45" label="SECONDS" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ticket Section */}
            <TicketSection />

            {/* Add Cart */}
            <div
                    className="w-[90%] sm:w-auto mx-auto mt-6 mb-10 px-10 py-5 rounded-2xl flex flex-col items-center sm:hidden"
                    style={{ background: MyColors.secondary }}
            >

                    <div
                        className="flex items-center justify-center px-4 py-2 rounded-4xl"
                        style={{ background: MyColors.white }}
                    >
                        {/* Minus Icon */}
                        <FiMinusCircle
                            size={30}
                            style={{ color: MyColors.secondary }}
                        />

                        {/* Price Box */}
                        <div className="rounded-md justify-center px-2">
                            <p
                                className="text-white text-lg px-12 rounded-2xl"
                                style={{ fontFamily: 'Urbanist', background: MyColors.main }}
                            >
                                $0
                            </p>
                        </div>

                        {/* Plus Icon */}
                        <FiPlusCircle
                            className="text-secondary"
                            size={30}
                            style={{ color: MyColors.secondary }}
                        />
                    </div>

                    <p
                        className="text-lg sm:text-2xl px-12 py-2 rounded-2xl font-medium"
                        style={{ fontFamily: 'Urbanist', color: MyColors.white }}
                    >
                        Subtotal $0
                    </p>

                    <Button
                        onClick={() => navigate('/cart')}
                        bgColor={MyColors.primary}
                        textColor={MyColors.main}
                        variant="solid"
                        borderColor={MyColors.tertiary}
                        fullWidth={true}
                    >
                        Add To Cart
                    </Button>

                    <p
                        className="text-md sm:text-xs px-12 py-1 rounded-2xl font-medium"
                        style={{ fontFamily: 'Urbanist', color: MyColors.white }}
                    >
                        Play for the draw on
                    </p>

                    <p
                        className="text-md sm:text-xs px-12 rounded-2xl font-medium"
                        style={{ fontFamily: 'Urbanist', color: MyColors.white }}
                    >
                        17-Apr-25 1 PM GST
                    </p>

                </div>

        </>

    );
};

export default UserHome;