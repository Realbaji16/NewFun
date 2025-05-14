import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/seperator";

export const FrameWrapperByAnima = (): JSX.Element => {
  const walletAddress = "D8hhyaN4ZXKkemC7..";
  const timestamp = "Apr 22 2025 20:23:20";
  const description =
    "A fundamental shift in the sports betting industry, fusing artificial intelligence (AI), decentralized finance (DeFi), and blockchain transparency to build a trustless, automated, and data-driven ecosys....";

  return (
    <Card className="w-full max-w-[759px] h-[84px] bg-[#ffffff0d] rounded-[10px] overflow-hidden">
      <CardContent className="p-0 flex h-full">
        <div className="flex flex-col p-3.5 w-[424px]">
          <h4 className="font-bold text-primary-blue text-[10px] mb-[5px]">
            Description
          </h4>
          <p className="font-normal text-text-1 text-[10px]">{description}</p>
        </div>

        <Separator orientation="vertical" className="h-[65px] my-2.5" />

        <div className="flex flex-col ml-auto p-2.5 relative">
          <div className="flex items-center bg-[#ffffff0d] rounded-[40px] h-[35px] w-[238px] overflow-hidden">
            <span className="text-white text-xs ml-[21px]">
              {walletAddress}
            </span>
            <Button
              className="ml-auto mr-1 h-[23px] rounded-[36.13px] bg-blue-2-100 text-black-1 text-xs font-medium px-[5px] py-[6.32px]"
              size="sm"
            >
              Copy
            </Button>
          </div>
          <span className="text-white text-xs absolute bottom-3 right-3">
            {timestamp}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
