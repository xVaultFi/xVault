"use client"

import type React from "react"

interface DarkBackgroundProps {
  children: React.ReactNode
}

export default function DarkBackground({ children }: DarkBackgroundProps) {
  return (
    <div className="h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {children}
    </div>
  )
}