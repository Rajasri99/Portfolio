import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' }, // Routes to ProjectDetails section
    { name: 'CONTACT', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Logo/Brand with Enhanced Neon Effect */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                filter: "drop-shadow(0 0 12px rgba(163, 230, 53, 0.8))"
              }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer relative group"
              onClick={() => scrollToSection('#home')}
            >
              <span 
                className="text-2xl lg:text-3xl tracking-tight uppercase relative z-10"
                style={{ 
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                  fontWeight: 900,
                  color: '#a3e635'
                }}
              >
                R
              </span>
              
              {/* Multiple layer neon effects */}
              <motion.div
                className="absolute inset-0 bg-lime-400/10 rounded-full scale-150 -z-10 blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="absolute inset-0 bg-lime-400/5 rounded-full scale-200 -z-20 blur-md"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
            </motion.div>

            {/* Desktop Menu with Advanced Neon Effects */}
            <div className="hidden md:flex items-center space-x-12 lg:space-x-16">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`
                    neon-menu-item relative text-white/90 hover:text-white 
                    transition-all duration-300 tracking-wider group uppercase text-sm lg:text-base 
                    px-4 py-2 rounded-lg overflow-hidden
                  `}
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontWeight: 500 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Energy Background Effect */}
                  <div className="neon-menu-energy" />
                  
                  {/* Animated Underline */}
                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        className="neon-menu-underline"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: '100%', opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Floating Particles */}
                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div 
                        className="neon-menu-particles"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Side Glow Effects */}
                  <motion.div
                    className="absolute -left-2 top-1/2 w-1 h-4 bg-lime-400 rounded-full opacity-0"
                    animate={{ 
                      opacity: hoveredItem === item.name ? [0, 1, 0] : 0,
                      scale: hoveredItem === item.name ? [0.5, 1, 0.5] : 0.5,
                      x: hoveredItem === item.name ? [0, -2, 0] : 0
                    }}
                    transition={{ duration: 0.6, repeat: hoveredItem === item.name ? Infinity : 0 }}
                  />
                  
                  <motion.div
                    className="absolute -right-2 top-1/2 w-1 h-4 bg-lime-400 rounded-full opacity-0"
                    animate={{ 
                      opacity: hoveredItem === item.name ? [0, 1, 0] : 0,
                      scale: hoveredItem === item.name ? [0.5, 1, 0.5] : 0.5,
                      x: hoveredItem === item.name ? [0, 2, 0] : 0
                    }}
                    transition={{ duration: 0.6, delay: 0.1, repeat: hoveredItem === item.name ? Infinity : 0 }}
                  />
                  
                  {/* Pulsing Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/10 to-lime-400/0 rounded-lg -z-10"
                    animate={{ 
                      opacity: hoveredItem === item.name ? [0, 0.6, 0] : 0,
                      scale: hoveredItem === item.name ? [0.8, 1.1, 0.8] : 0.8
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: hoveredItem === item.name ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button with Enhanced Effects */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-white hover:text-lime-400 transition-all duration-300 relative rounded-lg overflow-hidden"
              aria-label="Toggle mobile menu"
              whileHover={{ 
                scale: 1.1,
                filter: "drop-shadow(0 0 8px rgba(163, 230, 53, 0.6))"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Mobile button enhanced glow effect */}
              <motion.div
                className="absolute inset-0 bg-lime-400/10 rounded-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1,
                  boxShadow: "0 0 20px rgba(163, 230, 53, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay with Enhanced Effects */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Enhanced Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-lg"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content with Neon Effects */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-black/98 backdrop-blur-xl border-l border-lime-400/20 relative overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-lime-400/5 via-transparent to-lime-400/5 pointer-events-none" />
              
              <div className="flex flex-col justify-center h-full px-8 space-y-12 relative z-10">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-2xl text-white hover:text-lime-400 transition-all duration-300 tracking-wider group uppercase relative overflow-hidden rounded-lg p-4"
                    style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontWeight: 500 }}
                    whileHover={{ 
                      scale: 1.05,
                      x: 10,
                      filter: "drop-shadow(0 0 8px rgba(163, 230, 53, 0.6))"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">
                      {item.name}
                    </span>
                    
                    {/* Mobile menu enhanced glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/15 to-lime-400/0 rounded-lg -z-10"
                      initial={{ opacity: 0, x: -50 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Animated underline for mobile */}
                    <motion.div
                      className="absolute bottom-2 left-4 h-0.5 bg-lime-400 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: 'calc(100% - 2rem)' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation