import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Text3DProps {
  text: string
  className?: string
  delay?: number
  staggered?: boolean
  hover?: boolean
  style?: 'normal' | 'minecraft' | 'neon-blue' | 'neon-green'
}

const Text3D: React.FC<Text3DProps> = ({ 
  text, 
  className = '', 
  delay = 0, 
  staggered = false,
  hover = false,
  style = 'normal'
}) => {
  const [letters, setLetters] = useState<string[]>([])

  useEffect(() => {
    if (staggered) {
      setLetters(text.split(''))
    }
  }, [text, staggered])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  }

  const getLetterVariants = () => {
    const transformMap = {
      'minecraft': 'perspective(800px) rotateX(-90deg) rotateY(-30deg) scale(0.5)',
      'neon-blue': 'perspective(1000px) rotateX(-90deg) rotateY(-20deg) scale(0.3)',
      'neon-green': 'perspective(1000px) rotateX(-90deg) rotateY(-15deg) scale(0.4)',
      'normal': 'perspective(1000px) rotateX(-90deg) rotateY(-30deg) scale(0.5)'
    }

    const endTransformMap = {
      'minecraft': 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
      'neon-blue': 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      'neon-green': 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      'normal': 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    }

    const blurMap = {
      'neon-blue': 'blur(15px)',
      'neon-green': 'blur(8px)',
      'minecraft': 'blur(8px)',
      'normal': 'blur(20px)'
    }

    return {
      hidden: {
        opacity: 0,
        transform: transformMap[style],
        filter: blurMap[style]
      },
      visible: {
        opacity: 1,
        transform: endTransformMap[style],
        filter: 'blur(0px)',
        transition: {
          duration: style === 'neon-green' ? 1.8 : style === 'neon-blue' ? 2 : 1.5,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }
    }
  }

  const letterVariants = getLetterVariants()

  const getTextShadow = () => {
    switch (style) {
      case 'neon-green':
        return `
          0 0 3px rgba(163, 230, 53, 0.9),
          0 0 6px rgba(163, 230, 53, 0.7),
          0 0 9px rgba(163, 230, 53, 0.5),
          0 0 12px rgba(132, 204, 22, 0.6),
          0 0 18px rgba(132, 204, 22, 0.4),
          0 0 25px rgba(132, 204, 22, 0.3),
          0 0 35px rgba(101, 163, 13, 0.4),
          0 0 50px rgba(101, 163, 13, 0.2),
          0 1px 0 rgba(183, 255, 103, 0.6),
          0 2px 0 rgba(183, 255, 103, 0.4)
        `
      case 'neon-blue':
        return `
          0 0 5px rgba(59, 130, 246, 1),
          0 0 10px rgba(59, 130, 246, 0.8),
          0 0 15px rgba(59, 130, 246, 0.6),
          0 0 20px rgba(59, 130, 246, 0.4),
          0 0 35px rgba(37, 99, 235, 0.8),
          0 0 50px rgba(37, 99, 235, 0.6),
          0 0 75px rgba(37, 99, 235, 0.4),
          0 0 100px rgba(29, 78, 216, 0.6),
          0 0 150px rgba(29, 78, 216, 0.4),
          0 0 200px rgba(29, 78, 216, 0.2),
          0 1px 0 rgba(147, 197, 253, 0.8),
          0 2px 0 rgba(147, 197, 253, 0.6),
          0 3px 0 rgba(147, 197, 253, 0.4)
        `
      case 'minecraft':
        return `
          2px 2px 0 rgba(163, 230, 53, 0.9),
          4px 4px 0 rgba(163, 230, 53, 0.8),
          6px 6px 0 rgba(163, 230, 53, 0.7),
          8px 8px 0 rgba(163, 230, 53, 0.6),
          10px 10px 0 rgba(163, 230, 53, 0.5),
          12px 12px 0 rgba(163, 230, 53, 0.4),
          14px 14px 0 rgba(163, 230, 53, 0.3),
          16px 16px 0 rgba(163, 230, 53, 0.2),
          18px 18px 0 rgba(163, 230, 53, 0.1),
          0 0 10px rgba(163, 230, 53, 0.6),
          0 0 20px rgba(163, 230, 53, 0.4),
          0 0 30px rgba(163, 230, 53, 0.2)
        `
      default:
        return `
          0 0 5px rgba(163, 230, 53, 0.6),
          0 0 10px rgba(163, 230, 53, 0.4),
          0 0 15px rgba(163, 230, 53, 0.3),
          0 0 20px rgba(163, 230, 53, 0.2),
          0 1px 0 rgba(163, 230, 53, 0.8),
          0 2px 0 rgba(163, 230, 53, 0.7),
          0 3px 0 rgba(163, 230, 53, 0.6),
          0 4px 0 rgba(163, 230, 53, 0.5),
          0 5px 0 rgba(163, 230, 53, 0.4),
          0 6px 0 rgba(163, 230, 53, 0.3),
          0 7px 0 rgba(163, 230, 53, 0.2),
          0 8px 0 rgba(163, 230, 53, 0.1),
          0 9px 10px rgba(0, 0, 0, 0.8)
        `
    }
  }

  const getBackgroundGradient = () => {
    switch (style) {
      case 'neon-blue':
        return 'linear-gradient(45deg, #3b82f6 0%, #2563eb 25%, #1d4ed8 50%, #2563eb 75%, #3b82f6 100%)'
      case 'neon-green':
      case 'minecraft':
      case 'normal':
      default:
        return 'linear-gradient(45deg, #a3e635 0%, #84cc16 25%, #65a30d 50%, #84cc16 75%, #a3e635 100%)'
    }
  }

  const getStyleClasses = () => {
    const baseClassMap = {
      'neon-green': 'text-neon-green-3d',
      'neon-blue': 'text-neon-blue-3d',
      'minecraft': 'text-minecraft-3d',
      'normal': 'text-3d-animated'
    }

    const staggerClassMap = {
      'neon-green': 'text-neon-green-stagger',
      'neon-blue': 'text-neon-blue-stagger',
      'minecraft': 'text-minecraft-stagger',
      'normal': 'text-3d-stagger'
    }

    const hoverClassMap = {
      'neon-green': 'text-neon-green-hover',
      'neon-blue': 'text-neon-blue-hover',
      'minecraft': 'text-minecraft-hover',
      'normal': 'text-3d-hover'
    }

    return {
      base: baseClassMap[style],
      stagger: staggerClassMap[style],
      hover: hoverClassMap[style]
    }
  }

  const styleClasses = getStyleClasses()

  const getStyleProps = () => {
    const baseProps = {
      background: getBackgroundGradient(),
      backgroundSize: '200% 200%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: getTextShadow()
    }

    switch (style) {
      case 'neon-green':
        return {
          ...baseProps,
          fontWeight: 800,
          letterSpacing: '2px'
        }
      case 'neon-blue':
        return {
          ...baseProps,
          fontWeight: 900,
          letterSpacing: '3px'
        }
      case 'minecraft':
        return {
          ...baseProps,
          fontFamily: "monospace, 'Courier New', monospace",
          fontWeight: 'bold',
          letterSpacing: '2px',
          imageRendering: 'pixelated' as const
        }
      default:
        return baseProps
    }
  }

  if (staggered) {
    return (
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`text-3d-container ${styleClasses.stagger} ${className} ${hover ? styleClasses.hover : ''}`}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`letter ${styleClasses.base}`}
            data-text={letter}
            style={{
              display: 'inline-block',
              ...getStyleProps()
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  const getInitialTransform = () => {
    switch (style) {
      case 'neon-green':
        return 'perspective(1000px) rotateX(-90deg) rotateY(-15deg) scale(0.4)'
      case 'neon-blue':
        return 'perspective(1000px) rotateX(-90deg) rotateY(-20deg) scale(0.3)'
      case 'minecraft':
        return 'perspective(800px) rotateX(-90deg) rotateY(-30deg) scale(0.5)'
      default:
        return 'perspective(1000px) rotateX(-90deg) rotateY(-30deg) scale(0.5)'
    }
  }

  const getFinalTransform = () => {
    switch (style) {
      case 'neon-green':
        return 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
      case 'neon-blue':
        return 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
      case 'minecraft':
        return 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
      default:
        return 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
  }

  const getBlurAmount = () => {
    switch (style) {
      case 'neon-green':
        return 'blur(8px)'
      case 'neon-blue':
        return 'blur(15px)'
      case 'minecraft':
        return 'blur(8px)'
      default:
        return 'blur(20px)'
    }
  }

  const getDuration = () => {
    switch (style) {
      case 'neon-green':
        return 2
      case 'neon-blue':
        return 2.5
      default:
        return 2
    }
  }

  return (
    <motion.span
      initial={{
        opacity: 0,
        transform: getInitialTransform(),
        filter: getBlurAmount()
      }}
      animate={{
        opacity: 1,
        transform: getFinalTransform(),
        filter: 'blur(0px)'
      }}
      transition={{
        duration: getDuration(),
        delay: delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      className={`${styleClasses.base} ${className} ${hover ? styleClasses.hover : ''}`}
      data-text={text}
      style={getStyleProps()}
    >
      {text}
    </motion.span>
  )
}

export default Text3D