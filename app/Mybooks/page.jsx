"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { BookOpen, CalendarDays, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

const MyBooks = () => {
  // Mock data - replace with actual data from your backend
  const borrowedBooks = [
    {
      id: 1,
      title: "Database Management Systems",
      author: "Raghu Ramakrishnan",
      borrowDate: "2024-01-15",
      dueDate: "2024-02-15",
      coverImage: "/book1.jpg",
      isOverdue: false
    },
    {
      id: 2,
      title: "Operating System Concepts",
      author: "Abraham Silberschatz",
      borrowDate: "2024-01-01",
      dueDate: "2024-02-01",
      coverImage: "/book2.jpg",
      isOverdue: true
    }
  ]

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
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-emerald-400">My Books</h1>
          <span className="text-sm text-emerald-300/70">{borrowedBooks.length} books borrowed</span>
        </div>

        <div className="space-y-4">
          {borrowedBooks.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/20 backdrop-blur-xl rounded-xl p-4 border border-emerald-500/20"
            >
              <div className="flex gap-4">
                <div className="w-20 h-28 relative rounded-lg overflow-hidden bg-gray-800">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-emerald-300 mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{book.author}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-gray-400">Due: {book.dueDate}</span>
                    </div>
                    
                    {book.isOverdue && (
                      <div className="flex items-center gap-2 text-red-400">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-xs">Overdue</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-800">
                <Button
                  variant="outline"
                  className="w-full border-emerald-500/20 hover:bg-emerald-500/10 text-emerald-400"
                >
                  Renew Book
                </Button>
              </div>
            </motion.div>
          ))}

          {borrowedBooks.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-emerald-400/30 mx-auto mb-4" />
              <p className="text-gray-400">No books borrowed yet</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default MyBooks
