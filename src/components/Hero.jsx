import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ArrowDown, Zap, Cpu, Terminal } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const nameRef = useRef(null)
  const photoRef = useRef(null)

  const words = ['INNOVATION', 'TECHNOLOGY', 'CREATIVITY', 'CODE', 'DESIGN']
  const fullText = 'FULLSTACK DEVELOPER'

  useEffect(() => {
    // Typewriter effect for title
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        // Start word rotation
        setTimeout(() => {
          const rotateWords = setInterval(() => {
            setCurrentWordIndex(prev => (prev + 1) % words.length)
          }, 2000)
          return () => clearInterval(rotateWords)
        }, 1000)
      }
    }, 100)

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    // 3D tilt effect - Only on desktop
    const handleMouseMove = (e) => {
      if (window.innerWidth > 1024 && nameRef.current && photoRef.current) {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        
        const x = (clientX / innerWidth - 0.5) * 20
        const y = (clientY / innerHeight - 0.5) * 20
        
        nameRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
        photoRef.current.style.transform = `perspective(1000px) rotateY(${-x}deg) rotateX(${y}deg) translateZ(50px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden cyber-grid digital-noise section-responsive">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Tech Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-cyber-blue rounded-full opacity-30 hidden sm:block"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-3/4 right-1/3 w-4 h-4 border-2 border-neon-pink rounded-full opacity-30 hidden sm:block"
        />
        
        {/* Binary Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-cyber-blue text-xs opacity-40 hidden sm:block"
            animate={{
              y: [0, -100, 0],
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

      <div className="container-responsive relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Cinematic Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Animated Title */}
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

              {/* Main Name with Glitch Effect */}
              <div ref={nameRef} className="transform-3d transition-transform duration-300 hidden lg:block">
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
              </div>

              {/* Mobile Name (without 3D) */}
              <div className="lg:hidden">
                <motion.h1
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="font-orbitron text-2xl sm:text-3xl md:text-4xl text-cyber-white mb-4"
                >
                  <span className="text-cyber-white block">ZEKARIAS</span>
                  <span className="text-cyber-blue neon-glow block cyber-text-gradient">GETAW</span>
                </motion.h1>
              </div>
            </motion.div>

            {/* Rotating Words */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentWordIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-rajdhani text-cyber-white/80 text-base sm:text-lg italic"
                >
                  "Crafting {words[currentWordIndex]}"
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Stats Grid */}
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

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-6 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button rounded-lg px-6 py-3 text-sm text-center"
              >
                START PROJECT
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyber-blue text-cyber-blue font-orbitron py-3 px-6 rounded-lg text-sm text-center hover:bg-cyber-blue hover:text-cyber-black transition-all"
              >
                VIEW WORK
              </motion.a>
            </motion.div>

            {/* Contact Info */}
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

          {/* Cinematic Photo Section */}
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Hologram Container */}
              <motion.div
                ref={photoRef}
                whileHover={{ scale: 1.02 }}
                className="relative group perspective-3d hidden lg:block"
              >
                {/* Outer Glow */}
                <div className="absolute -inset-3 bg-cyber-blue rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500 hidden sm:block"></div>
                
                {/* Main Photo Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-cyber-blue glass-effect shadow-lg shadow-cyber-blue/30 hologram-container">
                  {/* Your Photo */}
                  <img 
                    src="/profile.jpg"
                    alt="Zekarias Getaw - Fullstack Developer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Hologram Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Scanning Effect */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyber-blue/10 to-transparent bg-[length:100%_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 glass-effect border border-cyber-blue rounded-full flex items-center justify-center shadow-lg shadow-cyber-blue/50 hidden sm:block"
                >
                  <Cpu className="text-cyber-blue" size={16} />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-10 h-10 glass-effect border border-neon-pink rounded-full flex items-center justify-center shadow-lg shadow-neon-pink/50 hidden sm:block"
                >
                  <Terminal className="text-neon-pink" size={18} />
                </motion.div>
              </motion.div>

              {/* Mobile Photo (Simplified) */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group lg:hidden"
              >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-cyber-blue glass-effect shadow-lg">
                  <img 
                    src="/profile.jpg"
                    alt="Zekarias Getaw - Fullstack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Status Indicator */}
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

              {/* Orbiting Tech Tags - Desktop Only */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border border-cyber-blue/30 rounded-full pointer-events-none hidden lg:block"
              >
                {['REACT', 'NODE', 'TYPESCRIPT', 'MONGODB'].map((tech, index) => (
                  <div
                    key={tech}
                    className="absolute font-orbitron text-cyber-blue/60 text-xs"
                    style={{
                      transform: `rotate(${index * 90}deg) translateX(100px) rotate(-${index * 90}deg)`
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Audio Visualization Bars - Desktop Only */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex justify-center gap-1 px-4 hidden sm:flex">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: [2, Math.random() * 20 + 5, 2],
            }}
            transition={{
              duration: Math.random() * 1 + 0.5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="w-1 bg-cyber-blue rounded-full"
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-1">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-cyber-blue neon-glow" size={18} />
          </motion.div>
          <p className="font-orbitron text-cyber-blue text-xs tracking-wider neon-glow">EXPLORE MORE</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero