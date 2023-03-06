import { useState, useEffect } from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

export const SectionFour = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  const quotes = [
    "The result is a richly flavored, super aromatic cup of coffee without the usual silt in the bottom. The press isn’t just for coffee..",
    "The Aeropress is perfect for camping, allowing for a delicious, convenient cup of coffee without access to a traditional coffee machine.",
    "The Aeropress is known for its versatility and ability to produce a clean, smooth cup of coffee without bitterness or acidity.",
    "The Aeropress is easy to use and easy to clean, making it a great option for coffee lovers of all levels.",
    "With the Aeropress, you have full control over the brewing process, allowing you to experiment with different brewing techniques.",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [activeIndex]);
  return (
    <div className="flex flex-col justify-center items-center pt-[50px] shadow">
      <div className="text-center w-[300px] md:w-[500px] lg:w-[850px]">
        <h5 className="tracking-[1.2px] text-[12px] font-josefin font-bold pb-[50px]">
          IN THE PRESS
        </h5>
        <p className="font-nunito text-[22px] pb-[100px] h-[116px]">
          {quotes[activeIndex]}
        </p>
      </div>
      <div className="flex justify-center flex-wrap mt-12 pb-[90px]">
        {[0, 1, 2, 3, 4].map((index) => (
          <img
            key={index}
            src={logos[index]}
            alt={`Press Logo ${index}`}
            className={`h-16 mx-[2vw]`}
            style={{
              opacity: `${activeIndex === index ? "100%" : "20%"}`,
              transition: "opacity 0.5s ease-in-out",
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
