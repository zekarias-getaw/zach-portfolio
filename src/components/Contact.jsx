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

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden cyber-grid digital-noise">
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
            START YOUR PROJECT
          </motion.p>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="font-orbitron text-3xl md:text-4xl text-cyber-white mb-4 glitch-text"
            data-text="GET IN TOUCH"
          >
            GET IN
            <span className="block cyber-text-gradient neon-glow">TOUCH</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="font-orbitron text-xl text-cyber-white mb-4 glitch-text"
                data-text="PROJECT DISCUSSION"
              >
                PROJECT DISCUSSION
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="font-rajdhani text-cyber-white/80 text-sm leading-relaxed"
              >
                Ready to bring your digital vision to life? Let's collaborate to create cutting-edge solutions. Response time: &lt; 24 hours.
              </motion.p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ scale: 1.02, x: 5 }}
                  initial={{ x: -30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.8 }}
                  className="glass-effect border border-cyber-blue/30 rounded-xl p-4 flex items-center gap-4 group hover:border-cyber-blue transition-all duration-300 block"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-cyber-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-orbitron text-cyber-blue text-xs tracking-wider neon-glow">
                      {item.title}
                    </h4>
                    <p className="font-rajdhani text-cyber-white text-sm">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Status Panel */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="glass-effect border border-cyber-blue/30 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full neon-glow animate-pulse"></div>
                <span className="font-orbitron text-cyber-blue text-xs tracking-wider">
                  STATUS: AVAILABLE FOR PROJECTS
                </span>
              </div>
              <p className="font-rajdhani text-cyber-white/70 text-xs">
                All communication channels active. Ready for web and mobile development projects.
              </p>
            </motion.div>

            {/* System Activity Animation - FIXED */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1.6, type: "spring" }}
              className="glass-effect border border-cyber-blue/30 rounded-xl p-4"
            >
              <h4 className="font-orbitron text-cyber-blue mb-3 tracking-widest text-sm neon-glow">
                SYSTEM ACTIVITY
              </h4>
              <div className="flex items-end justify-between gap-1 h-16">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="audio-bar w-2 bg-gradient-to-t from-cyber-blue to-neon-pink rounded-full transition-all duration-200 ease-out"
                    animate={{
                      height: [`${Math.random() * 30 + 10}%`, `${Math.random() * 70 + 20}%`, `${Math.random() * 40 + 10}%`],
                    }}
                    transition={{
                      duration: Math.random() * 1.5 + 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-effect border border-cyber-blue/30 rounded-2xl p-6 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <label className="font-orbitron text-cyber-blue text-xs mb-2 block tracking-wider">
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
                    className="w-full px-4 py-3 glass-effect border border-cyber-blue/30 rounded-lg focus:outline-none focus:border-cyber-blue text-cyber-white font-rajdhani text-sm placeholder-cyber-white/40 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                <label className="font-orbitron text-cyber-blue text-xs mb-2 block tracking-wider">
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
                    className="w-full px-4 py-3 glass-effect border border-cyber-blue/30 rounded-lg focus:outline-none focus:border-cyber-blue text-cyber-white font-rajdhani text-sm placeholder-cyber-white/40 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
              >
                <label className="font-orbitron text-cyber-blue text-xs mb-2 block tracking-wider">
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
                    rows="4"
                    className="w-full px-4 py-3 glass-effect border border-cyber-blue/30 rounded-lg focus:outline-none focus:border-cyber-blue text-cyber-white font-rajdhani text-sm placeholder-cyber-white/40 resize-none transition-all duration-300"
                    placeholder="Describe your project requirements..."
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
                className="w-full cyber-button rounded-lg py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-cyber-black border-t-transparent rounded-full"
                    />
                    <span className="font-orbitron">PROCESSING...</span>
                  </>
                ) : (
                  <>
                    <Rocket size={16} />
                    <span className="font-orbitron">LAUNCH PROJECT</span>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="glass-effect border border-green-400 rounded-lg p-3 text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Cpu className="text-green-400" size={16} />
                      <div>
                        <p className="font-orbitron text-green-400 text-xs tracking-wider">
                          REQUEST RECEIVED
                        </p>
                        <p className="font-rajdhani text-cyber-white/80 text-xs">
                          Response incoming within 24 hours.
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
    </section>
  )
}

export default Contact