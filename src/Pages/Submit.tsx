import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
function Submit() {
  return (
    <div className="flex flex-col items-center px-6 py-8 mx-auto lg:py-0 mt-24">
      <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 border">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-semibold  text-gray-900 md:text-2xl use">
            Contact us and get details on your email quickly
          </h1>
          <form className=" space-y-6 ">
            <div className="space-y-3">
              <TextField
                label="Enter name"
                variant="standard"
                className="w-full "
              />
              <TextField
                label="Enter email"
                variant="standard"
                className="w-full "
              />
            </div>
            <button className="mt-5 w-full text-white bg-purple-950 hover:opacity-90 font-medium rounded-lg  px-5 py-2.5 text-center">
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
