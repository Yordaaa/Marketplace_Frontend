import { Link } from "react-router-dom";

function Submit() {
  return (
    <div className="flex flex-col items-center px-6 py-8 mx-auto lg:py-0 mt-24">
      <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 border">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-semibold  text-gray-900 md:text-2xl use">
            Contact us and get details on your email quickly
          </h1>
          <form className="space-y-4 md:space-y-6 ">
            <div className="relative items-center">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <div className="flex">
                  <div className="fas fa-user text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="relative items-center">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <div className="flex">
                  <div className="fas fa-envelope text-gray-700 border border-gray-300 rounded-s-lg bg-gray-50 p-3 items-center"></div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-e-lg block w-full p-2.5"
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>
            </div>

            <button className="w-full text-white bg-purple-950 hover:opacity-90 font-medium rounded-lg  px-5 py-2.5 text-center">
              Submit
            </button>
            <p className="text-sm  text-gray-600">
              If you want to be our member
              <Link
                to=""
                className="font-medium hover:underline text-purple-600"
              >
                signup here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Submit;
