import React, { useState, useEffect } from 'react';
import MyColors from '../../Constants/MyColors';

const TicketCard = ({
    onNumberSelect,
    topContent = null,
    bottomContent = null,
    size = 'large',
    position = 'center',
    selectedNumber,
}) => {
    const [selected, setSelected] = useState(null);
    const numbers = Array.from({ length: 36 }, (_, i) => i + 1);

    const handleSelect = (num) => {
        setSelected(num);
        if (onNumberSelect) onNumberSelect(num);
    };

    useEffect(() => {
        if (selectedNumber !== null) {
            setSelected(selectedNumber);
        }
    }, [selectedNumber]);
    

    // Size-based max-width
    let maxWidth = 'max-w-xl lg:max-w-1xl';
    if (size === 'medium') maxWidth = 'max-w-md';
    if (size === 'small') maxWidth = 'max-w-sm';

    // Positioning
    let positionClass = 'mx-auto';
    if (position === 'left') positionClass = 'ml-0';
    if (position === 'right') positionClass = 'ml-auto';
    if (position === 'center') positionClass = 'mx-auto';

    return (
        <div
            className={`
                w-full mt-6 
                ${size === 'small' ? 'max-w-[300px]' : size === 'medium' ? 'max-w-md' : 'max-w-xl lg:max-w-1xl'}
                ${position === 'left' ? 'mx-0' : position === 'right' ? 'ml-auto' : 'mx-auto'}
                rounded-2xl bg-gradient-to-b from-[#FEEC6E] to-[#F4A126] 
                p-3 
                ${size === 'small' ? 'px-4 py-6' : size === 'medium' ? 'sm:px-4 md:px-4 py-8 sm:py-10 md:py-10' : 'sm:px-4 md:px-4 py-8 sm:py-10 md:py-10 lg:px-10'}
            `}
        >
            {topContent}

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
                                ${size === 'small'
                                ? 'text-[18px]'
                                : size === 'medium'
                                    ? 'text-[26px]'
                                    : 'text-[28px]'} 
                                text-center 
                                font-urbanist 
                                ${size === 'small' ? 'rounded-md' : 'rounded-xl sm:rounded-2xl'}
                                transition-all duration-200 
                                ${isSelected ? 'bg-gradient-to-b from-[#FF818E] to-[#D6394A]' : `bg-[${MyColors.main}]`}
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

            {typeof bottomContent === "function" ? bottomContent(size) : bottomContent}
        </div>
    );
};

export default TicketCard;
