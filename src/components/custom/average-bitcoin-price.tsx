"use client";
import { useEffect, useState } from "react";
import ProviderInfo from "./provider-info";
import { IAverageBitcoinPrice } from "@/common/interfaces/average-bitcoin-price";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv/config");

export default function AverageBitcoinPrice() {
  const [data, setData] = useState<IAverageBitcoinPrice | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/average-bitcoin-price`
      );
      const json = await res.json();
      setData(json);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 30000);

    return () => clearInterval(intervalId);
  }, []);

  // TODO: implement loading

  return (
    <div className="text-center">
      <h1 className="text-5xl m-16">{`Average ${data?.ticker} value`}</h1>
      <p className="text-6xl font-bold mb-24">
        ${data?.average_price.toFixed(2)}
      </p>

      <div className="space-y-4">
        {data?.providers.map((providerData, index) => (
          <ProviderInfo
            key={index}
            provider={providerData.provider}
            price={providerData.price}
          />
        ))}
      </div>
    </div>
  );
}
