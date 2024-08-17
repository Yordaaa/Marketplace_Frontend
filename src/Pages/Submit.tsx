import { ErrorResponse, Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from '../Redux/Features/seletor';
import { useRequestQuatationMutation } from '../Redux/Features/quatationApiSlice';
import { quatationResType, quotationDataProps } from './types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { clearCart } from '../Redux/Features/cartSlice';
function Submit() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const cart = useSelector(cartSelector);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [requestQuatation, { isLoading }] = useRequestQuatationMutation();

    const products = cart.map((item: { code: string; quantity: number }) => ({
        code: item.code,
        quantity: item.quantity
    }));

    const quotationData: quotationDataProps = {
        name,
        email,
        products
    };

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await requestQuatation(quotationData);

            if ('data' in res) {
                const { data } = res as { data: quatationResType };
                if (data.success) {
                    toast.success(data.message);
                    setName('');
                    setEmail('');
                    dispatch(clearCart());
                    navigate('/');
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
        <div className="flex flex-col items-center px-6 py-8 mx-auto lg:py-0 mt-24 h-[65vh]">
            <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 border">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-semibold  text-gray-900 md:text-2xl use">Contact us and get details on your email quickly</h1>
                    <form onSubmit={onSubmitHandler} className=" space-y-6 ">
                        <div className="space-y-3">
                            <TextField value={name} onChange={(e) => setName(e.target.value)} label="Enter name" variant="standard" className="w-full " />
                            <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Enter email" variant="standard" className="w-full " />
                        </div>
                        <button disabled={isLoading} className="mt-5 w-full text-white bg-purple-950 hover:opacity-90 font-medium rounded-lg  px-5 py-2.5 text-center">
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                        <p className="text-sm  text-gray-600">
                            If you want to be our member
                            <Link to="" className="font-medium hover:underline text-purple-600">
                                signup here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Submit;
