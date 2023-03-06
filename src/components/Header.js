import React from "react";
import arrowDown from "../assets/arrow-ios-downward-fill.svg";
import esproLogo from "../assets/ESPRO_Logo.svg";
import searchLogo from "../assets/search-line.svg";
import myAccountIcon from "../assets/my-account-icon.svg";
import shoppingBagIcon from "../assets/shopping-bag-icon.svg";
import { useState } from "react";
import french from '../assets/french.png';
import travel from '../assets/travel.png';
import pour from '../assets/pour.png';


export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="font-josefin md:text-sm min-w-full">
      <h5 className="bg-[#8DB9CA] pt-[14px] h-[37px] text-center text-white tracking-[1.65px] text-[11px]">
        FREE SHIPPING ON ALL U.S. ORDERS $49+
      </h5>
      <nav className="h-[66px] text-[#221f20] flex items-center justify-between font-bold invisible md:visible relative">
        <div className="flex ">
          <a
            href="_blank"
            className="xl:pl-[75px] tracking-[1.95px] md:pl-2 md:tracking-[1px] hover:text-[#8DB9CA]"
          >
            <h5
              onMouseEnter={() => setIsHovered(!isHovered)}
            >
              SHOP
              <img
                alt="arrowDown"
                className="inline ml-1.5 mr-10"
                src={arrowDown}
              />
            </h5>
          </a>
          <a href="_blank">
            <h5 className="tracking-[1.95px] md:tracking-[1px] hover:text-[#8DB9CA]">
              OUR STORY
            </h5>
          </a>
        </div>

        <a href="_blank">
          <img
            alt="ESPRO"
            src={esproLogo}
            className="h-[28px] left-[50%] translate-x-[-50%] w-[120.82px] absolute top-[20px] visible"
          />
        </a>

        <div className="flex justify-between">
          <a
            href="_blank"
            className="tracking-[1.95px] md:tracking-[1px] hover:text-[#8DB9CA]"
          >
            BREW GUIDES
          </a>
          <a
            href="_blank"
            className="tracking-[1.95px] px-10 md:tracking-[1px] hover:text-[#8DB9CA]"
          >
            BLOG
          </a>
          <div className="flex items-center">
            <a href="_blank" className="px-2 sm:px-0">
              <img alt="search" src={searchLogo} />
            </a>
            <a href="_blank" className="lg:px-3 sm:px-1">
              <img alt="accountIcon" src={myAccountIcon} />
            </a>
            <a href="_blank" className="lg:px-1 sm:px-0">
              <img alt="shoppingBagIcon" src={shoppingBagIcon} />
            </a>
            <h5 className="bg-[#659ab1]/[.3] rounded-full h-[24px] w-[24px] text-center xl:mr-[75px] font-barlow md:mr-2 ">
              0
            </h5>
          </div>
        </div>
      </nav>
      {isHovered && <div className="pt-[41px] pb-[44px] pl-[92px] absolute uppercase flex items-end bg-white w-full">
        <div className="flex flex-col justify-center">
          <img src={french} alt='french' />
          <h3 className="font-barlow text-[26px] font-bold w-[144px] tracking-[0.65px]" >french press</h3>
        </div>
        <div className="flex flex-col justify-center items-center ml-[201px] mr-[180px]">
        <img src={travel} alt='travel'  />
          <h3 className="font-barlow text-[26px] font-bold w-[142px] tracking-[0.65px]" >travel press</h3>
        </div>
        <div className="flex flex-col justify-center items-center mr-[148px]">
        <img src={pour} alt='pour over'  />
          <h3 className="font-barlow text-[26px] font-bold w-[108px] tracking-[0.65px]" >pour over</h3>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="font-josefin tracking-[1.3px] text-[13px] font-bold">other collections</h4>
          <h4 className="font-barlow text-[23px] tracking-[0.57px] mt-[16px] leading-[44px]">cold brew<br />espresso<br />tasting cups<br />accessories</h4>
          
          <button className="w-[128px] h-[44px] border border-black rounded-full p-2 mt-[25px]"><h5 className="font-josefin font-bold tracking-[1.8px] ">shop all</h5></button>
        </div>
        </div>}
      <section className="flex justify-end mr-5">
        <button
          className="visible md:invisible absolute top-[56px] "
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? "Close" : "Open"}
        </button>
      </section>
      {isNavOpen && (
        <div className="hamburger-menu text-center tracking-[1.95px] md:hidden">
          <a href="_blank" className="hover:bg-[#8DB9CA]">
            <h5 className="my-4 border-b-2 pb-4 hover:text-[#8DB9CA]">SHOP</h5>
          </a>
          <br />
          <a href="_blank">
            <h5 className="my-4 border-b-2 pb-4 hover:text-[#8DB9CA]">
              OUR STORY
            </h5>
          </a>
          <br />
          <a href="_blank">
            <h5 className="my-4 border-b-2 pb-4 hover:text-[#8DB9CA]">
              BREW GUIDES
            </h5>
          </a>
          <br />
          <a href="_blank">
            <h5 className="my-4 border-b-2 pb-4 hover:text-[#8DB9CA]">BLOG</h5>
          </a>
          <br />
          <div className="flex items-center justify-center my-4 border-b-2 pb-4">
            <a href="_blank" className="px-2.5 md:px-0">
              <img alt="search" src={searchLogo} />
            </a>
            <a href="_blank" className="px-3 md:px-1">
              <img alt="accountIcon" src={myAccountIcon} />
            </a>
            <a href="_blank" className="px-1 md:px-0">
              <img alt="shoppingBagIcon" src={shoppingBagIcon} />
            </a>
            <h5 className="bg-[#659ab1]/[.3] rounded-full h-[24px] w-[24px] text-center xl:mr-[75px] font-barlow md:mr-2 ">
              0
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};
