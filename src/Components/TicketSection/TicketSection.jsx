import React, { useState } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import MyColors from '../../Constants/MyColors';
import { FiRefreshCcw, FiTrash2 } from 'react-icons/fi';
import { GoArrowSwitch } from "react-icons/go";


const TicketSection = () => {
    const [tickets, setTickets] = useState([{ id: 1, selectedNumber: null, number: 20 }]);

    const increaseNumber = (index) => {
        setTickets(prev =>
            prev.map((ticket, i) =>
                i === index ? { ...ticket, number: ticket.number < 50 ? ticket.number + 1 : 50 } : ticket
            )
        )
    };

    const decreaseNumber = (index) => {
        setTickets(prev =>
            prev.map((ticket, i) =>
                i === index ? { ...ticket, number: ticket.number > 1 ? ticket.number - 1 : 1 } : ticket
            )
        );
    };

    const setTicketNumber = (index, num) => {
        setTickets(prev =>
            prev.map((ticket, i) =>
                i === index ? { ...ticket, selectedNumber: num } : ticket
            )
        );
    };

    const addNewTicket = () => {
        setTickets(prev => {
            const newTicketId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
            
            return [...prev, { id: newTicketId, selectedNumber: null, number: 20 }];
        });
    };

    const setRandomNumber = (index) => {
        const randomNumber = Math.floor(Math.random() * 36) + 1;
        setTickets(prev =>
            prev.map((ticket, i) =>
                i === index ? { ...ticket, selectedNumber: randomNumber } : ticket
            )
        );
    };
    
    const deleteTicket = (index) => {
        setTickets(prev => {
            const updatedTickets = prev.filter((_, i) => i !== index);
    
            return updatedTickets.map((ticket, i) => ({
                ...ticket,
                id: i + 1,
            }));
        });
    };
    

    return (
        <div className="px-4 sm:px-8 md:px-30 py-10 mt-10">
            <div className="flex gap-4 overflow-x-auto sm:flex-wrap no-scrollbar">
                {tickets.map((ticket, index) => (
                    <div
                        key={ticket.id}
                        className="w-full sm:w-1/2 lg:w-1/3"
                    >
                        <TicketCard
                            selectedNumber={ticket.selectedNumber}
                            onNumberSelect={(num) => setTicketNumber(index, num)}
                            size="small"
                            position='left'
                            topContent={(
                                <div className="w-full flex flex-col gap-1" style={{ fontFamily: 'Urbanist' }}>
                                    <div className="flex items-center justify-between px-2">
                                        <p className="text-lg font-bold" style={{ color: MyColors.secondary }}>
                                            Ticket {ticket.id}
                                        </p>
                                        <div className="flex items-center gap-3 ">
                                        <GoArrowSwitch
                                                size={18}
                                                onClick={() => setRandomNumber(index)}
                                                style={{ color: MyColors.main, cursor: 'pointer'}}
                                            />
                                            <FiTrash2
                                                size={18}
                                                onClick={() => deleteTicket(index)}
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
                                        {ticket.selectedNumber !== null ? ticket.selectedNumber : "Pick 1 Number"}
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
                                                <span className="text-sm font-bold" style={{ color: MyColors.main }}>
                                                    {ticket.number}
                                                </span>
                                                <div className="flex flex-col items-center justify-center">
                                                    <button
                                                        onClick={() => increaseNumber(index)}
                                                        className="text-xs leading-none"
                                                        style={{ color: MyColors.main }}
                                                    >
                                                        ▲
                                                    </button>
                                                    <button
                                                        onClick={() => decreaseNumber(index)}
                                                        className="text-xs leading-none"
                                                        style={{ color: MyColors.main }}
                                                    >
                                                        ▼
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="text-white font-urbanist text-start" style={{ fontFamily: 'Urbanist' }}>
                                                <p className="font-bold text-sm">Pay: 1 - 50$</p>
                                                <p className="text-sm font-bold">Win: 1000$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                ))}

                {/* Add Another Ticket */}
                <div className="relative mt-4 w-full sm:w-1/2 lg:w-1/3">
                    <TicketCard
                        onNumberSelect={() => { }}
                        size="small"
                        position="left"
                        topContent={(
                            <div className="w-full flex flex-col gap-1" style={{ fontFamily: 'Urbanist' }}>
                                <div className="flex items-center justify-between px-2">
                                    <p className="text-lg font-bold" style={{ color: MyColors.secondary }}>
                                        Ticket {tickets.length + 1}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <FiRefreshCcw size={18} style={{ color: MyColors.main, cursor: 'pointer' }} />
                                        <FiTrash2 size={18} style={{ color: MyColors.main, cursor: 'pointer' }} />
                                    </div>
                                </div>
                                <div className="w-full h-10 border-2 rounded-md flex items-center justify-start text-sm font-bold my-2 px-2"
                                    style={{
                                        background: MyColors.white,
                                        color: MyColors.main,
                                        borderColor: MyColors.secondary,
                                    }}>
                                    Pick 1 Number
                                </div>
                            </div>
                        )}
                        bottomContent={(size) => (
                            <div className="mt-0 text-start space-y-2">
                                <p className={`font-bold whitespace-nowrap ${size === "small" ? "text-sm" : size === "medium" ? "text-sm" : "text-base"}`}
                                    style={{ color: MyColors.white, fontFamily: 'Urbanist' }}>
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
                                            <span className="text-sm font-bold" style={{ color: MyColors.main }}>
                                                20
                                            </span>

                                            <div className="flex flex-col items-center justify-center">
                                                <button
                                                    className="text-xs leading-none"
                                                    style={{ color: MyColors.main }}
                                                >
                                                    ▲
                                                </button>
                                                <button
                                                    className="text-xs leading-none"
                                                    style={{ color: MyColors.main }}
                                                >
                                                    ▼
                                                </button>
                                            </div>
                                        </div>

                                        <div className="text-white font-urbanist text-start" style={{ fontFamily: 'Urbanist' }}>
                                            <p className="font-bold text-sm">Pay: 1 - 50$</p>
                                            <p className="text-sm font-bold">Win: 1000$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                    <div
                        onClick={addNewTicket}
                        className="absolute top-0 left-0 w-75 h-full bg-[#FFFCE9]/80 flex items-center justify-center rounded-2xl cursor-pointer z-10"
                    >
                        <p
                            className="text-lg sm:text-xl md:text-2xl font-bold text-center"
                            style={{ color: MyColors.main, fontFamily: 'Urbanist' }}
                        >
                            Add <br /> Another Ticket
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketSection;
