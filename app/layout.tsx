import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import { Instrument_Serif } from 'next/font/google';
import "./globals.css";
import Providers from "./providers/PrivyProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "xVaultFi - Real-World Yield on Solana",
  description: "Earn stable yield or borrow against tokenized real-world assets on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
