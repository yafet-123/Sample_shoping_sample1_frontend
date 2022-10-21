import React from "react";

export function Contact() {
  return (
    <div className="w-full h-full bg-gray-400 lg:p-20 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col bg-black p-10">
        <h1 className="text-3xl text-white mb-5 text-left font-light">
          Get in Touch
        </h1>
        <p className="font-light text-xl leading-10 text-left text-white mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-col">
          <p className="font-light text-3xl leading-10 text-left text-white mb-5">
            Chat to us
          </p>
          <p className="font-light text-xl leading-10 text-left text-white mb-5 lg:px-10">
            yafetaddisu123@gmail.com
          </p>
        </div>

        <div className="flex flex-col">
          <p className="font-light text-3xl leading-10 text-left text-white mb-5">
            Office
          </p>
          <p className="font-light text-xl leading-10 text-left text-white mb-5 lg:px-10">
            ferensay legasiyon , Addis Ababa
          </p>
        </div>

        <div className="flex flex-col">
          <p className="font-light text-3xl leading-10 text-left text-white mb-5">
            Phone
          </p>
          <p className="font-light text-xl leading-10 text-left text-white mb-5 lg:px-10">
            +251934781038
          </p>
        </div>
      </div>
      <div className="fex flex-col justify-between bg-white py-10 px-20">
        <h1 className="text-5xl text-black max-w-4xl mx-auto mb-5 text-center font-bold">
          Level up your brand
        </h1>
        <input
          type="text"
          placeholder="Enter your Name"
          className="p-3 border border-black mx-3 rounded-xl w-full mb-5"
        />

        <input
          type="text"
          placeholder="Enter your Email"
          className="p-3 border border-black mx-3 rounded-xl w-full mb-5 "
        />

        <input
          type="text"
          placeholder="Enter your PhoneNumber"
          className="p-3 border border-black mx-3 rounded-xl w-full mb-5"
        />

        <input
          type="text"
          placeholder="Enter your Name"
          className="px-3 py-10 border border-black mx-3 rounded-xl w-full mb-5"
        />

        <button className="py-3 px-3 text-center bg-pink-600 border rounded-lg text-white text-lg w-full">
          Submit
        </button>
      </div>
    </div>
  );
}
