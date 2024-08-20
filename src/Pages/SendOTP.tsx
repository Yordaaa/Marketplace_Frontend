import { ErrorResponse, useNavigate, useParams } from 'react-router-dom';
import { useSendOtpMutation } from '../Redux/Features/quatationApiSlice';
import { toast } from 'react-toastify';
import { FormEvent } from 'react';

function SendOTP() {
    const params = useParams();
    const navigate = useNavigate();

    const [sendOtp, { isLoading }] = useSendOtpMutation();

    interface resType {
        success: boolean;
        message: string;
    }

    const quoteId = params.quoteId;
    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        const res = await sendOtp(quoteId);
        try {
            if ('data' in res) {
                const { data } = res as { data: resType };
                if (data.success) {
                    toast.success(data.message);
                    navigate(`/otp/${quoteId}`);
                }
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col gap-5 border rounded p-10 bg-zinc-300">
                <h2>Sending an OTP to Your Email Account</h2>
                <form onSubmit={onSubmitHandler}>
                    <button disabled={isLoading} className="p-2 bg-green-500 rounded">
                        {isLoading ? 'Sending...' : 'Send OTP'}
                    </button>
                </form>
            </div>
        </div>
    );
}
export default SendOTP;
