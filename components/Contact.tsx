import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Globe,
  Send,
  Dribbble,
  Star,
  Zap,
  MessageCircle
} from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact - New Message')
    const body = encodeURIComponent(
      `Hi Rajasri,\n\n` +
      `I'm reaching out through your portfolio website.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    )
    const mailtoLink = `mailto:rajasri090999@gmail.com?subject=${subject}&body=${body}`
    
    // Open default email client
    window.location.href = mailtoLink
    
    // Show success message
    setTimeout(() => {
      toast.success('Email client opened successfully!', {
        description: 'Your message has been prepared in your default email client.',
      })
      
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9025647887',
      href: 'tel:+919025647887',
      description: 'Available for calls & discussions',
      color: 'from-blue-500/20 to-cyan-600/20',
      borderColor: 'border-blue-500/40',
      neonColor: 'rgba(59, 130, 246, 0.6)'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'rajasri090999@gmail.com',
      href: 'mailto:rajasri090999@gmail.com',
      description: 'Send me a message anytime',
      color: 'from-green-500/20 to-emerald-600/20',
      borderColor: 'border-green-500/40',
      neonColor: 'rgba(34, 197, 94, 0.6)'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Global Remote',
      href: '#',
      description: 'Available for worldwide projects',
      color: 'from-purple-500/20 to-pink-600/20',
      borderColor: 'border-purple-500/40',
      neonColor: 'rgba(168, 85, 247, 0.6)'
    }
  ]

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Rajasri99', 
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/rajasri99/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Dribbble, 
      href: 'https://dribbble.com/Rajiyogi99', 
      label: 'Dribbble',
      color: 'hover:text-pink-400'
    },
    { 
      icon: Globe, 
      href: 'https://www.behance.net/rajiyogi', 
      label: 'Behance',
      color: 'hover:text-blue-500'
    },
    { 
      icon: ExternalLink, 
      href: 'https://app.netlify.com/teams/rajasri99/projects', 
      label: 'Netlify',
      color: 'hover:text-teal-400'
    }
  ]

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="relative min-h-screen py-20 overflow-hidden bg-black"
    >
      
      {/* Background Effects */}
      <div className="absolute inset-0 space-bg" />
      
      {/* Enhanced Neon Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lime-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Advanced Neon Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0">
          {/* Vertical lines */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime-400/40 to-transparent"
              style={{ left: `${(i + 1) * 8.33}%` }}
              animate={{
                opacity: [0.1, 0.5, 0.1]
              }}
              transition={{
                duration: 6 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
          {/* Horizontal lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent"
              style={{ top: `${(i + 1) * 12.5}%` }}
              animate={{
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 8 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6"
              style={{ 
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                fontWeight: 900
              }}
            >
              Let's{' '}
              <span 
                className="text-transparent bg-clip-text"
                style={{ 
                  background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text'
                }}
              >
                Connect
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-lime-400 to-lime-600 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <motion.p 
              className="text-gray-300 text-lg max-w-3xl mx-auto mt-6 leading-relaxed"
              style={{ 
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                fontWeight: 400
              }}
            >
              Ready to bring your digital vision to life? Let's collaborate on creating 
              exceptional user experiences that make a lasting impact.
            </motion.p>
          </motion.div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column - Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              
              {/* Contact Cards */}
              <div className="space-y-6">
                <h3 
                  className="text-2xl md:text-3xl text-white mb-8 font-bold"
                  style={{ 
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                    fontWeight: 700
                  }}
                >
                  Get In Touch
                </h3>
                
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className={`block cyberpunk-frame bg-black/80 border-2 ${info.borderColor} rounded-xl p-6 hover:border-lime-400/60 transition-all duration-300 group cursor-pointer`}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    style={{
                      boxShadow: `0 0 20px ${info.neonColor.replace('0.6', '0.2')}`
                    }}
                  >
                    {/* Neon glow effect on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                      style={{
                        background: `radial-gradient(circle at center, ${info.neonColor.replace('0.6', '0.1')} 0%, transparent 70%)`,
                        boxShadow: `inset 0 0 20px ${info.neonColor.replace('0.6', '0.3')}`
                      }}
                    />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <div 
                        className={`flex-shrink-0 w-12 h-12 bg-black border-2 ${info.borderColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        style={{
                          boxShadow: `0 0 15px ${info.neonColor.replace('0.6', '0.4')}`
                        }}
                      >
                        <info.icon className="w-6 h-6 text-lime-400" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 
                          className="text-white text-lg font-bold mb-1 group-hover:text-lime-400 transition-colors duration-300"
                          style={{ fontWeight: 700 }}
                        >
                          {info.title}
                        </h4>
                        <p 
                          className="text-lime-400 text-base font-medium mb-2 break-all"
                          style={{ fontWeight: 600 }}
                        >
                          {info.value}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Corner Indicator */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-lime-400/60 rounded-full animate-pulse" />
                  </motion.a>
                ))}
              </div>

              {/* Social Media Links */}
              <motion.div variants={itemVariants} className="pt-8">
                <h4 
                  className="text-xl text-white mb-6 font-bold"
                  style={{ 
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                    fontWeight: 700
                  }}
                >
                  Follow My Work
                </h4>
                
                <div className="flex gap-4 flex-wrap">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/60 hover:bg-lime-400/20 border border-gray-600 hover:border-lime-400/50 rounded-xl flex items-center justify-center text-gray-300 hover:text-lime-400 transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                      style={{
                        boxShadow: '0 0 10px rgba(163, 230, 53, 0.1)'
                      }}
                    >
                      <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="cyberpunk-frame bg-black/90 backdrop-blur-sm border-2 border-lime-400/30 rounded-xl p-8 h-full">
                <div className="relative z-10 h-full flex flex-col">
                  
                  {/* Form Header */}
                  <div className="mb-8">
                    <h3 
                      className="text-2xl md:text-3xl text-white font-bold mb-4"
                      style={{ 
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                        fontWeight: 700
                      }}
                    >
                      Send a Message
                    </h3>
                    <p 
                      className="text-gray-300 leading-relaxed"
                      style={{ 
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                        fontWeight: 400
                      }}
                    >
                      Have a project in mind? Let's discuss how we can create something amazing together.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                    
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label 
                          htmlFor="name" 
                          className="block text-gray-300 mb-2"
                          style={{ 
                            fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                            fontSize: '14px',
                            fontWeight: 500
                          }}
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Name"
                          className="w-full h-12 px-3 py-2 bg-gray-900/60 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-colors duration-300"
                          style={{
                            fontFamily: "'Inter', 'Helvetica Neue', sans-serif"
                          }}
                        />
                      </div>
                      
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block text-gray-300 mb-2"
                          style={{ 
                            fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                            fontSize: '14px',
                            fontWeight: 500
                          }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                          className="w-full h-12 px-3 py-2 bg-gray-900/60 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-colors duration-300"
                          style={{
                            fontFamily: "'Inter', 'Helvetica Neue', sans-serif"
                          }}
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label 
                        htmlFor="subject" 
                        className="block text-gray-300 mb-2"
                        style={{ 
                          fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                          fontSize: '14px',
                          fontWeight: 500
                        }}
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Project inquiry, collaboration, etc."
                        className="w-full h-12 px-3 py-2 bg-gray-900/60 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-colors duration-300"
                        style={{
                          fontFamily: "'Inter', 'Helvetica Neue', sans-serif"
                        }}
                      />
                    </div>

                    {/* Message Field */}
                    <div className="flex-1 flex flex-col">
                      <label 
                        htmlFor="message" 
                        className="block text-gray-300 mb-2"
                        style={{ 
                          fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                          fontSize: '14px',
                          fontWeight: 500
                        }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project, goals, timeline, and how we can work together..."
                        className="w-full px-3 py-2 bg-gray-900/60 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-colors duration-300 resize-none flex-1"
                        style={{ 
                          minHeight: '120px',
                          fontFamily: "'Inter', 'Helvetica Neue', sans-serif"
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={`relative w-full font-bold py-4 px-8 rounded-xl transition-all duration-300 overflow-hidden ${
                          isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'
                        }`}
                        style={{
                          background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 50%, #65a30d 100%)',
                          color: '#000000',
                          boxShadow: '0 0 25px rgba(163, 230, 53, 0.4)',
                          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                          fontWeight: 700,
                          fontSize: '16px',
                          height: '56px'
                        }}
                        whileHover={{
                          boxShadow: '0 0 35px rgba(163, 230, 53, 0.6)'
                        }}
                      >
                        <div className="flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                              />
                              <span>Opening Email Client...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Send Message</span>
                            </>
                          )}
                        </div>
                        
                        {/* Hover effect overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.button>
                    </div>
                  </form>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-lime-400/40" />
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-lime-400/40" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-lime-400/40" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-lime-400/40" />
              </div>
            </motion.div>

          </div>

          {/* Bottom Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <div className="cyberpunk-selection-frame bg-black/60 backdrop-blur-sm p-8 max-w-3xl mx-auto">
              <h3 
                className="text-2xl md:text-3xl text-white mb-4 font-bold"
                style={{ 
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                  fontWeight: 700
                }}
              >
                Ready to create something{' '}
                <span className="text-lime-400">extraordinary</span>?
              </h3>
              <p 
                className="text-gray-300 text-lg leading-relaxed mb-6"
                style={{ 
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                  fontWeight: 400
                }}
              >
                Whether you need innovative UI/UX design, cutting-edge development, 
                or complete digital transformation, I'm here to help bring your vision to life.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-lime-400" />
                  <span>Fast Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-lime-400" />
                  <span>Quality Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-lime-400" />
                  <span>Open Communication</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact