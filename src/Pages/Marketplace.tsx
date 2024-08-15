import { Link } from 'react-router-dom';
import Search from '../Components/Search';
import { useGetAllCategoriesQuery, useGetAllProductsQuery } from '../Redux/Features/productAPiSlice';
import { ProductCard } from './ProductCard';
import { productResTyp } from '../Redux/Features/types';

function Marketplace() {
    const { data: categories, error, isLoading } = useGetAllCategoriesQuery();
    const { data: products, error: err, isLoading: loading } = useGetAllProductsQuery();

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

    console.log(products);

    return (
        <div className="mt-12">
            <div
                className="py-10"
                style={{
                    backgroundImage: 'url("https://www.constructionline.co.uk/wp-content/uploads/2022/06/093-CL-MARKETPLACE-HEADER-V3.1-1.png")',
                    backgroundSize: 'cover',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backgroundBlendMode: 'darken'
                }}
            >
                <div className="px-5">
                    <Search />
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-5 max-w-screen-lg mx-auto text-white px-5">
                    {categories?.map((category) => (
                        <Link to="" className="flex gap-2 items-center">
                            <i className="fas fa-building text-4xl"></i>
                            <h3 className="text-lg">{category.category}</h3>
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-5">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products?.map((product: productResTyp) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marketplace;
