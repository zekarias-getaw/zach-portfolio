import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Cpu, Satellite, Zap } from 'lucide-react'
import { useRef } from 'react'

const Footer = () => {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, threshold: 0.1 })

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zekariasgetaw26@gmail.com', label: 'Email' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={footerRef} className="relative overflow-hidden border-t border-cyber-blue/20 cyber-grid">
      <div className="compact-container py-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-6"
        >
          {/* Brand Identity */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <div className="w-10 h-10 cyber-accent rounded-full flex items-center justify-center">
                  <span className="font-orbitron text-cyber-black text-sm font-black">ZG</span>
                </div>
              </motion.div>
              <div>
                <p className="font-orbitron text-cyber-white text-sm tracking-wider">ZEKARIAS GETAW</p>
                <p className="font-rajdhani text-cyber-blue text-xs tracking-wider">FULLSTACK DEVELOPER</p>
              </div>
            </div>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="font-rajdhani text-cyber-white/60 text-xs"
            >
              Crafting digital experiences since {currentYear - 6}
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.6, type: "spring" }}
                className="relative group"
              >
                <div className="w-10 h-10 glass-effect border border-cyber-blue rounded-lg flex items-center justify-center text-cyber-blue hover:text-cyber-white transition-all duration-300">
                  <social.icon size={16} />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Mission Statement */}
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
              className="font-rajdhani text-cyber-white/60 text-xs flex items-center justify-center md:justify-end gap-1 mb-2"
            >
              <span>CRAFTED WITH</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={12} className="text-red-500" />
              </motion.span>
              <span>BY ZEKARIAS</span>
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
          className="w-32 h-0.5 bg-gradient-to-r from-cyber-blue to-neon-pink mx-auto rounded-full mb-4"
        />

        {/* System Status */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            {/* Status Indicators */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="font-orbitron text-cyber-white text-xs tracking-wider">AVAILABLE</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Satellite size={10} className="text-cyber-blue" />
                <span className="font-orbitron text-cyber-white text-xs tracking-wider">CONNECTED</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
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
            className="glass-effect border border-cyber-blue/20 rounded-lg p-4 max-w-md mx-auto"
          >
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.8 }}
              className="font-rajdhani text-cyber-white/80 text-center text-xs leading-relaxed"
            >
              "In a world of ordinary digital experiences, we choose to build the extraordinary."
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer