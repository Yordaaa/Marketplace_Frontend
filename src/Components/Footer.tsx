import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <div className="relative isolate overflow-hidden bg-gray-900 pb-5  mx-auto">
        <img
          src="https://www.stubbsparkin.co.uk/wp-content/uploads/2021/01/footer-background.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className=" text-white max-w-screen-2xl mx-auto pl-3">
          <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-evenly">
            <span className="text-sm  sm:text-center">
              © 2024{" "}
              <Link to="" className="hover:underline">
                Market.
              </Link>
              All Rights Reserved.
            </span>
            <ul className="">
              <li className="mb-2 ">
                <Link to="" className="hover:underline">
                  PrivacyPolicy
                </Link>
              </li>
              <li className="">
                <Link to="" className="hover:underline">
                  Terms&amp;Conditions
                </Link>
              </li>
            </ul>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link to="/" className=" text-xl">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="/" className=" text-xl">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/" className="text-xl">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="/" className="text-xl">
                <i className="fab fa-telegram"></i>
              </Link>
              <Link to="/" className="text-xl">
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
