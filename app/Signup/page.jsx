"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { User, Mail, Lock, ArrowRight } from 'lucide-react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black flex flex-col items-center justify-center p-4">
      {/* Logo and Brand Section */}
      <motion.div 
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4">
          <Image
            src="/logo.png" // Add your logo file in public folder
            alt="UniLib Logo"
            width={96}
            height={96}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 font-serif">
          UniLib
        </h1>
      </motion.div>

      {/* Form Container */}
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div 
            className={`relative group ${focusedField === 'name' ? 'scale-105' : ''}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-xl group-hover:bg-emerald-500/30 transition-all duration-300" />
            <div className="relative flex items-center bg-gray-950/50 backdrop-blur-md rounded-lg border-none p-4">
              <User className={`w-5 h-5 mr-3 transition-colors ${focusedField === 'name' ? 'text-emerald-400' : 'text-gray-400'}`} />
              <Input
                type="text"
                placeholder="Name"
                className="border-0 bg-transparent focus:ring-0 focus:outline-none text-emerald-50 placeholder:text-gray-500/50 placeholder:font-bold font-light w-full transition-all duration-300"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </motion.div>

          <motion.div 
            className={`relative group ${focusedField === 'email' ? 'scale-105' : ''}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-xl group-hover:bg-emerald-500/30 transition-all duration-300" />
            <div className="relative flex items-center bg-gray-950/50 backdrop-blur-md rounded-lg border-none p-4">
              <Mail className={`w-5 h-5 mr-3 transition-colors ${focusedField === 'email' ? 'text-emerald-400' : 'text-gray-400'}`} />
              <Input
                type="email"
                placeholder="Email"
                className="border-0 bg-transparent focus:ring-0 focus:outline-none text-emerald-50 placeholder:text-gray-500/50 placeholder:font-bold font-light w-full transition-all duration-300"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </motion.div>

          <motion.div 
            className={`relative group ${focusedField === 'password' ? 'scale-105' : ''}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-xl group-hover:bg-emerald-500/30 transition-all duration-300" />
            <div className="relative flex items-center bg-gray-950/50 backdrop-blur-md rounded-lg border-none p-4">
              <Lock className={`w-5 h-5 mr-3 transition-colors ${focusedField === 'password' ? 'text-emerald-400' : 'text-gray-400'}`} />
              <Input
                type="password"
                placeholder="Password"
                className="border-0 bg-transparent focus:ring-0 focus:outline-none text-emerald-50 placeholder:text-gray-500/50 placeholder:font-bold font-light w-full transition-all duration-300"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </motion.div>

          {/* Replace the navigation buttons with a single Register button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              type="submit"
              className="w-full bg-emerald-600/90 hover:bg-emerald-600 backdrop-blur-sm text-white py-6 rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/30"
            >
              <span>Register</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </form>
      </motion.div>

      <motion.div 
        className="flex justify-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link 
          href="/login"
          className="text-sm text-emerald-400/60 hover:text-emerald-400 transition-colors"
        >
          Already registered?
        </Link>
      </motion.div>
    </div>
  )
}

export default SignUp
