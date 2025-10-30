"use client"

import Link from "next/link"

export default function HeroContent() {
  return (
    <main className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="text-center max-w-4xl px-6">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative mx-auto"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-linear-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">🚀 Real-World Assets on Solana</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4 text-center">
          <span className="font-medium italic instrument">Real-World</span> Yield
          <br />
          <span className="font-light tracking-tight text-white">on Solana</span>
        </h1>

        {/* Description */}
        <p className="text-sm font-light text-white/70 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
          Earn stable yield or borrow against tokenized real-world assets.
          Powered by decentralized liquidity pools and transparent on-chain governance.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/lender"
            className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
          >
            Start Lending
          </Link>
          <Link
            href="/borrow"
            className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer"
          >
            Borrow Assets
          </Link>
        </div>
      </div>
    </main>
  )
}