export default function Detail() {
  return (
    <div className="mt-24 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 ">
        <div className="col-span-1">
          <img
            src="https://www.factory2u.co.uk/cdn/shop/products/White_Bath_Mat_A_2ac40b1d-b071-42c7-909a-17d501ad24a3_822x700.webp?v=1673356699"
            alt="BATH MAT"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div className=" lg:pl-8 col-span-2">
          <h1 className="text-2xl font-bold text-gray-900">BATH MAT</h1>
          <p className="mt-2 text-lg text-gray-700">0.3</p>

          <p className="mt-4 text-gray-700">
            BATH MAT, WHITE, 100% COTTON700 GSM
          </p>
          <p className="mt-2 text-gray-500">BATH-MAT, WHITE, 50 X 85 CM</p>
          <p className="mt-2 text-gray-500">Weight: 0.3 kg</p>

          <div className="mt-4">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
          </div>

          <button className="mt-6 w-full bg-purple-950 text-white py-2 rounded-md hover:opacity-80">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
