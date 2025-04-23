import React, { useState } from 'react';
import MyColors from '../../Constants/MyColors';

const TicketCard = ({ onNumberSelect, topContent = null, bottomContent = null }) => {
    const [selected, setSelected] = useState(null);
    const numbers = Array.from({ length: 36 }, (_, i) => i + 1);

    const handleSelect = (num) => {
        setSelected(num);
        if (onNumberSelect) onNumberSelect(num); 
    };
    return (
        <div
            className="w-full mt-6 max-w-xl lg:max-w-1xl mx-auto rounded-2xl bg-gradient-to-b from-[#FEEC6E] to-[#F4A126] p-3 sm:px-4 md:px-4 py-8 sm:py-10 md:py-10 lg:px-10"
        >
            {/* Top Text */}
            {topContent}

            {/* Number Grid */}
            <div className="grid grid-cols-6 gap-2">
                {numbers.map((num) => {
                    const display = num < 10 ? `0${num}` : num;
                    const isSelected = selected === num;

                    return (
                        <button
                            key={num}
                            onClick={() => handleSelect(num)}
                            className={`
                                    w-full 
                                    aspect-square 
                                    text-[20px] sm:text-[30px] md:text-[30px] lg:text-[32px] 
                                    text-center 
                                    font-urbanist 
                                    rounded-xl sm:rounded-2xl
                                    transition-all duration-200 
                                    ${isSelected
                                                    ? 'bg-gradient-to-b from-[#FF818E] to-[#D6394A]'
                                                    : `bg-[${MyColors.main}]`
                                                }
                                `}  
                            style={{
                                color: MyColors.white,
                                fontWeight: 900,
                                letterSpacing: '-0.03em',
                                backgroundColor: isSelected
                                    ? MyColors.secondaryGradient
                                    : MyColors.main,
                                boxShadow: '1px 1px 3px rgba(0,0,0,0.2)',
                                border: '0.9px solid rgba(255, 255, 255, 0.7)',
                            }}
                        >
                            {display}
                        </button>
                    );
                })}
            </div>

            {/* Bottom Text */}
            {bottomContent}

        </div>
    );
};

export default TicketCard;
