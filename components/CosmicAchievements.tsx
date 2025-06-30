import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Rocket, Planet, UFO, Satellite, LimeOrb } from './SpaceObjects'

const CosmicAchievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const achievements = [
    {
      title: "Stellar Projects",
      value: "50+",
      description: "Successfully launched digital experiences",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-lime-400 to-lime-500"
    },
    {
      title: "Happy Clients",
      value: "15+",
      description: "Satisfied cosmic travelers",
      icon: <Star size="medium" />,
      color: "from-lime-300 to-lime-400"
    },
    {
      title: "Code Commits",
      value: "2,500+",
      description: "Lines of cosmic code written",
      icon: <UFO className="w-6 h-6" />,
      color: "from-lime-500 to-lime-600"
    },
    {
      title: "Years Experience",
      value: "3+",
      description: "Exploring the digital universe",
      icon: <Planet className="w-6 h-6" />,
      color: "from-lime-200 to-lime-300"
    }
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="achievements" ref={ref} className="py-20 lg:py-32 relative overflow-hidden space-bg">
      {/* Background floating objects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10"
        >
          <Satellite className="w-16 h-16 text-lime-400/20" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 right-16"
        >
          <UFO className="w-12 h-12 text-lime-300/30" />
        </motion.div>

        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 2 + i * 0.3, duration: 1 }}
            className="absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4 + Math.random() * 2, 
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <LimeOrb />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Cosmic <span className="text-lime-glow">Achievements</span>
            </motion.h2>
            <motion.p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Milestones reached in my journey through the digital cosmos, each one marking significant progress in creating extraordinary experiences.
            </motion.p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={cardVariants}
                className="relative group"
              >
                {/* Main Card */}
                <motion.div
                  className="bg-lime-glow-subtle p-6 lg:p-8 rounded-3xl backdrop-blur-sm border border-lime-400/20 relative overflow-hidden h-full"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background glow effects */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-lime-400/20 rounded-full blur-xl group-hover:bg-lime-400/30 transition-colors" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-lime-400/10 rounded-full blur-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center space-y-4">
                    {/* Icon */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className={`mx-auto w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform`}
                      style={{ filter: 'drop-shadow(0 4px 15px rgba(163, 230, 53, 0.3))' }}
                    >
                      {achievement.icon}
                    </motion.div>
                    
                    {/* Value */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      className="text-3xl lg:text-4xl text-lime-glow"
                    >
                      {achievement.value}
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-lg lg:text-xl text-white group-hover:text-lime-300 transition-colors">
                      {achievement.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          y: [0, -30, -60],
                          x: [0, Math.random() * 20 - 10]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                        style={{
                          left: `${30 + Math.random() * 40}%`
                        }}
                      >
                        <div className="w-1 h-1 bg-lime-400 rounded-full" 
                             style={{ filter: 'blur(0.5px) drop-shadow(0 0 3px rgba(163, 230, 53, 0.8))' }} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Orbital ring effect */}
                <motion.div
                  className="absolute inset-0 border border-lime-400/20 rounded-3xl pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: `conic-gradient(from 0deg, transparent, rgba(163, 230, 53, 0.1), transparent)`
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-black/60 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-lime-400/20 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lime-400/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Star size="medium" className="text-lime-400" />
                  </motion.div>
                  <h3 className="text-xl lg:text-2xl text-lime-glow">Mission Status: Active</h3>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-lime-400 rounded-full"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(163, 230, 53, 0.8))' }}
                  />
                </div>
                
                <p className="text-gray-300 max-w-2xl mx-auto">
                  The journey continues as I explore new frontiers in web development, 
                  pushing the boundaries of what's possible in the digital cosmos.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  {['React Expert', 'TypeScript Ninja', 'Animation Master', 'UI/UX Enthusiast'].map((badge, index) => (
                    <motion.span
                      key={badge}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 1 }}
                      className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-sm border border-lime-400/30"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced cosmic background effects */}
      <motion.div
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.5, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  )
}

export default CosmicAchievements