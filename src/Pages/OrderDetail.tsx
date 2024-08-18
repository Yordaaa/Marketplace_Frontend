function OrderDetail() {
    return (
        <div className="max-w-screen-lg mx-auto pt-16 ">
            <div className="flex justify-between px-5">
                <h1 className="text-2xl use">Order : 653748</h1>
                <p>Order placed March 22, 2024</p>
            </div>
            <div className="p-5">
                <ul role="list" className="divide-y">
                    <h1 className="pb-3">Selected Items</h1>

                    <li className="flex py-6">
                        <div className="h-24 rounded-md border p-1 border-gray-200">
                            <img src="https://cdn.goodao.net/ccmrolling/nwqqnhm1htl.jpg" className="h-full w-full object-cover object-center" />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                                <div className="flex justify-between font-medium text-gray-900 use">
                                    <h3>
                                        <a href="">bottle of cough</a>
                                    </h3>
                                </div>
                                <h3>
                                    <a href="">200ml bottle of cough syrup for relief from cold symptoms.</a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">45</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                                <div>10</div>
                                <div className="flex items-center">
                                    <span className="px-3">x </span>
                                    3456
                                    <span className="px-3">=</span>
                                    <span>34560</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex py-6">
                        <div className="h-24 rounded-md border p-1 border-gray-200">
                            <img src="https://cdn.goodao.net/ccmrolling/nwqqnhm1htl.jpg" className="h-full w-full object-cover object-center" />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                                <div className="flex justify-between font-medium text-gray-900 use">
                                    <h3>
                                        <a href="">bottle of cough</a>
                                    </h3>
                                </div>
                                <h3>
                                    <a href="">200ml bottle of cough syrup for relief from cold symptoms.</a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">45</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                                <div>10</div>
                                <div className="flex items-center">
                                    <span className="px-3">x </span>
                                    3456
                                    <span className="px-3">=</span>
                                    <span>34560</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="px-5 mt-4 pb-4 flex justify-end">
                <h2 className="font-medium text-gray-900">Total Price: $21124</h2>
            </div>
            <div className="flex justify-end mr-5 pt-5">
                <button className="p-1 px-3 bg-purple-950 text-white hover:bg-opacity-70">Proceed to next</button>
            </div>
        </div>
    );
}

export default OrderDetail;
