"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import ShaderBackground from "@/app/components/ShaderBackground";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const holdings = [
    { asset: "SOL", balance: 0.0009049, price: 184.29, change: -2.53 },
    { asset: "bpSOL", balance: 0.00009867, price: 194.05, change: -2.9 },
  ];

  const totalValue = holdings.reduce((sum, h) => sum + h.balance * h.price, 0);

  // Portfolio position data (liquidity)
  const liquidity = {
    invested: 1000,
    currentValue: 1080,
    profit: 80,
    changePercent: 8.0,
  };

  return (
    <ShaderBackground>
      <Header />
      <div className="min-h-screen p-6 pt-20">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-xl">
            <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-white">2eFE...7H1p</span>
          </div>
        </div>

        {/* Main Overview Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {/* Net Worth Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex justify-between items-center shadow-md">
            <div>
              <h2 className="text-white/80 text-sm mb-1">Net Worth</h2>
              <p className="text-3xl font-bold text-white">
                ${(totalValue + liquidity.currentValue).toFixed(2)}
              </p>
              <p className="text-xs text-white/60 mt-2">
                JUP Holdings: 0.00 | JUP Staked: 0.00%
              </p>
            </div>
            <div>
              <div className="w-15 h-15 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">$</span>
              </div>
            </div>
          </div>

          {/* Yield Estimate */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-md">
            <h2 className="text-white/80 text-sm mb-2">Yield Estimate</h2>
            <p className="text-2xl font-semibold text-white">
              ≈$80{" "}
              <span className="text-green-400 text-sm align-middle">+0.45%</span>
            </p>
            <p className="text-xs text-white/60 mt-1">Yearly APR</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-4 text-sm border-b border-white/20">
          <button className="pb-2 border-b-2 border-indigo-400 text-indigo-400 font-medium">
            Positions
          </button>
          <button className="pb-2 text-white/60 hover:text-white transition">
            Activity
          </button>
        </div>

        {/* Portfolio Liquidity Position */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-white font-semibold">Liquidity Position</h2>
            <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded-lg">
              Active
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <div>
              <p className="text-sm text-white/70">Invested Amount</p>
              <p className="text-xl font-semibold flex items-center gap-2 text-white">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  $
                </div>
                {liquidity.invested.toLocaleString()} USDC
              </p>
            </div>

            <div>
              <p className="text-sm text-white/70">Current Value</p>
              <p className="text-xl font-semibold text-green-400">
                {liquidity.currentValue.toLocaleString()} USDC (+
                {liquidity.changePercent}%)
              </p>
            </div>

            <div>
              <p className="text-sm text-white/70">Unrealized PnL</p>
              <p className="text-lg font-semibold text-green-400">
                +${liquidity.profit.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-4 text-xs text-white/60">
            You are currently earning yield from your deposited liquidity in
            Solana RWA pools.
          </div>
        </div>
      </div>
    </ShaderBackground>
  );
}
