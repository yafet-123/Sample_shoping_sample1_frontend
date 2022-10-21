import React from "react";

export function Hero() {
  return (
    <div className="flex flex-col w-full h-full mb-16">
      <div className="w-full h-screen bg-gray-200 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-20">
          <div className="flex flex-col">
            <h1 className="text-6xl font-light text-black lg:w-1/2 mb-5">
              We create <sapn className="font-bold">online shops</sapn>
            </h1>
            <p className="font-normal text-lg lg:w-1/2 leading-10 mb-5">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <button className="py-3 px-6 text-center bg-pink-500 border rounded-lg text-white text-lg w-1/2">
              Read More
            </button>
          </div>
          <div className="">
            <div className="hero-background w-full h-full"></div>
          </div>
        </div>

        <h1 className="text-6xl font-light text-black mt-16 text-center">
          Everything you need{" "}
          <sapn className="font-bold">to sell products online</sapn>
        </h1>
      </div>
      <div className="bg-white w-full h-full grid grid-cols-1 lg:grid-cols-4 gap-10 px-20 mb-16">
        <div className="lg:-mt-16 bg-white p-10">
          <h1 className="text-2xl font-bold text-black mb-5 text-center">
            customilaize your online store
          </h1>
          <p className="font-normal text-lg leading-7 mb-5 text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="lg:-mt-16 bg-white p-10">
          <h1 className="text-2xl font-bold text-black mb-5 text-center">
            Run your ecommerce website
          </h1>
          <p className="font-normal text-lg leading-7 mb-5 text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="lg:-mt-16 bg-white p-10">
          <h1 className="text-2xl font-bold text-black mb-5 text-center">
            Growth your revenue
          </h1>
          <p className="font-normal text-lg leading-7 mb-5 text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="lg:-mt-16 bg-white p-10">
          <h1 className="text-2xl font-bold text-black mb-5 text-center">
            Team
          </h1>
          <p className="font-normal text-lg leading-7 mb-5 text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <button className="border border-black text-black text-center text-lg py-3 px-10 mx-auto max-w-2xl rounded-lg font-bold">
        Learn More
      </button>
    </div>
  );
}
