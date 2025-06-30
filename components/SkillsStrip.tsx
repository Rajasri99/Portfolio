import { motion } from 'framer-motion'

const SkillsStrip = () => {
  const stripText = [
    'UI/UX Designer',
    'Rajasri',
    'UI/UX Designer', 
    'Rajasri',
    'UI/UX Designer',
    'Rajasri',
    'UI/UX Designer',
    'Rajasri'
  ]

  // Triple for seamless infinite loop
  const infiniteText = [...stripText, ...stripText, ...stripText]

  return (
    <div className="relative w-full h-20 overflow-hidden bg-black">
      
      {/* Horizontal Strip - Starts immediately */}
      <div className="absolute inset-0 flex items-center overflow-hidden">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop'
          }}
          className="flex items-center space-x-20 whitespace-nowrap"
          style={{ 
            width: 'max-content'
          }}
        >
          {infiniteText.map((text, index) => (
            <div key={index} className="flex items-center space-x-20">
              <span 
                className="text-lg md:text-xl lg:text-2xl tracking-wide uppercase select-none"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: 800,
                  color: '#a3e635'
                }}
              >
                {text}
              </span>
              
              <span 
                className="text-lg text-lime-400"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif"
                }}
              >
                ★
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsStrip