import { Link } from 'react-router-dom';
import { useGetMyOrderQuery } from '../Redux/Features/orderApiSlice';

function MyOrder() {
    const email = 'yerohunduma4@gmail.com';

    const { data: orderData, isLoading, isError } = useGetMyOrderQuery(email);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching data...</p>;

    return (
        <div className="min-h-[70vh] pt-24  mx-10">
            <h1 className="use text-2xl pb-5">My Orders.</h1>
            <div className="border rounded min-w-fit">
                {orderData?.myQuotes.map((order) => (
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 justify-between items-center pb-5">
                        <div className="flex justify-between items-center w-full pr-5">
                            <div>
                                <h1 className="font-semibold text-gray-600">Order ID :</h1>
                                <p className="use">{order._id}</p>
                            </div>
                            <div>
                                <h1 className="font-semibold text-gray-600">Name :</h1>
                                <p className="use">{order.customer_name}</p>
                            </div>
                            <div>
                                <h1 className="font-semibold text-gray-600">Email :</h1>
                                <p className="use">{order.customer_email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <h1 className="font-semibold text-gray-600">Status :</h1>
                                <p
                                    className={
                                        order.status == 'Pending'
                                            ? `bg-yellow-200 text-sm px-3 rounded-md`
                                            : order.status == `Approved`
                                            ? `bg-green-200 text-sm px-3 rounded-md`
                                            : `bg-red-200 text-sm px-3 rounded-md`
                                    }
                                >
                                    {order.status}
                                </p>
                            </div>
                            <p className="">
                                <Link to="orderdetail" className="text-red-800 border border-red-600 hover:opacity-80 font-medium rounded-md text-sm px-5 py-1 text-center">
                                    Cancel Order
                                </Link>
                            </p>

                            <p className="">
                                <Link
                                    to="orderdetail"
                                    className="hover:bg-gray-100 hover:text-purple-600 text-gray-600 border border-gray-300 hover:opacity-80 font-medium rounded-md text-sm px-5 py-1 text-center"
                                >
                                    View Detail
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyOrder;
