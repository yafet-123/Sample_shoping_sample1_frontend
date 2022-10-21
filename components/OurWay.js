import React from "react";

export function OurWay() {
  return (
    <div className="bg-white w-full h-full mb-24">
      <h1 className="text-7xl text-black max-w-2xl mx-auto mb-10 text-center font-light">
        Our Way
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-20">
        <div className="bg-blue-400 w-full h-[30rem] rounded-2xl px-20 mt-28">
          <h1 className="text-8xl text-white max-w-2xl mx-auto mb-5 mt-20 text-center font-extrabold">
            2020
          </h1>
          <p className="font-light text-xl leading-10 mb-5 text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col lg:mx-20">
          <div className="bg-red-800 w-full h-72 rounded-2xl px-10 mt-10">
            <h1 className="text-8xl text-white max-w-2xl mx-auto mb-2 mt-5 text-center font-extrabold">
              2019
            </h1>
            <p className="font-light text-xl mb-5 text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-black w-full h-72 rounded-2xl px-10 mt-10">
            <h1 className="text-8xl text-white max-w-2xl mx-auto mb-2 mt-5 text-center font-extrabold">
              2018
            </h1>
            <p className="font-light text-xl mb-5 text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="bg-blue-700 w-full h-[30rem] rounded-2xl px-20 mt-28">
          <h1 className="text-8xl text-white max-w-2xl mx-auto mb-5 mt-20 text-center font-extrabold">
            2021
          </h1>
          <p className="font-light text-xl leading-10 mb-5 text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
