'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function PrivyProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider
      appId="cmhccilpa006xk00d3ge1xogc"
      config={{
        appearance: {
          theme: 'dark',
          accentColor: '#7c3aed',
          showWalletLoginFirst: true,
        },
        solanaClusters: [
          {
            name: 'mainnet-beta',
          },
        ],
        embeddedWallets: {
          solana: {
            createOnLogin: 'users-without-wallets',
          },
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
