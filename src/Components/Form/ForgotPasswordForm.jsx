import React from 'react';
import TextField from './TextField';
import Button from '../Buttons/Button';
import MyColors from '../../Constants/MyColors.js';

const ForgotPasswordForm = ({ onBackToLogin, onSentEmail }) => {
    return (
        <div className="flex justify-center items-center lg:min-h-screen py-8 px-4">
            <div
                className="w-full max-w-lg rounded-lg border-2 border-dashed border-[#FFBEC5] px-6 py-30"
                style={{ background: MyColors.secondary }}
            >
                <h2
                    className="text-center font-urbanist text-3xl font-semibold mb-6"
                    style={{
                        color: MyColors.white,
                        fontFamily: 'Urbanist',
                    }}
                >
                    Forgot Password
                </h2>

                <div className="text-start mb-4">
                    <label
                        className="block mb-2"
                        style={{
                            color: MyColors.white,
                            fontFamily: 'Urbanist',
                        }}
                    >
                        Email Address
                    </label>
                    <TextField placeholder="Enter Email Address" />
                </div>

                <p
                    className="text-start text-sm md:text-md font-medium mb-6"
                    style={{
                        color: MyColors.white,
                        fontFamily: 'Urbanist',
                    }}
                >
                    Enter the email address you used to create the account, and we will email you instructions to reset your password.
                </p>

                <div className="mb-4">
                    <Button
                        onClick={() => {
                            console.log('Forgot Pass Clicked');
                            onSentEmail();
                        }}
                        bgColor={MyColors.primary}
                        textColor={MyColors.main}
                        variant="solid"
                        borderColor={MyColors.tertiary}
                        fullWidth={true}
                    >
                        Send Email
                    </Button>
                </div>

                <div className="text-center">
                    <p
                        className="text-sm font-medium"
                        style={{
                            color: MyColors.white,
                            fontFamily: 'Urbanist',
                        }}
                    >
                        Remember Password?{' '}
                        <span
                            onClick={onBackToLogin}
                            className="font-semibold cursor-pointer"
                            style={{ color: MyColors.main }}>
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
