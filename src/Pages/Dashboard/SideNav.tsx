// Dashboard.tsx

import { Link } from 'react-router-dom';

function SideNav() {
    return (
        <div className=" mt-8 left-0 w-52 h-[90vh] z-50 bg-gray-800 text-white shadow-lg use">
            <div className="flex items-center justify-center h-16">
                <h2 className="text-lg font-semibold">Admin Dashboard</h2>
            </div>
            <nav className="mt-6">
                <ul className="space-y-2">
                    <li>
                        <Link to="/dashboard" className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <i className="fas fa-chart-line mr-2"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/requests" className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <i className="fas fa-user mr-2"></i>
                            Requests
                        </Link>
                    </li>
                    <li>
                        <Link to="/reports" className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <i className="fas fa-file-alt mr-2"></i>
                            Available Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <i className="fas fa-cog mr-2"></i>
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideNav;
