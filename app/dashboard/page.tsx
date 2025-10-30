"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { div } from "framer-motion/client";
import DarkBackground from "../components/DarkBackground";

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
    <div>
      <DarkBackground>
      <Navbar/>
       <div className="min-h-screen text-white p-6">
     
     {/* Header Section */}
     <div className="flex justify-between items-center mb-6">
       <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
       <div className="flex items-center gap-2 bg-[#1a1f25] px-3 py-2 rounded-xl">
         <Image src="/phantom.png" alt="wallet" width={22} height={22} />
         <span className="text-sm text-slate-300">2eFE...7H1p</span>
       </div>
     </div>

     {/* Main Overview Cards */}
     <div className="grid md:grid-cols-2 gap-5 mb-8">
       {/* Net Worth Card */}
       <div className="bg-[#14181d] border border-[#20242a] rounded-2xl p-5 flex justify-between items-center shadow-md">
         <div>
           <h2 className="text-slate-300 text-sm mb-1">Net Worth</h2>
           <p className="text-3xl font-bold">
             ${(totalValue + liquidity.currentValue).toFixed(2)}
           </p>
           <p className="text-xs text-slate-400 mt-2">
             JUP Holdings: 0.00 | JUP Staked: 0.00%
           </p>
         </div>
         <div>
           <Image src="/usdc.png" alt="avatar" width={60} height={60} />
         </div>
       </div>

       {/* Yield Estimate */}
       <div className="bg-[#14181d] border border-[#20242a] rounded-2xl p-5 shadow-md">
         <h2 className="text-slate-300 text-sm mb-2">Yield Estimate</h2>
         <p className="text-2xl font-semibold">
           ≈$80{" "}
           <span className="text-green-400 text-sm align-middle">+0.45%</span>
         </p>
         <p className="text-xs text-slate-500 mt-1">Yearly APR</p>
       </div>
     </div>

     {/* Tabs */}
     <div className="flex gap-4 mb-4 text-sm border-b border-[#1f2329]">
       <button className="pb-2 border-b-2 border-indigo-500 text-indigo-400 font-medium">
         Positions
       </button>
       <button className="pb-2 text-slate-400 hover:text-white transition">
         Activity
       </button>
     </div>

     {/* Holdings Table
     <div className="bg-[#14181d] border border-[#20242a] rounded-2xl overflow-hidden shadow-lg mb-6">
       <div
         className="flex justify-between items-center px-5 py-3 bg-[#181c22] border-b border-[#1f2329] cursor-pointer"
         onClick={() => setIsCollapsed(!isCollapsed)}
       >
         <div className="flex items-center gap-2">
           <span className="text-slate-300 font-medium">Holdings</span>
           <span className="text-slate-400 text-sm">
             ${totalValue.toFixed(2)}
           </span>
         </div>
         <span className="text-xs text-slate-400">
           {isCollapsed ? "Expand" : "Collapse"}
         </span>
       </div>

       {!isCollapsed && (
         <div className="divide-y divide-[#1f2329]">
           {holdings.map((h) => {
             const value = h.balance * h.price;
             return (
               <div
                 key={h.asset}
                 className="flex justify-between items-center px-5 py-3 hover:bg-[#1a1e24] transition"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-[#1e242b] rounded-full flex items-center justify-center">
                     <span className="text-xs font-semibold text-slate-200">
                       {h.asset[0]}
                     </span>
                   </div>
                   <div>
                     <div className="font-medium">{h.asset}</div>
                     <div className="text-xs text-slate-400">Solana</div>
                   </div>
                 </div>

                 <div className="text-right">
                   <div className="text-sm text-slate-200">
                     {h.balance.toFixed(8)}
                   </div>
                   <div
                     className={`text-xs ${
                       h.change < 0 ? "text-red-400" : "text-green-400"
                     }`}
                   >
                     ${h.price.toFixed(2)} ({h.change}%)
                   </div>
                 </div>

                 <div className="text-right">
                   <div className="text-sm text-slate-100">
                     ${value.toFixed(2)}
                   </div>
                 </div>
               </div>
             );
           })}
         </div>
       )}
     </div> */}

     {/* Portfolio Liquidity Position */}
     <div className="bg-gradient-to-r from-[#11151a] to-[#1c2027] border border-[#20242a] rounded-2xl p-6 shadow-lg">
       <div className="flex justify-between items-center mb-3">
         <h2 className="text-slate-300 font-semibold">Liquidity Position</h2>
         <span className="text-xs bg-green-900/40 text-green-400 px-2 py-1 rounded-lg">
           Active
         </span>
       </div>

       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
         <div>
           <p className="text-sm text-slate-400">Invested Amount</p>
           <p className="text-xl font-semibold flex items-center gap-2">
             <Image src="/usdc.png" alt="USDC" width={22} height={22} />
             {liquidity.invested.toLocaleString()} USDC
           </p>
         </div>

         <div>
           <p className="text-sm text-slate-400">Current Value</p>
           <p className="text-xl font-semibold text-green-400">
             {liquidity.currentValue.toLocaleString()} USDC (+
             {liquidity.changePercent}%)
           </p>
         </div>

         <div>
           <p className="text-sm text-slate-400">Unrealized PnL</p>
           <p className="text-lg font-semibold text-green-400">
             +${liquidity.profit.toFixed(2)}
           </p>
         </div>
       </div>

       <div className="mt-4 text-xs text-slate-500">
         You are currently earning yield from your deposited liquidity in
         Solana RWA pools.
       </div>
     </div>
   </div>
   </DarkBackground>
    </div>
  );
}