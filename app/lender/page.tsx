"use client";
import React, { useState, useMemo } from "react";
import Header from "@/app/components/Header";
import ShaderBackground from "@/app/components/ShaderBackground";

export default function RwaLenderCard() {
  const daysOptions = [7, 15, 30] as const;

  const aprMap: Record<(typeof daysOptions)[number], number> = {
    7: 0.05,
    15: 0.07,
    30: 0.1,
  };

  const [selectedDays, setSelectedDays] = useState<(typeof daysOptions)[number]>(
    daysOptions[1]
  );
  const [amount, setAmount] = useState("500");
  const [isStaking, setIsStaking] = useState(false);

  const currentApr = aprMap[selectedDays];

  const reward = useMemo(() => {
    const amt = parseFloat(amount) || 0;
    return amt * currentApr;
  }, [amount, currentApr]);

  const totalReturn = useMemo(() => {
    return parseFloat(amount || "0") + reward;
  }, [amount, reward]);

  function handleStake() {
    setIsStaking(true);
    setTimeout(() => setIsStaking(false), 900);
  }

  return (
    <ShaderBackground>
      <Header />
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-md mx-auto p-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-5">
            <div className="mt-4 grid grid-cols-1 gap-3">
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
                      className={`px-4 py-2 text-sm ${selectedDays === d
                          ? "bg-white text-black"
                          : "bg-white/10 text-white"
                        }`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
              </label>

              {/* APR Info */}
              <div className="text-center mt-3">
                <p className="text-sm font-medium text-white">
                  {(currentApr * 100).toFixed(1)}% Yield for {selectedDays} Days
                </p>
              </div>

              {/* Amount input with USDC icon */}
              <label className="block">
                <span className="text-sm font-medium text-white">
                  Amount to Lend
                </span>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 bg-white/10 backdrop-blur-sm">
                  <input
                    type="text"
                    inputMode="decimal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white placeholder:text-white/60"
                    placeholder="Enter Amount e.g. 500"
                  />
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
                    $
                  </div>
                </div>
              </label>

              {/* Summary */}
              <div className="mt-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-white/80">
                    Principal
                  </span>
                  <span className="font-mono text-white">
                    {parseFloat(amount || "0").toFixed(2)} USDC
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="font-medium text-white/80">
                    Earned Interest ({(currentApr * 100).toFixed(1)}%)
                  </span>
                  <span className="font-mono text-white">
                    {reward.toFixed(2)} USDC
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-2 border-t border-white/20 pt-2">
                  <span className="font-semibold text-white">
                    Total Return
                  </span>
                  <span className="font-mono font-semibold text-green-400">
                    {totalReturn.toFixed(2)} USDC
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between px-4 rounded-lg">
                  <p className="text-white/80">Exchange</p>
                  <p className="text-indigo-400 font-medium">1 usdc - 1 usdc</p>
                </div>

                <div className="flex justify-between px-4 rounded-lg">
                  <p className="text-white/80">Additional Rewards</p>
                  <p className="text-purple-400 font-medium">Earn XVaultFi Coins</p>
                </div>

                <div className="flex justify-between px-4 rounded-lg">
                  <p className="text-white/80">Protocol Fees</p>
                  <p className="text-green-400 font-medium">Free for a limited time</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={handleStake}
                  disabled={isStaking}
                  className="flex-1 rounded-xl py-2 font-semibold bg-green-600 text-white disabled:opacity-60 hover:bg-green-700 transition-colors"
                >
                  {isStaking ? "Depositing..." : "Deposit USDC"}
                </button>
                <button
                  onClick={() => {
                    setAmount("500");
                    setSelectedDays(daysOptions[1]);
                  }}
                  className="px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  Reset
                </button>
              </div>

              <div className="text-xs text-center text-white/60 mt-3">
                Your funds will be locked for the selected duration. Interest will be automatically added to your wallet at maturity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShaderBackground>
  );
}
