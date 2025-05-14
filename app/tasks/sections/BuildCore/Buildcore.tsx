import { ClockIcon, MessageSquareIcon } from "lucide-react";
import React from "react";

import { Card, CardContent } from "../../../../components/ui/card";

// Organization data for mapping
const organizations = [
  {
    id: 1,
    name: "Mojosworld",
    ticker: "$mjwd",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-10.png",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
  },
  {
    id: 2,
    name: "Mojosworld",
    ticker: "$mjwd",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-11.png",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
  },
  {
    id: 3,
    name: "Agent Jake",
    ticker: "$AGJK",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-14-1.png",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
    whiteBackground: true,
  },
  {
    id: 4,
    name: "Mojosworld",
    ticker: "$mjwd",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-12.png",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
  },
  {
    id: 5,
    name: "Mojosworld",
    ticker: "$mjwd",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-13.png",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
    centerImage: true,
  },
  {
    id: 6,
    name: "Mojosworld",
    ticker: "$mjwd",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-13.png",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
    centerImage: true,
  },
  {
    id: 7,
    name: "Agent Jake",
    ticker: "$AGJK",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-14-1.png",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
    whiteBackground: true,
  },
];

export default function TopOrgs() {
 

  return (
    <section className="flex flex-col w-full  items-start gap-[18px] mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-[30px] bg-[#ffffff17] rounded-[5px] overflow-hidden border-none backdrop-blur-[17px] flex items-center justify-center">
          <div className="w-[18px] h-[18px] flex items-center justify-center">
            <img
              className="w-[15px] h-2.5"
              alt="Top orgs icon"
              src="https://c.animaapp.com/maljt21j0sAixE/img/group-6.png"
            />
          </div>
        </div>

        <h2 className="font-semibold text-white text-lg">Top orgs</h2>
      </div>

      <div className="flex items-center gap-3.5 w-full overflow-x-auto pb-2">
        {organizations.map((org) => (
          <Card
            key={org.id}
            className="w-[186px] h-[257px] rounded-[20px] overflow-hidden border-none bg-transparent flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
           
          >
            <CardContent className="p-0">
              <div className="w-[171px] h-[239px] mx-auto mt-1.5">
                <div
                  className={`w-[171px] h-[124px] rounded-[20px] overflow-hidden ${org.whiteBackground ? "bg-white" : "bg-[#ca6868]"}`}
                >
                  <img
                    className={`w-full h-full object-cover ${org.centerImage ? "w-[115px] h-[119px] mx-auto mt-[3px]" : ""}`}
                    alt={`${org.name} image`}
                    src={org.image}
                  />
                </div>

                <div className="flex flex-col w-[164px] items-start gap-[9px] mt-[11px] mx-auto">
                  <div className="flex items-center gap-[27px] w-full">
                    <div className="font-semibold text-white text-base whitespace-nowrap">
                      {org.name} ({org.ticker})
                    </div>
                  </div>

                  <div className="w-full h-[51px] bg-[#ffffff1a] rounded-[10px] overflow-hidden p-[9px] relative">
                    <div className="flex items-center justify-between w-full">
                      <div className="text-white text-xs">
                        MC : {org.marketCap}
                      </div>
                      <div className="text-white text-xs">
                        Vol: {org.volume}
                      </div>
                    </div>
                    <div className="text-green-1 text-xs mt-2">
                      {org.percentChange}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-end gap-1">
                      <MessageSquareIcon className="w-4 h-4 text-white" />
                      <div className="text-white text-xs">{org.messages}</div>
                    </div>
                    <div className="flex items-end gap-1">
                      <ClockIcon className="w-4 h-4 text-white" />
                      <div className="text-white text-xs">{org.timeAgo}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
