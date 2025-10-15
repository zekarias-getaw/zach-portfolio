import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Code } from 'lucide-react'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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
        scrolled ? 'glass-effect border-b border-cyber-blue/20 backdrop-blur-xl py-2' : 'py-3'
      }`}
    >
      <div className="container-responsive">
        <div className="flex justify-between items-center">
          {/* Logo - Responsive */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 cyber-accent rounded-full flex items-center justify-center">
              <Code className="text-cyber-black" size={16} />
            </div>
            <span className="font-orbitron text-cyber-white text-lg sm:text-xl tracking-wider">
              ZEKA<span className="text-cyber-blue">RIAS</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, color: '#00BFFF' }}
                className="font-rajdhani text-cyber-white/80 hover:text-cyber-blue transition-colors duration-300 text-base font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-5 bg-cyber-gray rounded-full p-1 flex items-center transition-all duration-300"
            >
              <motion.div
                className="w-3 h-3 bg-cyber-blue rounded-full"
                animate={{ x: darkMode ? 20 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 glass-effect border border-cyber-blue/30 rounded-lg flex items-center justify-center text-cyber-blue"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-3 space-y-2 border-t border-cyber-blue/20 mt-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5, color: '#00BFFF' }}
                className="block font-rajdhani text-cyber-white/80 hover:text-cyber-blue transition-colors duration-300 text-base font-medium py-2"
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