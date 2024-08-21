import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Marketplace from './Pages/Marketplace';
import Detail from './Pages/Detail';
import Submit from './Pages/Submit';
import Dashboard from './Pages/Dashboard/Dashboard';
import Requests from './Pages/Dashboard/Requests';
import Categories from './Pages/Categories';
import Approve from './Pages/Dashboard/Approve';
import Cancel from './Pages/Dashboard/Cancel';
import Otp from './Pages/Otp';
import MyOrder from './Pages/MyOrder';
import Filter from './Pages/Filter';
import OrderDetail from './Pages/OrderDetail';
import SendOTP from './Pages/SendOTP';
import CategoryProduct from './Pages/CategoryProduct';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Marketplace />} />
            <Route path="search" element={<Filter />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<Detail />} />
            <Route path="submit" element={<Submit />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="requests" element={<Requests />} />
            <Route path="categories" element={<Categories />} />
            <Route path="requests/approve" element={<Approve />} />
            <Route path="requests/cancel" element={<Cancel />} />
            <Route path="otp/:quoteId" element={<Otp />} />
            <Route path="myorder" element={<MyOrder />} />
            <Route path="myorder/:id" element={<OrderDetail />} />
            <Route path=":quoteId" element={<SendOTP />} />
            <Route path="category/:category" element={<CategoryProduct />} />
        </Routes>
    );
}

export default AppRoutes;
