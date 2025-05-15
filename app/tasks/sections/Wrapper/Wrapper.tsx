import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export default function Wrapper() {
  return (
    <>
      <div className="lg:w-[90%] w-full bg-[#ffffff1a] rounded-[10px] overflow-hidden flex flex-col lg:flex-row items-center lg:justify-between lg:px-4 py-2 gap-2">
        {/* Left side controls */}
        <div className="flex items-center gap-1.5 self-start lg:self-auto">
      

          <button className="w-[31px] h-[30px] flex items-center justify-center px-1 py-[3px] bg-[#ffffff1a] rounded-[5px] overflow-hidden">
            <div className="relative w-5 h-5">
              <img
                className="absolute w-4 h-3.5 top-[3px] left-0.5"
                alt="Group"
                src="https://c.animaapp.com/maljt21j0sAixE/img/group-2.png"
              />
            </div>
          </button>

          <button className="flex items-center gap-2 px-4 py-[6px] bg-[#494949] rounded-[5px] overflow-hidden">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L12.2451 6.90983L17.5 7.45492L13.75 11.1302L14.4901 16.5L10 13.95L5.50993 16.5L6.25 11.1302L2.5 7.45492L7.75485 6.90983L10 2Z" fill="#FFD700"/>
            </svg>
            <span className="text-white font-medium">Watch list</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-[6px] bg-[#494949] rounded-[5px] overflow-hidden">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L15 5V9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9V5L8 2H10Z" fill="#8B5CF6"/>
              <path d="M6 17H12M9 15V17" stroke="#8B5CF6" strokeWidth="2"/>
            </svg>
            <span className="text-white font-medium">Graduated</span>
          </button>
        </div>

        {/* SearchIcon bar */}
        <div className=" hidden md:flex items-center gap-6 bg-[#ffffff1a] rounded-[40px] overflow-hidden pl-[13px] pr-[5px] py-[3px] w-full lg:w-auto">
          <div className="flex items-center gap-1">
            <SearchIcon className="w-4 h-4 text-text-1" />
            <span className="text-xs font-medium text-text-1 whitespace-nowrap">
              Search for name, token or&nbsp;&nbsp;address
            </span>
          </div>

          <Button className="h-[25px] lg:px-[7px] py-0 bg-[#30EAF7] rounded-[40px] hover:bg-blue-2-100/90">
            <span className="text-xs font-medium text-black-1">Search</span>
          </Button>
        </div>
      </div>
      <div className=" md:hidden mt-4 flex items-center gap-6 bg-[#ffffff1a] rounded-[40px] overflow-hidden pl-[13px] pr-[5px] py-[3px] w-full lg:w-auto">
        <div className="flex items-center gap-1 flex-1">
          <SearchIcon className="w-4 h-4 text-text-1" />
          <span className="text-xs font-medium text-text-1 whitespace-nowrap">
            Search for name, token or&nbsp;&nbsp;address
          </span>
        </div>

        <Button className="h-[25px] lg:px-[7px] py-0 bg-[#30EAF7] rounded-[40px] hover:bg-blue-2-100/90 ml-auto">
          <span className="text-xs font-medium text-black-1">Search</span>
        </Button>
      </div>
    </>
  );
}
