import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ArrowDown, Zap, Cpu, Terminal } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const words = ['INNOVATION', 'TECHNOLOGY', 'CREATIVITY', 'CODE', 'DESIGN']
  const fullText = 'FULLSTACK DEVELOPER'

  useEffect(() => {
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          const rotateWords = setInterval(() => {
            setCurrentWordIndex(prev => (prev + 1) % words.length)
          }, 2000)
          return () => clearInterval(rotateWords)
        }, 1000)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden cyber-grid digital-noise section-responsive">
      <div className="container-responsive relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Text Content - Mobile First */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="text-cyber-blue neon-glow" size={18} />
                </motion.div>
                <p className="font-orbitron text-cyber-blue text-sm tracking-wider neon-glow">
                  {displayText}
                  <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                </p>
              </div>

              {/* Responsive Name */}
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyber-white mb-4 glitch-text"
                data-text="ZEKARIAS GETAW"
              >
                <span className="text-cyber-white block">ZEKARIAS</span>
                <span className="text-cyber-blue neon-glow block cyber-text-gradient">GETAW</span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mb-6"
            >
              <motion.p
                className="font-rajdhani text-cyber-white/80 text-base sm:text-lg italic"
              >
                "Crafting {words[currentWordIndex]}"
              </motion.p>
            </motion.div>

            {/* Responsive Stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-6"
            >
              {[
                { number: '6+', label: 'YEARS' },
                { number: '50+', label: 'PROJECTS' },
                { number: '30+', label: 'CLIENTS' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="font-orbitron text-cyber-blue text-lg sm:text-xl mb-1 neon-glow">
                    {stat.number}
                  </div>
                  <div className="font-rajdhani text-cyber-white/60 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Responsive Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-6 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button rounded-lg px-6 py-3 text-sm text-center"
              >
                START PROJECT
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyber-blue text-cyber-blue font-orbitron py-3 px-6 rounded-lg text-sm text-center hover:bg-cyber-blue hover:text-cyber-black transition-all"
              >
                VIEW WORK
              </motion.a>
            </motion.div>

            {/* Responsive Contact Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-cyber-blue neon-glow" />
                <span className="font-rajdhani text-cyber-white">zekariasgetaw26@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cyber-blue neon-glow" />
                <span className="font-rajdhani text-cyber-white">+251 994 681 535</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Responsive Photo Section */}
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {/* Responsive Photo Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-cyber-blue glass-effect shadow-lg">
                  <img 
                    src="/profile.jpg"
                    alt="Zekarias Getaw - Fullstack Developer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Tech Icons - Hide on mobile */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="hidden sm:block absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 glass-effect border border-cyber-blue rounded-full flex items-center justify-center"
                >
                  <Cpu className="text-cyber-blue" size={16} />
                </motion.div>
              </motion.div>

              {/* Status Badge - Responsive */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: "spring" }}
                className="absolute -bottom-2 -right-2 glass-effect border border-cyber-blue rounded-full px-2 py-1 sm:px-3 sm:py-1"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full neon-glow animate-pulse"></div>
                  <span className="font-orbitron text-cyber-blue text-xs tracking-wider">AVAILABLE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hide on mobile when scrolling */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-1">
          <ArrowDown className="text-cyber-blue neon-glow" size={18} />
          <p className="font-orbitron text-cyber-blue text-xs tracking-wider">EXPLORE</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero