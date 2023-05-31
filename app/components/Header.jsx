import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex item-center justify-center bg-gradient-to-r from-gray-500 to-blue-400 py-3 px-3 border-b-2 space-x-3 ">
      <div className="text-white font-bold text-2xl p-1 ">
        <Link className="hover:text-black" href="/">
          Home Page
        </Link>
      </div>
      <div className="text-white font-bold text-2xl p-1 ">
        <Link className="hover:text-black font-bold" href="/code/repos">
          Code
        </Link>
      </div>
    </header>
  );
}
