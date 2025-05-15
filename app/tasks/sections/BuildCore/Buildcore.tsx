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
      <div className="w-8 h-[30px] bg-[#ffffff17] rounded-[5px] backdrop-blur-[17px] backdrop-brightness-[100%] flex items-center justify-center border-[1px] border-transparent bg-clip-padding" style={{ backgroundImage: 'linear-gradient(#171717, #171717), linear-gradient(to right, #00FFA3, #DC1FFF)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
          <div className="w-[18px] h-[18px] flex items-center justify-center">
            <img
              className="w-[15px] h-2.5"
              alt="Latest orgs icon"
              src="https://c.animaapp.com/maljt21j0sAixE/img/group-5.png"
            />
          </div>
        </div>

        <h2 className="font-semibold text-white text-lg">Top orgs</h2>
      </div>

      <div className="flex items-center gap-3.5 w-full overflow-x-auto pb-2">
        {organizations.map((org) => (
          <Card
            key={org.id}
            className={`w-[186px] h-[257px] rounded-[20px] overflow-hidden border-none ${
              org.name === "Agent Jake" ? "bg-[#6C5DD3]" : "bg-transparent"
            } flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity`}
          >
            <CardContent className="p-0">
              <div className="w-[171px] h-[239px] mx-auto mt-1.5">
                <div
                  className={`w-[171px] h-[124px] rounded-[20px] overflow-hidden ${
                    org.name === "Agent Jake" 
                    ? "bg-white p-2" 
                    : org.whiteBackground ? "bg-white" : "bg-[#ca6868]"
                  }`}
                >
                  <img
                    className={`w-full h-full object-contain ${org.centerImage ? "w-[115px] h-[119px] mx-auto mt-[3px]" : ""}`}
                    alt={`${org.name} image`}
                    src={org.image}
                  />
                  {org.name === "Agent Jake" && (
                    <div className="absolute top-2 right-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2L12.2451 6.90983L17.5 7.45492L13.75 11.1302L14.4901 16.5L10 13.95L5.50993 16.5L6.25 11.1302L2.5 7.45492L7.75485 6.90983L10 2Z" fill="#FFD700"/>
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex flex-col w-[164px] items-start gap-[9px] mt-[11px] mx-auto">
                  <div className="flex items-center gap-[27px] w-full">
                    <h3 className={`font-semibold text-white text-base whitespace-nowrap ${
                      org.name === "Agent Jake" ? "text-md" : ""
                    }`}>
                      {org.name} ({org.ticker})
                    </h3>
                  </div>

                  <div className={`w-full h-[51px] rounded-[10px] overflow-hidden p-[9px_5px] ${
                    org.name === "Agent Jake" ? "bg-[#5B4EB8]" : "bg-[#ffffff1a]"
                  }`}>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-normal text-white text-xs">
                        MC : {org.marketCap}
                      </span>
                      <span className="font-normal text-white text-xs">
                        Vol: {org.volume}
                      </span>
                    </div>
                    <div className="mt-2 font-normal text-[#00B200] text-xs">
                      {org.percentChange}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-end gap-1">
                      <MessageSquareIcon className="w-4 h-4 text-white" />
                      <span className="font-normal text-white text-xs">
                        {org.messages}
                      </span>
                    </div>
                    <div className="flex items-end gap-1">
                      <ClockIcon className="w-4 h-4 text-white" />
                      <span className="font-normal text-white text-xs">
                        {org.timeAgo}
                      </span>
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
