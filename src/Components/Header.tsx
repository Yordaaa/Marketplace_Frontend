import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartSelector, userSelector } from '../Redux/Features/seletor';
import { removeUserInfo } from '../Redux/Features/userSlice';
import Search from './Search';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const cart = useSelector(cartSelector);
    const userInfo = useSelector(userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    const handleLogout = () => {
        dispatch(removeUserInfo());
        console.log('User logged out');
        navigate('/');
    };

    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };

    const userLoggedIn = !!userInfo.userInfo;
    const navigation = [{ name: 'Marketplace', to: '/' }, ...(userLoggedIn ? [{ name: 'My Order', to: '/myorder' }] : [])];
    return (
        <>
            <div className="bg-white p-2 px-[20px] md:px-[53px] flex justify-between fixed top-0 left-0 right-0 z-50 shadow-md max-w-screen-2xl mx-auto">
                <div className="flex gap-5 text-sm">
                    <label>
                        <i className="fa fa-phone text-purple-700 pr-2"></i>+251 912 3456 675
                    </label>
                    <label className="hidden md:block">
                        <i className="fa fa-envelope text-purple-700 pr-2"></i>
                        contact@Maveko.com
                    </label>
                    <label className="hidden md:block">
                        <i className="fa fa-clock text-purple-700 pr-2"></i>Mon - Fri 8:00 - 18:00
                    </label>
                </div>

                <div className="flex gap-4">
                    <Link to="/" className="text-md">
                        <i className="fab fa-facebook"></i>
                    </Link>
                    <Link to="/" className="text-md">
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
            <div className="mt-10 px-5 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <nav className="flex items-center justify-between p-2 lg:px-8 max-w-screen-2xl mx-auto">
                    <div className="flex lg:flex-1 w-auto">
                        <Link to="/" className="text-2xl font-bold -m-1.5 p-1.5">
                            Maveko
                        </Link>
                    </div>
                    <div className="w-[40%] max-w-screen-md">
                        <Search />
                    </div>
                    <div className="flex md:hidden">
                        <div className="relative flex items-center">
                            <Link to="/cart" className="flex justify-center items-center mr-4">
                                <i className="fas fa-shopping-cart text-2xl relative"></i>
                                <p className="text-white bg-red-600 absolute text-[12px] rounded-full w-4 h-4 text-center -ml-5 mb-5">{cart.length}</p>
                            </Link>
                            {userLoggedIn && (
                                <div className="relative">
                                    <i className="fas fa-user text-2xl cursor-pointer pr-3" onClick={toggleTooltip}></i>
                                    {showTooltip && (
                                        <div className="absolute bg-gray-50 text-gray-800 rounded-md p-2 top-full -left-44 mt-4 w-60 z-50  border shadow-lg">
                                            <div className="font-semibold text-center use">Hey {userInfo.userInfo.customer_name}</div>
                                            <div>{userInfo.userInfo.customer_email}</div>
                                            <button onClick={handleLogout} className="mt-2 bg-red-600 text-white rounded px-3 py-1 text-sm hover:bg-red-500">
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:flex md:flex-1 md:justify-end gap-2">
                        <div className="flex items-center">
                            {navigation.map((item) => (
                                <Link key={item.name} to={item.to} className="flex items-center pr-5 text-md font-semibold leading-6 text-gray-900">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="relative flex items-center">
                            <Link to="/cart" className="flex justify-center items-center mr-4">
                                <i className="fas fa-shopping-cart text-2xl relative"></i>
                                <p className="text-white bg-red-600 absolute text-[12px] rounded-full w-4 h-4 text-center -ml-5 mb-5">{cart.length}</p>
                            </Link>
                            {userLoggedIn && (
                                <div className="relative">
                                    <i className="fas fa-user text-2xl cursor-pointer" onClick={toggleTooltip}></i>
                                    {showTooltip && (
                                        <div className="absolute bg-gray-50 text-gray-800 rounded-md p-2 top-full -left-44 mt-4 w-60 z-50  border shadow-lg">
                                            <div className="font-semibold text-center use">Hey {userInfo.userInfo.customer_name}</div>
                                            <div>{userInfo.userInfo.customer_email}</div>
                                            <button onClick={handleLogout} className="mt-2 bg-red-600 text-white rounded px-3 py-1 text-sm hover:bg-red-500">
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </nav>

                <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="text-xl font-bold -m-1.5 p-1.5">
                                Maveko
                            </Link>
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
