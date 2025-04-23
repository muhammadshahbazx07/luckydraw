import React from 'react';
import TextField from './TextField.jsx';
import MyColors from '../../Constants/MyColors.js';
import Button from '../Buttons/Button.jsx';

const SignupForm = () => {
    const labelClass = "block mb-2 text-sm font-medium";
    const wrapperClass = "text-start mb-4 w-full md:w-[48%]";

    const labelStyle = {
        color: MyColors.white,
        fontFamily: 'Urbanist',
    };

    return (
        <div
            className="w-full rounded-lg border-2 border-dashed border-[#FFBEC5] px-6 sm:px-10 md:px-20 lg:px-30 py-10 sm:py-16 md:py-20"
            style={{ background: MyColors.secondary, fontFamily: 'Urbanist' }}
        >
            {/* Heading */}
            <h2
                className="text-start font-urbanist text-4xl font-semibold mb-6"
                style={{
                    color: MyColors.white,
                    fontFamily: 'Urbanist',
                }}
            >
                Create Your Account
            </h2>

            {/* Form Fields */}
            <div className="flex flex-wrap gap-4">
                <div className={wrapperClass}>
                    <label className={labelClass} style={labelStyle}>Full Name</label>
                    <TextField placeholder="Enter Full Name" />
                </div>
                <div className={wrapperClass}>
                    <label className={labelClass} style={labelStyle}>Email Address</label>
                    <TextField placeholder="Enter Email Address" />
                </div>

                <div className={wrapperClass}>
                    <label className={labelClass} style={labelStyle}>Phone No</label>
                    <TextField placeholder="Enter Phone Number" />
                </div>
                <div className={wrapperClass}>
                    <label className={labelClass} style={labelStyle}>Password</label>
                    <TextField isPassword placeholder="Enter Password" />
                </div>

                <div className={wrapperClass}>
                    <label className={labelClass} style={labelStyle}>Confirm Password</label>
                    <TextField isPassword placeholder="Enter Confirm Password" />
                </div>
                <div className={wrapperClass}>
                    <label className={labelClass} style={labelStyle}>Referral Link</label>
                    <TextField placeholder="Enter Referral Link" />
                </div>

                {/* Divider Line */}
                <div className="w-full my-6 border-t border-white/30" />

                <div className={wrapperClass}>
                    <label className={labelClass} style={labelStyle}>Nationality</label>
                    <TextField
                        isDropdown
                        placeholder="Select Nationality"
                        options={[
                            'Pakistani',
                            'Indian',
                            'Bangladeshi',
                            'Afghani',
                            'Turkish',
                            'Saudi Arabian',
                        ]} />
                </div>
                <div className={wrapperClass}>
                    <label className={labelClass} style={labelStyle}>Gender</label>
                    <TextField
                        isDropdown
                        placeholder="Select Gender"
                        options={[
                            'Male',
                            'Female',
                            'Other'
                        ]} />
                </div>

                <div className={wrapperClass}>
                    <label className={labelClass} style={labelStyle}>Date of Birth</label>
                    <TextField isCalendar placeholder="Select date of birth" />
                </div>
                <div className={wrapperClass}>
                    <label className={labelClass} style={labelStyle}>Country of Residence</label>
                    <TextField
                        isDropdown
                        placeholder="Select Country"
                        options={[
                            'Pakistan',
                            'United Arab Emirates',
                            'United States',
                            'United Kingdom',
                            'Canada',
                        ]} />
                </div>
            </div>

            {/* Divider Line */}
            <div className="my-6 border-t border-white/30" />

            {/* Extra Text */}
            <p className="text-sm text-white mb-4 text-start">
            By clicking “Register”, I agree to <span className="font-semibold" style={{ color: MyColors.main }}>Lucky Draw</span> Terms & Conditions and Game Rules. I consent to receive communications on draws and promotions. I understand I can opt-out of optional marketing-related correspondence.
            </p>

            {/* Submit Button */}
            <Button
                onClick={() => console.log('Form Login Clicked')}
                bgColor={MyColors.primary}
                textColor={MyColors.main}
                variant="solid"
                borderColor={MyColors.tertiary}
                fullWidth={true}
            >
                Register
            </Button>
        </div>
    );
};

export default SignupForm;
