import { ClockIcon, MessageSquareIcon } from "lucide-react";
import React from "react";

import { Card, CardContent } from "../../../../components/ui/card";

// Organization data for mapping
const organizations = [
  {
    id: 1,
    name: "Agent Jake ($AGJK)",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-14-1.png",
    bgColor: "#ffffff",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
  },
  {
    id: 2,
    name: "Mojosworld ($mjwd)",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-13.png",
    bgColor: "#ca6868",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
  },
  {
    id: 3,
    name: "Mojosworld ($mjwd)",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-12.png",
    bgColor: "#ca6868",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
  },
  {
    id: 4,
    name: "Mojosworld ($mjwd)",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-10.png",
    bgColor: "#ca6868",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
  },
  {
    id: 5,
    name: "Mojosworld ($mjwd)",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-11.png",
    bgColor: "#ca6868",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
  },
  {
    id: 6,
    name: "Agent Jake ($AGJK)",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-14-1.png",
    bgColor: "#ffffff",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
  },
  {
    id: 7,
    name: "Agent Jake ($AGJK)",
    image: "https://c.animaapp.com/maljt21j0sAixE/img/image-14-1.png",
    bgColor: "#ffffff",
    marketCap: "$33.5k",
    volume: "$223.9k",
    percentChange: "+13.77%",
    messages: 54,
    timeAgo: "20 min ago",
  },
];

export default function GroupWrapper() {
 

  return (
    <section className="flex flex-col w-full items-start gap-[18px] mb-8">
      <header className="flex items-center gap-2 mt-8">
        <div className="w-8 h-[30px] bg-[#ffffff17] rounded-[5px] backdrop-blur-[17px] backdrop-brightness-[100%] flex items-center justify-center border-[1px] border-transparent bg-clip-padding" style={{ backgroundImage: 'linear-gradient(#171717, #171717), linear-gradient(to right, #00FFA3, #DC1FFF)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
          <div className="w-[18px] h-[18px] flex items-center justify-center">
            <img
              className="w-[15px] h-2.5"
              alt="Latest orgs icon"
              src="https://c.animaapp.com/maljt21j0sAixE/img/group-5.png"
            />
          </div>
        </div>

        <h2 className="font-semibold text-white text-lg">Latest orgs</h2>
      </header>

      <div className="flex items-start gap-3.5 w-full overflow-x-auto no-scrollbar pb-4">
        {organizations.map((org) => (
          <Card
            key={org.id}
            className="w-[186px] h-[257px] rounded-[20px] border-none flex-shrink-0 bg-transparent cursor-pointer hover:opacity-80 transition-opacity"
          
          >
            <CardContent className="p-0">
              <div className="w-[171px] h-[239px] mx-auto mt-1.5">
                <div
                  className="w-[171px] h-[124px] rounded-[20px] overflow-hidden"
                  style={{ backgroundColor: org.bgColor }}
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={org.name}
                    src={org.image}
                  />
                </div>

                <div className="flex flex-col w-[164px] items-start gap-[9px] mt-[11px] mx-auto">
                  <div className="flex items-center gap-[27px] w-full">
                    <h3 className="font-semibold text-white text-base whitespace-nowrap">
                      {org.name}
                    </h3>
                  </div>

                  <div className="w-full h-[51px] bg-[#ffffff1a] rounded-[10px] overflow-hidden p-[9px_5px]">
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
