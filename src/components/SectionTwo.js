import React, { useState, useEffect } from "react";
import shot01 from "../assets/shot01.png";
import shot02 from "../assets/shot02.png";
import shot03 from "../assets/shot03.png";
import shot04 from "../assets/shot04.png";
import shot05 from "../assets/shot05.png";
import shot06 from "../assets/shot06.png";

export const SectionTwo = () => {
  const [dashedBorderHeight, setDashedBorderHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const halfViewportHeight = window.innerHeight / 2;
      const dashedBorderTopPosition = document
        .getElementById("dashed-border")
        .getBoundingClientRect().top;
      const visibleHeight = Math.max(
        0,
        halfViewportHeight - dashedBorderTopPosition
      );
      setDashedBorderHeight(visibleHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="min-h-[1200px] xl:min-h-[850px] xl:h-[850px] bg-[#f3f7f9] relative">
      <div className="text-center flex flex-col items-center">
        <h3 className="mt-[78px] font-josefin text-[12px] uppercase font-bold tracking-[1.2px]">
          designed for real life
        </h3>
        <h2 className="pb-[10px] leading-[52px] uppercase font-barlow text-[48px] w-[372px]">
          coffee made for your life on the go.
        </h2>
        <p className="w-[410px] h-[97px] font-nunito z-50 bg-[#f3f7f9] rounded-md">
          We understand coffee is a big part of your busy, active life. That's
          why we create and develop products that allow you to bring your
          passion for <strong>coffee-when you want it-</strong> and wherever
          life takes you.
        </p>
      </div>

      <div>
        <div
          style={{ height: `${dashedBorderHeight}px` }}
          id="dashed-border"
          className="w-0 border-dashed max-h-[1800px] z-0 right-[20px] lg:left-[50%] border-[1px] absolute top-[400px] border-[#659AB1] "
        ></div>

        <div className="w-[246px] h-[326px] relative mx-auto m-5 min-w-[246px] max-w-[40%] lg:absolute lg:top-[392px] lg:left-[20px] xl:top-[108px] xl:left-[75px] z-40">
          <div className="overflow-hidden absolute inset-0 ">
            <img
              src={shot01}
              alt="shot01"
              className="hover:scale-110 transition duration-700 ease-in-out "
            />
          </div>
        </div>
        <div className="w-[420px] h-[302px] relative mx-auto m-5 min-w-[420px] max-w-[40%] lg:absolute lg:top-[780px] lg:left-[20px] xl:top-[494px] xl:left-[75px]">
          <div className="overflow-hidden absolute inset-0">
            <img
              src={shot02}
              alt="shot02"
              className="hover:scale-110 transition duration-700 ease-out"
            />
          </div>
        </div>

        <div className="w-[264px] h-[264px] relative mx-auto m-5 min-w-[264px] max-w-[40%] lg:absolute lg:top-[680px] lg:left-[20%] xl:top-[392px] xl:left-[391px]">
          <div className="overflow-hidden absolute inset-0">
            <img
              src={shot03}
              alt="shot03"
              className="hover:scale-110 transition duration-700 ease-out"
            />
          </div>
        </div>

        <div className="w-[119px] h-[158px] relative mx-auto m-5 min-w-[119px] max-w-[40%] lg:absolute lg:top-[380px] lg:right-[20px] xl:top-[68px] z-20 xl:right-[75px]">
          <div className="overflow-hidden absolute inset-0">
            <img
              src={shot04}
              alt="shot04"
              className="hover:scale-110 transition duration-700 ease-out"
            />
          </div>
        </div>

        <div className="w-[231px] h-[304px] relative mx-auto m-5 max-w-[40%] min-w-[231px] lg:absolute lg:top-[420px] lg:right-[150px] xl:top-[130px] z-10 xl:right-[224px]">
          <div className="overflow-hidden absolute inset-0">
            <img
              src={shot05}
              alt="shot05"
              className="hover:scale-110 transition duration-700 ease-out"
            />
          </div>
        </div>

        <div className="w-[520px] h-[364px] relative mx-auto m-5 mb-0 min-w-[520px] max-w-[40%] lg:absolute lg:bottom-[40px] lg:right-[30px] xl:top-[392px] xl:right-[135px]">
          <div className="overflow-hidden absolute inset-0">
            <img
              src={shot06}
              alt="shot06"
              className="hover:scale-110 transition duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
