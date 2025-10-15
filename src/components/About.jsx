import React, { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Smartphone, Database, Globe, Shield, Zap, Cpu, Terminal, Rocket, Brain } from 'lucide-react'

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })

  const stats = [
    { number: '6+', label: 'Years Experience', icon: Rocket },
    { number: '50+', label: 'Projects Completed', icon: Zap },
    { number: '30+', label: 'Satisfied Clients', icon: Shield },
    { number: '99%', label: 'Success Rate', icon: Brain }
  ]

  const skills = [
    {
      icon: Terminal,
      title: 'FRONTEND DEVELOPMENT',
      description: 'React, Vue, TypeScript, Next.js, Modern UI Systems',
      level: 95,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'MOBILE DEVELOPMENT',
      description: 'React Native, Flutter, PWA, Cross-Platform Applications',
      level: 90,
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Database,
      title: 'BACKEND DEVELOPMENT',
      description: 'Node.js, Python, APIs, Microservices, Database Design',
      level: 92,
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Globe,
      title: 'FULLSTACK SOLUTIONS',
      description: 'End-to-end web applications, REST APIs, Real-time Features',
      level: 88,
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Code,
      title: 'MODERN TECHNOLOGIES',
      description: 'TypeScript, GraphQL, WebSockets, Progressive Web Apps',
      level: 85,
      color: 'from-yellow-400 to-amber-500'
    },
    {
      icon: Cpu,
      title: 'PERFORMANCE OPTIMIZATION',
      description: 'Code optimization, Load times, SEO, Best Practices',
      level: 80,
      color: 'from-indigo-400 to-purple-500'
    }
  ]

  useEffect(() => {
    if (isInView) {
      const elements = document.querySelectorAll('.skill-progress')
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.width = el.getAttribute('data-width') + '%'
        }, index * 200)
      })
    }
  }, [isInView])

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden cyber-grid digital-noise">
      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-orbitron text-cyber-blue mb-3 tracking-wider text-sm neon-glow"
          >
            TECHNICAL EXPERTISE
          </motion.p>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="font-orbitron text-3xl md:text-4xl text-cyber-white mb-4 glitch-text"
            data-text="SKILLS & EXPERIENCE"
          >
            SKILLS &
            <span className="block cyber-text-gradient neon-glow">EXPERIENCE</span>
          </motion.h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              className="glass-effect border border-cyber-blue/30 rounded-xl p-4 text-center"
            >
              <stat.icon className="text-cyber-blue mx-auto mb-2" size={20} />
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="font-orbitron text-cyber-blue text-xl mb-1 glitch-text"
                data-text={stat.number}
              >
                {stat.number}
              </motion.div>
              <div className="font-rajdhani text-cyber-white/70 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Proficiency - FIXED sizing and spacing */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="font-orbitron text-xl sm:text-2xl text-cyber-white mb-6 text-center glitch-text"
            data-text="TECHNICAL PROFICIENCY"
          >
            TECHNICAL PROFICIENCY
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-0">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                whileHover={{ scale: 1.02 }}
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                className="glass-effect border border-cyber-blue/20 rounded-xl p-4 group hover:border-cyber-blue transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="text-cyber-white" size={18} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-orbitron text-cyber-white text-sm group-hover:text-cyber-blue transition-colors truncate">
                      {skill.title}
                    </h3>
                    <p className="font-rajdhani text-cyber-white/70 text-xs truncate">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-orbitron text-cyber-blue text-xs">PROFICIENCY</span>
                    <span className="font-orbitron text-cyber-white text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-cyber-gray rounded-full overflow-hidden">
                    <div 
                      className="skill-progress h-full bg-gradient-to-r from-cyber-blue to-neon-pink rounded-full transition-all duration-1000 ease-out shadow-sm"
                      data-width={skill.level}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-8"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button rounded-lg px-8 py-3 text-sm"
          >
            START COLLABORATION
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default About