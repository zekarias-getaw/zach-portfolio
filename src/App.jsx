import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MatrixRain from './components/MatrixRain'
import CustomCursor from './components/CustomCursor'
import ParticleEffects from './components/ParticleEffects'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.body.style.background = '#0D0D0D'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.background = '#ffffff'
    }
  }, [darkMode])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className={`min-h-screen transition-all duration-1000 ${darkMode ? 'dark cyber-bg' : 'bg-white'}`}>
      {/* Background Effects */}
      <MatrixRain />
      <ParticleEffects />
      <CustomCursor />
      
      {/* Scanlines Overlay */}
      <div className="scanlines fixed inset-0 pointer-events-none z-20"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App