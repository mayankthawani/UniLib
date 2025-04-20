"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'  // Fixed import
import { Users, BookOpen, Search, Home, Map } from 'lucide-react'
import { Button } from "@/components/ui/button"

const SeatsPage = () => {
  const [selectedFloor, setSelectedFloor] = useState(1)
  
  const floors = [
    { floor: 1, totalSeats: 30, occupiedSeats: 20 },
    { floor: 2, totalSeats: 25, occupiedSeats: 5 },
    { floor: 3, totalSeats: 35, occupiedSeats: 35 }
  ]

  const getStatusMessage = (total, occupied) => {
    const availablePercentage = ((total - occupied) / total) * 100
    if (occupied === total) return {
      message: "Sorry, this floor is full",
      color: "text-red-400",
      bgColor: "bg-red-500/10"
    }
    if (availablePercentage > 50) return {
      message: "Don't worry, it's quite empty",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10"
    }
    return {
      message: "You can find seats if you're fast",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-emerald-950 to-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="UniLib Logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
              UniLib
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-base text-emerald-100">Mayank</span>
          </div>
        </div>
      </header>

      <main className="pt-24 px-5 pb-28">
        {/* Floor Selection */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {floors.map((floor) => (
            <button
              key={floor.floor}
              onClick={() => setSelectedFloor(floor.floor)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                selectedFloor === floor.floor
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20'
                  : 'bg-gray-900/50 text-gray-400 border border-gray-800'
              }`}
            >
              Floor {floor.floor}
            </button>
          ))}
        </div>

        {floors.map((floor) => floor.floor === selectedFloor && (
          <motion.div
            key={floor.floor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {/* Available Seats Card */}
            <div className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-emerald-500/20">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-emerald-400">
                  {floor.totalSeats - floor.occupiedSeats}
                  <span className="text-lg text-gray-400 ml-2">seats available</span>
                </div>
                <div className="text-sm text-gray-400">
                  Total Seats: {floor.totalSeats} | Occupied: {floor.occupiedSeats}
                </div>
              </div>
            </div>

            {/* Status Message */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className={`p-4 rounded-xl ${getStatusMessage(floor.totalSeats, floor.occupiedSeats).bgColor}`}
            >
              <p className={`text-center text-lg font-medium ${getStatusMessage(floor.totalSeats, floor.occupiedSeats).color}`}>
                {getStatusMessage(floor.totalSeats, floor.occupiedSeats).message}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </main>
      <nav className="fixed bottom-0 w-full bg-black/30 backdrop-blur-xl border-t border-white/5">
        <div className="flex justify-around items-center py-4">
          {[
            { icon: Home, label: 'Home', href: '/Dashboard' },
            { icon: Users, label: 'Seats', href: '/seats' },
            { icon: BookOpen, label: 'Books', href: '/Mybooks' },
            { icon: Search, label: 'Search', href: '/Searchbooks' },
            { icon: Map, label: 'Map', href: '/map' },
          ].map((item, i) => (
            <Link href={item.href} key={i}>
              <div className="flex flex-col items-center py-1 px-4">
                <item.icon className="w-7 h-7 mb-2 text-gray-400" />
                <span className="text-xs text-gray-400">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default SeatsPage
