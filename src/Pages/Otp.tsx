import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useVerifyOtpMutation } from '../Redux/Features/quatationApiSlice';

const Otp: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [otp, setOtp] = useState<string>('');

    const quoteId = params.quoteId;

    const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

    const onSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await verifyOtp({ quoteId, otp }); // Send OTP and quoteId to the server

            if ('data' in res) {
                const { data } = res as { data: { success: boolean; message: string } };
                if (data.success) {
                    toast.success(data.message);
                    navigate('/myorder');
                } else {
                    toast.error(data.message);
                }
            } else {
                const { error } = res as { error: { data: { message: string } } };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        }
    };
    return (
        <div className="mb-60  mt-24 border border-gray-300 w-fit p-5 pb-10 pt-10 mx-auto">
            <h1 className="use text-2xl text-center pb-5">Enter the OTP received in your email.</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="flex justify-center">
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span> </span>}
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
                <button disabled={isLoading} type="submit" className="p-2 bg-green-500 text-white rounded mt-5">
                    {isLoading ? 'Verfing...' : 'Verify OTP'}
                </button>
            </form>
        </div>
    );
};

export default Otp;
