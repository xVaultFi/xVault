"use client";
import { useState } from "react";
import { Wallet } from "lucide-react";

export default function Swap() {
  const [amount, setAmount] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9F3F2] bg-opacity-40">
      <div className="w-full  max-w-md rounded-3xl bg-white p-6 shadow-xl border border-gray-200">
        {/* Header */}
        <div className="mb-4 ">
          <p className="text-sm text-gray-600">Stake into</p>
          <div className="flex justify-between items-center mt-1">
            <span className="font-semibold text-gray-800 text-lg">
              xVault
            </span>
            <span className="text-sm text-green-600">10.5% Est. APY</span>
          </div>
        </div>

        {/* Amount Input */}
        <div className="border border-gray-200 rounded-2xl p-4 mb-4">
          <p className="text-gray-600 text-sm mb-1">Amount</p>
          <div className="flex justify-between items-center">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="w-full bg-transparent text-2xl font-semibold outline-none"
            />
            <div className="flex items-center gap-2">
              <img
                src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
                alt="USDC"
                className="w-6 h-6"
              />
              <span className="text-gray-700 font-semibold">USDC</span>
            </div>
          </div>
          <div className="text-right text-xs text-gray-500 mt-1">
            0 USDC <span className="text-blue-500 cursor-pointer">Max</span>
          </div>
        </div>

        {/* Receive Section */}
        <div className="border border-gray-200 rounded-2xl p-4 mb-4">
          <p className="text-gray-600 text-sm mb-1">Receive</p>
          <div className="flex justify-between items-center">
            <input
              type="text"
              value={amount ? (parseFloat(amount) * 0.97).toFixed(2) : "0"}
              readOnly
              className="w-full bg-transparent text-2xl font-semibold outline-none"
            />
            <div className="flex items-center gap-2">
              <img
                src="https://cryptologos.cc/logos/solana-sol-logo.png"
                alt="nALPHA"
                className="w-6 h-6"
              />
              <span className="text-gray-700 font-semibold">nALPHA</span>
            </div>
          </div>
          <div className="text-right text-xs text-blue-500 mt-1 cursor-pointer">
            Add to wallet
          </div>
        </div>

        {/* Details */}
        <div className="text-sm space-y-2 mb-5">
          <div className="flex justify-between">
            <span className="text-gray-500">Exchange</span>
            <span className="text-gray-800 flex items-center gap-1">
              <img
                src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
                alt="USDC"
                className="w-4 h-4"
              />
              1 → 0.971873 xVault
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Additional Rewards</span>
            <span className="text-green-600 font-medium">
              Earn Plume Points
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Protocol Fees</span>
            <span className="text-gray-800">Free for a limited time</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Redemption Terms</span>
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-600"
            >
              Subject to 10-day cooldown
            </a>
          </div>
        </div>

        {/* Approve Button */}
        <button className="w-full bg-gray-200 text-gray-600 font-semibold py-3 rounded-2xl cursor-not-allowed">
          Stake on xVault
        </button>

        {/* Footer */}
        <div className="flex justify-center items-center gap-2 mt-4 text-xs text-gray-500">
          <Wallet size={14} />
          <span>Institutional-grade financial and technical performance</span>
        </div>
      </div>
    </div>
  );
}
