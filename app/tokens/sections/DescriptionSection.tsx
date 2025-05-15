import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/seperator";

export const DescriptionSection = (): JSX.Element => {
  const walletAddress = "D8hhyaN4ZXKkemC7";
  const timestamp = "Apr 22 2025 20:23:20";
  const description =
    "A fundamental shift in the sports betting industry, fusing artificial intelligence (AI), decentralized finance (DeFi), and blockchain transparency to build a trustless, automated, and data-driven ecosys...";

  return (
    <>
      {/* Mobile View */}
      <div className="flex flex-col gap-4 text-white p-4 lg:hidden">
        <div className="text-[#30EAF7] text-base font-medium">Description</div>
        
        <div className="text-[#7F7F7F] text-sm leading-tight">
          {description}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between bg-[#ffffff0d] rounded-[40px] py-2 px-4">
            <span className="text-sm">{walletAddress}</span>
            <Button
              className="h-[23px] rounded-[36.13px] bg-[#30EAF7] text-black text-xs font-medium px-3"
              size="sm"
            >
              Copy
            </Button>
          </div>

          <div className="text-xs text-[#7F7F7F] text-right">
            {timestamp}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <Card className="w-full h-fit bg-[#ffffff0d] rounded-[10px] my-4 overflow-hidden hidden lg:block border-0">
        <CardContent className="px-0  flex h-full">
          <div className="flex flex-col p-3.5 w-[600px]">
            <h4 className="font-bold text-[#30EAF7] text-[12px] mb-[5px]">
              Description
            </h4>
            <p className="font-normal text-[#7F7F7F] text-[14px]">{description}</p>
          </div>

          <Separator orientation="vertical" className="h-[65px] bg-[#494949] mt-10" />

          <div className="flex flex-col ml-auto p-2.5 relative">
            <div className="flex items-center bg-[#171717] rounded-[40px] h-[70px] w-[500px] overflow-hidden">
              <span className="text-white text-base ml-[30px]">
                {walletAddress}
              </span>
              <Button
                className="ml-auto mr-4 h-[40px] w-[100px] rounded-[40px] bg-[#30EAF7] text-black text-sm font-medium"
                size="sm"
              >
                Copy
              </Button>
            </div>
            <span className="text-white text-sm absolute right-3 bottom-2">
              {timestamp}
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
