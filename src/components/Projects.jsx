import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight, Cpu, Zap, Globe, Code } from 'lucide-react'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 })

  const projects = [
    {
      title: 'MODERN E-COMMERCE PLATFORM',
      description: 'A full-featured e-commerce platform with real-time inventory, payment integration, and advanced analytics. Built with modern web technologies for optimal performance and user experience.',
      technologies: ['REACT', 'NODE.js', 'MONGODB', 'STRIPE', 'REDIS', 'AWS'],
      category: 'FULLSTACK',
      status: 'ACTIVE',
      icon: 'Zap',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'MOBILE BANKING APPLICATION',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics. Features military-grade security and intuitive user interface.',
      technologies: ['REACT NATIVE', 'FIREBASE', 'NODE.js', 'JWT', 'SOCKET.IO'],
      category: 'MOBILE',
      status: 'DEPLOYED',
      icon: 'Globe',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'ENTERPRISE CRM SYSTEM',
      description: 'Comprehensive customer relationship management system with advanced analytics, automation workflows, and seamless third-party integrations. Built for enterprise-scale operations.',
      technologies: ['VUE.js', 'PYTHON', 'POSTGRESQL', 'DOCKER', 'GRAPHQL'],
      category: 'ENTERPRISE',
      status: 'LIVE',
      icon: 'Code',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'REAL-TIME COLLABORATION TOOL',
      description: 'Advanced collaboration platform featuring real-time editing, video conferencing, and project management tools. Optimized for remote teams and seamless workflow integration.',
      technologies: ['NEXT.js', 'WEBSOCKETS', 'POSTGRES', 'DOCKER', 'AWS'],
      category: 'REAL-TIME',
      status: 'IN DEVELOPMENT',
      icon: 'Cpu',
      color: 'from-orange-400 to-red-500'
    }
  ]

  // Icon mapping
  const iconComponents = {
    Zap: Zap,
    Globe: Globe,
    Code: Code,
    Cpu: Cpu
  }

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const nextProject = () => {
    setIsAutoPlaying(false)
    setCurrentProject(prev => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setIsAutoPlaying(false)
    setCurrentProject(prev => (prev - 1 + projects.length) % projects.length)
  }

  // Get current project icon component
  const CurrentIcon = iconComponents[projects[currentProject].icon] || Cpu

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden cyber-grid digital-noise">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 border border-cyber-blue rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cinematic Header */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20 perspective-3d"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 border-4 border-neon-pink border-t-transparent rounded-full mx-auto"
              />
              <Cpu className="absolute inset-0 m-auto text-neon-pink neon-glow" size={32} />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="font-orbitron text-cyber-blue mb-4 tracking-widest text-lg neon-glow"
          >
            PORTFOLIO SHOWCASE
          </motion.p>
          
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="font-orbitron text-6xl md:text-7xl text-cyber-white mb-8 glitch-text"
            data-text="FEATURED PROJECTS"
          >
            FEATURED
            <span className="block cyber-text-gradient neon-glow">PROJECTS</span>
          </motion.h2>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1 }}
            className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-neon-pink mx-auto rounded-full shadow-2xl shadow-cyber-blue/50"
          />
        </motion.div>

        {/* Cinematic Project Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 300, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -300, rotateY: -90 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="rounded-3xl overflow-hidden shadow-2xl shadow-cyber-blue/20 perspective-3d transform-3d"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Visual - Hologram Display */}
                <div className="relative h-96 lg:h-[500px]">
                  <div className="w-full h-full glass-effect border border-cyber-blue/30 flex items-center justify-center relative overflow-hidden hologram-container">
                    {/* Animated Icon */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-center relative z-10"
                    >
                      <div className={`w-32 h-32 rounded-3xl bg-gradient-to-r ${projects[currentProject].color} flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                        <CurrentIcon className="text-cyber-white" size={48} />
                      </div>
                      <p className="font-orbitron text-cyber-blue text-sm tracking-widest neon-glow">
                        {projects[currentProject].title}
                      </p>
                    </motion.div>
                    
                    {/* Floating Tech Elements */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 border border-cyber-blue rounded-full"
                        animate={{
                          x: [0, Math.random() * 100 - 50, 0],
                          y: [0, Math.random() * 100 - 50, 0],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: Math.random() * 4 + 2,
                          repeat: Infinity,
                          delay: i * 1,
                        }}
                        style={{
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 80 + 10}%`,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Status Badges */}
                  <div className="absolute top-6 left-6 flex gap-3">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="cyber-button rounded-full px-4 py-2 text-xs"
                    >
                      {projects[currentProject].category}
                    </motion.span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7, type: "spring" }}
                      className="glass-effect border border-neon-pink rounded-full px-4 py-2 text-xs text-neon-pink font-orbitron neon-glow"
                    >
                      {projects[currentProject].status}
                    </motion.span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="glass-effect border border-cyber-blue/30 p-8 lg:p-12 relative overflow-hidden">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${projects[currentProject].color} opacity-5`}></div>
                  
                  <div className="relative z-10">
                    <motion.h3
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="font-orbitron text-3xl text-cyber-white mb-4 glitch-text"
                      data-text={projects[currentProject].title}
                    >
                      {projects[currentProject].title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="font-rajdhani text-cyber-white/80 leading-relaxed mb-8 text-lg"
                    >
                      {projects[currentProject].description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="mb-8"
                    >
                      <h4 className="font-orbitron text-cyber-blue mb-4 tracking-widest text-sm neon-glow">
                        TECHNOLOGIES USED
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {projects[currentProject].technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.1 + 0.9, type: "spring" }}
                            className="glass-effect border border-cyber-blue/30 rounded-full px-4 py-2 text-sm text-cyber-white font-rajdhani hover:border-cyber-blue transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Project Links */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      className="flex gap-4"
                    >
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="cyber-button rounded-lg px-8 py-3 flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        VIEW DEMO
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-cyber-blue text-cyber-blue font-orbitron font-bold py-3 px-8 rounded-lg hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 flex items-center gap-2"
                      >
                        <Github size={18} />
                        SOURCE CODE
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 glass-effect border border-cyber-blue rounded-full flex items-center justify-center text-cyber-blue hover:text-cyber-white transition-all duration-300 shadow-2xl shadow-cyber-blue/50"
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 glass-effect border border-cyber-blue rounded-full flex items-center justify-center text-cyber-blue hover:text-cyber-white transition-all duration-300 shadow-2xl shadow-cyber-blue/50"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Project Indicators */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.4 }}
            className="flex justify-center mt-12 gap-3"
          >
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentProject(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'w-8 bg-gradient-to-r from-cyber-blue to-neon-pink shadow-lg shadow-cyber-blue/50' 
                    : 'bg-cyber-gray hover:bg-cyber-blue'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Binary Rain Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-cyber-blue/20 text-sm"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{ y: '100vh' }}
            transition={{
              duration: Math.random() * 6 + 3,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      {/* Scanlines Overlay */}
      <div className="scanlines absolute inset-0 pointer-events-none"></div>
    </section>
  )
}

export default Projects