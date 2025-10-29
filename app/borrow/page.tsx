"use client";
import React, { useState, useMemo } from "react";

export default function RwaStakingCard() {
  const tokens = [
    { id: "xNVDIA", label: "xNVDIA", multiplier: 0.8, description: "High-liquidity RWA stock token (NVIDIA)", image: "/nvidia.png" },
    { id: "xTESLA", label: "xTESLA", multiplier: 0.7, description: "Emerging RWA stock token (TESLA)", image: "/tesla.png" },
    { id: "xAPPLE", label: "xAPPLE", multiplier: 0.75, description: "Blue-chip RWA token (Apple Inc.)", image: "/apple.png" },
    { id: "xGOOGLE", label: "xGOOGLE", multiplier: 0.78, description: "RWA token backed by Google equity", image: "/google.png" },
    { id: "xMETA", label: "xMETA", multiplier: 0.73, description: "Social & tech sector RWA token (Meta)", image: "/meta.png" },
    { id: "xAMAZON", label: "xAMAZON", multiplier: 0.76, description: "E-commerce RWA token (Amazon)", image: "/amazon.png" },
  ];

  const daysOptions = [7, 15, 30];
  const [selectedToken, setSelectedToken] = useState(tokens[0].id);
  const [selectedDays, setSelectedDays] = useState(daysOptions[0]);
  const [amount, setAmount] = useState("1000");
  const [isStaking, setIsStaking] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tokenObj = useMemo(() => tokens.find((t) => t.id === selectedToken) ?? tokens[0], [selectedToken]);

  const projectedReward = useMemo(() => {
    const amt = parseFloat(amount) || 0;
    return amt * tokenObj.multiplier * (selectedDays / 365);
  }, [amount, tokenObj, selectedDays]);

  function handleStake() {
    setIsStaking(true);
    setTimeout(() => setIsStaking(false), 900);
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-[#dadada] dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">RWA Staking</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Stake your xStocks for short-term yield and protocol rewards.
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400">TVL Multiplier</div>
            <div className="mt-1 font-mono font-semibold text-sm">
              {Math.round(tokenObj.multiplier * 100)}%
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3">
          {/* Dropdown select */}
          <label className="block relative">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Select RWA Token
            </span>
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="mt-2 w-full flex justify-between items-center rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 bg-white dark:bg-slate-800"
            >
              <div className="flex items-center gap-2">
                <img src={tokenObj.image} alt={tokenObj.label} className="w-6 h-6 rounded-full" />
                <span className="font-semibold">{tokenObj.label}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute z-20 mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg max-h-56 overflow-y-auto">
                {tokens.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => {
                      setSelectedToken(t.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 hover:bg-indigo-50 dark:hover:bg-slate-800 cursor-pointer ${
                      selectedToken === t.id ? "bg-indigo-100 dark:bg-slate-800/60" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={t.image} alt={t.label} className="w-6 h-6 rounded-full" />
                      <div>
                        <div className="font-semibold">{t.label}</div>
                        <div className="text-xs text-slate-400">{t.description}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">{Math.round(t.multiplier * 100)}%</div>
                  </div>
                ))}
              </div>
            )}
          </label>

          {/* Days select */}
          <label className="block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Select Days</span>
            <div className="mt-2 inline-flex rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
              {daysOptions.map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDays(d)}
                  className={`px-4 py-2 text-sm ${
                    selectedDays === d
                      ? "bg-slate-900 text-white"
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </label>

          {/* Amount input */}
          <label className="block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Amount to stake (USD)
            </span>
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-2 placeholder:text-slate-400"
              placeholder="1000"
            />
          </label>

          {/* Summary */}
          <div className="mt-1 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">Selected</div>
                <div className="font-semibold flex items-center gap-2">
                  <img src={tokenObj.image} alt={tokenObj.label} className="w-5 h-5 rounded-full" />
                  {tokenObj.label} · {selectedDays} days
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">Projected reward</div>
                <div className="font-mono font-semibold">
                  {projectedReward ? projectedReward.toFixed(2) : "0.00"} USD
                </div>
              </div>
            </div>
          </div>

          {/* Stake button */}
          <div className="mt-3 flex gap-2">
            <button
              onClick={handleStake}
              disabled={isStaking}
              className="flex-1 rounded-xl py-2 font-semibold bg-indigo-600 text-white disabled:opacity-60"
            >
              {isStaking ? "Staking..." : "Stake now"}
            </button>
            <button
              onClick={() => {
                setAmount("0");
                setSelectedDays(daysOptions[0]);
                setSelectedToken(tokens[0].id);
              }}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-4 text-xs text-slate-400">
            
        </div>
      </div>
    </div>
  );
}
