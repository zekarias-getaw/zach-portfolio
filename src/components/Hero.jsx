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

    // 3D tilt effect
    const handleMouseMove = (e) => {
      if (nameRef.current && photoRef.current) {
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
    <section id="home" className="min-h-screen relative overflow-hidden cyber-grid digital-noise">
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
          className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-cyber-blue rounded-full opacity-30"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-3/4 right-1/3 w-4 h-4 border-2 border-neon-pink rounded-full opacity-30"
        />
        
        {/* Binary Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-cyber-blue text-xs opacity-40"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          {/* Cinematic Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center lg:text-left perspective-3d"
          >
            {/* Animated Title */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="text-cyber-blue neon-glow" size={24} />
                </motion.div>
                <p className="font-orbitron text-cyber-blue text-sm tracking-widest neon-glow">
                  {displayText}
                  <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                </p>
              </div>

              {/* Main Name with Glitch Effect */}
              <div ref={nameRef} className="transform-3d transition-transform duration-300">
                <motion.h1
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                  className="font-orbitron text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 glitch-text"
                  data-text="ZEKARIAS GETAW"
                >
                  <span className="text-cyber-white block">ZEKARIAS</span>
                  <span className="text-cyber-blue neon-glow block">GETAW</span>
                </motion.h1>
              </div>
            </motion.div>

            {/* Rotating Words */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mb-8"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentWordIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-rajdhani text-2xl text-cyber-white/80 italic"
                >
                  "Crafting {words[currentWordIndex]}"
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {[
                { number: '6+', label: 'YEARS' },
                { number: '50+', label: 'PROJECTS' },
                { number: '30+', label: 'CLIENTS' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center"
                >
                  <div className="font-orbitron text-cyber-blue text-2xl mb-1 neon-glow">
                    {stat.number}
                  </div>
                  <div className="font-rajdhani text-cyber-white/60 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button rounded-lg px-12 py-4 text-lg font-semibold text-center"
              >
                START PROJECT
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyber-blue text-cyber-blue font-orbitron font-bold py-4 px-8 rounded-lg hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 text-center"
              >
                VIEW WORK
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="flex flex-col sm:flex-row items-center gap-8 text-cyber-white/60"
            >
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-cyber-blue neon-glow" />
                <span className="font-rajdhani text-cyber-white">zekariasgetaw26@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-cyber-blue neon-glow" />
                <span className="font-rajdhani text-cyber-white">+251 994 681 535</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Cinematic Photo Section */}
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center lg:justify-end perspective-3d"
          >
            <div className="relative">
              {/* Hologram Container */}
              <motion.div
                ref={photoRef}
                whileHover={{ scale: 1.05 }}
                className="relative group transform-3d transition-transform duration-500"
              >
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-cyber-blue rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Main Photo Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-cyber-blue glass-effect shadow-2xl shadow-cyber-blue/30 hologram-container">
                  {/* Your Photo */}
                  <img 
                    src="/profile.jpg"
                    alt="Zekarias Getaw - Fullstack Developer"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hologram Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Scanning Effect */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyber-blue/10 to-transparent bg-[length:100%_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-14 h-14 glass-effect border border-cyber-blue rounded-full flex items-center justify-center shadow-2xl shadow-cyber-blue/50"
                >
                  <Cpu className="text-cyber-blue" size={20} />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-8 -left-8 w-16 h-16 glass-effect border border-neon-pink rounded-full flex items-center justify-center shadow-2xl shadow-neon-pink/50"
                >
                  <Terminal className="text-neon-pink" size={24} />
                </motion.div>
              </motion.div>

              {/* Status Indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.5, type: "spring" }}
                className="absolute bottom-6 right-6 glass-effect border border-cyber-blue rounded-full px-4 py-2 shadow-2xl shadow-cyber-blue/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full neon-glow animate-pulse"></div>
                  <span className="font-orbitron text-cyber-blue text-xs tracking-widest">AVAILABLE</span>
                </div>
              </motion.div>

              {/* Orbiting Tech Tags */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 border border-cyber-blue/30 rounded-full pointer-events-none"
              >
                {['REACT', 'NODE', 'TYPESCRIPT', 'MONGODB'].map((tech, index) => (
                  <div
                    key={tech}
                    className="absolute font-orbitron text-cyber-blue/60 text-xs"
                    style={{
                      transform: `rotate(${index * 90}deg) translateX(160px) rotate(-${index * 90}deg)`
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

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-cyber-blue neon-glow" size={24} />
          </motion.div>
          <p className="font-orbitron text-cyber-blue text-xs tracking-widest neon-glow">EXPLORE MORE</p>
        </div>
      </motion.div>

      {/* Audio Visualization Bars */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex justify-center gap-1 px-4">
        {[...Array(20)].map((_, i) => (
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
    </section>
  )
}

export default Hero