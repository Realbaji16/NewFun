import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupWrapperByAnima = (): JSX.Element => {
  // Data for top holders to enable mapping
  const topHolders = [
    { id: 1, name: "MythMyth", percentage: "10.8%" },
    { id: 2, name: "hfjdytt", percentage: "8.8%" },
    { id: 3, name: "tikiiki", percentage: "7.8%" },
    { id: 4, name: "ttrgoo", percentage: "6.8%" },
    { id: 5, name: "ttrgoo", percentage: "6.8%" },
    { id: 6, name: "ttrgoo", percentage: "6.8%" },
    { id: 7, name: "ttrgoo", percentage: "6.8%" },
    { id: 8, name: "ttrgoo", percentage: "6.8%" },
    { id: 9, name: "ttrgoo", percentage: "6.8%" },
    { id: 10, name: "ttrgoo", percentage: "6.8%" },
  ];

  return (
    <Card className="w-[242px] h-[437px] bg-[#ffffff0d] rounded-[20px] border border-solid border-[#494949] overflow-hidden">
      <CardContent className="p-4">
        <h3 className="text-center font-bold text-primary-blue text-sm mb-[31px]">
          Top Holders
        </h3>

        <div className="flex flex-col gap-1.5">
          {topHolders.map((holder) => (
            <div
              key={holder.id}
              className="flex h-5 items-center justify-between p-[7px] bg-[#ffffff0d] rounded-[10px] overflow-hidden"
            >
              <div className="inline-flex items-center gap-2">
                <span className="font-medium text-white text-xs">
                  {holder.id}.
                </span>

                <div className="inline-flex items-center gap-2.5">
                  <Avatar className="w-[15px] h-[15px]">
                    <AvatarImage
                      src="https://c.animaapp.com/mamw74gcIAFRo9/img/image-11.png"
                      alt="User avatar"
                    />
                    <AvatarFallback className="text-[8px]">
                      {holder.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <span className="font-medium text-white text-[10px] whitespace-nowrap">
                    {holder.name}
                  </span>
                </div>
              </div>

              <span className="font-medium text-white text-xs">
                {holder.percentage}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
