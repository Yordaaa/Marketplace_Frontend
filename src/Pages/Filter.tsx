import { useNavigate, useSearchParams } from 'react-router-dom';
import { paramsProps } from './types';
import { useGetAllProductsQuery } from '../Redux/Features/productAPiSlice';
import { ProductCard } from './ProductCard';
import { productResTyp } from '../Redux/Features/types';
import { Pagination } from 'flowbite-react';
import { useState } from 'react';

function Filter() {
    const [searchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const onPageChange = (page: number) => {
        setCurrentPage(page);
        searchParams.set('page', page.toString());
        navigate('?' + searchParams);
    };

    const page = Number(searchParams.get('page')) || 1;
    const keyword = searchParams.get('keyword') || '';
    const params: paramsProps = { keyword, page };

    const { data: products } = useGetAllProductsQuery(params);

    return (
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-5 min-h-[80vh]">
            <h1 className=" pt-24 text-center text-3xl pb-5 font-semibold  text-gray-900 md:text-2xl use">Products matched Your search keyword "{keyword}" </h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products?.products.map((product: productResTyp) => (
                    <ProductCard key={product._id} products={product} />
                ))}
            </div>
            {(products?.filteredProductCount ?? 0) > (products?.resPerPage ?? 0) && (
                <div className="flex overflow-x-auto w-full justify-center">
                    <Pagination currentPage={currentPage} totalPages={Math.ceil((products?.filteredProductCount ?? 0) / (products?.resPerPage ?? 1))} onPageChange={onPageChange} />
                </div>
            )}
        </div>
    );
}

export default Filter;
