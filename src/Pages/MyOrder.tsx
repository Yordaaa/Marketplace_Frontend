import { Link } from 'react-router-dom';

function MyOrder() {
    return (
        <div className="min-h-[70vh] pt-24 max-w-screen-lg mx-auto">
            <h1 className="use text-2xl pb-5">My Orders.</h1>
            <div className="border p-10 rounded">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 justify-between items-center pb-5">
                    <div className="flex justify-between items-center w-full pr-5">
                        <div>
                            <h1 className="font-semibold text-gray-600">Order ID :</h1>
                            <p className="use">24gf235</p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-gray-600">Name :</h1>
                            <p className="use">Yorda</p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-gray-600">Email :</h1>
                            <p className="use">yordanostibebu5@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <h1 className="font-semibold text-gray-600">Status :</h1>
                            <p className="bg-yellow-200 text-sm px-3 rounded-md">Waiting</p>
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
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 justify-between items-center pb-5">
                    <div className="flex justify-between items-center w-full pr-5">
                        <div>
                            <h1 className="font-semibold text-gray-600">Order ID :</h1>
                            <p className="use">24gf235</p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-gray-600">Name :</h1>
                            <p className="use">Yorda</p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-gray-600">Email :</h1>
                            <p className="use">yordanostibebu5@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full ">
                        <div>
                            <h1 className="font-semibold text-gray-600">Status :</h1>
                            <p className="bg-green-200 text-sm px-3 rounded-md">Confirmed</p>
                        </div>
                        <p className="">
                            <Link to="orderdetail" className="text-white border bg-purple-600 hover:opacity-80 font-medium rounded-md text-sm px-6 mr-4 py-1 text-center">
                                Order Again
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

                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 justify-between items-center pb-5">
                    <div className="flex justify-between items-center w-full pr-5">
                        <div>
                            <h1 className="font-semibold text-gray-600">Order ID :</h1>
                            <p className="use">24gf235</p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-gray-600">Name :</h1>
                            <p className="use">Yorda</p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-gray-600">Email :</h1>
                            <p className="use">yordanostibebu5@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full ">
                        <div>
                            <h1 className="font-semibold text-gray-600">Status :</h1>
                            <p className="bg-yellow-200 text-sm px-3 rounded-md">Waiting</p>
                        </div>
                        <p className="">
                            <Link to="orderdetail" className="text-red-800 border border-red-600 hover:opacity-80 font-medium rounded-md text-sm px-5 py-1 text-center">
                                Cancel Order
                            </Link>
                        </p>

                        <Link
                            to="orderdetail"
                            className="hover:bg-gray-100 hover:text-purple-600 text-gray-600 border border-gray-300 hover:opacity-80 font-medium rounded-md text-sm px-5 py-1 text-center"
                        >
                            View Detail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyOrder;
