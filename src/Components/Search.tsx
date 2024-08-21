import { FormEvent, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Search() {
    const [keyword, setKeyword] = useState('');
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (keyword) {
                handleSearchParams();
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [keyword]);

    const handleSearchParams = () => {
        if (keyword) {
            searchParams.set('keyword', keyword);
            navigate(`/search?` + searchParams.toString());
        }
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleSearchParams(); 
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full max-w-screen-md mx-auto">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                <i className="fas fa-search"></i>
            </div>
            <input
                onChange={(e) => setKeyword(e.target.value)}
                type="search"
                className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50"
                placeholder="Enter keyword"
                name="searchKeyWord"
            />
            <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2 bg-purple-950 hover:opacity-90 font-medium rounded-md text-sm px-4 py-1"
            >
                Search
            </button>
        </form>
    );
}

export default Search;