import { Link } from 'react-router-dom';
import { useState } from 'react';
import { productResTyp } from '../Redux/Features/types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Features/cartSlice';
export function ProductCard({ products }: { products: productResTyp }) {
    const [isHovered, setIsHovered] = useState(false);

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(addToCart(products));
    };

    return (
        <div className="group shadow-md border rounded-md">
            <Link to={`/product/${products._id}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 relative">
                    <img src={products.productImg} alt={products.name} className="h-52 w-full object-center object-cover rounded-t-md" />
                    {isHovered && (
                        <Link to={`/product/${products._id}`} className="w-full absolute bottom-0 left-1/2 transform -translate-x-1/2">
                            <button className="w-full bg-purple-950 text-white py-1 px-3 rounded-md hover:opacity-80">View Details</button>
                        </Link>
                    )}
                </div>
                <div className="mt-4 flex justify-between px-2">
                    <div className="overflow-hidden">
                        <h3 className="font-semibold text-gray-900">
                            <Link to={`/product/${products._id}`}>{products.name}</Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-700 truncate-2 ">{products.description}</p>
                        <p className="mt-1 text-sm text-gray-700">Weight: {products.weight} kg</p>
                    </div>
                </div>
            </Link>
            <div className="mx-2">
                <button onClick={handleOnClick} className="w-full bg-purple-950 text-white py-1 rounded-md mb-2 mt-3 hover:opacity-80">
                    Add to cart
                </button>
            </div>
        </div>
    );
}
