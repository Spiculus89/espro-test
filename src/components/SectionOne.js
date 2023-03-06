import React from "react";
import arrowDown from "../assets/arrow-right-short.svg";

export const SectionOne = () => {
  return (
    <div className="min-w-full pt-[140px] md:pt-[190px] bg-src text-center bg-pouring bg-bottom h-[663px] bg-transparent">
      <h1 className="uppercase tracking-[0px] text-white font-barlow lg:text-[70px] text-[40px]">
        brew anywhere. be anywhere.
      </h1>
      <p className="text-[15px] lg:text-[17px] w-[350px] lg:w-[770px] mx-auto pt-[8px] pb-[24px] text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <button className="w-[208px] h-[50px] uppercase transition-all ease-out duration-300 hover:scale-[108%] tracking-[1.8px] text-[#221f20] font-bold text-[14px] font-josefin bg-white rounded-full">
        pour on the go
      </button>
      <h3 className="uppercase font-bold font-josefin text-[14px] tracking-[2.1px] text-white pt-[190px] ">
        explore
        <img
          src={arrowDown}
          className="animate-bounce inline ml-2"
          alt="arrowDown"
        />
      </h3>
    </div>
  );
};
