import { Link } from 'react-router-dom';
import SideNav from './SideNav';

function Requests() {
    return (
        <div className="flex">
            <div>
                <SideNav />
            </div>

            <div className=" w-full pt-16 pl-5">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">OrderNumber</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Approve</th>
                            <th className="border border-gray-300 px-4 py-2">cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 text-center mx-auto  py-2">1</td>
                            <td className="border border-gray-300 text-center py-2">24gf235</td>
                            <td className="border border-gray-300 text-center py-2">Yorda</td>
                            <td className="border border-gray-300 text-center py-2">yordanostibebu5@gmail.com</td>
                            <td className="border border-gray-300 text-center py-2">
                                <Link to="approve" className="text-white bg-green-500 hover:opacity-80 font-medium rounded-md text-sm px-5 py-2 text-center">
                                    Approve
                                </Link>
                            </td>

                            <td className="border border-gray-300 text-center py-2">
                                <Link to="cancel" className="text-white bg-red-500 hover:opacity-80 font-medium rounded-md text-sm px-5 py-2 text-center">
                                    cancel
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Requests;
