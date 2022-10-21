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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-20 w-full h-full">
        <div className="bg-white w-full h-[35rem] rounded-2xl px-10 mt-28">
          <div className="aim-one-background h-56 w-56 rounded-full max-w-xl mx-auto -mt-5 border-8 border-white"></div>
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

        <div className="bg-white w-full h-[35rem] rounded-2xl px-10 mt-28">
          <div className="aim-two-background h-56 w-56 rounded-full max-w-xl mx-auto -mt-5 border-8 border-white"></div>
          <h1 className="text-3xl text-black max-w-2xl mx-auto my-5 text-center font-extrabold">
            Online Store
          </h1>
          <p className="font-light text-xl mb-5 text-left text-black">
            - Loads Functionality
          </p>
          <p className="font-light text-xl mb-5 text-left text-black">
            - Account creation
          </p>
          <p className="font-light text-xl mb-5 text-left text-black">
            - quis nostrud
          </p>
          <p className="font-light text-xl mb-5 text-left text-black">
            - ullamco laboris
          </p>
        </div>

        <div className="bg-white w-full h-[35rem] rounded-2xl px-10 mt-28">
          <div className="aim-three-background h-56 w-56 rounded-full max-w-xl mx-auto -mt-5 border-8 border-white"></div>
          <h1 className="text-3xl text-black max-w-2xl mx-auto my-5 text-center font-extrabold">
            Sell Online
          </h1>
          <p className="font-light text-xl mb-5 text-left text-black">
            - Manage inventory
          </p>
          <p className="font-light text-xl mb-5 text-left text-black">
            - Customer accounts
          </p>
          <p className="font-light text-xl mb-5 text-left text-black">
            - quis nostrud
          </p>
          <p className="font-light text-xl mb-5 text-left text-black">
            - ullamco laboris
          </p>
        </div>
      </div>
    </div>
  );
}
