import { useSelector } from 'react-redux';
import { userSelector } from '../Redux/Features/seletor';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
    const userInfo = useSelector(userSelector);
    console.log(userInfo);
    return userInfo ? <Outlet /> : <Navigate to="/" replace />;
}
export default PrivateRoute;
