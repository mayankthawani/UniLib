"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BookOpen, MapPin, Search, Users, Home, Menu, Map, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

const Dashboard = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Content Container with Glass Effect */}
      <div className="relative z-10">
        {/* Header - updated with stronger glass effect */}
        <header className="fixed top-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/5 z-50">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="UniLib Logo" width={32} height={32} className="rounded-full" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
                UniLib
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/50 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-emerald-100">Mayank</span>
            </div>
          </div>
        </header>

        <main className="pt-20 px-4 pb-24">
          {/* Quick Actions - updated with glass morphism */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-emerald-400">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Check Seats', icon: Users, color: 'emerald', desc: 'Find empty seats' },
                { title: 'Find Books', icon: Search, color: 'blue', desc: 'Search collection' },
                { title: 'My Books', icon: BookOpen, color: 'purple', desc: 'View borrowed' },
                { title: 'Library Map', icon: MapPin, color: 'pink', desc: 'Navigate floors' },
              ].map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(20, 20, 20, 0.8)" }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "flex flex-col items-start p-4 rounded-2xl",
                    "bg-black/20 backdrop-blur-xl border border-white/5",
                    "hover:border-emerald-500/20 transition-all duration-200",
                    "shadow-[0_0_1px_1px_rgba(0,0,0,0.1)]"
                  )}
                >
                  <item.icon className="w-6 h-6 mb-3 text-emerald-400" />
                  <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.button>
              ))}
            </div>
          </section>

          {/* Floor Status - updated with glass morphism */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-emerald-400">Floor Status</h2>
              <button className="text-xs text-emerald-400 flex items-center">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { floor: '1st Floor', seats: 15, status: 'Moderate' },
                { floor: '2nd Floor', seats: 8, status: 'Quiet' },
                { floor: '3rd Floor', seats: 25, status: 'Available' },
              ].map((floor, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(20, 20, 20, 0.8)" }}
                  className="bg-black/20 backdrop-blur-xl rounded-xl p-4 border border-white/5 hover:border-emerald-500/20 transition-all duration-200"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium mb-1">{floor.floor}</h3>
                      <p className="text-xs text-gray-400">{floor.seats} seats available</p>
                    </div>
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      floor.status === 'Available' ? "bg-emerald-500/20 text-emerald-400" :
                      floor.status === 'Moderate' ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-blue-500/20 text-blue-400"
                    )}>
                      {floor.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        {/* Navigation - updated with stronger glass effect */}
        <nav className="fixed bottom-0 w-full bg-black/30 backdrop-blur-xl border-t border-white/5">
          <div className="flex justify-around items-center py-2">
            {[
              { icon: Home, label: 'Home' },
              { icon: Users, label: 'Seats' },
              { icon: BookOpen, label: 'Books' },
              { icon: Map, label: 'Map' },
              { icon: Menu, label: 'More' },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center py-1 px-3"
              >
                <item.icon className="w-5 h-5 mb-1 text-gray-400" />
                <span className="text-[10px] text-gray-400">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Dashboard
