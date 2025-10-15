import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight, Cpu, Zap, Globe, Code } from 'lucide-react'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })

  const projects = [
    {
      title: 'E-COMMERCE PLATFORM',
      description: 'Full-featured platform with real-time inventory, payment integration, and advanced analytics.',
      technologies: ['REACT', 'NODE.js', 'MONGODB', 'STRIPE'],
      category: 'FULLSTACK',
      status: 'ACTIVE',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'MOBILE BANKING APP',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      technologies: ['REACT NATIVE', 'FIREBASE', 'NODE.js', 'JWT'],
      category: 'MOBILE',
      status: 'DEPLOYED',
      icon: Globe,
      color: 'from-green-400 to-emerald-500'
    }
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return

    const interval = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isInView, projects.length])

  const nextProject = () => {
    setIsAutoPlaying(false)
    setCurrentProject(prev => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setIsAutoPlaying(false)
    setCurrentProject(prev => (prev - 1 + projects.length) % projects.length)
  }

  const CurrentIcon = projects[currentProject].icon

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden cyber-grid digital-noise">
      <div className="compact-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-orbitron text-cyber-blue mb-3 tracking-wider text-sm neon-glow"
          >
            PORTFOLIO SHOWCASE
          </motion.p>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="font-orbitron text-3xl md:text-4xl text-cyber-white mb-4 glitch-text"
            data-text="FEATURED PROJECTS"
          >
            FEATURED
            <span className="block cyber-text-gradient neon-glow">PROJECTS</span>
          </motion.h2>
        </motion.div>

        {/* Project Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-effect border border-cyber-blue/30 rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Visual */}
                <div className="h-48 lg:h-56 bg-cyber-gray flex items-center justify-center relative">
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${projects[currentProject].color} flex items-center justify-center mx-auto mb-3`}>
                      <CurrentIcon className="text-white" size={24} />
                    </div>
                    <p className="font-orbitron text-cyber-blue text-sm">{projects[currentProject].title}</p>
                  </div>
                  
                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="cyber-button rounded-full px-3 py-1 text-xs">
                      {projects[currentProject].category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="font-orbitron text-cyber-white text-lg mb-3 glitch-text" data-text={projects[currentProject].title}>
                    {projects[currentProject].title}
                  </h3>
                  
                  <p className="font-rajdhani text-cyber-white/70 text-sm mb-4 leading-relaxed">
                    {projects[currentProject].description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-orbitron text-cyber-blue text-xs mb-2 tracking-wider">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + 0.7 }}
                          className="glass-effect border border-cyber-blue/20 rounded-full px-3 py-1 text-xs text-cyber-white"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.9 }}
                    className="flex gap-3"
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cyber-button rounded-lg px-4 py-2 text-sm flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      VIEW DEMO
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-cyber-blue text-cyber-blue font-orbitron py-2 px-4 rounded-lg text-sm flex items-center gap-2 hover:bg-cyber-blue hover:text-cyber-black transition-all"
                    >
                      <Github size={14} />
                      SOURCE CODE
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 glass-effect border border-cyber-blue rounded-full flex items-center justify-center text-cyber-blue"
          >
            <ChevronLeft size={16} />
          </motion.button>
          
          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 glass-effect border border-cyber-blue rounded-full flex items-center justify-center text-cyber-blue"
          >
            <ChevronRight size={16} />
          </motion.button>

          {/* Project Indicators */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.3 }}
            className="flex justify-center gap-2 mt-6"
          >
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentProject(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentProject 
                    ? 'w-6 bg-cyber-blue shadow-lg' 
                    : 'bg-cyber-gray hover:bg-cyber-blue'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects