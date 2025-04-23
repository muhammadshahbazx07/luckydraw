import React from 'react';
import MyImages from '../../Constants/MyImages';
import MyColors from '../../Constants/MyColors';
import CountdownCard from '../../Components/CountCard/CountCard';
import TicketSection from '../../Components/TicketSection/TicketSection';

const UserHome = () => {
    return (
        <>
            {/* Background Image Section */}
            <div
                className="w-full bg-cover bg-center py-5"
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
                            $5000
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
                            Wednesday, 16 Apr 2025
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

        </>

    );
};

export default UserHome;