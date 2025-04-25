import React from 'react';
import TicketCard from '../TicketCard/TicketCard';
import MyColors from '../../Constants/MyColors';
import { FiTrash2 } from 'react-icons/fi';
import { GoArrowSwitch } from "react-icons/go";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const Ticket = ({
    onTicketIndex,
    onSetTicketNumber,
    onTicketId,
    onSelectedNumber,
    onsetRandomNumber,
    onDeleteTicket,
    onAmount,
    onIncrease,
    onDecrease,
}) => {
    return (
        <TicketCard
            selectedNumber={onSelectedNumber}
            onNumberSelect={(num) => onSetTicketNumber(index, num)}
            size="small"
            position='left'
            topContent={(
                <div className="w-full flex flex-col gap-1" style={{ fontFamily: 'Urbanist' }}>
                    <div className="flex items-center justify-between px-2">
                        <p className="text-lg font-bold" style={{ color: MyColors.secondary }}>
                            Ticket {onTicketId}
                        </p>
                        <div className="flex items-center gap-3 ">
                            <GoArrowSwitch
                                size={18}
                                onClick={() => onsetRandomNumber(onTicketIndex)}
                                style={{ color: MyColors.main, cursor: 'pointer' }}
                            />
                            <FiTrash2
                                size={18}
                                onClick={() => onDeleteTicket(onTicketIndex)}
                                style={{ color: MyColors.main, cursor: 'pointer' }}
                            />

                        </div>
                    </div>

                    <div className="w-full h-10 border-2 rounded-md flex items-center justify-start text-sm font-bold my-2 px-2"
                        style={{
                            background: MyColors.white,
                            color: MyColors.main,
                            borderColor: MyColors.secondary,
                        }}>
                        {onSelectedNumber !== null ? onSelectedNumber : "Pick 1 Number"}
                    </div>
                </div>
            )}
            bottomContent={(size) => (
                <div className="mt-6 text-start space-y-2">
                    <p
                        className={`font-bold whitespace-nowrap ${size === "small"
                            ? "text-sm"
                            : size === "medium"
                                ? "text-sm"
                                : "text-base"
                            }`}
                        style={{ color: MyColors.white, fontFamily: 'Urbanist' }}
                    >
                        Invest from $1 to $50
                    </p>

                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-4 px-2">
                            <div
                                className="w-40 h-10 border-2 flex items-center justify-between px-2"
                                style={{
                                    borderColor: MyColors.secondary,
                                    background: MyColors.white,
                                    fontFamily: 'Urbanist',
                                }}
                            >
                                <span className="text-lg font-bold" style={{ color: MyColors.main }}>
                                    $ {onAmount}
                                </span>
                                <div className="flex flex-col items-center gap-y-[1px]">
                                    <RiArrowUpSLine
                                        size={25}
                                        onClick={() => onIncrease(onTicketIndex)}
                                        style={{ color: MyColors.main, marginBottom: '-5px' }}
                                        className='active:scale-80 cursor-pointer'
                                    />
                                    <RiArrowDownSLine
                                        size={25}
                                        onClick={() => onDecrease(onTicketIndex)}
                                        style={{ color: MyColors.main, marginTop: '-5px' }}
                                        className='active:scale-80 cursor-pointer'
                                    />
                                </div>
                            </div>

                            <div className="flex-1 text-end text-white font-urbanist" style={{ fontFamily: 'Urbanist' }}>
                                <p className="font-bold text-lg">20x</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        />
    )
}

export default Ticket