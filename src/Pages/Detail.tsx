import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../Redux/Features/productAPiSlice';
import { productIdProps } from '../Redux/Features/types';

export default function Detail() {
    const { id } = useParams();
    const { data: product, error, isLoading } = useGetProductQuery({ id } as productIdProps);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        const errorMessage = 'status' in error ? error.status : error.message || 'Unknown error';
        return <div>Error: {errorMessage}</div>;
    }
    return (
        <div className="mt-24 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 ">
                <div className="col-span-1">
                    <img src={product?.productImg} alt="BATH MAT" className="w-full h-auto rounded-md shadow-md" />
                </div>
                <div className=" lg:pl-8 col-span-2">
                    <h1 className="text-2xl font-bold text-gray-900">{product?.name}</h1>
                    <p className="mt-2 text-lg text-gray-700">{product?.weight}</p>

                    <p className="mt-4 text-gray-700">{product?.description}</p>
                    <p className="mt-2 text-gray-500">{product?.customs_description}</p>
                    <p className="mt-2 text-gray-500">
                        Weight:{product?.weight} {product?.preferred_units}
                    </p>

                    <div className="mt-4">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                            Quantity
                        </label>
                    </div>

          <button className="mt-6 w-full bg-purple-950 text-white py-2 rounded-md hover:opacity-80">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
