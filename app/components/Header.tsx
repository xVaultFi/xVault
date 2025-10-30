"use client"

import Link from "next/link"
import WalletConnect from "./WalletConnect"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          xVault
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-2">
        <Link
          href="/lender"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Lend
        </Link>
        <Link
          href="/borrow"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Borrow
        </Link>
        <Link
          href="/dashboard"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Dashboard
        </Link>
      </nav>

      {/* Wallet Connect */}
      <div className="flex items-center">
        <WalletConnect />
      </div>
    </header>
  )
}