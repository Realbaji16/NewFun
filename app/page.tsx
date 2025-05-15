"use client";

import { TradingChart } from '../components/TradingChart';

// Sample data - replace with your actual data source
const sampleData = [
  { time: '2024-03-14', open: 0.02061, high: 0.02064, low: 0.01930, close: 0.01992, volume: 22163 },
  { time: '2024-03-13', open: 0.02064, high: 0.02164, low: 0.01930, close: 0.02061, volume: 25163 },
  { time: '2024-03-12', open: 0.01961, high: 0.02264, low: 0.01830, close: 0.02064, volume: 28163 },
  // Add more data points as needed
];

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <TradingChart 
          data={sampleData}
          marketCap="$33.5k"
          volume="$244.5k"
        />
      </div>
    </main>
  );
}
