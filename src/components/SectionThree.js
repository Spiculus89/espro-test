import React, { useState, useEffect } from "react";
import pic01 from "../assets/pic01.png";
import pic02 from "../assets/pic02.png";
import pic03 from "../assets/pic03.png";
import pic04 from "../assets/pic04.png";

export const SectionThree = () => {
  const [currentImageIndex, setIndex] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < 4 ? prevIndex + 1 : 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="relative text-center flex flex-col lg:flex-row">


      <div className="z-10 bg-no-repeat bg-mountain aspect-h-1 bg-cover xl:bg-[center_top_-270px] h-[700px] lg:w-[50%] ">
        <h2 className="uppercase font-barlow text-[48px] pt-[137px] text-white">
          make every cup an experience.
        </h2>
        <p className="font-nunito text-white w-[300px] md:w-[551px] mx-auto">
          Have your French pressed coffee anywhere with ESPRO's Travel Press. A
          double micro-filter eliminates grit for your smoothest cup on the go,
          and the mug fits right in a car cup holder or bike's water bottle
          cage.
        </p>
        <div className="relative">
          <button className="rounded-[26px] text-[12px] bg-white mt-[30px] w-[208px] h-[50px] z-50">
            <h5 className="font-josefin font-bold tracking-[1.8px] mt-[4px] z-30">
              SHOP TRAVEL PRESS
            </h5>
          </button>
          <svg
            className="absolute transform z-10 top-8 left-[65%] mt-6 invisible lg:visible"
            width="500"
            height="2.5"
          >
            <circle className="fill-white" cx="10" cy="0.5" r="1" />
            <circle className="fill-white" cx="30" cy="0.5" r="1" />
            <circle className="fill-white" cx="50" cy="0.5" r="1" />
            <circle className="fill-white" cx="70" cy="0.5" r="1" />
            <circle className="fill-white" cx="90" cy="0.5" r="1" />
            <circle className="fill-white" cx="110" cy="0.5" r="1" />
            <circle className="fill-white" cx="130" cy="0.5" r="1" />
            <circle className="fill-white" cx="150" cy="0.5" r="1" />
            <circle className="fill-white" cx="170" cy="0.5" r="1" />
            <circle className="fill-white" cx="190" cy="0.5" r="1" />
            <circle className="fill-white" cx="210" cy="0.5" r="1" />
            <circle className="fill-white" cx="230" cy="0.5" r="1" />
            <circle className="fill-white" cx="250" cy="0.5" r="1" />
            <circle className="fill-white" cx="270" cy="0.5" r="1" />
            <circle className="fill-white" cx="290" cy="0.5" r="1" />
            <circle className="fill-white" cx="310" cy="0.5" r="1" />
            <circle className="fill-white" cx="330" cy="0.5" r="1" />
            <circle className="fill-white" cx="350" cy="0.5" r="1" />
            <circle className="fill-white" cx="370" cy="0.5" r="1" />
          </svg>
        </div>
      </div>
      <div className="lg:w-[50%] h-[700px] bg-[#8DB9CA] relative flex justify-center">
        <div className="w-[440px] h-[440px] absolute top-[110px] z-30">
          {currentImageIndex === 1 ? (
            <img className="w-full h-full object-fill" src={pic01} alt="1" />
          ) : currentImageIndex === 2 ? (
            <img className="w-full h-full object-fill" src={pic02} alt="2" />
          ) : currentImageIndex === 3 ? (
            <img className="w-full h-full object-fill" src={pic03} alt="3" />
          ) : currentImageIndex === 4 ? (
            <img className="w-full h-full object-fill" src={pic04} alt="4" />
          ) : null}
        </div>
        <h1 className="absolute text-[#AACBD8] uppercase font-bold font-barlow text-[84px] mx-auto w-[400px] md:w-[610px] bottom-[26px] ">
          press. sip. enjoy
        </h1>
        
      </div>
    </div>
  );
};
