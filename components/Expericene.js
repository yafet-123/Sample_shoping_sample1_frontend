import React from "react";

export function Expericene() {
  return (
    <div className="bg-white w-full h-full py-20 flex flex-col">
      <h1 className="text-5xl text-black max-w-4xl mx-auto mb-5 text-center font-light px-20">
        Our clients love that we build
      </h1>

      <h1 className="text-5xl text-black max-w-4xl mx-auto mb-5 text-center font-bold px-20">
        store expericene
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-20 w-full h-full">
        <div className="bg-blue-500 w-full h-[35rem] rounded-2xl lg:px-32 mt-28">
          <div className="expericene-one-background h-56 w-56 rounded-full max-w-xl mx-auto -mt-10 border-8 border-white"></div>
          <h1 className="text-3xl text-white max-w-2xl mx-auto my-5 text-center font-extrabold">
            stella larson
          </h1>
          <p className="font-light text-xl leading-10 text-center text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-blue-700 w-full h-[35rem] rounded-2xl lg:px-32 mt-28">
          <div className="expericene-two-background h-56 w-56 rounded-full max-w-xl mx-auto -mt-10 border-8 border-white"></div>
          <h1 className="text-3xl text-white max-w-2xl mx-auto my-5 text-center font-extrabold">
            nick johnson
          </h1>
          <p className="font-light text-xl leading-10 text-center text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-red-700 w-full h-[35rem] rounded-2xl lg:px-32 mt-28">
          <div className="expericene-three-background h-56 w-56 rounded-full max-w-xl mx-auto -mt-10 border-8 border-white"></div>
          <h1 className="text-3xl text-white max-w-2xl mx-auto my-5 text-center font-extrabold">
            olga ivanda
          </h1>
          <p className="font-light text-xl leading-10 text-center text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
