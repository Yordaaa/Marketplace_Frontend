import { ToastContainer } from 'react-toastify';
import AppRoutes from './AppRoutes';
import Footer from './Components/Footer';
import Header from './Components/Header';
import 'react-toastify/dist/ReactToastify.css';
import { PrimeReactProvider } from 'primereact/api';
export default function App() {
    return (
        <>
            <PrimeReactProvider>
                <Header />
                <AppRoutes />
                <Footer />
                <ToastContainer />
            </PrimeReactProvider>
        </>
    );
}
