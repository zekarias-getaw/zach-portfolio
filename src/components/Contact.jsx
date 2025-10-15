import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Satellite, Cpu, Terminal, MessageSquare, Rocket } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [activeField, setActiveField] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 })

  const contactInfo = [
    {
      icon: Mail,
      title: 'EMAIL COMMUNICATION',
      value: 'zekariasgetaw26@gmail.com',
      link: 'mailto:zekariasgetaw26@gmail.com',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Phone,
      title: 'PHONE CONNECTION',
      value: '+251 994 681 535',
      link: 'tel:+251994681535',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'LOCATION BASE',
      value: 'Addis Ababa, Ethiopia',
      link: '#',
      color: 'from-purple-400 to-pink-500'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      console.log('📡 INITIATING PROJECT INQUIRY...', formData)
      
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      
      if (data.success) {
        console.log('🎯 PROJECT INQUIRY SUCCESSFUL:', data.cinematic)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 4000)
      } else {
        console.error('❌ SUBMISSION FAILED:', data.message)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('💥 NETWORK ERROR:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Audio visualization effect
  useEffect(() => {
    if (!isInView) return

    const bars = document.querySelectorAll('.audio-bar')
    bars.forEach((bar, index) => {
      const animateBar = () => {
        const height = Math.random() * 100 + 10
        bar.style.height = `${height}%`
        setTimeout(animateBar, Math.random() * 300 + 200)
      }
      setTimeout(animateBar, index * 100)
    })
  }, [isInView])

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden cyber-grid digital-noise">
      {/* Animated Orbital Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-blue rounded-full opacity-40"
            animate={{
              x: [0, Math.cos(i * 30) * 200, 0],
              y: [0, Math.sin(i * 30) * 200, 0],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: '50%',
              top: '50%',
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
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 border-4 border-neon-pink border-t-transparent rounded-full mx-auto"
              />
              <Satellite className="absolute inset-0 m-auto text-neon-pink neon-glow" size={32} />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="font-orbitron text-cyber-blue mb-4 tracking-widest text-lg neon-glow"
          >
            START YOUR PROJECT
          </motion.p>
          
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="font-orbitron text-6xl md:text-7xl text-cyber-white mb-8 glitch-text"
            data-text="GET IN TOUCH"
          >
            GET IN
            <span className="block cyber-text-gradient neon-glow">TOUCH</span>
          </motion.h2>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 1 }}
            className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-neon-pink mx-auto rounded-full shadow-2xl shadow-cyber-blue/50"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Cinematic Contact Information */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="font-orbitron text-3xl text-cyber-white mb-6 glitch-text"
                data-text="PROJECT DISCUSSION"
              >
                PROJECT DISCUSSION
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="font-rajdhani text-cyber-white/80 text-lg leading-relaxed"
              >
                Ready to bring your digital vision to life? Let's collaborate to create 
                cutting-edge web and mobile solutions that deliver exceptional user 
                experiences and drive business growth. Response time: &lt; 24 hours.
              </motion.p>
            </div>

            {/* Animated Contact Channels */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.8 }}
                  className="glass-effect border border-cyber-blue/30 rounded-2xl p-6 flex items-center gap-6 group hover:border-cyber-blue transition-all duration-500 block transform-3d hover-3d"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <item.icon className="text-cyber-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-orbitron text-cyber-blue mb-2 tracking-widest text-sm neon-glow">
                      {item.title}
                    </h4>
                    <p className="font-rajdhani text-cyber-white text-lg">
                      {item.value}
                    </p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Send size={20} />
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* System Status Panel */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="glass-effect border border-cyber-blue/30 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-transparent to-neon-pink/5"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full neon-glow animate-pulse"></div>
                  <span className="font-orbitron text-cyber-blue tracking-widest text-sm">
                    STATUS: AVAILABLE FOR PROJECTS
                  </span>
                </div>
                <p className="font-rajdhani text-cyber-white/70">
                  All communication channels active. Ready for web and mobile development 
                  projects, from concept to deployment. Professional workflow established.
                </p>
              </div>
            </motion.div>

            {/* Audio Visualization */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1.6, type: "spring" }}
              className="glass-effect border border-cyber-blue/30 rounded-2xl p-6"
            >
              <h4 className="font-orbitron text-cyber-blue mb-4 tracking-widest text-sm neon-glow">
                SYSTEM ACTIVITY
              </h4>
              <div className="flex items-end justify-between gap-1 h-20">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="audio-bar w-2 bg-gradient-to-t from-cyber-blue to-neon-pink rounded-full transition-all duration-200 ease-out"
                    style={{ height: '20%' }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Cinematic Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect border border-cyber-blue/30 rounded-3xl p-8 relative overflow-hidden hologram-container transform-3d"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-neon-pink/5"></div>
            
            {/* Floating Elements */}
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
                  duration: Math.random() * 6 + 3,
                  repeat: Infinity,
                  delay: i * 2,
                }}
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
              />
            ))}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Your Name */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <label className="font-orbitron text-cyber-blue mb-3 block tracking-widest text-sm neon-glow">
                  YOUR NAME
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    required
                    className="w-full px-4 py-4 glass-effect border border-cyber-blue/30 rounded-xl focus:outline-none focus:border-cyber-blue text-cyber-white font-rajdhani placeholder-cyber-white/40 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                  {activeField === 'name' && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-blue"
                    />
                  )}
                </div>
              </motion.div>

              {/* Email Address */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                <label className="font-orbitron text-cyber-blue mb-3 block tracking-widest text-sm neon-glow">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    required
                    className="w-full px-4 py-4 glass-effect border border-cyber-blue/30 rounded-xl focus:outline-none focus:border-cyber-blue text-cyber-white font-rajdhani placeholder-cyber-white/40 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                  {activeField === 'email' && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-blue"
                    />
                  )}
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
              >
                <label className="font-orbitron text-cyber-blue mb-3 block tracking-widest text-sm neon-glow">
                  PROJECT DETAILS
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    required
                    rows="6"
                    className="w-full px-4 py-4 glass-effect border border-cyber-blue/30 rounded-xl focus:outline-none focus:border-cyber-blue text-cyber-white font-rajdhani placeholder-cyber-white/40 resize-none transition-all duration-300"
                    placeholder="Describe your project requirements, timeline, and vision..."
                  />
                  {activeField === 'message' && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-blue"
                    />
                  )}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
                className="w-full cyber-button rounded-xl py-4 text-lg font-semibold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-cyber-black border-t-transparent rounded-full"
                    />
                    <span className="font-orbitron">PROCESSING REQUEST...</span>
                  </>
                ) : (
                  <>
                    <Rocket size={20} />
                    <span className="font-orbitron">LAUNCH PROJECT</span>
                  </>
                )}
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-cyber-blue opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
              </motion.button>

              {/* Cinematic Success Message */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    className="glass-effect border border-green-400 rounded-xl p-4 text-center"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        <Cpu className="text-green-400" size={24} />
                      </motion.div>
                      <div>
                        <p className="font-orbitron text-green-400 text-sm tracking-widest">
                          REQUEST RECEIVED
                        </p>
                        <p className="font-rajdhani text-cyber-white/80 text-sm">
                          Project inquiry received. Response incoming within 24 hours.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Binary Matrix Rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-cyber-blue/15 text-sm"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{ y: '100vh' }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 3
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

export default Contact