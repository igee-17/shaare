import React, { useState } from "react";
import Markdown from "react-markdown";
import { cleaning } from "../utils/data";
import remarkGfm from "remark-gfm";
import { VscCheck } from "react-icons/vsc";

const Services = ({ isOpen, setIsOpen, active, setActive, data, setFlag }) => {
  const handleClick = (item) => {
    if (active === item.id) {
      setActive(null);
      setFlag(false);
      return;
    } else if (active === null) {
      setActive(item.id);
      setIsOpen(true);
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return (
    <article className="flex flex-col gap-3">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col rounded-lg py-[14px] px-4 items-center border-[0.5px]  justify-between ${
              active === item.id ? "border-[#024751]" : "border-[#F0F5F4]"
            } `}
            onClick={() => handleClick(item)}
          >
            <div className="flex justify-between items-center w-full">
              <p className="text-teal-950 text-sm font-normal font-['Satoshi'] leading-[21px]">
                {item.heading}
              </p>
              <button className="relative" onClick={() => handleClick(item)}>
                {" "}
                <span className="inline-flex h-[14px] w-[14px] rounded-[3px] border-[1px] border-[#0F2730] "></span>
                {active === item.id && (
                  <span className="absolute top-[5px] left-[2px] text-[10px]">
                    <VscCheck />
                  </span>
                )}
              </button>
            </div>
            {active === item.id && isOpen && (
              <aside>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex justify-end w-full mt-[17px] mb-2 "
                >
                  <p className="text-orange-600 text-xs font-medium font-['Satoshi'] leading-[18px]">
                    Hide details
                  </p>
                </button>

                <div
                  dangerouslySetInnerHTML={{ __html: item.text }}
                  className="flex gap-1 text-[14px] font-light text-[#0F2730] flex-col h-[200px]  overflow-y-scroll  "
                >
                  {/* <Markdown
                  disallowedElements={["code", "pre"]}
                  unwrapDisallowed={true}
                  // remarkPlugins={[remarkGfm]}
                >
                  {item.text}
                </Markdown> */}
                </div>
              </aside>
            )}
          </div>
        );
      })}
    </article>
  );
};

export default Services;
