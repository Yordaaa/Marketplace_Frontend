import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Marketplace from './Pages/Marketplace';
import Detail from './Pages/Detail';
import Submit from './Pages/Submit';
import Dashboard from './Pages/Dashboard/Dashboard';
import Requests from './Pages/Dashboard/Requests';
import Categories from './Pages/Categories';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Marketplace />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<Detail />} />
            <Route path="submit" element={<Submit />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="requests" element={<Requests />} />
            <Route path="categories" element={<Categories />} />
        </Routes>
    );
}

export default AppRoutes;
