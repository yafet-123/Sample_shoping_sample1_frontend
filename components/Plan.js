import React from "react";

export function Plan() {
  return (
    <div className="bg-black w-full h-full py-20 flex flex-col">
      <h1 className="text-5xl text-white max-w-4xl mx-auto mb-5 text-center font-light px-20">
        Choose your pay
      </h1>

      <h1 className="text-5xl text-white max-w-4xl mx-auto mb-5 text-center font-bold px-20">
        monthly website plan
      </h1>

      <p className="font-light text-2xl leading-10 text-center max-w-6xl mx-auto text-white mb-5 px-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-20 w-full h-full">
        <div className="bg-blue-800 w-full h-[35rem] rounded-2xl lg:px-32 mt-28">
          <div className="h-56 w-56 max-w-xl mx-auto -mt-16 border-t-8 border-blue-800 mb-10 rounded-lg bg-white pt-5">
            <h1 className="text-xl text-blue-800 max-w-2xl mx-auto my-5 text-center font-extrabold">
              Five Page Starter
            </h1>

            <h1 className="text-5xl text-blue-800 max-w-2xl mx-auto my-5 text-center font-extrabold">
              $ 29
            </h1>
          </div>
          <p className="font-light text-xl mb-5 text-center text-white">
            1 full user
          </p>
          <p className="font-light text-xl mb-5 text-center text-white">
            1,000 Email Address
          </p>
          <p className="font-light text-xl mb-5 text-center text-white">
            5 contacts per month
          </p>
          <p className="font-light text-xl mb-5 text-center text-white">
            5 coffee cups
          </p>

          <p className="py-3 px-3 text-center bg-white border rounded-lg text-black text-lg w-1/2 max-w-4xl mx-auto mt-10">
            Buy Now
          </p>
        </div>

        <div className="bg-blue-400 w-full h-[35rem] rounded-2xl lg:px-32 mt-28">
          <div className="h-56 w-56 max-w-xl mx-auto -mt-16 border-t-8 border-blue-400 mb-10 rounded-lg bg-white pt-5">
            <h1 className="text-xl text-blue-400 max-w-2xl mx-auto my-5 text-center font-extrabold">
              10 Pages Business
            </h1>

            <h1 className="text-5xl text-blue-400 max-w-2xl mx-auto my-5 text-center font-extrabold">
              $ 59
            </h1>
          </div>
          <p className="font-light text-xl mb-5 text-center text-white">
            10 full user
          </p>
          <p className="font-light text-xl mb-5 text-center text-white">
            5,000 Email Address
          </p>
          <p className="font-light text-xl mb-5 text-center text-white">
            5 contacts per month
          </p>
          <p className="font-light text-xl mb-5 text-center text-white">
            10 coffee cups
          </p>

          <p className="py-3 px-3 text-center bg-white border rounded-lg text-black text-lg w-1/2 max-w-4xl mx-auto mt-10">
            Buy Now
          </p>
        </div>

        <div className="bg-red-600 w-full h-[35rem] rounded-2xl lg:px-32 mt-28">
          <div className="h-56 w-56 max-w-xl mx-auto -mt-16 border-t-8 border-red-600 mb-10 rounded-lg bg-white pt-5">
            <h1 className="text-xl text-red-600 max-w-2xl mx-auto my-5 text-center font-extrabold">
              ecommerce Starter
            </h1>

            <h1 className="text-5xl text-red-600 max-w-2xl mx-auto my-5 text-center font-extrabold">
              $ 119
            </h1>
          </div>
          <p className="font-light text-xl mb-5 text-center text-white">
            100 full user
          </p>
          <p className="font-light text-xl mb-5 text-center text-white">
            10,000 Email Address
          </p>
          <p className="font-light text-xl mb-5 text-center text-white">
            50 contacts per month
          </p>
          <p className="font-light text-xl mb-5 text-center text-white">
            50 coffee cups
          </p>

          <p className="py-3 px-3 text-center bg-white border rounded-lg text-black text-lg w-1/2 max-w-4xl mx-auto mt-10">
            Buy Now
          </p>
        </div>
      </div>
    </div>
  );
}
