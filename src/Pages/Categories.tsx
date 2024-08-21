import { Link } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../Redux/Features/productAPiSlice';

function Categories() {
    const resPerPage: string = 'all';
    const { data: categories, error, isLoading } = useGetAllCategoriesQuery(resPerPage);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        const errorMessage = 'status' in error ? error.status : error.message || 'Unknown error';
        return <div>Error: {errorMessage}</div>;
    }

    return (
        <div>
            <h1 className=" pt-24 text-center text-3xl pb-5 font-semibold  text-gray-900 md:text-2xl use">All Categories</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 max-w-screen-lg mx-auto text-gray-900 px-5">
                {categories?.map((category) => (
                    <Link to={`/category/${category.category}`} className="items-center border rounded py-2">
                        <h3 className="text-lg use text-center">{category.category}</h3>
                        <div className="flex gap-2 items-center">
                            <img src={category.categoryImg} className="w-40 py-3" />
                            <p className="text-sm">{category.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;
