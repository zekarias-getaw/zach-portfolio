import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-4"
        >
          <div className="w-16 h-16 cyber-accent rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="font-orbitron text-cyber-black text-lg">ZG</span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-orbitron text-cyber-white text-xl mb-4"
        >
          ZEKARIAS GETAW
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-cyber-gray rounded-full mx-auto mb-2 overflow-hidden">
          <motion.div
            className="h-full bg-cyber-blue rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Percentage */}
        <p className="font-orbitron text-cyber-blue text-sm">{progress}%</p>
      </div>
    </div>
  )
}

export default LoadingScreen