import SideNav from './SideNav';
import { FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetQuotesByIdQuery, useRespondeCustmerQuoteMutation } from '../../Redux/Features/quatationApiSlice';

function Approve() {
    const [message, setMessage] = useState('');

    const location = useLocation();
    const { id } = location.state || {};

    const { data } = useGetQuotesByIdQuery(id);
    const [respondeCustmerQuote, { isLoading }] = useRespondeCustmerQuoteMutation();

    const [totals, setTotals] = useState<{ [key: string]: number }>({});
    const [prices, setPrices] = useState<{ [key: string]: number }>({});

    const handlePriceChange = ({ id, price, qouteId }: { id: string; price: number; qouteId: string }) => {
        const product = data?.quotation.products.find((i) => i.productDetails._id === id);
        const quantity = product ? product.quantity_requested : 0;

        setPrices((prevPrices) => ({
            ...prevPrices,
            [qouteId]: price
        }));

        calculateTotal(id, quantity, price);
    };

    const calculateTotal = (id: string, quantity: number, price: number) => {
        const total = quantity * price;
        setTotals((prevTotals) => ({
            ...prevTotals,
            [id]: total
        }));
    };

    const grandTotal = Object.values(totals).reduce((acc, curr) => acc + curr, 0);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(id, message, prices, grandTotal);
        respondeCustmerQuote({
            data: {
                id,
                message,
                prices,
                grandTotal
            }
        });
    };

    return (
        <div className="flex">
            <div>
                <SideNav />
            </div>

            <div className="border rounded border-gray-500 pb-5 max-w-screen-lg m-auto mt-14 w-full">
                <h1 className="border-b text-2xl text-white font-medium text-center mb-4 p-2 bg-purple-950 use">Approval Email</h1>
                <div className="p-5">
                    <ul role="list" className="divide-y">
                        <h1>Selected Items</h1>
                        {data?.quotation.products.map((p) => (
                            <li key={p.productDetails._id} className="flex py-6">
                                <div className="h-24 rounded-md border p-1 border-gray-200">
                                    <img src={p.productDetails.productImg} alt={p.productDetails.name} className="h-full w-full object-cover object-center" />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between font-medium text-gray-900">
                                            <h3>
                                                <a href="">{p.productDetails.name}</a>
                                            </h3>
                                        </div>
                                        <h3>
                                            <a href="">{p.productDetails.description}</a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{p.productDetails.weight.toString()}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <div>
                                            <div className="flex items-center max-w-[11rem]">
                                                <input
                                                    type="number"
                                                    data-input-counter
                                                    data-input-counter-min="1"
                                                    data-input-counter-max="5"
                                                    aria-describedby="helper-text-explanation"
                                                    className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 block w-full"
                                                    value={p.quantity_requested}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="px-3">x </span>
                                            <input
                                                type="number"
                                                data-id={p.productDetails._id}
                                                className="bg-gray-50 border-gray-300 h-11 font-medium text-center text-gray-900 block w-32 border rounded-md"
                                                placeholder=""
                                                defaultValue={p.productDetails.price}
                                                onChange={(e) => handlePriceChange({ id: p.productDetails._id, price: parseFloat(e.target.value), qouteId: p._id })}
                                            />
                                            <span className="px-3">=</span>
                                            <span>${totals[p.productDetails._id]?.toFixed(2) || '0.00'}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="px-5 mt-4 pb-4 flex justify-end">
                    <h2 className="font-medium text-gray-900">Total Price: ${grandTotal.toFixed(2)}</h2>
                </div>
                <div className=" mx-5">
                    <h2 className="block mb-2 font-medium text-gray-700">Email</h2>
                    <div className="bg-gray-50  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5">{data?.quotation.customer_email}</div>
                </div>
                <form className="px-5" onSubmit={handleSubmit}>
                    <div className="pt-5">
                        <label htmlFor="message" className="block mb-2 font-medium text-gray-900">
                            Message
                        </label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-gray-200 border border-gray-200 rounded" rows={5} name="message"></textarea>
                    </div>
                    <button disabled={isLoading} type="submit" className="bg-purple-950 hover:bg-opacity-90 p-1 px-5 text-white rounded">
                        {isLoading ? 'Sending' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Approve;
