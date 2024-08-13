import { Link } from "react-router-dom";
import Search from "../Components/Search";
const products = [
  {
    id: 1,
    name: "BATH MAT",
    description: "BATH MAT, WHITE, 100% COTTON700 GSM",
    customs_description: "BATH-MAT, WHITE, 50 X 85 CM",
    imageSrc:
      "https://www.factory2u.co.uk/cdn/shop/products/White_Bath_Mat_A_2ac40b1d-b071-42c7-909a-17d501ad24a3_822x700.webp?v=1673356699",
    weight: "0.3",
  },
  {
    id: 2,
    name: "GLASS RACK",
    description: " GLASS RACK FOR COFFEE CUPS 20 COMPARTMENTS REGENT 20-07",
    customs_description: "BATH-MAT, WHITE, 50 X 85 CM",
    imageSrc:
      "https://www.webstaurantstore.com/images/products/large/403429/1609793.jpg",
    weight: "0.3",
  },
  {
    id: 3,
    name: "PORTABLE BAIN MARIE W/FAUCET",
    description:
      " PORTABLE BAIN MARIE W/FAUCET FOR GN CONTAINERS 230V / 1.2 KW # 309-04",
    customs_description: "BATH-MAT, WHITE, 50 X 85 CM",
    imageSrc:
      "https://maxima.com/img/Mh1hPWOSy1vSXXqsFCpOAjwxZ2a-gNJsEF0TeWGh1_c/resize:fit:700:700/aHR0cHM6Ly9tYXhpbWEuY29tL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9zL3Avc3AtMDA1LmpwZz93aWR0aD03MDAmaGVpZ2h0PTcwMCZzdG9yZT1pZSZpbWFnZS10eXBlPWltYWdl.jpg?type=catalog",
    weight: "0.3",
  },
  {
    id: 4,
    name: "PORTABLE BAIN MARIE W/FAUCET",
    description:
      " PORTABLE BAIN MARIE W/FAUCET FOR GN CONTAINERS 230V / 1.2 KW # 309-04",
    customs_description: "BATH-MAT, WHITE, 50 X 85 CM",
    imageSrc:
      "https://maxima.com/img/Mh1hPWOSy1vSXXqsFCpOAjwxZ2a-gNJsEF0TeWGh1_c/resize:fit:700:700/aHR0cHM6Ly9tYXhpbWEuY29tL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9zL3Avc3AtMDA1LmpwZz93aWR0aD03MDAmaGVpZ2h0PTcwMCZzdG9yZT1pZSZpbWFnZS10eXBlPWltYWdl.jpg?type=catalog",
    weight: "0.3",
  },
];
function Marketplace() {
  return (
    <div className="mt-32">
      <div>
        <Search />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-5 max-w-screen-lg mx-auto">
        <Link to="" className="flex gap-2 items-center">
          <i className="fas fa-building text-4xl"></i>
          <h3 className="text-lg use">Building & Construction</h3>
        </Link>
        <Link to="" className="flex gap-2 items-center">
          <i className="fas fa-charging-station text-4xl"></i>
          <h3 className="text-lg use">Electronics & Electrical</h3>
        </Link>
        <Link to="" className="flex gap-2 items-center">
          <i className="fas fa-pills text-4xl"></i>
          <h3 className="text-lg use">Drugs & Pharma</h3>
        </Link>
        <Link to="" className="flex gap-2 items-center">
          <i className="fas fa-cash-register text-4xl"></i>
          <h3 className="text-lg use">Industrial Machinery</h3>
        </Link>
        <Link to="" className="flex gap-2 items-center">
          <i className="fas fa-bowl-food text-4xl"></i>
          <h3 className="text-lg use">Food & Agriculture</h3>
        </Link>
      </div>
      <div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-5 ">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group shadow-md border   p-2 rounded-md">
                <div className=" rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    className="h-52 w-full object-center object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      <a href="">{product.name}</a>
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                      {product.description}
                    </p>

                    <p className="mt-1 text-sm text-gray-700">
                      Weight: {product.weight}
                    </p>
                  </div>
                </div>
                <div className="">
                  <button className="w-full bg-purple-950 text-white py-1 rounded-md mt-3 hover:opacity-80">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
