import React from "react";

const mockTrades = [
  {
    account: "6SQwd55...235",
    type: "BUY",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "BUY",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "SELL",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "SELL",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "SELL",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "BUY",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "BUY",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "BUY",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "BUY",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "BUY",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "BUY",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
  {
    account: "6SQwd55...235",
    type: "BUY",
    solAmount: "0.0033",
    tokenAmount: "265.55k",
    time: "05-14 09:22",
    txLink: "#",
  },
];

export function TradesSection() {
  return (
    <div className="bg-[#171717] rounded-2xl border border-[#7B61FF] p-4 pb-0 w-full mt-4 overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="flex text-[#B0B0B0] text-xs font-medium mb-3 px-2">
          <div className="w-1/5">Account</div>
          <div className="w-1/6">Type</div>
          <div className="w-1/6">SOL Amount</div>
          <div className="w-1/6">Token Amount</div>
          <div className="w-1/6">Time</div>
          <div className="w-1/6">Tx Link</div>
        </div>
        <div>
          {mockTrades.map((trade, idx) => (
            <div
              key={idx}
              className={`flex items-center text-white text-sm px-2 py-2 ${idx % 2 === 1 ? "bg-[#232323]" : ""}`}
            >
              <div className="w-1/5 truncate">{trade.account}</div>
              <div className={`w-1/6 font-bold ${trade.type === "BUY" ? "text-[#00FF85]" : "text-[#FF3B3B]"}`}>
                {trade.type}
              </div>
              <div className="w-1/6">{trade.solAmount}</div>
              <div className="w-1/6">{trade.tokenAmount}</div>
              <div className="w-1/6">{trade.time}</div>
              <div className="w-1/6">
                <a
                  href={trade.txLink}
                  className="text-[#30EAF7] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tx Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-4">
        <button className="text-[#30EAF7] text-base font-medium hover:underline">Load More</button>
      </div>
    </div>
  );
}