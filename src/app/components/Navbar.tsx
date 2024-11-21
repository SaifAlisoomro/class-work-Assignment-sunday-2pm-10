import React from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
   <div className="z-30 sticky top-0 bg-white">
    <div className="flex justify-around items-center m-10 font-sans font-bold flex-wrap my-5 py-5 gap-y-5 sm:">
      <div>
        <h1 className="flex text-center gap-x-3 items-center text-[#375534]"> <FaCartShopping className="text-4xl text-gray-600"/> GREEN MART </h1>
      </div>
      <div className="space-x-5 text-gray-400 ">
        <Link className="  transition-transform transform hover:scale-105 hover:text-blue-600" href={"#"}>Home</Link>
        <Link className="  transition-transform transform hover:scale-105 hover:text-blue-600" href={"#"}>About</Link>
        <Link className="  transition-transform transform hover:scale-105 hover:text-blue-600" href={"#"}>Service</Link>
        <Link className="  transition-transform transform hover:scale-105 hover:text-blue-600" href={"#"}>Contact</Link>
      </div>
      <div className=" bg-slate-400 rounded-sm px-5 py-1">
        <Link className="  transition-transform transform hover:scale-105 hover:text-cyan-600" href={"/"}>SHOP NOW</Link>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
