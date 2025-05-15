'use client';

import { ChartBarIcon, LayoutDashboardIcon, TrophyIcon, LogOutIcon } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export default function Frame({ className }: { className?: string }) {
  // Navigation items data with state
  const [navItems, setNavItems] = useState([

    {
      id: 1,
      name: "Advanced",
      icon: <ChartBarIcon className="w-5 h-5" />,
      active: true,
      route: "/tasks",
    },
    {
      id: 2,
      name: "Fun Jobs",
      icon: <TrophyIcon className="w-5 h-5" />,
      active: false,
      route: "/influencer",
    },
    {
      id: 3,
      name: "Fun Orgs",
      icon: <TrophyIcon className="w-5 h-5" />,
      active: false,
      route: "/influencer",
    },
  ]);

  // Handle active state
  const handleActiveState = (id) => {
    setNavItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  return (
    <aside
      className={`w-[292px] h-screen sticky top-0 bg-[#171717] rounded-[20px] overflow-hidden border border-solid border-[#494949] m-5 ${className}`}
    >
      {/* Header with logo and collapse button */}
      <div className="flex justify-between items-center p-5">
  <div className="flex items-center gap-[9.56px]">
    <div className="relative w-[40.39px] h-[39.2px] flex items-center justify-center">
      <img
        className="w-[37px] h-8"
        alt="Logo icon"
        src="/gslogo.svg"
      />
    </div>
    <h1 className="font-['Montserrat',Helvetica] font-semibold text-white text-[28.7px]">
      GIGSOL
    </h1>
  </div>
  <img
    className="w-[34px] h-[34px] bg-[#ffffff1a] rounded-[5px]"
    alt="Menu icon"
    src="/arr.svg"
  />
</div>

      {/* Navigation menu */}
      <nav className="mt-12 px-3">
        <ul className="space-y-7">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.route}>
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-1.5 h-[45px] ${
                    item.active
                      ? "bg-[#ffffff0d] text-white font-semibold"
                      : "bg-transparent text-white font-normal"
                  }`}
                  onClick={() => handleActiveState(item.id)} // Move the onClick handler here
                >
                  {item.icon}
                  <span className="font-['Inter',Helvetica] text-base">
                    {item.name}
                  </span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>



    </aside>
  );
}