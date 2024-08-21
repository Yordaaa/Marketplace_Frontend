import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../Redux/Features/productAPiSlice';
import { ProductCard } from './ProductCard';
import { productResTyp } from '../Redux/Features/types';

function CategoryProduct() {
    const params = useParams();

    const { data: products } = useGetProductsByCategoryQuery(params);

    return (
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-5 min-h-[80vh]">
            <h1 className=" pt-24 text-center text-3xl pb-5 font-semibold  text-gray-900 md:text-2xl use">Products in {params.category} category</h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products?.map((product: productResTyp) => (
                    <ProductCard key={product._id} products={product} />
                ))}
            </div>
        </div>
    );
}
export default CategoryProduct;
