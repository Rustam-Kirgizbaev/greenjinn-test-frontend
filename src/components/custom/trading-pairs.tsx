"use client";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { ITradingPairInfo } from "@/common/interfaces/trading-pair-info";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv/config");

interface TradingPairsProps {
  activeBadge: string;
  setActiveBadge: (symbol: string) => void;
  handleBadgeClick: (symbol: string) => void;
}

export default function TradingPairs({
  activeBadge,
  setActiveBadge,
  handleBadgeClick,
}: TradingPairsProps) {
  const [badges, setBadges] = useState<ITradingPairInfo[]>([]);

  useEffect(() => {
    const fetchTradingPairsInfo = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/trading-pairs-info`
      );
      const json = await res.json();

      setBadges(json);

      if (json.length > 0) {
        setActiveBadge(json[0].symbol);
      }
    };

    fetchTradingPairsInfo();
  }, []);

  return (
    <div className="flex-1 p-4 border rounded-lg overflow-y-auto max-h-72">
      <h2 className="text-xl font-bold">Trading Pairs</h2>
      <div className="flex flex-wrap gap-2 mt-4">
        {" "}
        {/* Flexbox for wrapping */}
        {badges.map((badge) => (
          <Badge
            variant={activeBadge === badge.symbol ? "default" : "outline"}
            key={badge.symbol}
            onClick={() => handleBadgeClick(badge.symbol)}
            className="cursor-pointer"
          >
            {badge.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
