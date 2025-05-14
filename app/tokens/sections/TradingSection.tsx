import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tab";
import { StarIcon } from "lucide-react";

export const TradingSection = (): JSX.Element => {
  // Data for token amounts
  const walletData = {
    sol: {
      balance: 12.0,
      icon: "https://c.animaapp.com/mamw74gcIAFRo9/img/image.png",
    },
    agjk: {
      balance: 12.0,
      icon: "https://c.animaapp.com/mamw74gcIAFRo9/img/image-1.png",
    },
  };

  // Quick add amounts
  const quickAddAmounts = [
    { amount: 0.1, label: "+ 0.1 SOL" },
    { amount: 0.5, label: "+ 0.5 SOL" },
    { amount: 1, label: "+1 SOL" },
  ];

  return (
    <>
      <Card className="w-full h-100 bg-[#ffffff0d] mt-4 lg:mt-0 rounded-[20px] border-[#494949]">
        <CardContent className="p-0">
          {/* Buy/Sell tabs */}
          <div className="flex justify-center items-center gap-[35px] mt-[23px]">
            <Tabs defaultValue="buy" className="w-full max-w-[240px]">
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="buy"
                  className="w-[115px] h-7 bg-[#ffffff1a] rounded-[40px] data-[state=active]:bg-[#ffffff1a] data-[state=active]:text-[#30EAF7]"
                >
                  <span className="font-medium text-[10px]">Buy</span>
                </TabsTrigger>
                <TabsTrigger
                  value="sell"
                  className="w-[115px] h-7 bg-[#ffffff1a] rounded-[40px] data-[state=active]:bg-[#ffffff1a] data-[state=active]:text-[#30EAF7]"
                >
                  <span className="font-medium text-[10px]">Sell</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          

          {/* Swap inputs */}
          <div className="flex flex-col items-center gap-4 mx-[13px] mt-[61px]">
            <div className="relative self-stretch w-full h-[136px]">
              {/* From token input */}
              <div className="absolute w-[100%] h-[62px] top-0 left-0 bg-[#ffffff0d] rounded-[10px] overflow-hidden">
                <Input
                  defaultValue="0.0"
                  className="absolute top-[13px] left-[18px] w-[100px] h-6 bg-transparent border-0 p-0 text-white text-base font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                />

                <div className="inline-flex items-center gap-[3px] absolute top-10 left-[19px]">
                  <img
                    className="w-[9px] h-[9px]"
                    alt="Wallet icon"
                    src="https://c.animaapp.com/mamw74gcIAFRo9/img/si-wallet-fill.svg"
                  />
                  <div className="font-medium text-text-1 text-[10px]">
                    {walletData.sol.balance}
                  </div>
                </div>

                <div className="inline-flex items-center gap-[7px] absolute top-3.5 right-4">
                  <div className="font-medium text-white text-[10px]">
                    SOL
                  </div>
                  <img
                    className="w-[33px] h-[33px] object-cover"
                    alt="SOL icon"
                    src={walletData.sol.icon}
                  />
                </div>
              </div>

              {/* To token input */}
              <div className="absolute w-[100%] h-[62px] top-[74px] left-0 bg-[#ffffff0d] rounded-[10px] overflow-hidden">
                <Input
                  defaultValue="0.0"
                  className="absolute top-[13px] left-[18px] ] h-6 bg-transparent border-0 p-0 text-white text-base font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                />

                <div className="inline-flex items-center gap-[3px] absolute top-10 left-[19px]">
                  <img
                    className="w-[9px] h-[9px]"
                    alt="Wallet icon"
                    src="https://c.animaapp.com/mamw74gcIAFRo9/img/si-wallet-fill.svg"
                  />
                  <div className="font-medium text-text-1 text-[10px]">
                    {walletData.agjk.balance}
                  </div>
                </div>

                <div className="inline-flex items-center gap-[7px] absolute top-3.5 right-4">
                  <div className="font-medium text-white text-[10px]">
                    AGJK
                  </div>
                  <img
                    className="w-[33px] h-[33px] object-cover"
                    alt="AGJK icon"
                    src={walletData.agjk.icon}
                  />
                </div>
              </div>

              {/* Swap button */}
              <Button
                variant="outline"
                className="absolute w-9 h-9 top-[47px] left-[45%] bg-black-2 rounded-[18px] border-[#494949] p-0"
              >
                <img
                  className="w-6 h-6"
                  alt="Swap icon"
                  src="https://c.animaapp.com/mamw74gcIAFRo9/img/ri-swap-line.svg"
                />
              </Button>
            </div>

            {/* Quick add buttons */}
            <div className="flex items-center gap-[7px] w-full">
              {quickAddAmounts.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="flex-1 h-auto px-[11px] py-1.5 rounded-[10px] border-[#494949] bg-transparent"
                >
                  <span className="font-medium text-text-1 text-[10px]">
                    {item.label}
                  </span>
                </Button>
              ))}
            </div>

            {/* Swap action button */}
            <Button className="w-full h-auto py-[7px] mb-[10px] px-[7px] bg-[#30EAF7] rounded-[40px] text-black">
              <img src="./arrow.svg" alt="Raid" className="w-[18px] h-[18px]" />
              <span className="font-medium text-sm">Swap</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Bonding Curve Section */}
      <Card className="w-full bg-[#ffffff0d] mt-4 rounded-[20px] border-[#494949]">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[#30EAF7] text-sm font-medium">Bonding Curve</div>
            <img
              src="./raid.svg"
              alt="Info"
              
            />
          </div>
          <p className="text-[#7F7F7F] text-xs mb-4">This token has graduated to Raydium and the pool has been seeded!</p>
          <Button 
            className="w-full h-[41px] bg-[#ffffff0d] text-white hover:bg-[#ffffff15] border border-[#494949] rounded-[40px]"
            variant="outline"
          >
            <span className="font-medium text-sm">View token</span>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
