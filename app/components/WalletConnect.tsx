"use client";

import { usePrivy, useWallets } from "@privy-io/react-auth";

export default function WalletConnect() {
  const { login, logout, ready, authenticated } = usePrivy();
  const { wallets } = useWallets();

  if (!ready) return <p className="text-gray-400">Loading...</p>;

  if (!authenticated)
    return (
      <button
        onClick={login}
        className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 text-white"
      >
        Connect Wallet
      </button>
    );

  const solanaWallet = wallets.find((w) => (w as any)?.chainType === "solana") || wallets[0];

  return (
    <div className="flex items-center gap-3">
      <p className="text-gray-300 text-sm">
        {solanaWallet?.address.slice(0, 4)}...{solanaWallet?.address.slice(-4)}
      </p>
      <button
        onClick={logout}
        className="px-3 py-1 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800"
      >
        Disconnect
      </button>
    </div>
  );
}
