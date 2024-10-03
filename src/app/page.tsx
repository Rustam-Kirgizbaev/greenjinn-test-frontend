"use client";
import AverageBitcoinPrice from "@/components/custom/average-bitcoin-price";
import TradingPairDetails from "@/components/custom/trading-pair-details";
import TradingPairs from "@/components/custom/trading-pairs";
import { useState } from "react";

export default function Home() {
  const [activeBadge, setActiveBadge] = useState<string>("btcusd");

  const handleBadgeClick = (symbol: string) => {
    setActiveBadge(symbol);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-8">
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center border rounded-lg m-auto md:m-4">
        <AverageBitcoinPrice />
      </div>

      <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4 border rounded-lg m-auto md:m-4">
        <TradingPairs
          activeBadge={activeBadge as string}
          handleBadgeClick={handleBadgeClick}
          setActiveBadge={setActiveBadge}
        />

        <TradingPairDetails activeBadge={activeBadge as string} />
      </div>
    </div>
  );
}
