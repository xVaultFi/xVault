'use client';

import { usePrivy, useWallets } from '@privy-io/react-auth';

export default function TestPrivy() {
  const { ready, authenticated, login, logout } = usePrivy();
  const { wallets } = useWallets();

  if (!ready) return <p className="text-gray-400">Loading Privy...</p>;

  if (!authenticated)
    return (
      <button
        onClick={login}
        className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 text-white"
      >
        Connect Wallet
      </button>
    );

  const wallet = wallets?.[0];

  return (
    <div className="flex flex-col items-center gap-2 text-gray-300">
      <p>
        Connected: {wallet?.address.slice(0, 4)}...
        {wallet?.address.slice(-4)}
      </p>
      <button
        onClick={logout}
        className="px-3 py-1 border border-gray-600 rounded-lg hover:bg-gray-800"
      >
        Disconnect
      </button>
    </div>
  );
}
