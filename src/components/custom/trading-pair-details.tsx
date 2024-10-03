"use client";
import { useEffect, useState } from "react";
import GJNumbersView from "./gj-numbers-view";
import { ITickerValue } from "@/common/interfaces/ticker-value";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv/config");

interface TradingPairDetailsProps {
  activeBadge: string;
}

export default function TradingPairDetails({
  activeBadge,
}: TradingPairDetailsProps) {
  const [details, setDetails] = useState<ITickerValue | null>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchBadgeDetails = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/ticker-values/${activeBadge}`
      ); // Replace with your actual API endpoint
      const json = await res.json();
      setDetails(json);
    };

    fetchBadgeDetails();

    if (activeBadge) {
      intervalId = setInterval(fetchBadgeDetails, 30000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [activeBadge]);

  const data = [
    { number: details?.open || "0", description: "Open" },
    { number: details?.last || "0", description: "Last" },
    { number: details?.high || "0", description: "High" },
    { number: details?.low || "0", description: "Low" },
    { number: details?.bid || "0", description: "Bid" },
    { number: details?.ask || "0", description: "Ask" },
    {
      number: parseFloat(details?.volume || "0").toFixed(2),
      description: "Volume",
    },
    { number: details?.vwap || "0", description: "VWAP" },
    { number: details?.open_24 || "0", description: "Open (24h)" },
    {
      number: `${details?.percent_change_24 || "0"}%`,
      description: "24h Change",
    },
  ];

  return (
    <div className="flex-1 p-4 border rounded-lg">
      <GJNumbersView
        title={`Details for ${activeBadge?.toUpperCase()}`}
        numbers={data}
      />
    </div>
  );
}
