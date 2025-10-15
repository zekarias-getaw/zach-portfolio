import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MatrixRain from './components/MatrixRain'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark cyber-bg' : 'bg-white'}`}>
      {/* Hide MatrixRain on mobile for performance */}
      <div className="hidden md:block">
        <MatrixRain />
      </div>
      
      {/* Hide CustomCursor on mobile */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>
      
      <div className="scanlines fixed inset-0 pointer-events-none z-20"></div>
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App