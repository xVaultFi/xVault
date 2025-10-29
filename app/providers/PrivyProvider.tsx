'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId="cmhccilpa006xk00d3ge1xogc"
      clientId="4mKu2TUekDjYqXPmUg5KbYZNLEav7S6151S4EiHPbzh2kRWNPBVUWaUa1BbVnyGw9AQ3dqZMifh9yyqZsCfd1kFj"
      config={{
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          solana: {
            createOnLogin: 'users-without-wallets'
          }
        }
      }}
    >
      {children}
    </PrivyProvider>
  );
}