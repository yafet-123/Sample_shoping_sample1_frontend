import React from "react";

export function Aim() {
  return (
    <div className="bg-black w-full h-full p-20 flex flex-col">
      <h1 className="text-5xl text-white max-w-4xl mx-auto mb-5 text-center font-light">
        Building Beatutifull, Functional
      </h1>

      <h1 className="text-5xl text-white max-w-4xl mx-auto mb-5 text-center font-bold">
        ecommerce website
      </h1>

      <p className="font-light text-2xl leading-10 text-center max-w-6xl mx-auto text-white mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-20">
        <div className="bg-white w-full h-full rounded-2xl px-10 mt-28">
          <div className=""></div>
          <h1 className="text-3xl text-black max-w-2xl mx-auto my-5 text-center font-extrabold">
            No-Limit hosting
          </h1>
          <p className="font-light text-xl mb-5 text-left text-black">
            - Any Domain name
          </p>
          <p className="font-light text-xl mb-5 text-left text-black">
            - Unlimited Bandwidth
          </p>
          <p className="font-light text-xl mb-5 text-left text-black">
            - quis nostrud
          </p>
          <p className="font-light text-xl mb-5 text-left text-black">
            - ullamco laboris
          </p>
        </div>
        <div className="flex flex-col mx-20"></div>
        <div className="bg-blue-700 w-full h-[30rem] rounded-2xl px-20 mt-28"></div>
      </div>
    </div>
  );
}
