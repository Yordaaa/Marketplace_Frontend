import SideNav from './SideNav';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../Redux/Features/seletor';
import { useDispatch } from 'react-redux';
import { assignNewQuantity } from '../../Redux/Features/cartSlice';
import { useState } from 'react';

function Approve() {
    const cart = useSelector(cartSelector);
    const dispatch = useDispatch();
    const [totals, setTotals] = useState<{ [key: string]: number }>({});

    const handleQuantityChange = ({ id, newQuantity }: { id: string; newQuantity: number }) => {
        dispatch(assignNewQuantity({ id, newQuantity }));
        const currentPrice = cart.find((item) => item._id === id)?.price || 0;
        calculateTotal(id, newQuantity, currentPrice);
    };

    const handlePriceChange = ({ id, price }: { id: string; price: number }) => {
        const quantity = cart.find((item) => item._id === id)?.quantity || 0;
        calculateTotal(id, quantity, price);
    };

    const calculateTotal = (id: string, quantity: number, price: number) => {
        const total = quantity * price;
        setTotals((prevTotals) => ({
            ...prevTotals,
            [id]: total
        }));
    };

    // Calculate grand total
    const grandTotal = Object.values(totals).reduce((acc, curr) => acc + curr, 0);

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
                        {cart.map((cartItem) => (
                            <li key={cartItem._id} className="flex py-6">
                                <div className="h-24 rounded-md border p-1 border-gray-200">
                                    <img src={cartItem.productImg} alt={cartItem.name} className="h-full w-full object-cover object-center" />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between font-medium text-gray-900">
                                            <h3>
                                                <a href="">{cartItem.name}</a>
                                            </h3>
                                        </div>
                                        <h3>
                                            <a href="">{cartItem.description}</a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{cartItem.weight}</p>
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
                                                    placeholder=""
                                                    value={cartItem.quantity}
                                                    onChange={(e) => handleQuantityChange({ id: cartItem._id, newQuantity: parseInt(e.target.value) })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="px-3">x </span>
                                            <input
                                                type="number"
                                                data-id={cartItem._id}
                                                className="bg-gray-50 border-gray-300 h-11 font-medium text-center text-gray-900 block w-32 border rounded-md"
                                                placeholder=""
                                                defaultValue={cartItem.price}
                                                onChange={(e) => handlePriceChange({ id: cartItem._id, price: parseFloat(e.target.value) })}
                                            />
                                            <span className="px-3">=</span>
                                            <span>${totals[cartItem._id]?.toFixed(2) || '0.00'}</span>
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
                <form className="px-5">
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Email</label>
                        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" name="email" required />
                    </div>

                    <div className="pt-5">
                        <label htmlFor="message" className="block mb-2 font-medium text-gray-900">
                            Message
                        </label>
                        <textarea className="w-full bg-gray-200 border border-gray-200 rounded" rows={5} name="message"></textarea>
                    </div>
                    <button type="submit" className="bg-purple-950 hover:bg-opacity-90 p-1 px-5 text-white rounded">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Approve;
