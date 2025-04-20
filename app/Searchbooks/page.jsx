"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Search, BookOpen, ArrowLeft } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Home, Users, Map } from 'lucide-react'
import Link from 'next/link'


const SearchBooks = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  // Mock data - replace with actual API call
  const books = [
    { id: 1, title: 'Database Management Systems', author: 'Raghu Ramakrishnan', available: true },
    { id: 2, title: 'Operating System Concepts', author: 'Abraham Silberschatz', available: false },
    // Add more books...
  ]

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-emerald-950 to-gray-900">
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
        {/* Search Section */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="w-5 h-5 text-emerald-400" />
          </div>
          <Input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-6 bg-black/20 border-emerald-500/20 focus:border-emerald-500/50 rounded-xl text-emerald-50 placeholder:text-gray-500"
          />
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          {filteredBooks.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-emerald-300 mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-400">{book.author}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  book.available 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {book.available ? 'Available' : 'Borrowed'}
                </span>
              </div>
            </motion.div>
          ))}

          {searchQuery && filteredBooks.length === 0 && (
            <div className="text-center text-gray-400 py-8">
              No books found matching your search.
            </div>
          )}
        </div>
      </main>
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
  )
}

export default SearchBooks
