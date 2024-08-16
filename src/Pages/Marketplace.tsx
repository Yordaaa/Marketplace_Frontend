import { Link } from 'react-router-dom';
import { useGetAllCategoriesQuery, useGetAllProductsQuery } from '../Redux/Features/productAPiSlice';
import { ProductCard } from './ProductCard';
import { productResTyp } from '../Redux/Features/types';
import { useState } from 'react';

const Marketplace: React.FC = () => {
    const { data: categories, error, isLoading } = useGetAllCategoriesQuery();
    const { data: products, error: err, isLoading: loading } = useGetAllProductsQuery();
    const [visibleProducts, setVisibleProducts] = useState<number>(8);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        const errorMessage = 'status' in error ? error.status : error.message || 'Unknown error';
        return <div>Error: {errorMessage}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (err) {
        const errorMessage = 'status' in err ? err.status : err.message || 'Unknown error';
        return <div>Error: {errorMessage}</div>;
    }
    const handleShowMore = () => {
        setVisibleProducts((prev) => prev + 4);
    };

    return (
        <div className="pt-8">
            <div
                className="py-16"
                style={{
                    backgroundImage: 'url("https://www.constructionline.co.uk/wp-content/uploads/2022/06/093-CL-MARKETPLACE-HEADER-V3.1-1.png")',
                    backgroundSize: 'cover',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backgroundBlendMode: 'darken'
                }}
            >
                <h1 className="text-gray-50 text-4xl md:text-5xl lg:text-7xl text-center use pt-5">WELCOME TO MAVEKO</h1>
                <h1 className="text-gray-50 text-xl md:text-2xl lg:text-4xl text-center use pb-5">WHAT ARE YOU LOOKING FOR?</h1>
            </div>
            <div className="max-w-screen-2xl mx-auto px-3 lg:px-10 py-5 bg-white shadow-md">
                <div className="flex items-center">
                    <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-8 text-gray-800 px-5">
                        {categories?.slice(0, 5).map((category) => (
                            <Link to="" className="flex gap-2 items-center" key={category._id}>
                                <i className="fas fa-building text-3xl md:text-4xl"></i>
                                <h3 className="text-md md:text-lg">{category.category}</h3>
                            </Link>
                        ))}
                    </div>
                    <div className="grid md:hidden grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800 px-5">
                        {categories?.slice(0, 4).map((category) => (
                            <Link to="" className="flex gap-2 items-center" key={category._id}>
                                <i className="fas fa-building text-3xl md:text-4xl"></i>
                                <h3 className="text-md md:text-lg">{category.category}</h3>
                            </Link>
                        ))}
                    </div>
                    <Link to="/categories" className="pr-2 py-2 hidden text-black bg-gray-100 px-5 rounded-md md:flex mx-auto">
                        Show More
                    </Link>
                </div>

                <Link to="/categories" className="pl-4 pr-2 py-2 md:hidden text-black bg-gray-100 px-5 w-fit rounded-md flex mx-auto mt-3">
                    Show More
                </Link>
            </div>
            <div>
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-5">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products?.slice(0, visibleProducts).map((product: productResTyp) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
                {visibleProducts < (products?.length || 0) && (
                    <div className="flex justify-center my-4">
                        <button onClick={handleShowMore} className="px-4 py-1 bg-gray-800 text-white rounded-md">
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Marketplace;
