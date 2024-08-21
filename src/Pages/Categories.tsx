import { Link } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../Redux/Features/productAPiSlice';

function Categories() {
    const resPerPage: string = 'all';
    const { data: categories, error, isLoading } = useGetAllCategoriesQuery(resPerPage);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(categories);
    if (error) {
        const errorMessage = 'status' in error ? error.status : error.message || 'Unknown error';
        return <div>Error: {errorMessage}</div>;
    }

    return (
        <div className="pt-24 pb-10">
        <h1 className="text-center text-4xl font-semibold text-gray-900 mb-8">All Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-5">
            {categories?.map((category) => (
                <Link
                    to=""
                    className="flex flex-col items-center border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white p-5"
                    key={category._id}
                >
                    <img
                        src={category.categoryImg}
                        alt={category.category}
                        className="w-full h-32 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 text-center">{category.category}</h3>
                    <p className="text-sm text-gray-600 text-center">{category.description}</p>
                </Link>
            ))}
        </div>
    </div>
    );
}

export default Categories;
