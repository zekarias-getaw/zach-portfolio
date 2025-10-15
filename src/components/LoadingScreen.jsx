import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState('INITIALIZING SYSTEM...')

  useEffect(() => {
    const texts = [
      'INITIALIZING SYSTEM...',
      'LOADING ASSETS...', 
      'CALIBRATING INTERFACE...',
      'ESTABLISHING CONNECTION...',
      'SYSTEM READY...'
    ]

    let currentIndex = 0
    const textInterval = setInterval(() => {
      setCurrentText(texts[currentIndex])
      currentIndex = (currentIndex + 1) % texts.length
    }, 800)

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          clearInterval(textInterval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-cyber-black relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-cyber-blue text-sm"
            animate={{
              y: [0, 100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-12"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-4 border-cyber-blue border-t-transparent rounded-full mx-auto mb-6 shadow-2xl shadow-cyber-blue/50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-20 h-20 bg-cyber-blue rounded-full flex items-center justify-center shadow-2xl shadow-cyber-blue/50"
                >
                  <span className="font-orbitron text-cyber-black text-2xl font-black">ZG</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Animated Text */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <motion.h1
              className="font-orbitron text-4xl md:text-6xl text-cyber-white mb-4 glitch-text"
              data-text="ZEKARIAS GETAW"
            >
              ZEKARIAS GETAW
            </motion.h1>
            <motion.p
              className="font-orbitron text-cyber-blue text-sm tracking-widest"
            >
              {currentText}
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ duration: 0.5 }}
            className="relative h-2 bg-cyber-gray rounded-full mx-auto mb-4 overflow-hidden"
          >
            <motion.div
              className="h-full bg-cyber-blue rounded-full shadow-lg shadow-cyber-blue/50"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </motion.div>

          {/* Progress Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-orbitron text-cyber-blue text-sm"
          >
            {progress}%
          </motion.p>

          {/* Loading Dots */}
          <motion.div
            className="flex justify-center gap-2 mt-6"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 bg-cyber-blue rounded-full"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scanlines */}
      <div className="scanlines absolute inset-0 pointer-events-none"></div>
    </div>
  )
}

export default LoadingScreen