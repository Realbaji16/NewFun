"use client";

import { ArrowLeftIcon, SearchIcon, StarIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tab";
import Frame from "../tasks/sections/Frame/Frame";
import { BarByAnima } from "./sections/Bar/Bar";
import { DescriptionSection } from "./sections/DescriptionSection";
import { CommentsSection } from "./sections/CommentSection";
import { TradingSection } from "./sections/TradingSection";
import { TopHoldersSection } from "./sections/TopHoldersSection";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PriceChart } from "./sections/Chart/PriceChart";
import { generateMockPriceData } from "./services/priceData";

export default function FunOrgsToken() {
  const pathname = usePathname();
  const isMobileChart = pathname === '/tokens/chart' || pathname === '/tokens';
  const isMobileSwap = pathname === '/tokens/swap';
  const isMobileComments = pathname === '/tokens/comments';
  const isMobileHolders = pathname === '/tokens/holders';
  const [activeTab, setActiveTab] = React.useState('token');
  const [menuOpen, setMenuOpen] = useState(false);
  const priceData = generateMockPriceData(7); // Generate 7 days of mock data

  // Set initial active tab based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // md breakpoint is 768px
        setActiveTab('token');
      }
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderMobileContent = () => {
    switch(activeTab) {
      case 'info':
        return <DescriptionSection />;
      case 'token':
        return (
          <>
            <PriceChart data={priceData} />
            <TradingSection />
          </>
        );
      case 'community':
        return (
          <div className="mt-4">
            <TopHoldersSection />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black w-full h-screen lg:overflow-hidden relative">
      <Frame className="hidden md:block" />

      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between p-4 bg-[#171717] sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/gslogo.svg" alt="Gigsol Logo" className="w-8 h-8" />
          <h1 className="text-white text-xl font-semibold">GIGSOL</h1>
        </div>
        <div className="flex items-center gap-4">
          <img src="/wallet.svg" alt="Wallet Icon" className="" />
          <p className="text-white">CYZSsd....</p>
          <button onClick={toggleMenu} className="text-white">
            <img src="/burg.svg" alt="Menu Icon" className="" />
          </button>
        </div>
      </div>

      {/* Slide-Out Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-3/4 h-full bg-[#171717] z-50 px-8 p-5 flex flex-col">
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
              <img src="/globe.svg" className="w-5 h-5" />
              Fun Org
            </Link>
            <Link
              href="/leaderboard"
              className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
            >
              <img src="/advanced.svg" className="w-5 h-5" />
              Advanced
            </Link>
            <Link
              href="/leaderboard"
              className="flex items-center gap-2 text-white text-base font-medium hover:text-gray-400"
            >
              <img src="/dice.svg" className="w-5 h-5" />
              Fun jobs
            </Link>
          </nav>

          {/* Bottom Section: Gigsol Logo */}
          <div className="flex absolute bottom-[5%] items-center gap-2">
            <img src="/gslogo.svg" alt="Gigsol Logo" className="w-8 h-8" />
            <h1 className="text-white text-xl font-semibold">GIGSOL</h1>
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="absolute left-0 md:left-[373px] top-[106px] bottom-[64px] overflow-y-auto hide-scrollbar right-0 md:right-[53px] px-4 md:px-0 pb-20">
        {/* Token profile and menu button container */}
        <div className="flex justify-between items-start mb-4 md:mb-6">
          {/* Token profile section */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative w-[45px] md:w-[85px] h-[44px] md:h-[82.99px] bg-[#ffffff] rounded-[93.7px] overflow-hidden">
              <img
                className="absolute w-[33px] md:w-[63px] h-[34px] md:h-[65px] top-[5px] md:top-[9px] left-[6px] md:left-[11px] object-cover"
                alt="Token logo"
                src="https://c.animaapp.com/mamw74gcIAFRo9/img/image-14.png"
              />
            </div>
            <div className="flex flex-col items-start gap-0.5 md:gap-1.5">
              <div className="self-stretch font-semibold text-white text-sm md:text-lg">
                Agent Jake ($AGJK)
              </div>
              <div className="self-stretch font-semibold text-[#30EAF7] text-xl md:text-[30.3px]">
                $0.0206
              </div>
            </div>
          </div>

          {/* Menu button */}
          <Button className="hidden md:flex items-center gap-1 h-auto py-[7px] px-[7px] bg-[#30EAF7] rounded-[40px] text-black-1">
            <ArrowLeftIcon className="w-[18px] h-[18px]" />
            <span className="font-medium text-sm">Menu</span>
          </Button>
        </div>

        {/* Bar section - hidden in community tab */}
        {activeTab !== 'community' && <BarByAnima />}

        {/* Mobile Content */}
        <div className="md:hidden">
          {activeTab === 'info' && <DescriptionSection />}
          {activeTab === 'token' && (
            <>
              <PriceChart data={priceData} />
              <TradingSection />
            </>
          )}
          {activeTab === 'community' && (
            <div className="mt-4">
              <CommentsSection />
            </div>
          )}
        </div>

        {/* Desktop Content */}
        <div className="hidden md:flex flex-row gap-6 mt-6 pb-8">
          {/* Left column */}
          <div className="flex flex-col gap-6 w-4/5">
            <div>
              <PriceChart data={priceData} />
              <DescriptionSection />
            </div>

            <div>
              <Tabs defaultValue="comments" className="w-full">
                <TabsList className="bg-transparent p-0 h-auto mb-4">
                  <TabsTrigger
                    value="comments"
                    className="w-[136px] h-7 bg-[#ffffff1a] rounded-[40px] data-[state=active]:bg-[#ffffff1a] data-[state=active]:text-primary-blue"
                  >
                    <span className="font-medium text-[10px]">Comments</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="trades"
                    className="bg-transparent text-text-1 ml-4"
                  >
                    <span className="font-medium text-[10px]">Trades</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="comments">
                  <CommentsSection />
                </TabsContent>
                <TabsContent value="trades">
                  {/* Add trades content here */}
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6 w-1/5">
            <div>
              <TradingSection />
            </div>
            <div>
              <TopHoldersSection />
            </div>
          </div>
        </div>
      </div>

      {/* Top navigation buttons */}
      <div className="absolute top-8 right-8 hidden md:flex items-center gap-2">
        <Button
          variant="ghost"
          className="flex items-center gap-1 h-auto py-[7px] px-[7px] bg-[#ffffff1a] rounded-[40px] text-white"
        >
          <SearchIcon className="w-[18px] h-[18px]" />
          <span className="font-medium text-sm">Search</span>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-1 h-auto py-[7px] px-[7px] bg-[#ffffff1a] rounded-[40px] text-white"
        >
          <div className="w-[18px] h-[18px] relative">
            <img
              className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
              alt="Token icon"
              src="https://c.animaapp.com/mamw74gcIAFRo9/img/group.png"
            />
          </div>
          <span className="font-medium text-sm">Token</span>
        </Button>

        <Button className="flex items-center gap-1 h-auto py-[7px] px-[7px] bg-[#30EAF7] rounded-[40px] text-black-1">
          <div className="w-[18px] h-[18px] relative">
            <img
              className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
              alt="Create icon"
              src="https://c.animaapp.com/mamw74gcIAFRo9/img/group-2.png"
            />
          </div>
          <span className="font-medium text-sm">Create</span>
        </Button>

        <Button
          variant="outline"
          className="flex items-center h-auto py-[7px] px-[7px] bg-[#ffffff1a] rounded-[40px] text-white border-[#494949]"
        >
          <span className="font-medium text-sm">Connect Wallet</span>
        </Button>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] md:hidden z-50">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={() => setActiveTab('info')}
            className={`flex flex-col items-center ${activeTab === 'info' ? 'text-[#30EAF7]' : 'text-gray-400'}`}
          >
            <img 
              src="/funinfo.svg" 
              alt="Fun Info" 
              className="w-6 h-6 mb-1"
            />
            <span className="text-xs">Fun org info</span>
          </button>
          <button
            onClick={() => setActiveTab('token')}
            className={`flex flex-col items-center ${activeTab === 'token' ? 'text-[#30EAF7]' : 'text-gray-400'}`}
          >
            <img 
              src="/tokimg.svg" 
              alt="Token" 
              className="w-6 h-6 mb-1"
            />
            <span className="text-xs">Token</span>
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`flex flex-col items-center ${activeTab === 'community' ? 'text-[#30EAF7]' : 'text-gray-400'}`}
          >
            <img 
              src="/communityimg.svg" 
              alt="Community" 
              className="w-6 h-6 mb-1"
            />
            <span className="text-xs">Community</span>
          </button>
        </div>
      </div>
    </div>
  );
}
