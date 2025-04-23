import React from 'react';
import MyColors from '../../Constants/MyColors';

const EmailSentCard = ({ onChangeEmail }) => {
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
                    Email Sent
                </h2>

                <p
                    className="text-start text-sm md:text-md font-medium mb-6"
                    style={{
                        color: MyColors.white,
                        fontFamily: 'Urbanist',
                    }}
                >
                    We have sent you an email at deskwork@gmail.com. Check your inbox and follow the instructions to reset your account password.
                </p>

                <div className="text-start mb-6">
                    <p
                        className="text-sm font-medium"
                        style={{
                            color: MyColors.white,
                            fontFamily: 'Urbanist',
                        }}
                    >
                        Did not receive the email?{' '}
                        <span
                            onClick={() => {
                                console.log('Forgot Pass Clicked');
                            }}
                            className="font-semibold underline cursor-pointer"
                            style={{ color: MyColors.main }}>
                            Resent Email
                        </span>
                    </p>
                </div>

                <div className="text-start">
                    <p
                        className="text-sm font-medium"
                        style={{
                            color: MyColors.white,
                            fontFamily: 'Urbanist',
                        }}
                    >
                        Wrong Email Address?{' '}
                        <span
                            onClick={() => {
                                console.log('Email Change Clicked');
                                onChangeEmail();
                            }}
                            className="font-semibold underline cursor-pointer"
                            style={{ color: MyColors.main }}>
                            Change Email Address
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmailSentCard;
