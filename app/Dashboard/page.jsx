"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BookOpen, MapPin, Search, Users, Home, Menu, Map, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from 'next/link'


const Dashboard = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-emerald-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient spheres */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/4 -right-4 w-96 h-96 bg-teal-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-green-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(17,24,39,1))] opacity-70" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Mobile-optimized header */}
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
          {/* Enlarged Quick Actions */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-5 text-emerald-400">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  title: 'Check Seats', 
                  icon: Users, 
                  gradient: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
                  iconGradient: 'from-emerald-400 to-teal-300',
                  desc: 'Find empty seats',
                  border: 'border-emerald-500/20',
                  link: '/seats'
                },
                { 
                  title: 'Find Books', 
                  icon: Search, 
                  gradient: 'from-teal-500/20 via-teal-500/10 to-transparent',
                  iconGradient: 'from-teal-400 to-emerald-300',
                  desc: 'Search collection',
                  border: 'border-teal-500/20',
                  link: '/Searchbooks'
                },
                { 
                  title: 'My Books', 
                  icon: BookOpen, 
                  gradient: 'from-emerald-400/20 via-emerald-400/10 to-transparent',
                  iconGradient: 'from-emerald-300 to-teal-400',
                  desc: 'View borrowed',
                  border: 'border-emerald-400/20',
                  link: '/Mybooks'
                 
                },
                { 
                  title: 'Library Map', 
                  icon: MapPin, 
                  gradient: 'from-teal-400/20 via-teal-400/10 to-transparent',
                  iconGradient: 'from-teal-300 to-emerald-400',
                  desc: 'Navigate floors',
                  border: 'border-teal-400/20',
                  link: '/Library-map'
                },
              ].map((item, i) => (
                <Link href={item.link} key={i}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "flex flex-col items-start p-6 rounded-2xl relative overflow-hidden group card-hover-effect",
                      "bg-gray-950/50 backdrop-blur-xl",
                      `border ${item.border}`,
                      "transition-all duration-300 w-full"
                    )}
                  >
                    <div className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      `bg-gradient-to-br ${item.gradient}`
                    )} />
                    <div className="relative z-10 w-full">
                      <div className={cn(
                        "bg-gradient-to-br w-16 h-16 rounded-xl flex items-center justify-center mb-4",
                        item.iconGradient
                      )}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white/90">{item.title}</h3>
                      <p className="text-sm text-emerald-300/70">{item.desc}</p>
                    </div>
                  </motion.div>
                </Link>
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

        {/* Enlarged Bottom Navigation */}
         <nav className="fixed bottom-0 w-full bg-black/30 backdrop-blur-xl border-t border-white/5">
                  <div className="flex justify-around items-center py-4">
                    {[
                      { icon: Home, label: 'Home', link:'/Dashboard' },
                      { icon: Users, label: 'Seats', link:'/seats' },
                      { icon: BookOpen, label: 'Books', link:'Mybooks' },
                      { icon: Search, label: 'Search' , link:'/Searchbooks' },
        
                      { icon: Map, label: 'Map', link:'/Library-map' },
                     
                    ].map((item, i) => (
                      <Link href={item.link} key={i}>
        
                      <motion.button
                        key={i}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center py-1 px-4"
                      >
                        <item.icon className="w-7 h-7 mb-2 text-gray-400" />
                        <span className="text-xs text-gray-400">{item.label}</span>
                      </motion.button>
                      </Link>
                    ))}
                  </div>
                </nav>
      </div>
    </div>
  )
}

export default Dashboard
