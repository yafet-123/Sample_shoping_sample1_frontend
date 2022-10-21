import React from "react";

export function Article() {
  return (
    <div className="bg-white w-full h-full p-20 flex flex-col">
      <p className="font-light text-2xl leading-10 text-left text-black mb-5 lg:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-[30rem] h-[30rem] bg-white border-8 border-red-600 rounded-full flex justify-center items-center">
          <h1 className="text-8xl text-red-600  mb-5 font-extrabold">80%</h1>
        </div>

        <div className="w-[25rem] h-[25rem] bg-white border-8 border-blue-800 rounded-full flex justify-center items-center">
          <h1 className="text-8xl text-blue-800  mb-5 font-extrabold">13%</h1>
        </div>

        <div className="w-[20rem] h-[20rem] bg-white border-8 border-blue-400 rounded-full flex justify-center items-center">
          <h1 className="text-8xl text-blue-400  mb-5 font-extrabold">7%</h1>
        </div>
      </div>
    </div>
  );
}
