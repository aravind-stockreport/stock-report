// Next.js 14 with TailwindCSS app for real-time stock dashboard

// 1. app/page.tsx
"use client";
import { useEffect, useState } from "react";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  recommendation: "Buy" | "Hold" | "Sell";
}

const mockStocks: Stock[] = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2930, recommendation: "Buy" },
  { symbol: "TCS", name: "Tata Consultancy Services", price: 3750, recommendation: "Hold" },
  { symbol: "INFY", name: "Infosys", price: 1520, recommendation: "Sell" },
];

export default function HomePage() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    // In real-world: Fetch from stock API here (e.g., NSE India API or RapidAPI)
    setStocks(mockStocks);
  }, []);

  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Stock Dashboard (India)</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {stocks.map((stock) => (
          <div key={stock.symbol} className="p-4 border shadow rounded-xl">
            <h2 className="text-xl font-semibold">{stock.name} ({stock.symbol})</h2>
            <p>Price: ₹{stock.price}</p>
            <p className="font-bold text-green-600">{stock.recommendation}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => window.print()}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download Report
      </button>

      <footer className="mt-12 text-center text-sm text-gray-500">
        Powered by <span className="font-medium">stock_report</span>
      </footer>
    </main>
  );
}