import React from "react";

export function GetYours() {
  return (
    <div className="bg-pink-600 text-white p-20 flex flex-col">
      <h1 className="text-5xl text-white max-w-2xl mx-auto mb-5 text-center fon-bold">
        Get Yours Today
      </h1>

      <p className="font-light text-2xl leading-10 mb-5 text-center max-w-6xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-3xl mx-auto my-10">
        <ul className="text-xl list-disc">
          <li>Development</li>
          <li>App features</li>
          <li>Prototyping</li>
        </ul>

        <ul className="text-xl list-disc">
          <li>Finicial cases</li>
          <li>App features</li>
          <li>It services</li>
        </ul>

        <ul className="text-xl list-disc">
          <li>24/7 support</li>
          <li>Design thinking</li>
          <li>New product</li>
        </ul>
      </div>
      <button className="py-3 px-10 text-center bg-pink-600 border rounded-lg text-white text-lg max-w-4xl mx-auto">
        Learn More
      </button>
    </div>
  );
}
