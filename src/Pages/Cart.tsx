import { useState } from "react";
import { Link } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "BATH MAT",
    description: "BATH MAT, WHITE, 100% COTTON700 GSM",
    customs_description: "BATH-MAT, WHITE, 50 X 85 CM",
    imageSrc:
      "https://www.factory2u.co.uk/cdn/shop/products/White_Bath_Mat_A_2ac40b1d-b071-42c7-909a-17d501ad24a3_822x700.webp?v=1673356699",
    weight: "0.3 kg",
    quantity: 1,
  },
  {
    id: 2,
    name: "GLASS RACK",
    description: " GLASS RACK FOR COFFEE CUPS 20 COMPARTMENTS REGENT 20-07",
    customs_description: "GLASS RACK, 20 COMPARTMENTS, 50 X 35 CM",
    imageSrc:
      "https://www.webstaurantstore.com/images/products/large/403429/1609793.jpg",
    weight: "0.5 kg",
    quantity: 1,
  },
  {
    id: 3,
    name: "PORTABLE BAIN MARIE W/FAUCET",
    description:
      " PORTABLE BAIN MARIE W/FAUCET FOR GN CONTAINERS 230V / 1.2 KW # 309-04",
    customs_description: "BAIN MARIE, PORTABLE, 230V/1.2KW, 60 X 40 CM",
    imageSrc:
      "https://maxima.com/img/Mh1hPWOSy1vSXXqsFCpOAjwxZ2a-gNJsEF0TeWGh1_c/resize:fit:700:700/aHR0cHM6Ly9tYXhpbWEuY29tL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9zL3Avc3AtMDA1LmpwZz93aWR0aD03MDAmaGVpZ2h0PTcwMCZzdG9yZT1pZSZpbWFnZS10eXBlPWltYWdl.jpg?type=catalog",
    weight: "10 kg",
    quantity: 1,
  },
];

export default function Cart() {
  const [products, setProducts] = useState(initialProducts);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  return (
    <div className="max-w-screen-md pt-20 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 use">Shopping Cart</h1>
      <div className="">
        <ul role="list" className="divide-y">
          {products.map((product) => (
            <li key={product.id} className="flex py-6">
              <div className="h-24 rounded-md border p-1 border-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between font-medium text-gray-900">
                    <h3>
                      <a href="">{product.name}</a>
                    </h3>
                  </div>
                  <h3>
                      <a href="">{product.description}</a>
                    </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.weight}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${product.id}`} className="mr-2">
                      Qty:
                    </label>
                    <input
                      type="number"
                      id={`quantity-${product.id}`}
                      value={product.quantity}
                      min="1"
                      className="w-16 border border-gray-300 rounded-md text-center"
                      onChange={(e) =>
                        handleQuantityChange(
                          product.id,
                          Math.max(1, parseInt(e.target.value))
                        )
                      }
                    />
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(product.id)}
                      className="font-medium text-purple-600 hover:text-purple-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 py-6 sm:px-6">
        <div className="mt-6">
          <Link to=""
            className="flex items-center justify-center rounded-md border border-transparent bg-purple-950 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-opacity-70"
          >
            Proceed to next
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{" "}
            <Link to="/marketplace" className="font-medium text-purple-600 hover:opacity-70">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}