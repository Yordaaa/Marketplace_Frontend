import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartSelector } from '../Redux/Features/seletor';
import { useDispatch } from 'react-redux';

export default function Cart() {
    const cart = useSelector(cartSelector);
    const dispatch = useDispatch();

    const handleQuantityChange = (id: string, newQuantity: number) => {
        //  dispatch();
    };

    const handleRemoveItem = (id: string) => {
        // dispatch(removeFromCart(id));
    };

    return (
        <div className="max-w-screen-md pt-20 mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 use">Shopping Cart</h1>
            <div className="">
                <ul role="list" className="divide-y">
                    {cart.map((cart) => (
                        <li key={cart._id} className="flex py-6">
                            <div className="h-24 rounded-md border p-1 border-gray-200">
                                <img src={cart.productImg} alt={cart.name} className="h-full w-full object-cover object-center" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between font-medium text-gray-900">
                                        <h3>
                                            <a href="">{cart.name}</a>
                                        </h3>
                                    </div>
                                    <h3>
                                        <a href="">{cart.description}</a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{cart.weight}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex items-center">
                                        <label htmlFor={`quantity-${cart._id}`} className="mr-2">
                                            Qty:
                                        </label>
                                        <input
                                            type="number"
                                            id={`quantity-${cart._id}`}
                                            value={cart.quantity}
                                            min="1"
                                            className="w-16 border border-gray-300 rounded-md text-center"
                                            onChange={(e) => handleQuantityChange(cart._id, Math.max(1, parseInt(e.target.value)))}
                                        />
                                    </div>
                                    <div className="flex">
                                        <button type="button" onClick={() => handleRemoveItem(cart._id)} className="font-medium text-purple-600 hover:text-purple-500">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="px-4 py-6 sm:px-6">
                <div className="mt-6">
                    <Link
                        to="/submit"
                        className="flex items-center justify-center rounded-md border border-transparent bg-purple-950 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-opacity-70"
                    >
                        Proceed to next
                    </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or{' '}
                        <Link to="/" className="font-medium text-purple-600 hover:opacity-70">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
