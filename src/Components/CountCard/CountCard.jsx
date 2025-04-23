import React from 'react';
import MyColors from '../../Constants/MyColors';

const CountdownCard = ({ value, label }) => {
    return (
        <div className="mt-3 flex flex-col w-18 h-20 sm:w-20 md:w-16 lg:w-18 rounded-md overflow-hidden shadow-md">
            <div
                className="flex-1 flex items-center justify-center text-2xl sm:text-2xl md:xl font-medium"
                style={{
                    backgroundColor: MyColors.main,
                    color: MyColors.secondary,
                }}
            >
                {value}
            </div>
            <div
                className="py-2 text-center text-xs sm:text-sm md:text-xs font-medium"
                style={{
                    backgroundColor: MyColors.white,
                    color: MyColors.secondary,
                }}
            >
                {label}
            </div>
        </div>
    );
};

export default CountdownCard;