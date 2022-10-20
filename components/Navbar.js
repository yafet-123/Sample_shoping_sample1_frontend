import React from "react";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="flex justify-between items-center px-20 my-5 h-16">
      <h1 className="font-serif font-medium text-2xl text-slate-500 uppercase">
        logo
      </h1>
      <Image
        src="/images/hambergerMenu.jpg"
        width={50}
        height={50}
        alt="Navbar Logo"
        className=""
      />
    </div>
  );
}
