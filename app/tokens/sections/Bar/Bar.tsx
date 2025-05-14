import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BarByAnima = (): JSX.Element => {
  // Data for metric cards
  const metricCards = [
    { label: "MARKET CAP", value: "$33.5k" },
    { label: "VOLUME", value: "$244.5k" },
  ];

  // Data for social links
  const socialLinks = [
    {
      icon: (
        <div className="relative w-[27.92px] h-[27.92px] bg-[url(https://c.animaapp.com/mamw74gcIAFRo9/img/clip-path-group.png)] bg-[100%_100%]" />
      ),
      width: "46px",
    },
    {
      icon: (
        <img
          className="w-[35.7px] h-[35.7px]"
          alt="Telegram"
          src="https://c.animaapp.com/mamw74gcIAFRo9/img/telegram.svg"
        />
      ),
      width: "48px",
    },
    {
      icon: (
        <img
          className="w-[35.7px] h-[35.7px]"
          alt="Discord"
          src="https://c.animaapp.com/mamw74gcIAFRo9/img/ic-baseline-discord.svg"
        />
      ),
      width: "56.7px",
    },
    {
      icon: (
        <img
          className="w-[26.83px] h-[26.83px]"
          alt="Website"
          src="https://c.animaapp.com/mamw74gcIAFRo9/img/streamline-web-solid.svg"
        />
      ),
      width: "40.47px",
    },
  ];

  return (
    <Card className="w-full h-[70px] bg-[#ffffff0d] border-none rounded-[20px] overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center justify-between h-full px-5 py-3.5">
          <div className="flex items-center gap-[7px]">
            {metricCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col w-[136px] h-[43px] items-center justify-center p-[7px] bg-[#ffffff1a] rounded-[40px] overflow-hidden"
              >
                <div className="flex flex-col items-center gap-px">
                  <div className="[font-family:'Inter',Helvetica] font-medium text-[#30EAF7] text-[10px] whitespace-nowrap">
                    {card.label}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-medium text-white text-sm">
                    {card.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className={`flex flex-col w-[${link.width}] items-center justify-center`}
              >
                {link.icon}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
