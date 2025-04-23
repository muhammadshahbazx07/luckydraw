import React, { useState, forwardRef } from 'react';
import { FaEye, FaEyeSlash, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MyColors from '../../Constants/MyColors';

const CustomDateInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <div className="relative w-full overflow-visible">
        <input
            type="text"
            value={value}
            onClick={onClick}
            readOnly
            placeholder={placeholder}
            ref={ref}
            className="w-full rounded-md border border-[#E0E0E0] px-4 py-3 pr-10 text-sm text-[#666666] bg-white focus:outline-none cursor-pointer"
            style={{ boxSizing: 'border-box' }}
        />
        <button
            type="button"
            onClick={onClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        >
            <FaCalendarAlt />
        </button>
    </div>
));


const TextField = ({
    type = 'text',
    isPassword = false,
    isDropdown = false,
    isCalendar = false,
    options = [],
    placeholder = '',
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleDateChange = (date) => setSelectedDate(date);
    const handleDropdownClick = (option) => {
        setSelectedOption(option);
        setShowDropdown(false);
    };

    return (
        <div className="relative w-full font-[Urbanist]">
            {isDropdown ? (
                <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="relative border border-[#E0E0E0] rounded-md px-4 py-3 cursor-pointer text-sm bg-white text-[#666666] flex justify-between items-center"
                >
                    <span>{selectedOption || placeholder}</span>
                    <FaChevronDown className="text-xs text-gray-500" />
                    {showDropdown && (
                        <div className="absolute top-full mt-2 left-0 w-full z-50 bg-white border border-[#E0E0E0] rounded shadow-md">
                            {options.map((option, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleDropdownClick(option)}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : isCalendar ? (
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText={placeholder}
                    dateFormat="dd/MM/yyyy"
                    popperPlacement="top-start"
                    calendarClassName="!z-50"
                    customInput={<CustomDateInput />}
                />
            ) : (
                <div className="relative">
                    <input
                        type={isPassword ? (showPassword ? 'text' : 'password') : type}
                        placeholder={placeholder}
                        className="w-full border border-[#E0E0E0] rounded-md px-4 py-3 pr-10 text-sm bg-white text-[#666666] focus:outline-none"
                    />
                    {isPassword && (
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    )}
                </div>
            )}
            <style>
                {`
                .react-datepicker-wrapper {
                width: 100% !important;
                }
            `}
            </style>
        </div>
    );
};

export default TextField;


