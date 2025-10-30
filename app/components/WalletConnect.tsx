"use client";

import { usePrivy, useWallets } from "@privy-io/react-auth";

export default function WalletConnect() {
  const { login, logout, ready, authenticated } = usePrivy();
  const { wallets } = useWallets();

  if (!ready) return <p className="text-white/60 text-xs">Loading...</p>;

  if (!authenticated)
    return (
      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button
          onClick={login}
          className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
        >
          Connect Wallet
        </button>
      </div>
    );

  const solanaWallet = wallets.find((w) => (w as any)?.chainType === "solana") || wallets[0];

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-full">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span className="text-white text-xs font-light">
          {solanaWallet?.address.slice(0, 4)}...{solanaWallet?.address.slice(-4)}
        </span>
      </div>
      <button
        onClick={logout}
        className="px-3 py-1 border border-white/30 rounded-full text-white/80 hover:bg-white/10 text-xs font-light transition-all duration-200"
      >
        Disconnect
      </button>
    </div>
  );
}
