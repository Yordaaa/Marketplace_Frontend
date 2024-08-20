import { useParams } from 'react-router-dom';
import { useGetProductDetailQuery } from '../Redux/Features/orderApiSlice';

function OrderDetail() {
    const { id } = useParams();

    const { data: product } = useGetProductDetailQuery(id as string);
    console.log(product);
    return (
        <div className="max-w-screen-lg mx-auto pt-16 ">
            <div className="flex justify-between px-5">
                <h1 className="text-2xl use">Order : {product?.quote._id}</h1>
                <p>Order placed March 22, 2024</p>
            </div>
            <div className="p-5">
                <ul role="list" className="divide-y">
                    <h1 className="pb-3">Selected Items</h1>

                    {product?.quote.products.map((quote) => (
                        <li className="flex py-6">
                            <div className="h-24 rounded-md border p-1 border-gray-200">
                                <img src={quote.productDetails.productImg} className="h-full w-full object-cover object-center" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between font-medium text-gray-900 use">
                                        <h3>
                                            <a href="">{quote.productDetails.name}</a>
                                        </h3>
                                    </div>
                                    <h3>
                                        <a href="">{quote.productDetails.description}</a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Weight: {quote.productDetails.weight?.toString()}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <div>price: ${quote.price}</div>
                                    <div>Quantitiy:{quote.quantity_requested}</div>
                                    <div className="flex items-center">
                                        <span className="px-3">${quote.price}</span>
                                        <span className="px-3">x </span>
                                        <span className="px-3">{quote.quantity_requested}</span>
                                        <span className="px-3">=</span>
                                        <span>{quote.price * quote.quantity_requested}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="px-5 mt-4 pb-4 flex justify-end">
                <h2 className="font-medium text-gray-900">Total Price: ${product?.quote.grandTotal}</h2>
            </div>
            <div className="flex justify-end mr-5 pt-5">
                <button className="p-1 px-3 bg-purple-950 text-white hover:bg-opacity-70">Proceed to next</button>
            </div>
        </div>
    );
}

export default OrderDetail;
