import type { Metadata } from "next";    // pages/_app.js or app/layout.tsx
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";

    // pages/_app.js or app/layout.tsx
    const spaceGrotesk = Space_Grotesk({
      subsets: ['latin'],
      variable: '--font-space-grotesk', // Optional: for use with CSS variables
      display: 'swap', // Optional: ensures text remains visible during font loading
    });

export const metadata: Metadata = {
  title: "xVaultFi - Secure your crypto",
  description: "Secure your crypto with xVaultFi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceGrotesk.variable} antialiased`}
      >
      <Navbar/>
        {children}
     
      </body>
    </html>
  );
}
