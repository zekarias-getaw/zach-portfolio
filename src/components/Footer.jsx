import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Cpu, Satellite, Zap, Rocket } from 'lucide-react'
import { useRef } from 'react'

const Footer = () => {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, threshold: 0.1 })

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zekarias-getaw', label: 'GitHub Profile' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn Network' },
    { icon: Mail, href: 'mailto:zekariasgetaw26@gmail.com', label: 'Email Contact' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={footerRef} className="relative overflow-hidden border-t border-cyber-blue/20 cyber-grid">
      <div className="container-responsive py-12 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8"
        >
          {/* Brand Identity - Fixed spacing */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                className="relative"
              >
                <div className="w-12 h-12 cyber-accent rounded-full flex items-center justify-center shadow-lg shadow-cyber-blue/50 cyber-pulse">
                  <span className="font-orbitron text-cyber-black text-base font-black">ZG</span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 border-2 border-cyber-blue rounded-full opacity-50"
                />
              </motion.div>
              <div className="flex flex-col items-center md:items-start">
                <p className="font-orbitron text-cyber-white text-lg tracking-wider">ZEKARIAS GETAW</p>
                <p className="font-rajdhani text-cyber-blue text-sm tracking-wider">FULLSTACK DEVELOPER</p>
              </div>
            </div>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="font-rajdhani text-cyber-white/60 text-sm text-center md:text-left"
            >
              Crafting digital experiences since {currentYear - 6}
            </motion.p>
          </motion.div>

          {/* Social Links with Hologram Effect */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.3, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.6, type: "spring" }}
                className="relative group"
              >
                <div className="w-12 h-12 glass-effect border border-cyber-blue rounded-xl flex items-center justify-center text-cyber-blue hover:text-cyber-white transition-all duration-300 shadow-lg shadow-cyber-blue/30 hologram-container">
                  <social.icon size={20} />
                </div>
                
                {/* Hover Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 glass-effect border border-cyber-blue rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <p className="font-orbitron text-cyber-blue text-xs whitespace-nowrap">
                    {social.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Mission Statement - Fixed spacing */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center md:text-right"
          >
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="font-rajdhani text-cyber-white/60 text-sm flex items-center justify-center md:justify-end gap-2 mb-3"
            >
              <span>CRAFTED WITH</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.4, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.span>
              <span>BY ZEKARIAS GETAW</span>
            </motion.p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="font-orbitron text-cyber-blue text-xs tracking-wider neon-glow"
            >
              © {currentYear} ALL SYSTEMS OPERATIONAL
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Cyber Divider */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="w-48 h-0.5 bg-gradient-to-r from-cyber-blue to-neon-pink mx-auto rounded-full shadow-lg shadow-cyber-blue/50 mb-8"
        />

        {/* System Status Dashboard */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            {/* Status Indicators */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full cyber-pulse"></div>
                <span className="font-orbitron text-cyber-white text-xs tracking-wider">AVAILABLE</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Satellite size={12} className="text-cyber-blue" />
                <span className="font-orbitron text-cyber-white text-xs tracking-wider">CONNECTED</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Zap size={12} className="text-neon-pink" />
                <span className="font-orbitron text-cyber-white text-xs tracking-wider">ACTIVE</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="font-orbitron text-cyber-blue text-xs tracking-wider hover:text-cyber-white transition-colors"
              >
                START PROJECT
              </motion.a>
              <span className="text-cyber-white/40">•</span>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                className="font-orbitron text-cyber-blue text-xs tracking-wider hover:text-cyber-white transition-colors"
              >
                VIEW WORK
              </motion.a>
            </div>
          </div>

          {/* Final Mission Statement */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1.6, type: "spring" }}
            className="glass-effect border border-cyber-blue/20 rounded-xl p-6 max-w-2xl mx-auto"
          >
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.8 }}
              className="font-rajdhani text-cyber-white/80 text-center leading-relaxed text-sm"
            >
              "In a world of ordinary digital experiences, we choose to build the extraordinary. 
              Every line of code is a step toward the future, every interface a gateway to 
              new possibilities in web and mobile innovation."
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Binary Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-cyber-blue/10 text-lg"
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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

      {/* Scanlines Overlay */}
      <div className="scanlines absolute inset-0 pointer-events-none"></div>
    </footer>
  )
}

export default Footer