"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Settings } from "lucide-react";
import WalletConnect from "./WalletConnect";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [selectedRpc, setSelectedRpc] = useState("Helius RPC 1");
  const [customRpc, setCustomRpc] = useState("");

  const navLinks = [
    { name: "Borrow", href: "/borrow" },
    { name: "Lender", href: "/lender" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3 relative">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="XVaultFi Logo"
                className="rounded-lg"
              />
              <span className="text-white font-semibold text-lg tracking-wide">
                XVaultFi
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 ml-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSettingsOpen(true)}
              className="p-2 text-gray-300 hover:text-white transition-colors cursor-pointer active:scale-95"
            >
              <Settings size={22} />
            </button>
            <WalletConnect />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden border-t border-gray-800 bg-black/95 animate-slide-down relative z-40">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-gray-800 mt-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setSettingsOpen(true);
                }}
                className="flex items-center w-full px-5 py-3 text-gray-300 hover:text-white hover:bg-gray-900 transition-colors cursor-pointer active:scale-95"
              >
                <Settings size={18} className="mr-2" /> Settings
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* SETTINGS MODAL */}
      {settingsOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSettingsOpen(false)}
        >
          {/* Modal Box */}
          <div
            className="bg-[#0d0d0d] border border-gray-800 rounded-2xl shadow-xl w-[400px] text-gray-300 relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-800 px-5 py-3">
              <h2 className="text-lg font-semibold text-white">Settings</h2>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-5">
              {/* Default Currency */}
              <div>
                <p className="text-sm mb-2 text-gray-400">Default Currency</p>
                <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-3 py-2">
                  <Image src="/solana.png" alt="Solana" width={18} height={18} />
                  <span className="text-white text-sm font-medium">SOL</span>
                </div>
              </div>

              {/* Explorer */}
              <div>
                <p className="text-sm mb-2 text-gray-400">Preferred Explorer</p>
                <select
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none cursor-pointer"
                  defaultValue="Solscan"
                >
                  <option value="Solscan">Solscan</option>
                  <option value="SolanaFM">SolanaFM</option>
                  <option value="Explorer">Explorer</option>
                </select>
              </div>

              {/* RPC Endpoints */}
              <div>
                <p className="text-sm mb-2 text-gray-400">RPC Endpoint</p>
                <div className="space-y-2">
                  {[
                    { name: "Triton RPC Pool 1", ping: "75ms" },
                    { name: "Helius RPC 1", ping: "159ms" },
                    { name: "Triton RPC Pool 2", ping: "91ms" },
                  ].map((rpc) => (
                    <label
                      key={rpc.name}
                      className="flex justify-between items-center bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-800"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="rpc"
                          checked={selectedRpc === rpc.name}
                          onChange={() => setSelectedRpc(rpc.name)}
                          className="accent-green-500 cursor-pointer"
                        />
                        <span>{rpc.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">{rpc.ping}</span>
                    </label>
                  ))}

                  {/* Custom RPC */}
                  <div className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2 mb-2">
                      <input
                        type="radio"
                        name="rpc"
                        checked={selectedRpc === "Custom"}
                        onChange={() => setSelectedRpc("Custom")}
                        className="accent-green-500 cursor-pointer"
                      />
                      <span>Custom</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Custom RPC URL"
                      value={customRpc}
                      onChange={(e) => setCustomRpc(e.target.value)}
                      className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                    />
                    <button
                      type="button"
                      className="mt-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm transition cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
