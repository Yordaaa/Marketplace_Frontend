import { useSearchParams } from 'react-router-dom';
import { paramsProps } from './types';
import { useGetAllProductsQuery } from '../Redux/Features/productAPiSlice';
import { ProductCard } from './ProductCard';

function Filter() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';
    const params: paramsProps = { keyword };
    console.log(params);

    const { data: products = [] } = useGetAllProductsQuery(params);
    console.log(products);

    return (
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-5 min-h-[80vh]">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Filter;
