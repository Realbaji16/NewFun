import { ArrowLeftIcon, SearchIcon, StarIcon } from "lucide-react";
import React from "react";
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

export default function FunOrgsToken() {
  return (
  
    <div className="bg-black w-full h-screen lg:overflow-hidden relative">
      <Frame className="hidden md:block" />

      <div className="absolute left-[373px] top-[106px] bottom-0 overflow-y-auto hide-scrollbar right-[53px]">
        {/* Token profile section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-[85px] h-[82.99px] bg-[#ffffff] rounded-[93.7px] overflow-hidden">
            <img
              className="absolute w-[63px] h-[65px] top-[9px] left-[11px] object-cover"
              alt="Token logo"
              src="https://c.animaapp.com/mamw74gcIAFRo9/img/image-14.png"
            />
          </div>
          <div className="flex flex-col w-[177px] items-start gap-1.5">
            <div className="self-stretch font-semibold text-white text-lg">
              Agent Jake ($AGJK)
            </div>
            <div className="self-stretch font-semibold text-[#30EAF7] text-[30.3px]">
              $0.0206
            </div>
          </div>
        </div>

        <BarByAnima />

        <div className="flex gap-6 mt-6 pb-8">
  <div className="flex flex-col gap-6 w-3/4">
    {/* Token price chart */}
    <img
      className="w-full h-[258px] object-cover"
      alt="Price chart"
      src="https://c.animaapp.com/mamw74gcIAFRo9/img/image-23.png"
    />

    <DescriptionSection />

    {/* Comments/Trades tabs */}
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
  
  
  <div className="flex flex-col gap-6 w-1/4">
    <TradingSection />
    <TopHoldersSection />
  </div>
</div>
      </div>

      {/* Top navigation buttons */}
      <div className="absolute top-8 right-8 flex items-center gap-2">
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

      {/* Menu button */}
      <Button className="absolute top-[143px] right-[53px] flex items-center gap-1 h-auto py-[7px] px-[7px] bg-[#30EAF7] rounded-[40px] text-black-1">
        <ArrowLeftIcon className="w-[18px] h-[18px]" />
        <span className="font-medium text-sm">Menu</span>
      </Button>
    </div>

  );
}
