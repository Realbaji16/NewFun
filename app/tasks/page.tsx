'use client'

import { SearchIcon } from "lucide-react";

import React, { useState } from "react";
import Frame from "./sections/Frame/Frame";
import { Button } from "../../components/ui/button";
import { OverlapWrapperByAnima } from "./sections/Overlap/Overlap";
import Wrapper from "./sections/Wrapper/Wrapper";
import GroupWrapper from "./sections/GroupWrapper/Groupwrapper";
import TopOrgs from "./sections/BuildCore/Buildcore";
import Link from "next/link";
import { Card, CardContent } from "../../components/ui/card";

export default function FunOrgs() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Define button data for mapping
  const actionButtons = [
    {
      id: 1,
      label: "Search",
      icon: <SearchIcon className="w-[18px] h-[18px]" />,
      className: "w-24 bg-[#ffffff1a]",
      textColor: "text-white",
      onClick: () => {
        /* Implement search functionality */
      },
    },

    {
      id: 2,
      label: "Create",
      icon: (
        <div className="relative w-[18px] h-[18px]">
          <img
            className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
            alt="Create icon"
            src="https://c.animaapp.com/maljt21j0sAixE/img/group-4.png"
          />
        </div>
      ),
      className: "w-[94px] bg-[#30EAF7]",
      textColor: "text-black-1",
      href: "/fun-org/create",
    },
  ];

  return (
    <div className="bg-neutral-950 flex flex-row justify-center w-full">
      <div className="bg-black-1 w-full  relative flex">
        <Frame className="hidden md:block" />
        <div className="flex-1 overflow-y-auto">
          <div className="sticky top-0 z-10 bg-black-1 pt-4 pb-4">
            <div className="lg:hidden flex justify-between p-4 bg-[#171717]">
              <div className="flex items-center gap-2">
                <img src="./gslogo.svg" alt="Gigsol Logo" className="w-8 h-8" />
                <h1 className="text-white text-xl font-semibold">GIGSOL</h1>
              </div>
              <div className="flex items-center gap-4">
                <img src="/wallet.svg" alt="Twitter Icon" className="" />{" "}
                <p className="text-white">CYZSsd....</p>
                <button onClick={toggleMenu} className="text-white">
                  <img src="/burg.svg" alt="Twitter Icon" className="" />
                </button>
              </div>
            </div>
            {/* Slide-Out Menu */}
            {menuOpen && (
    <div className="lg:hidden fixed top-0 right-0 w-3/4 h-full bg-[#171717] z-50 px-8 p-5 flex flex-col ">
    {/* Top Section: Close Button and Wallet Info */}
    <div className="flex items-center absolute gap-2 right-8 mt-4">
      <div className="flex items-center gap-2 text-white">
        <img src="/wallet.svg" alt="Wallet Icon" className="w-6 h-6" />
        <p className="text-sm">CYZSsd....</p>
      </div>
      <button onClick={toggleMenu} className="text-white text-2xl">
        ✖
      </button>
    </div>
  
    {/* Navigation Links */}
    <nav className="space-y-12 mt-[40%]">
      <Link
        href="/tasks"
        className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
      >
        <img src="./globe.svg" className="w-5 h-5" />
        Fun Org
      </Link>
      <Link
        href="/leaderboard"
        className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
      >
        <img src="./advanced.svg" className="w-5 h-5" />
        Advanced
      </Link>
      <Link
        href="/leaderboard"
        className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
      >
        <img src="./dice.svg" className="w-5 h-5" />
        Fun jobs
      </Link>
    </nav>
  
    {/* Bottom Section: Gigsol Logo */}
    <div className="flex absolute bottom-[5%] items-center gap-2 ">
      <img src="./gslogo.svg" alt="Gigsol Logo" className="w-8 h-8" />
      <h1 className="text-white text-xl font-semibold">GIGSOL</h1>
    </div>
  </div>
            )}
            <div className="hidden md:flex w-full overflow-x-auto pb-4 mb-24 px-6">
              <div className="flex items-center gap-4 min-w-max">
                <div className="font-semibold text-white text-base md:text-lg flex items-center gap-2 bg-[#494949] px-4 py-2 rounded-[10px] whitespace-nowrap">
                  BUY: <span className="text-[#00FF00]">200 PTK</span> for <span>0.014 SOL</span>
                  <span className="bg-[#0A0A0A] px-2 py-1 rounded text-xs md:text-sm ml-2">VoS7rC</span>
                </div>
                <div className="h-8 w-[1px] bg-[#333333]"></div>
                <div className="flex items-center gap-2 text-white text-base md:text-lg bg-[#494949] px-4 py-2 rounded-[10px] whitespace-nowrap">
                  <span className="bg-[#0A0A0A] px-2 py-1 rounded text-xs md:text-sm">Mindgge4</span>
                  Created <span className="text-[#30EAF7]">$REGL</span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 ml-auto">
                {actionButtons.map((button) => (
                  button.href ? (
                    <Link key={button.id} href={button.href}>
                      <Button
                        variant="ghost"
                        className={`flex items-center justify-center gap-1 p-[7px] rounded-[40px] ${button.className}`}
                      >
                        {button.icon}
                        <span className={`font-medium text-sm ${button.textColor}`}>
                          {button.label}
                        </span>
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      key={button.id}
                      variant="ghost"
                      className={`flex items-center justify-center gap-1 p-[7px] rounded-[40px] ${button.className}`}
                      onClick={button.onClick}
                    >
                      {button.icon}
                      <span className={`font-medium text-sm ${button.textColor}`}>
                        {button.label}
                      </span>
                    </Button>
                  )
                ))}
                <Button
                  variant="outline"
                  className="hidden md:flex w-[148px] h-auto p-[7px] bg-[#ffffff1a] rounded-[40px] border-[#494949]"
                >
                  <span className="font-medium text-white text-sm">
                    Connect Wallet
                  </span>
                </Button>
              </div>
            </div>
            <OverlapWrapperByAnima />
            <div className="md:hidden mt-8 flex w-full overflow-x-auto pb-4  px-6">
              <div className="flex items-center gap-4 min-w-max">
                <div className="font-semibold text-white text-base md:text-lg flex items-center gap-2 bg-[#494949] px-4 py-2 rounded-[10px] whitespace-nowrap">
                  BUY: <span className="text-[#00FF00]">200 PTK</span> for <span>0.014 SOL</span>
                  <span className="bg-[#0A0A0A] px-2 py-1 rounded text-xs md:text-sm ml-2">VoS7rC</span>
                </div>
                <div className="h-8 w-[1px] bg-[#333333]"></div>
                <div className="flex items-center gap-2 text-white text-base md:text-lg bg-[#494949] px-4 py-2 rounded-[10px] whitespace-nowrap">
                  <span className="bg-[#0A0A0A] px-2 py-1 rounded text-xs md:text-sm">Mindgge4</span>
                  Created <span className="text-[#30EAF7]">$REGL</span>
                </div>
              </div>

            </div>
          </div>
          <div className="px-6 py-4">
            <Wrapper />
            <GroupWrapper />
    
            <TopOrgs />
          </div>
        </div>
      </div>
    </div>
  );
}
