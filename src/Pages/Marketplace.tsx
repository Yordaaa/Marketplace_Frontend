import { Link } from 'react-router-dom';
import Search from '../Components/Search';
import { products } from '../data';
import { useState } from 'react';

function Marketplace() {
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
                <div className='px-5'>
                    <Search />
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-5 max-w-screen-lg mx-auto text-white px-5">
                    <Link to="" className="flex gap-2 items-center">
                        <i className="fas fa-building text-4xl"></i>
                        <h3 className="text-lg">Building & Construction</h3>
                    </Link>
                    <Link to="" className="flex gap-2 items-center">
                        <i className="fas fa-charging-station text-4xl"></i>
                        <h3 className="text-lg">Electronics & Electrical</h3>
                    </Link>
                    <Link to="" className="flex gap-2 items-center">
                        <i className="fas fa-pills text-4xl"></i>
                        <h3 className="text-lg">Drugs & Pharma</h3>
                    </Link>
                    <Link to="" className="flex gap-2 items-center">
                        <i className="fas fa-cash-register text-4xl"></i>
                        <h3 className="text-lg">Industrial Machinery</h3>
                    </Link>
                    <Link to="/detail" className="flex gap-2 items-center">
                        <i className="fas fa-bowl-food text-4xl"></i>
                        <h3 className="text-lg">Food & Agriculture</h3>
                    </Link>
                </div>
            </div>
            <div>
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-5">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={`/product/${product.id}`} className="group shadow-md border p-2 rounded-md" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 relative">
                <img src={product.imageSrc} alt={product.name} className="h-52 w-full object-center object-cover" />
                {isHovered && (
                    <Link to="" className="w-full absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <button className="w-full bg-purple-950 text-white py-1 px-3 rounded-md hover:opacity-80">View Details</button>
                    </Link>
                )}
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="font-semibold text-gray-900">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">{product.description}</p>
                    <p className="mt-1 text-sm text-gray-700">Weight: {product.weight} kg</p>
                </div>
            </div>
            <div>
                <Link to="/">
                    <button className="w-full bg-purple-950 text-white py-1 rounded-md mt-3 hover:opacity-80">Add to cart</button>
                </Link>
            </div>
        </Link>
    );
}

export default Marketplace;
