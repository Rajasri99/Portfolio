import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Star, Satellite, UFO } from './SpaceObjects'

const CreateTogether = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden space-bg">
      {/* Background floating objects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10"
        >
          <UFO className="w-12 h-12 text-lime-400/30" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 right-20"
        >
          <Satellite className="w-10 h-10 text-lime-300/40" />
        </motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Let's Create <span className="text-lime-glow">Together</span>
            </motion.h2>
            <motion.p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to embark on a cosmic digital journey? Let's collaborate and build something extraordinary that pushes the boundaries of what's possible.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Launch Your Vision",
                description: "Transform your ideas into stunning digital experiences with cutting-edge technology"
              },
              {
                icon: <Star size="medium" />,
                title: "Stellar Performance",
                description: "Optimized, fast, and responsive solutions that deliver exceptional user experiences"
              },
              {
                icon: <Satellite className="w-8 h-8" />,
                title: "Ongoing Support",
                description: "Continuous collaboration and support to ensure your project reaches new heights"
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-lime-glow-subtle p-6 rounded-2xl backdrop-blur-sm border border-lime-400/20 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-lime-400/20 rounded-full blur-xl group-hover:bg-lime-400/30 transition-colors" />
                
                <div className="relative z-10 text-center space-y-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="mx-auto w-fit text-lime-400"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl text-lime-glow">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-16 space-y-8">
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-3xl border border-lime-400/20 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-lime-400/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-lime-400/5 rounded-full blur-xl" />
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl sm:text-3xl text-white">Ready to Start Your Mission?</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Whether you have a clear vision or just a spark of an idea, let's connect and explore the possibilities together.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <motion.button
                    onClick={scrollToContact}
                    className="group relative px-8 py-4 bg-lime-400 text-black rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ filter: 'drop-shadow(0 4px 20px rgba(163, 230, 53, 0.4))' }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <Rocket className="w-5 h-5" />
                      <span>Start Your Project</span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-lime-300"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>

                  <motion.button
                    onClick={scrollToContact}
                    className="group px-8 py-4 bg-transparent text-white border border-lime-400/30 rounded-lg hover:bg-lime-400/10 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center space-x-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Satellite className="w-5 h-5 text-lime-400" />
                      </motion.div>
                      <span>Schedule a Call</span>
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  )
}

export default CreateTogether