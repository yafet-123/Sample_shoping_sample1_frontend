import React from "react";

export function Consulation() {
  return (
    <div className="bg-pink-600 text-white p-20 mb-5">
      <h1 className="text-5xl text-white max-w-2xl mx-auto mb-5 text-center font-bold">
        Get Free Consulation
      </h1>
      <p className="font-light text-xl leading-10 mb-5 text-center max-w-6xl mx-auto">
        want to create your online store and improve your sales? Our company is
        the one and only solution you need to build your online business/
      </p>
      <div className="bg-gray-100 max-w-6xl mx-auto p-5 rounded-lg flex items-center">
        <label className="text-black text-xl" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your Name"
          className="p-3 border border-black mx-3 rounded-xl"
        />

        <label className="text-black text-xl" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter your a Email address"
          className="p-3 border border-black mx-3 rounded-xl"
        />
        <button className="py-3 px-3 text-center bg-pink-600 border rounded-lg text-white text-lg w-1/2">
          Submit
        </button>
      </div>
    </div>
  );
}
