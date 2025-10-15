import React, { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Smartphone, Database, Globe, Shield, Zap, Cpu, Terminal, Rocket, Brain } from 'lucide-react'

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 })

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
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden cyber-grid digital-noise">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-blue rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
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
          className="text-center mb-24 perspective-3d"
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
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 border-4 border-cyber-blue border-t-transparent rounded-full mx-auto"
              />
              <Cpu className="absolute inset-0 m-auto text-cyber-blue neon-glow" size={32} />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="font-orbitron text-cyber-blue mb-4 tracking-widest text-lg neon-glow"
          >
            TECHNICAL EXPERTISE
          </motion.p>
          
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="font-orbitron text-6xl md:text-7xl text-cyber-white mb-8 glitch-text"
            data-text="SKILLS & EXPERIENCE"
          >
            SKILLS &
            <span className="block cyber-text-gradient neon-glow">EXPERIENCE</span>
          </motion.h2>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1 }}
            className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-neon-pink mx-auto rounded-full shadow-2xl shadow-cyber-blue/50"
          />
        </motion.div>

        {/* Animated Stats Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              className="glass-effect border border-cyber-blue/30 rounded-3xl p-8 text-center group hover:border-cyber-blue transition-all duration-500 transform-3d hover-3d"
            >
              <div className="relative">
                <stat.icon className="text-cyber-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow" size={32} />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="font-orbitron text-4xl cyber-text-gradient mb-2 glitch-text"
                  data-text={stat.number}
                >
                  {stat.number}
                </motion.div>
                <div className="font-rajdhani text-cyber-white/70 group-hover:text-cyber-white transition-colors text-sm leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Skills Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="font-orbitron text-3xl text-cyber-white mb-12 text-center glitch-text"
            data-text="TECHNICAL PROFICIENCY"
          >
            TECHNICAL PROFICIENCY
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ y: 30, opacity: 0, scale: 0.8 }}
                animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                className="glass-effect border border-cyber-blue/20 rounded-2xl p-8 group hover:border-cyber-blue transition-all duration-500 transform-3d hover-3d relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <skill.icon className="text-cyber-white" size={28} />
                  </div>
                  
                  <h3 className="font-orbitron text-xl text-cyber-white mb-4 group-hover:text-cyber-blue transition-colors glitch-text" data-text={skill.title}>
                    {skill.title}
                  </h3>
                  
                  <p className="font-rajdhani text-cyber-white/70 leading-relaxed mb-6 group-hover:text-cyber-white/90 transition-colors">
                    {skill.description}
                  </p>
                  
                  {/* Animated Progress Bar */}
                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-orbitron text-cyber-blue text-sm">PROFICIENCY</span>
                      <span className="font-orbitron text-cyber-white text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-cyber-gray rounded-full overflow-hidden">
                      <div 
                        className="skill-progress h-full bg-gradient-to-r from-cyber-blue to-neon-pink rounded-full transition-all duration-1000 ease-out shadow-lg shadow-cyber-blue/50"
                        data-width={skill.level}
                        style={{ width: '0%' }}
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyber-blue rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="glass-effect border border-cyber-blue/30 rounded-3xl p-12 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-transparent to-neon-pink/5 opacity-50"></div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-64 h-64 border border-cyber-blue/20 rounded-full"
            />
            
            <motion.h3
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1.4, type: "spring" }}
              className="font-orbitron text-3xl text-cyber-white mb-6 glitch-text"
              data-text="DEVELOPMENT PHILOSOPHY"
            >
              DEVELOPMENT PHILOSOPHY
            </motion.h3>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.6 }}
              className="font-rajdhani text-xl text-cyber-white/80 leading-relaxed max-w-4xl mx-auto mb-8"
            >
              "To engineer digital solutions that transcend conventional boundaries, 
              leveraging cutting-edge technology to create immersive, secure, and 
              revolutionary experiences that shape the future of web and mobile applications."
            </motion.p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1.8, type: "spring" }}
              className="cyber-button inline-block rounded-lg px-12 py-4 text-lg font-semibold"
            >
              START COLLABORATION
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Binary Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-cyber-blue/30 text-lg"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
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
    </section>
  )
}

export default About