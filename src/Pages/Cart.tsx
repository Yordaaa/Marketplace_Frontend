import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartSelector } from '../Redux/Features/seletor';
import { useDispatch } from 'react-redux';
import { assignNewQuantity, decreaseQuantity, incrementQuantity, removeFromCart } from '../Redux/Features/cartSlice';

export default function Cart() {
    const cart = useSelector(cartSelector);
    const dispatch = useDispatch();

    const handleQuantityChange = ({ id, newQuantity }: { id: string; newQuantity: number }) => dispatch(assignNewQuantity({ id, newQuantity }));

    const handleRemoveItem = (id: string) => {
        dispatch(removeFromCart({ _id: id }));
    };

    const handleDecrement = (id: string) => {
        dispatch(decreaseQuantity({ _id: id }));
    };

    const handleIncrement = (id: string) => {
        dispatch(incrementQuantity({ _id: id }));
    };

    return cart.length > 0 ? (
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
                                    <div>
                                        <div className="flex items-center max-w-[11rem]">
                                            <button
                                                type="button"
                                                id="decrement-button"
                                                className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11"
                                                onClick={() => handleDecrement(cart._id)}
                                            >
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <input
                                                type="text"
                                                id="bedrooms-input"
                                                data-input-counter
                                                data-input-counter-min="1"
                                                data-input-counter-max="5"
                                                aria-describedby="helper-text-explanation"
                                                className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 block w-full "
                                                placeholder=""
                                                value={cart.quantity}
                                                onChange={(e) => handleQuantityChange({ id: cart._id, newQuantity: parseInt(e.target.value) })}
                                                required
                                            />
                                            <button
                                                type="button"
                                                id="increment-button"
                                                className="bg-gray-100 d hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 "
                                                onClick={() => {
                                                    handleIncrement(cart._id);
                                                }}
                                            >
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <button type="button" onClick={() => handleRemoveItem(cart._id)} className="font-medium bg-red-600 p-2 text-white hover:opacity-70">
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
    ) : (
        <div className="min-h-screen flex items-center justify-center text-center">
            <h2 className="text-2xl font-bold mb-4">Cart is empty</h2>
        </div>
    );
}
