import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Code } from 'lucide-react'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect border-b border-cyber-blue/20 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 cyber-accent rounded-full flex items-center justify-center shadow-lg shadow-cyber-blue/50">
              <Code className="text-cyber-black" size={20} />
            </div>
            <span className="font-orbitron text-cyber-white text-xl tracking-widest">
              ZEKA<span className="text-cyber-blue">RIAS</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#00BFFF' }}
                className="font-rajdhani text-cyber-white/80 hover:text-cyber-blue transition-colors duration-300 text-lg font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="w-12 h-6 bg-cyber-gray rounded-full p-1 flex items-center transition-all duration-300"
            >
              <motion.div
                className="w-4 h-4 bg-cyber-blue rounded-full"
                animate={{ x: darkMode ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 glass-effect border border-cyber-blue/30 rounded-lg flex items-center justify-center text-cyber-blue"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-cyber-blue/20">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10, color: '#00BFFF' }}
                className="block font-rajdhani text-cyber-white/80 hover:text-cyber-blue transition-colors duration-300 text-lg font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar