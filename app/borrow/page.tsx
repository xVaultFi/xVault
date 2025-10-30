"use client";
import React, { useState, useMemo } from "react";
import Header from "@/app/components/Header";
import DarkBackground from "@/app/components/DarkBackground";

export default function RwaStakingCard() {
  const tokens = [
    {
      id: "xNVDIA",
      label: "xNVDIA",
      multiplier: 0.8,
      description: "High-liquidity RWA stock token (NVIDIA)",
      image: "/nvidia.png",
    },
    {
      id: "xTESLA",
      label: "xTESLA",
      multiplier: 0.7,
      description: "Emerging RWA stock token (TESLA)",
      image: "/tesla.png",
    },
  ];

  const daysOptions = [7, 15, 30] as const;

  // Hard-coded APRs for each duration
  const aprMap: Record<(typeof daysOptions)[number], number> = {
    7: 0.07, // 5% for 7 days
    15: 0.08, // 6% for 15 days
    30: 0.12, // 8% for 30 days
  };

  const [selectedToken, setSelectedToken] = useState(tokens[0].id);
  const [selectedDays, setSelectedDays] = useState<(typeof daysOptions)[number]>(
    daysOptions[1]
  ); // default 15 days
  const [amount, setAmount] = useState("360");
  const [isStaking, setIsStaking] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tokenObj = useMemo(
    () => tokens.find((t) => t.id === selectedToken) ?? tokens[0],
    [selectedToken]
  );

  // Current APR based on selected days
  const currentApr = aprMap[selectedDays];

  // Liquidity user receives (based on TVL %)
  const liquidity = useMemo(() => {
    const amt = parseFloat(amount) || 0;
    return amt * tokenObj.multiplier;
  }, [amount, tokenObj]);

  // Interest calculation (use direct APR for the period)
  const interest = useMemo(() => {
    return liquidity * currentApr;
  }, [liquidity, currentApr]);

  // Total repayment (liquidity + interest)
  const totalRepay = useMemo(() => liquidity + interest, [liquidity, interest]);

  function handleStake() {
    setIsStaking(true);
    setTimeout(() => setIsStaking(false), 900);
  }

  return (
    <DarkBackground>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md w-full mx-auto p-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-5 max-h-[80vh] overflow-y-auto">
            <div className="mt-4 grid grid-cols-1 gap-3">
              {/* Dropdown select */}
              <label className="block relative">
                <span className="text-sm font-medium text-white">
                  Select RWA Token
                </span>
                <button
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="mt-2 w-full flex justify-between items-center rounded-xl border border-white/20 px-4 py-3 bg-white/10 backdrop-blur-sm text-white"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-white">
                      {tokenObj.label.charAt(1)}
                    </div>
                    <span className="font-semibold">{tokenObj.label}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform text-white ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-20 mt-2 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg max-h-56 overflow-y-auto">
                    {tokens.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => {
                          setSelectedToken(t.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex items-center justify-between px-4 py-3 hover:bg-white/20 cursor-pointer text-white ${
                          selectedToken === t.id
                            ? "bg-white/20"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-white">
                            {t.label.charAt(1)}
                          </div>
                          <div>
                            <div className="font-semibold">{t.label}</div>
                            <div className="text-xs text-white/60">
                              {t.description}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium">
                          {Math.round(t.multiplier * 100)}%
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </label>

              {/* Days select */}
              <label className="block">
                <span className="text-sm font-medium text-white">
                  Lock Duration
                </span>
                <div className="mt-2 inline-flex rounded-lg overflow-hidden border border-white/20">
                  {daysOptions.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDays(d)}
                      className={`px-4 py-2 text-sm ${
                        selectedDays === d
                          ? "bg-white text-black"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
              </label>

              {/* Centered dynamic info */}
              <div className="text-center mt-3">
                <p className="text-sm font-medium text-white">
                  {Math.round(tokenObj.multiplier * 100)}% TVL,{" "}
                  {(currentApr * 100).toFixed(1)}% Return for {selectedDays} Days
                </p>
              </div>

              {/* Amount input */}
              <label className="mt-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-medium text-white">
                  Amount to stake (USD)
                </span>
                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/20 px-4 py-2 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60"
                  placeholder="Enter Amount e.g. $100"
                />
              </label>

              {/* Calculation Summary */}
              <div className="mt-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-white/80">
                    Liquidity Received ({Math.round(tokenObj.multiplier * 100)}% TVL)
                  </span>
                  <span className="font-mono text-white">
                    {liquidity.toFixed(2)} USDC
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="font-medium text-white/80">
                    Interest ({(currentApr * 100).toFixed(1)}% for {selectedDays} days)
                  </span>
                  <span className="font-mono text-white">
                    {interest.toFixed(2)} USDC
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-2 border-t border-white/20 pt-2">
                  <span className="font-semibold text-white">
                    Total Repayment
                  </span>
                  <span className="font-mono font-semibold text-indigo-400">
                    {totalRepay.toFixed(2)} USDC
                  </span>
                </div>
              </div>

              {/* Stake button */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={handleStake}
                  disabled={isStaking}
                  className="flex-1 rounded-xl py-2 font-semibold bg-indigo-600 text-white disabled:opacity-60 hover:bg-indigo-700 transition-colors"
                >
                  {isStaking ? "Staking..." : "Stake now"}
                </button>
                <button
                  onClick={() => {
                    setAmount("360");
                    setSelectedDays(daysOptions[1]);
                    setSelectedToken(tokens[0].id);
                  }}
                  className="px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DarkBackground>
  );
}
