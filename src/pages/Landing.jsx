import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { logo } from "../assets";
import Services from "../components/Services";
import { cleaning, extra } from "../utils/data";

const Landing = () => {
  const [activeService, setActiveService] = useState(null);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const [activeExtra, setActiveExtra] = useState(null);
  const [isExtraOpen, setIsExtraOpen] = useState(false);

  const [flag, setFlag] = useState(false);

  return (
    <main className=" pb-[50px] ">
      <div className="py-8 px-4 bg-primary_green flex justify-between items-center ">
        <span className="text-white text-[28px]">
          <BsArrowLeft />
        </span>
        <span>
          <img src={logo} alt="logo" />
        </span>
        <span className="text-white text-[28px]">
          <AiOutlineMenu />
        </span>
      </div>

      <section className="px-4 max-w-[360px] mx-auto">
        <div className="flex gap-[5px] mt-6 mx-auto w-fit">
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (_, index) => {
            return (
              <div
                className={`h-[6px] w-[28px] rounded-full ${
                  index > 1 ? "bg-light_green" : "bg-primary_green"
                } `}
              ></div>
            );
          })}
        </div>
        <h1 className="w-[328px] mt-8 mx-auto text-teal-950 text-xl font-semibold font-syne leading-[30px]">
          What service would you like to book?
        </h1>
        <p
          className={` mt-4 text-xs font-normal font-['Satoshi'] leading-[18px] ${
            flag ? "text-red-500" : "text-teal-950"
          } `}
        >
          You can select one type of cleaning and extra tasks
        </p>

        <div className="flex flex-col gap-3 mt-8">
          <Services
            isOpen={isServiceOpen}
            setIsOpen={setIsServiceOpen}
            active={activeService}
            setActive={setActiveService}
            data={cleaning}
            setFlag={setFlag}
          />
          <Services
            isOpen={isExtraOpen}
            setIsOpen={setIsExtraOpen}
            active={activeExtra}
            setActive={setActiveExtra}
            data={extra}
            setFlag={setFlag}
          />
        </div>

        <button
          className={`w-full py-[9px] rounded-[20px] mt-[50px] ${
            activeService ? "bg-[#FF5416]" : "bg-[#FF541680]"
          } `}
        >
          <p className="text-white text-[15px] font-medium font-['Satoshi'] leading-normal">
            Next
          </p>
        </button>
      </section>
    </main>
  );
};

export default Landing;
