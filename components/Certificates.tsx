import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Award,
  Trophy,
  Star,
  Building2,
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="certificates" ref={ref} className="relative min-h-screen bg-black py-20 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 space-bg" />
      
      {/* Enhanced Neon Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lime-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Neon Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          {/* Vertical lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime-400/30 to-transparent"
              style={{ left: `${(i + 1) * 12.5}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
          {/* Horizontal lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent"
              style={{ top: `${(i + 1) * 16.6}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6"
            style={{ 
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
              fontWeight: 900
            }}
          >
            Certificates &{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{ 
                background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text'
              }}
            >
              Achievements
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-lime-400 to-lime-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Main Layout - Left Statistics + Right Large Portrait */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Side - Statistics Grid */}
          <motion.div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  number: '4+', 
                  label: 'Key Certifications', 
                  icon: Award,
                  description: 'Product Designer at Accenture, Client Service at BNY Mellon, UI/UX Program at GUVI, and Web Development certification.',
                  color: 'from-blue-500/20 to-purple-600/20',
                  borderColor: 'border-blue-500/40',
                  neonColor: 'rgba(59, 130, 246, 0.6)'
                },
                { 
                  number: '2', 
                  label: 'Enterprise Roles', 
                  icon: Building2,
                  description: 'Professional experience at leading organizations - Accenture for Product Design and User Experience, BNY Mellon for Client Service.',
                  color: 'from-green-500/20 to-emerald-600/20',
                  borderColor: 'border-green-500/40',
                  neonColor: 'rgba(34, 197, 94, 0.6)'
                },
                { 
                  number: '1', 
                  label: 'Competition Winner', 
                  icon: Trophy,
                  description: 'First place winner in Design-a-thon Competition, showcasing innovative design thinking and problem-solving skills.',
                  color: 'from-yellow-500/20 to-orange-600/20',
                  borderColor: 'border-yellow-500/40',
                  neonColor: 'rgba(234, 179, 8, 0.6)',
                  isWinner: true
                },
                { 
                  number: '100%', 
                  label: 'Commitment', 
                  icon: Star,
                  description: 'Dedicated to delivering exceptional user experiences and continuous learning in design and development technologies.',
                  color: 'from-lime-500/20 to-green-600/20',
                  borderColor: 'border-lime-500/40',
                  neonColor: 'rgba(163, 230, 53, 0.6)'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  className={`relative bg-black border-2 ${stat.borderColor} rounded-xl p-6 hover:border-lime-400/60 transition-all duration-300 group cursor-pointer cyberpunk-frame overflow-hidden`}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    boxShadow: `0 0 20px ${stat.neonColor.replace('0.6', '0.2')}`
                  }}
                >
                  {/* Neon glow effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${stat.neonColor.replace('0.6', '0.1')} 0%, transparent 70%)`,
                      boxShadow: `inset 0 0 20px ${stat.neonColor.replace('0.6', '0.3')}`
                    }}
                  />
                  
                  {/* Stat Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon and Number */}
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className={`relative flex-shrink-0 w-14 h-14 bg-black border-2 ${stat.borderColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        style={{
                          boxShadow: `0 0 15px ${stat.neonColor.replace('0.6', '0.4')}`
                        }}
                      >
                        <stat.icon className="w-7 h-7 text-lime-400" />
                        
                        {/* Winner Badge */}
                        {stat.isWinner && (
                          <motion.div
                            className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-black"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Star className="w-3 h-3 text-black" />
                          </motion.div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-3xl text-lime-400 animate-lime-glow leading-none mb-1" style={{ fontWeight: 900 }}>
                          {stat.number}
                        </div>
                        <h3 className="text-white text-lg leading-tight group-hover:text-lime-400 transition-colors duration-300" style={{ fontWeight: 700 }}>
                          {stat.label}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed flex-1">
                      {stat.description}
                    </p>
                    
                    {/* Bottom Verification */}
                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <div className="flex items-center justify-between">
                        <span 
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs uppercase tracking-wide bg-black border-2 ${stat.borderColor} text-lime-400`}
                          style={{
                            boxShadow: `0 0 10px ${stat.neonColor.replace('0.6', '0.3')}`,
                            fontWeight: 600
                          }}
                        >
                          Verified
                        </span>
                        
                        {/* Verification Badge */}
                        <motion.div
                          className="w-6 h-6 bg-lime-400/20 backdrop-blur-sm border border-lime-400/30 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2 }}
                        >
                          <Award className="w-3 h-3 text-lime-400" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner Indicators */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-lime-400/60 rounded-full animate-pulse" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Large Cyberpunk Portrait */}
          <motion.div 
            variants={imageVariants}
            className="order-1 lg:order-2 relative"
          >
            {/* Large Portrait */}
            <div className="relative h-[500px] lg:h-[700px] xl:h-[800px] group">
              {/* Main Image Container */}
              <div className="relative h-full rounded-2xl overflow-hidden cyberpunk-frame">
                <ImageWithFallback
                  src="https://i.postimg.cc/C1VvW7Hs/Neon-Haloed-Portrait-in-Cyberpunk-Style.png"
                  alt="Cyberpunk Neon Portrait - Professional Designer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay with Neon Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                
                {/* Cyberpunk Corner Accents */}
                <div className="cyberpunk-accent cyberpunk-accent-tl" />
                <div className="cyberpunk-accent cyberpunk-accent-tr" />
                <div className="cyberpunk-accent cyberpunk-accent-bl" />
                <div className="cyberpunk-accent cyberpunk-accent-br" />
                
                {/* Tech Lines */}
                <div className="cyberpunk-tech-line top-1/4" />
                <div className="cyberpunk-tech-line bottom-1/4" />
                <div className="cyberpunk-tech-line-vertical left-1/4" />
                <div className="cyberpunk-tech-line-vertical right-1/4" />
                
                {/* Scanning Line Effect */}
                <motion.div
                  className="absolute inset-0 border-l-2 border-lime-400/60"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Data Overlay - Bottom */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 cyberpunk-selection-frame p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lime-400 text-lg uppercase tracking-wider" style={{ fontWeight: 700 }}>
                        Professional Status
                      </h3>
                      <p className="text-white text-sm" style={{ fontWeight: 600 }}>
                        UI/UX Designer & Developer
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="cyberpunk-status-indicator">
                        <span>ACTIVE</span>
                      </div>
                      <div className="cyberpunk-status-indicator">
                        <span>CERTIFIED</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Hexagons */}
              <motion.div
                className="absolute -top-6 -right-6 cyberpunk-hexagon"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 cyberpunk-hexagon"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 -right-4 cyberpunk-hexagon"
                style={{ transform: 'translateY(-50%) scale(0.7)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Neon Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-lime-400/20 group-hover:border-lime-400/40 transition-colors duration-500 pointer-events-none">
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(163, 230, 53, 0.3)',
                      '0 0 40px rgba(163, 230, 53, 0.5)',
                      '0 0 20px rgba(163, 230, 53, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Additional Cyberpunk Elements */}
              <div className="absolute top-6 left-6 text-lime-400 text-xs font-mono opacity-60">
                ID: CERT_2023_DESIGN
              </div>
              <div className="absolute top-6 right-6 text-lime-400 text-xs font-mono opacity-60">
                STATUS: VERIFIED
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates