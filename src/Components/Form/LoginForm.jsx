import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from './TextField';
import Button from '../Buttons/Button';
import MyColors from '../../Constants/MyColors.js';

const LoginForm = ({ onForgotPassword }) => {
    const navigate = useNavigate();
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
                    Login
                </h2>

                <div className="text-start mb-4">
                    <label
                        className="block mb-2"
                        style={{
                            color: MyColors.white,
                            fontFamily: 'Urbanist',
                        }}
                    >
                        User Name
                    </label>
                    <TextField placeholder="Enter Email" />
                </div>

                <div className="text-start mb-4">
                    <label
                        className="block mb-2"
                        style={{
                            color: MyColors.white,
                            fontFamily: 'Urbanist',
                        }}
                    >
                        Password
                    </label>
                    <TextField isPassword placeholder="Enter Password" />
                </div>

                <div className="flex justify-end mb-4">
                    <span
                        onClick={onForgotPassword}
                        className="text-sm break-words max-w-[80%] cursor-pointer"
                        style={{
                            color: MyColors.white,
                            fontFamily: 'Urbanist',
                        }}
                    >
                        Forgot Password?
                    </span>
                </div>


                <div className="mb-4">
                    <Button
                        onClick={() => console.log('Form Login Clicked')}
                        bgColor={MyColors.primary}
                        textColor={MyColors.main}
                        variant="solid"
                        borderColor={MyColors.tertiary}
                        fullWidth={true}
                    >
                        Login
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
                        Not a member?{' '}
                        <span
                            onClick={() => {
                                navigate('/signup');
                            }}
                            className="font-semibold cursor-pointer"
                            style={{ color: MyColors.main }}>
                            Create Account
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;