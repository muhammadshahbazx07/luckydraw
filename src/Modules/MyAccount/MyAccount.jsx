import React from 'react';
import MyColors from '../../Constants/MyColors';

const MyAccount = () => {
    return (
        <div className="relative px-4 sm:px-8 md:px-30 py-20">

            {/* Heading */}
            <h1
                className="text-center text-2xl sm:text-4xl font-extrabold mb-8"
                style={{
                    color: MyColors.main,
                    fontFamily: 'Urbanist',
                }}
            >
                MY ACCOUNT
            </h1>

            {/* Baad ka content yahaan aayega */}
        </div>
    );
};

export default MyAccount;
