"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Settings } from "lucide-react";
import WalletConnect from "./WalletConnect";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Borrow", href: "/borrow" },
    { name: "Lender", href: "/lender" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-black backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3">
        {/* LEFT SIDE - Logo + NavLinks */}
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

          {/* Desktop Menu */}
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

        {/* RIGHT SIDE - Settings + Connect Wallet */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-gray-300 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
          <WalletConnect/>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-black/90 animate-slide-down">
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
            <button className="flex items-center w-full px-5 py-3 text-gray-300 hover:text-white hover:bg-gray-900 transition-colors">
              <Settings size={18} className="mr-2" /> Settings
            </button>
            
           
          </div>
        </div>
      )}
    </nav>
  );
}
