"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-white flex flex-col items-center justify-between">
          {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-6 py-20 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#B700FF] to-green-400 bg-clip-text text-transparent mb-4"
        >
          Real-World Yield on Solana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-slate-400 text-lg mb-8"
        >
          Earn stable yield or borrow against tokenized real-world assets.  
          Powered by decentralized liquidity pools and transparent on-chain governance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
        >
          <Link
            href="/lender"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl text-sm font-semibold transition"
          >
            Start Lending
          </Link>
          <Link
            href="/borrow"
            className="bg-[#1a1f25] hover:bg-[#232932] border border-[#2c3139] px-6 py-3 rounded-xl text-sm font-semibold transition"
          >
            Borrow Assets
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#1c2027] py-4 text-center text-xs text-slate-500">
        Built with 💜 on Solana •  © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
