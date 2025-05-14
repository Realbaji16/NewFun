import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/seperator";

// Message data for reusability
const messages = [
  {
    id: 1,
    sender: "VoS7rC",
    content: "This is the funniest shit i ever seen this year lmao",
    timestamp: "3/6/2025, 2:49:04 AM",
    likes: 0,
    avatar: {
      type: "icon",
      src: "https://c.animaapp.com/mamw74gcIAFRo9/img/solar-user-bold-duotone.svg",
    },
  },
  {
    id: 2,
    sender: "VoS7rC",
    content: "This is the funniest shit i ever seen this year lmao",
    timestamp: "3/6/2025, 2:49:04 AM",
    likes: 0,
    avatar: {
      type: "image",
      src: "https://c.animaapp.com/mamw74gcIAFRo9/img/g5.png",
    },
  },
  {
    id: 3,
    sender: "You",
    content:
      "Funny because we asked them to run a model vs model competition but they didnt want to",
    timestamp: "3/6/2025, 2:49:04 AM",
    likes: 0,
    avatar: {
      type: "image",
      src: "https://c.animaapp.com/mamw74gcIAFRo9/img/frame-1597884349-1.svg",
    },
    isCurrentUser: true,
  },
];

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[761px] h-[489px] bg-[#ffffff0d] rounded-[20px] overflow-hidden border-none">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-6">
          {messages.map((message) =>
            !message.isCurrentUser ? (
              <div key={message.id} className="flex items-start gap-2">
                <div className="flex-shrink-0 mt-[75px]">
                  {message.avatar.type === "icon" ? (
                    <div className="flex items-center justify-center w-4 h-4 bg-[#d9d9d9] rounded-lg p-px">
                      <img
                        className="w-2.5"
                        alt="User avatar"
                        src={message.avatar.src}
                      />
                    </div>
                  ) : (
                    <div
                      className="flex items-center justify-center w-4 h-4 rounded-lg p-px"
                      style={{
                        background: `url(https://c.animaapp.com/mamw74gcIAFRo9/img/frame-1597884349.png) 50% 50% / cover, linear-gradient(0deg, rgba(217,217,217,1) 0%, rgba(217,217,217,1) 100%)`,
                      }}
                    >
                      <div className="w-4 h-4 mt-[-1.00px] mb-[-1.00px] mr-[-11.00px] bg-[url(https://c.animaapp.com/mamw74gcIAFRo9/img/g5.png)] bg-[100%_100%]" />
                    </div>
                  )}
                </div>

                <div className="w-[305px] bg-[#ffffff0d] rounded-[20px_20px_20px_0px] overflow-hidden p-5">
                  <div className="flex w-[51px] items-center justify-center px-1 py-0.5 bg-black-1 rounded-[10px] overflow-hidden border border-solid border-[#494949]">
                    <div className="mt-[-1.00px] font-medium text-white text-[8px]">
                      {message.sender}
                    </div>
                  </div>

                  <div className="mt-3 font-normal text-white text-[10px]">
                    {message.content}
                  </div>

                  <Separator className="my-3 bg-white/10" />

                  <div className="flex items-center justify-between">
                    <div className="font-medium text-text-1 text-[8px]">
                      {message.timestamp}
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-[3px]">
                        <img
                          className="w-3.5 h-3.5"
                          alt="Reply"
                          src="https://c.animaapp.com/mamw74gcIAFRo9/img/material-symbols-reply.svg"
                        />
                        <span className="font-normal text-white text-[10px] whitespace-nowrap">
                          ReplyIcon
                        </span>
                      </div>

                      <div className="flex items-center gap-[3px]">
                        <img
                          className="w-3 h-3"
                          alt="Like"
                          src="https://c.animaapp.com/mamw74gcIAFRo9/img/flat-color-icons-like.svg"
                        />
                        <span className="mt-[-1.00px] font-normal text-white text-[10px] whitespace-nowrap">
                          {message.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={message.id} className="flex justify-end">
                <div className="flex items-start gap-2 w-[335px] h-[100px] rotate-180">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 -top-px left-2.5 bg-[url(https://c.animaapp.com/mamw74gcIAFRo9/img/frame-1597884349-1.svg)] bg-cover bg-[50%_50%] rounded-lg" />
                  </div>

                  <div className="w-[305px] bg-[#0000003b] rounded-[20px_20px_20px_0px] overflow-hidden border border-solid border-[#ffffff1a] p-5">
                    <div className="flex w-[51px] items-center justify-center px-1 py-0.5 bg-black-1 rounded-[10px] rotate-180 overflow-hidden border border-solid border-[#494949] ml-auto">
                      <div className="mt-[-1.00px] font-medium text-white text-[8px]">
                        {message.sender}
                      </div>
                    </div>

                    <div className="mt-3 h-6">
                      <img
                        className="w-[268px] h-px -rotate-180 object-cover"
                        alt="Line"
                        src="https://c.animaapp.com/mamw74gcIAFRo9/img/line-28.svg"
                      />
                      <div className="w-[265px] rotate-180 font-normal text-white text-[10px]">
                        {message.content}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 rotate-180">
                      <div className="font-medium text-text-1 text-[8px]">
                        {message.timestamp}
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center gap-[3px]">
                          <img
                            className="w-3.5 h-3.5 rotate-[-360deg]"
                            alt="Reply"
                            src="https://c.animaapp.com/mamw74gcIAFRo9/img/material-symbols-reply.svg"
                          />
                          <span className="font-normal text-white text-[10px] whitespace-nowrap">
                            ReplyIcon
                          </span>
                        </div>

                        <div className="flex items-center gap-[3px]">
                          <img
                            className="w-3 h-3 rotate-[-360deg]"
                            alt="Like"
                            src="https://c.animaapp.com/mamw74gcIAFRo9/img/flat-color-icons-like.svg"
                          />
                          <span className="mt-[-1.00px] font-normal text-white text-[10px] whitespace-nowrap">
                            {message.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-auto flex items-center gap-4">
          <div className="flex items-center gap-[15px]">
            <img
              className="w-[27.27px] h-[27.27px]"
              alt="Attach"
              src="https://c.animaapp.com/mamw74gcIAFRo9/img/tdesign-attach.svg"
            />
            <div className="w-[27.27px] h-[27.27px]">
              <img
                className="w-[23px] h-[25px] mt-0.5 ml-0.5"
                alt="Group"
                src="https://c.animaapp.com/mamw74gcIAFRo9/img/group-4.png"
              />
            </div>
          </div>

          <div className="flex-1 relative">
            <Input
              className="h-[41px] rounded-[20px] border-[#494949] pl-4 text-text-1 text-[10px]"
              placeholder="Input text here..."
            />
            <Button className="absolute right-[7px] top-[7px] h-auto w-auto bg-blue-2-100 rounded-[36.13px] px-[5px] py-[6.32px] flex items-center gap-0.5">
              <img
                className="w-[13px] h-[13px]"
                alt="Send"
                src="https://c.animaapp.com/mamw74gcIAFRo9/img/mynaui-send-solid.svg"
              />
              <span className="font-medium text-black-1 text-xs">SendIcon</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
