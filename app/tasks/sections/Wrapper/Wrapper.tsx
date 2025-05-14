import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export default function Wrapper() {
  return (
    <>
      <div className="lg:w-[90%] w-full bg-[#ffffff1a] rounded-[10px] overflow-hidden flex flex-col lg:flex-row items-center lg:justify-between lg:px-4 py-2 gap-2">
        {/* Left side controls */}
        <div className="flex items-center gap-1.5 self-start lg:self-auto">
          <button className="w-8 h-[30px] bg-[#ffffff1a] rounded-[5px] overflow-hidden border-none flex items-center justify-center">
            <img
              className="w-[18px] h-[18px]"
              alt="Pixel grid"
              src="https://c.animaapp.com/maljt21j0sAixE/img/pixel-grid.svg"
            />
          </button>

          <button className="flex items-center gap-2.5 px-1 py-[3px] bg-[#ffffff1a] rounded-[5px] overflow-hidden">
            <div className="relative w-6 h-6">
              <div className="relative w-4 h-3 top-1.5 left-1 bg-[url(https://c.animaapp.com/maljt21j0sAixE/img/group.png)] bg-[100%_100%]" />
            </div>
          </button>

          <button className="w-[31px] h-[30px] flex items-center justify-center px-1 py-[3px] bg-[#ffffff1a] rounded-[5px] overflow-hidden">
            <div className="relative w-5 h-5">
              <img
                className="absolute w-4 h-3.5 top-[3px] left-0.5"
                alt="Group"
                src="https://c.animaapp.com/maljt21j0sAixE/img/group-2.png"
              />
            </div>
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
    </>
  );
}
