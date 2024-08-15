import SideNav from './SideNav';

function Dashboard() {
    return (
        <div className="flex">
            <div>
                <SideNav />
            </div>
            <div className="pt-12 p-5 w-full use">
                <h1 className="text-3xl font-bold ">Dashboard Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full bg-white mt-4">
                    <div className="flex items-center border shadow-sm rounded p-2 gap-5">
                        <i className="fas fa-box text-3xl text-white bg-blue-500 rounded-full h-[70px] w-[70px] flex justify-center items-center"></i>
                        <div>
                            <h2 className="font-black">Total products</h2>
                            <h1 className="text-2xl font-bold">12345</h1>
                        </div>
                    </div>
                    <div className="flex items-center border shadow-sm rounded p-2 gap-5">
                        <i className="fas fa-users text-3xl text-white bg-yellow-500 rounded-full h-[70px] w-[70px] flex justify-center items-center"></i>
                        <div>
                            <h2 className="font-black">Total users:</h2>
                            <h1 className="text-2xl font-bold">2345</h1>
                        </div>
                    </div>
                    <div className="flex items-center border shadow-sm rounded p-2 gap-5">
                        <i className="fas fa-user-tie text-3xl text-white bg-green-500 rounded-full h-[70px] w-[70px] flex justify-center items-center"></i>
                        <div>
                            <h2 className="font-black">New requests:</h2>
                            <h1 className="text-2xl font-bold">12</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
