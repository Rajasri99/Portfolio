import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Toaster } from 'sonner'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SkillsStrip from './components/SkillsStrip'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import { Star, Astronaut, Planet, LimeOrb } from './components/SpaceObjects'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showSkillsStrip, setShowSkillsStrip] = useState(false)

  useEffect(() => {
    // Reduced loading time from 3s to 1s
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Show SkillsStrip after Hero animations complete
    // RAJASRI text finishes at 1.2s + page animation 0.8s = 2.0s total
    // Adding small buffer for smooth appearance
    if (!isLoading) {
      const stripTimer = setTimeout(() => {
        setShowSkillsStrip(true)
      }, 1400) // 1.4s after loading completes (RAJASRI finishes at ~1.2s)

      return () => clearTimeout(stripTimer)
    }
  }, [isLoading])

  const loadingVariants = {
    initial: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const LoadingScreen = () => (
    <motion.div
      variants={loadingVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black z-50 flex items-center justify-center space-bg"
    >
      <div className="text-center space-y-6 relative">
        {/* Faster floating space objects during loading */}
        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, -15, 0]
          }}
          transition={{ 
            rotate: { duration: 2.5, repeat: Infinity, ease: "linear" },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-16 -left-16"
        >
          <Astronaut className="w-10 h-10 text-lime-400/60" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, 25, 0]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            x: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-12 -right-12"
        >
          <Planet className="w-8 h-8 text-lime-300/50" />
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -bottom-12 -left-8"
        >
          <LimeOrb />
        </motion.div>

        {/* Faster main loading content */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 mx-auto relative"
        >
          <div className="w-full h-full border-2 border-lime-400 rounded-full border-t-transparent animate-spin" 
               style={{ 
                 filter: 'drop-shadow(0 0 10px rgba(163, 230, 53, 0.5))',
                 animationDuration: '0.8s'
               }} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 flex items-center justify-center"
          >
            <Star size="medium" className="text-lime-400 animate-lime-glow" />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-2"
        >
          <p className="text-lg tracking-wide text-white">
            Initializing <span className="text-lime-glow">Space Experience</span>...
          </p>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="text-sm text-gray-400"
          >
            Connecting to cosmic frequencies
          </motion.p>
        </motion.div>

        {/* Faster loading progress stars */}
        <motion.div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: i * 0.1,
                duration: 0.3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Star 
                size="small" 
                className={i % 2 === 0 ? "text-lime-400" : "text-white"}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen space-bg">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="main" className="overflow-x-hidden">
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
            >
              <Navigation />
              <Hero />
            </motion.div>
            
            {/* SkillsStrip appears only after RAJASRI popup completes */}
            <AnimatePresence>
              {showSkillsStrip && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <SkillsStrip />
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.main
              variants={pageVariants}
              initial="initial"
              animate="animate"
            >
              <About />
              <Projects />
              <Certificates />
              <Contact />
            </motion.main>
          </div>
        )}
      </AnimatePresence>

      {/* Toast notifications with cosmic theme */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            border: '1px solid rgba(163, 230, 53, 0.3)',
            color: '#a3e635',
            backdropFilter: 'blur(10px)',
          },
          className: 'cosmic-toast',
        }}
      />
    </div>
  )
}