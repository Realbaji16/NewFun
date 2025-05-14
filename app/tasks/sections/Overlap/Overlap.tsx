import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const OverlapWrapperByAnima = (): JSX.Element => {
  // Data for trending cryptocurrencies
  const trendingCoins = [
    {
      id: 1,
      name: "Beta hat",
      symbol: "BTHT",
      marketCap: "33.8k",
      percentChange: "+12.4%",
      image: "https://c.animaapp.com/maljt21j0sAixE/img/image-5.png",
    },
    {
      id: 2,
      name: "Pump that kin",
      symbol: "PTK",
      marketCap: "33.8k",
      percentChange: "+12.4%",
      image: "https://c.animaapp.com/maljt21j0sAixE/img/image-1.png",
    },
    {
      id: 3,
      name: "Beta hat",
      symbol: "BTHT",
      marketCap: "33.8k",
      percentChange: "+12.4%",
      image: "https://c.animaapp.com/maljt21j0sAixE/img/image-2.png",
    },
    {
      id: 4,
      name: "Beta hat",
      symbol: "BTHT",
      marketCap: "33.8k",
      percentChange: "+12.4%",
      image: "https://c.animaapp.com/maljt21j0sAixE/img/image-3.png",
    },
    {
      id: 5,
      name: "Beta hat",
      symbol: "BTHT",
      marketCap: "33.8k",
      percentChange: "+12.4%",
      image: "https://c.animaapp.com/maljt21j0sAixE/img/image-5.png",
    },
    {
      id: 6,
      name: "Beta hat",
      symbol: "BTHT",
      marketCap: "33.8k",
      percentChange: "+12.4%",
      image: "https://c.animaapp.com/maljt21j0sAixE/img/image-5.png",
    },
  ];

  return (
    <div className="lg:w-[87%]  h-[70px]  bg-[#ffffff1a] rounded-[10px] overflow-hidden lg:ml-6">
      <div className="relative h-[70px] flex">
        {/* Trending label */}
        <div className="flex-shrink-0  h-full bg-[#222222] flex items-center justify-center pl-6">
          <div className="font-semibold text-white text-lg">Trending 🔥</div>
        </div>

        {/* Scrollable area for trending coins */}
        <ScrollArea className="w-full h-full">
          <div className="flex items-center gap-3 pl-5 pr-5 pt-2 h-full">
            {trendingCoins.map((coin) => (
              <Card
                key={coin.id}
                className="flex-shrink-0 w-[177px] bg-black-2 rounded-[10px] border border-solid border-[#494949]"
              >
                <CardContent className="p-1 py-[7px]">
                  <div className="flex items-center gap-1.5">
                    <img
                      className="w-9 h-9 object-cover"
                      alt={`${coin.name} logo`}
                      src={coin.image}
                    />
                    <div className="flex flex-col w-[125px] items-start gap-[5px]">
                      <div className="self-stretch mt-[-1.00px] font-semibold text-white text-xs">
                        {coin.name} ({coin.symbol})
                      </div>
                      <div className="flex items-center gap-[18px] self-stretch w-full">
                        <div className="w-fit mt-[-1.00px] font-normal text-white text-xs">
                          MC: {coin.marketCap}
                        </div>
                        <div className="w-fit mt-[-1.00px] font-normal text-[#008000] text-xs">
                          {coin.percentChange}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};
