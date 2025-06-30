import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  // Use the new HD image URL provided by user
  const newImageUrl = "https://i.postimg.cc/QxJb4J23/e65630d2-d194-4f4d-ad1d-3e8d7083ddee.png"

  // Split text into letters for STROKE animation (UI UX)
  const splitTextIntoStrokeLetters = (text: string) => {
    return text.split('').map((letter, index) => (
      <motion.span
        key={index}
        className="stroke-letter inline-block"
        style={{
          transformOrigin: 'center bottom',
          transformStyle: 'preserve-3d'
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))
  }

  // Split text into letters for GLOW animation (DESIGNER)
  const splitTextIntoGlowLetters = (text: string) => {
    return text.split('').map((letter, index) => (
      <motion.span
        key={index}
        className="glow-letter inline-block"
        style={{
          transformOrigin: 'center bottom',
          transformStyle: 'preserve-3d'
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))
  }

  return (
    <section id="home" ref={ref} className="relative h-screen overflow-hidden bg-black">
      <motion.div
        style={{ opacity }}
        className="relative h-full w-full"
      >
        {/* Main Content Container */}
        <div className="relative z-10 h-full max-w-[1800px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-12 h-full items-center gap-8">
            
            {/* Left Side - HELLO I'M Text - Faster animations */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-start text-left space-y-4 lg:space-y-6">
              
              {/* HELLO I'M */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white uppercase tracking-tighter leading-none"
                  style={{ 
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                    fontWeight: 900
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  HELLO
                </motion.h1>
                
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white uppercase tracking-tighter leading-none"
                  style={{ 
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                    fontWeight: 900
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  I'M
                </motion.h2>
              </motion.div>

              {/* RAJASRI - Neon Green - Faster letter animations */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tighter leading-none"
                  style={{ 
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                    fontWeight: 900,
                    color: '#a3e635'
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.7 }}
                    className="inline-block"
                  >
                    R
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.75 }}
                    className="inline-block"
                  >
                    A
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.8 }}
                    className="inline-block"
                  >
                    J
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.85 }}
                    className="inline-block"
                  >
                    A
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.9 }}
                    className="inline-block"
                  >
                    S
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.95 }}
                    className="inline-block"
                  >
                    R
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 1.0 }}
                    className="inline-block"
                  >
                    I
                  </motion.span>
                </motion.h3>
              </motion.div>
            </div>

            {/* Center - Full Portrait Image - Faster entrance */}
            <div className="col-span-12 lg:col-span-4 flex justify-center items-center relative h-full">
              <motion.div 
                className="relative w-full h-full max-w-[500px] max-h-[700px] flex items-center justify-center"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="relative w-full h-full">
                  {/* Full HD Image without clipping */}
                  <img
                    src={newImageUrl}
                    alt="Rajasri - UI/UX Designer"
                    className="w-full h-full object-cover object-center rounded-2xl shadow-2xl"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(163, 230, 53, 0.1)'
                    }}
                    crossOrigin="anonymous"
                  />
                  
                  {/* Faster glow effect around image */}
                  <motion.div
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-tr from-lime-400/10 via-transparent to-lime-400/10 rounded-2xl pointer-events-none"
                  />

                  {/* Faster floating particles around image */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-2 h-2 bg-lime-400 rounded-full"
                    animate={{ 
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0.5, 1, 0.5],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-6 -left-6 w-1.5 h-1.5 bg-white rounded-full"
                    animate={{ 
                      y: [0, 15, 0],
                      x: [0, -8, 0],
                      opacity: [0.4, 0.9, 0.4],
                      scale: [0.6, 1.4, 0.6]
                    }}
                    transition={{ 
                      duration: 2.8, 
                      delay: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <motion.div
                    className="absolute top-1/4 -left-8 w-1 h-1 bg-lime-300 rounded-full"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 3, 
                      delay: 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Side - UI UX (STROKE) & DESIGNER (GLOW) - Faster animations */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-end text-right space-y-6 lg:space-y-8">
              
              {/* UI UX DESIGNER with Mixed Effects - Faster timing */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="space-y-4 relative"
              >
                {/* Light Background Glow */}
                <div className="text-glow-bg" />

                {/* UI UX with STROKE Effect - Faster entrance */}
                <div className="relative">
                  <motion.div
                    className="text-stroke-style text-stroke-letters text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-right"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    {splitTextIntoStrokeLetters("UI UX")}
                  </motion.div>
                </div>
                
                {/* DESIGNER with GLOW Effect - Faster entrance */}
                <div className="relative">
                  <motion.div
                    className="text-glow-style text-glow-letters text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-right"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    {splitTextIntoGlowLetters("DESIGNER")}
                  </motion.div>
                </div>

                {/* Faster light particle effects */}
                <motion.div
                  className="absolute -left-6 top-1/3 w-1.5 h-1.5 bg-lime-400 rounded-full"
                  animate={{ 
                    x: [0, -10, 5, -8, 0],
                    y: [0, -8, 5, -12, 0],
                    opacity: [0, 0.8, 0.3, 0.6, 0],
                    scale: [0, 1.2, 0.6, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: 2, 
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute -right-4 bottom-1/3 w-1 h-1 bg-white rounded-full"
                  animate={{ 
                    x: [0, 8, -4, 6, 0],
                    y: [0, 8, -4, 10, 0],
                    opacity: [0, 0.6, 0.2, 0.5, 0],
                    scale: [0, 1.5, 0.4, 1.2, 0]
                  }}
                  transition={{ 
                    duration: 2.8, 
                    delay: 2.2, 
                    repeat: Infinity,
                    repeatDelay: 0.8,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Year - 2025 with Faster Light Glow Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                className="text-sm lg:text-base text-gray-500 uppercase tracking-[0.2em] relative text-right"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontWeight: 500 }}
              >
                <motion.span 
                  className="relative z-10"
                  animate={{ 
                    textShadow: [
                      '0 0 3px rgba(163, 230, 53, 0.3)',
                      '0 0 6px rgba(163, 230, 53, 0.5)',
                      '0 0 3px rgba(163, 230, 53, 0.3)'
                    ]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    delay: 2.2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  2025
                </motion.span>
                
                {/* Faster subtle glow effect for year */}
                <motion.div
                  animate={{ 
                    opacity: [0, 0.3, 0],
                    scale: [0.9, 1.1, 0.9]
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: 2.5, 
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 text-gray-400/20 blur-sm"
                >
                  2025
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Faster scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-lime-400 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero