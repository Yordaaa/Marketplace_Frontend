import SideNav from './SideNav';

function Cancel() {
    return (
        <div className="flex">
            <div>
                <SideNav />
            </div>

            <div className="border rounded border-gray-500 pb-5 max-w-screen-md m-auto mt-14 w-full">
                <h1 className="border-b text-2xl text-white font-medium text-center mb-4 p-2 bg-purple-950 use">Reason to cancel</h1>
                <form className="px-5">
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Email</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" name="email" required />
                    </div>

                    <div className="pt-5">
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-900">
                            Message
                        </label>
                        <textarea className="w-full bg-gray-200 border border-gray-200 rounded" rows="5" name="message"></textarea>
                    </div>
                    <button type="submit" className="bg-purple-950 hover:bg-opacity-90 p-1 px-5 text-white rounded">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Cancel;
