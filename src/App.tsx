import { ToastContainer } from 'react-toastify';
import AppRoutes from './AppRoutes';
import Footer from './Components/Footer';
import Header from './Components/Header';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    return (
        <>
            <Header />
            <AppRoutes />
            <Footer />
            <ToastContainer />
        </>
    );
}
