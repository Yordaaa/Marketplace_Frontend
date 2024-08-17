import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartSelector } from '../Redux/Features/seletor';
import Search from './Search';

const navigation = [
    { name: 'Marketplace', to: '/' },
    { name: 'My Order', to: '/myorder' }
    // { name: 'Contact Us', to: '/contactus' }
];

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const cart = useSelector(cartSelector);
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <div className="bg-white p-2 px-[20px] md:px-[53px] flex justify-between fixed top-0 left-0 right-0 z-50 shadow-md max-w-screen-2xl mx-auto">
                <div className="flex gap-5 text-sm">
                    <label>
                        <i className="fa fa-phone text-purple-700 pr-2 "></i>+251 912 3456 675
                    </label>
                    <label className="hidden md:block">
                        <i className="fa fa-envelope text-purple-700 pr-2 "></i>
                        contact@Maveko.com
                    </label>
                    <label className="hidden md:block">
                        <i className="fa fa-clock text-purple-700 pr-2"></i>Mon - Fri 8:00 - 18:00
                    </label>
                </div>

                <div className="flex gap-4 ">
                    <Link to="/" className=" text-md">
                        <i className="fab fa-facebook"></i>
                    </Link>
                    <Link to="/" className=" text-md">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="/" className="text-md">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="/" className="text-md">
                        <i className="fab fa-telegram"></i>
                    </Link>
                    <Link to="/" className="text-md">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
            <hr className="text-gray-700 pb-2 px-20 mt-[60px]" />
            <div className="mt-10 px-5 fixed top-0 left-0 right-0 z-50 bg-white shadow-md ">
                {/* <img
                    src="https://t3.ftcdn.net/jpg/04/37/54/90/360_F_437549071_7uQvtqTIgd50l2r0OZ1g0zJnLwnzJmIG.jpg"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                /> */}
                <nav className="flex items-center justify-between p-2 lg:px-8 max-w-screen-2xl mx-auto">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="text-2xl font-bold -m-1.5 p-1.5">
                            Maveko
                        </Link>
                    </div>

                    <i className="fas fa-cart-shopping"></i>
                    <div className="flex lg:hidden">
                        <div className="w-full ">
                            <Search />
                        </div>
                        <div className="flex  justify-end gap-2 pr-3">
                            <div className="flex gap-3">
                                <Link to="/cart" className="flex justify-center items-center">
                                    <i className="fas fa-shopping-cart text-2xl  relative"></i>
                                    <p className="text-white bg-red-600 absolute text-[12px]  rounded-full w-4 h-4 text-center ml-5 mb-5">{cart.length}</p>
                                </Link>
                            </div>
                        </div>
                        <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>

                    <div className="hidden lg:flex w-full max-w-screen-md">
                        <Search />
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                        <div className="flex">
                            <div className="hidden lg:flex">
                                {navigation.map((item) => (
                                    <Link key={item.name} to={item.to} className="flex items-center pr-5 text-md font-semibold leading-6 text-gray-900">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <Link to="/cart" className="flex justify-center items-center">
                                <i className="fas fa-shopping-cart text-2xl  relative"></i>
                                <p className="text-white bg-red-600 absolute text-[12px]  rounded-full w-4 h-4 text-center ml-5 mb-5">{cart.length}</p>
                            </Link>
                            <p className="pt-2 text-lg">cart</p>
                        </div>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="text-xl font-bold -m-1.5 p-1.5">
                                Maveko
                            </Link>
                            <div className="flex flex-1 justify-end gap-2 pr-3">
                                <div>
                                    <Link to="/cart" className="flex justify-center items-center">
                                        <i className="fas fa-shopping-cart text-2xl  relative"></i>
                                        <p className="text-white bg-red-600 absolute text-[12px]  rounded-full w-4 h-4 text-center ml-5 mb-5">{cart.length}</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                    <i className="fas fa-times text-xl"></i>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.to}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={handleLinkClick}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </div>
        </>
    );
}

export default Header;
