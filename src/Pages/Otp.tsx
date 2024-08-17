import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const Otp: React.FC = () => {
    const [otp, setOtp] = useState<string>('');

    return (
        <div className="mb-60  mt-24 border border-gray-300 w-fit p-5 pb-10 pt-10 mx-auto">
            <h1 className="use text-2xl text-center pb-5">Enter the OTP received in your email.</h1>
            <div className="flex justify-center">
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => (
                        <input
                            {...props}
                            style={{
                                border: '2px solid black',
                                borderRadius: '4px',
                                width: '40px',
                                height: '40px',
                                textAlign: 'center',
                                margin: '0 5px'
                            }}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default Otp;
