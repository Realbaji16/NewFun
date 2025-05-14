import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const TopHoldersSection = (): JSX.Element => {
  const holders = [
    { id: 1, name: "MythMyth", percentage: "10.8%" },
    { id: 2, name: "Kayan", percentage: "8.8%" },
    { id: 3, name: "kkkki", percentage: "7.8%" },
    { id: 4, name: "ttrgpo", percentage: "6.8%" },
    { id: 5, name: "ttrgpo", percentage: "6.8%" },
    { id: 6, name: "ttrgpo", percentage: "6.8%" },
    { id: 7, name: "ttrgpo", percentage: "6.8%" },
    { id: 8, name: "ttrgpo", percentage: "6.8%" },
    { id: 9, name: "ttrgpo", percentage: "6.8%" },
    { id: 10, name: "ttrgpo", percentage: "6.8%" },
  ];

  const HoldersList = () => (
    <>
      <h3 className="text-white text-sm font-medium mb-4">Top Holders</h3>
      <div className="space-y-3">
        {holders.map((holder) => (
          <div key={holder.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#30EAF7] text-sm">{holder.id}.</span>
              <span className="text-white text-sm">{holder.name}</span>
            </div>
            <span className="text-white text-sm">{holder.percentage}</span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <Card className="bg-[#171717] rounded-xl p-4 border-0">
      <CardContent className="p-0">
        <HoldersList />
      </CardContent>
    </Card>
  );
};
