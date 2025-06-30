'use client'

import { motion } from 'framer-motion'

export const Astronaut = ({ className = "", ...props }) => (
  <motion.svg
    className={`w-16 h-16 ${className}`}
    viewBox="0 0 100 100"
    fill="currentColor"
    {...props}
  >
    {/* Astronaut helmet */}
    <circle cx="50" cy="35" r="18" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="50" cy="35" r="15" fill="rgba(163, 230, 53, 0.1)"/>
    
    {/* Astronaut body */}
    <ellipse cx="50" cy="60" rx="12" ry="15" fill="currentColor"/>
    
    {/* Arms */}
    <ellipse cx="35" cy="55" rx="6" ry="12" fill="currentColor" transform="rotate(-20 35 55)"/>
    <ellipse cx="65" cy="55" rx="6" ry="12" fill="currentColor" transform="rotate(20 65 55)"/>
    
    {/* Legs */}
    <ellipse cx="45" cy="80" rx="5" ry="10" fill="currentColor"/>
    <ellipse cx="55" cy="80" rx="5" ry="10" fill="currentColor"/>
    
    {/* Helmet reflection with lime tint */}
    <ellipse cx="45" cy="30" rx="8" ry="10" fill="rgba(163, 230, 53, 0.3)"/>
    
    {/* Lime accent lights */}
    <circle cx="50" cy="65" r="2" fill="#a3e635"/>
    <circle cx="50" cy="70" r="1.5" fill="#a3e635"/>
  </motion.svg>
)

export const Planet = ({ className = "", ...props }) => (
  <motion.svg
    className={`w-12 h-12 ${className}`}
    viewBox="0 0 100 100"
    fill="currentColor"
    {...props}
  >
    <circle cx="50" cy="50" r="25" fill="currentColor"/>
    <circle cx="50" cy="50" r="20" fill="rgba(163, 230, 53, 0.2)"/>
    <ellipse cx="50" cy="50" rx="35" ry="8" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="45" cy="45" r="3" fill="rgba(163, 230, 53, 0.6)"/>
    <circle cx="55" cy="35" r="2" fill="rgba(163, 230, 53, 0.4)"/>
    <circle cx="42" cy="55" r="1.5" fill="#a3e635"/>
  </motion.svg>
)

export const UFO = ({ className = "", ...props }) => (
  <motion.svg
    className={`w-14 h-14 ${className}`}
    viewBox="0 0 100 100"
    fill="currentColor"
    {...props}
  >
    {/* UFO body */}
    <ellipse cx="50" cy="45" rx="25" ry="8" fill="currentColor"/>
    <ellipse cx="50" cy="40" rx="15" ry="10" fill="rgba(163, 230, 53, 0.3)"/>
    
    {/* UFO lights */}
    <circle cx="35" cy="45" r="2" fill="#a3e635"/>
    <circle cx="50" cy="47" r="2" fill="#a3e635"/>
    <circle cx="65" cy="45" r="2" fill="#a3e635"/>
    
    {/* Beam with lime color */}
    <path d="M40 53 L35 70 L65 70 L60 53 Z" fill="rgba(163, 230, 53, 0.2)"/>
    
    {/* Additional lime accents */}
    <circle cx="50" cy="40" r="3" fill="rgba(163, 230, 53, 0.4)"/>
  </motion.svg>
)

export const Moon = ({ className = "", ...props }) => (
  <motion.svg
    className={`w-10 h-10 ${className}`}
    viewBox="0 0 100 100"
    fill="currentColor"
    {...props}
  >
    <circle cx="50" cy="50" r="20" fill="currentColor"/>
    <circle cx="45" cy="45" r="3" fill="rgba(0,0,0,0.3)"/>
    <circle cx="55" cy="40" r="2" fill="rgba(0,0,0,0.2)"/>
    <circle cx="50" cy="55" r="2.5" fill="rgba(0,0,0,0.2)"/>
    <circle cx="40" cy="55" r="1.5" fill="rgba(0,0,0,0.2)"/>
    {/* Lime glow effect */}
    <circle cx="50" cy="50" r="22" fill="none" stroke="rgba(163, 230, 53, 0.2)" strokeWidth="1"/>
  </motion.svg>
)

export const Rocket = ({ className = "", ...props }) => (
  <motion.svg
    className={`w-12 h-12 ${className}`}
    viewBox="0 0 100 100"
    fill="currentColor"
    {...props}
  >
    {/* Rocket body */}
    <ellipse cx="50" cy="60" rx="8" ry="25" fill="currentColor"/>
    {/* Rocket tip */}
    <path d="M42 35 L50 20 L58 35 Z" fill="currentColor"/>
    {/* Rocket fins */}
    <path d="M42 75 L35 85 L42 85 Z" fill="currentColor"/>
    <path d="M58 75 L65 85 L58 85 Z" fill="currentColor"/>
    {/* Window */}
    <circle cx="50" cy="50" r="4" fill="rgba(163, 230, 53, 0.4)"/>
    {/* Flames with lime accents */}
    <ellipse cx="50" cy="90" rx="6" ry="8" fill="rgba(163, 230, 53, 0.3)"/>
    <ellipse cx="50" cy="88" rx="4" ry="6" fill="#a3e635"/>
    
    {/* Lime accent lights */}
    <circle cx="45" cy="65" r="1" fill="#a3e635"/>
    <circle cx="55" cy="65" r="1" fill="#a3e635"/>
  </motion.svg>
)

export const Satellite = ({ className = "", ...props }) => (
  <motion.svg
    className={`w-14 h-14 ${className}`}
    viewBox="0 0 100 100"
    fill="currentColor"
    {...props}
  >
    {/* Satellite body */}
    <rect x="40" y="40" width="20" height="15" fill="currentColor"/>
    {/* Solar panels with lime tint */}
    <rect x="25" y="42" width="12" height="11" fill="rgba(163, 230, 53, 0.4)"/>
    <rect x="63" y="42" width="12" height="11" fill="rgba(163, 230, 53, 0.4)"/>
    {/* Antenna */}
    <line x1="50" y1="40" x2="50" y2="30" stroke="currentColor" strokeWidth="2"/>
    <circle cx="50" cy="30" r="3" fill="#a3e635"/>
    
    {/* Additional lime lights */}
    <circle cx="45" cy="47" r="1.5" fill="#a3e635"/>
    <circle cx="55" cy="47" r="1.5" fill="#a3e635"/>
  </motion.svg>
)

export const Star = ({ className = "", size = "small", ...props }) => {
  const sizeClasses = {
    small: "w-2 h-2",
    medium: "w-3 h-3", 
    large: "w-4 h-4"
  }
  
  return (
    <motion.svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 100 100"
      fill="currentColor"
      {...props}
    >
      <path d="M50 0 L61 39 L100 39 L69 61 L80 100 L50 78 L20 100 L31 61 L0 39 L39 39 Z"/>
    </motion.svg>
  )
}

export const Meteor = ({ className = "", ...props }) => (
  <motion.svg
    className={`w-8 h-8 ${className}`}
    viewBox="0 0 100 100"
    fill="currentColor"
    {...props}
  >
    <circle cx="70" cy="30" r="8" fill="currentColor"/>
    <path d="M62 38 L10 90 L15 95 L67 43 Z" fill="rgba(163, 230, 53, 0.6)"/>
    <path d="M58 42 L20 80 L25 85 L63 47 Z" fill="rgba(163, 230, 53, 0.8)"/>
    <path d="M64 36 L25 75 L28 78 L67 39 Z" fill="#a3e635"/>
  </motion.svg>
)

// New lime-themed space objects
export const LimeOrb = ({ className = "", ...props }) => (
  <motion.svg
    className={`w-8 h-8 ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <circle cx="50" cy="50" r="20" fill="#a3e635" opacity="0.8"/>
    <circle cx="50" cy="50" r="15" fill="rgba(163, 230, 53, 0.6)"/>
    <circle cx="50" cy="50" r="10" fill="rgba(163, 230, 53, 0.4)"/>
    <circle cx="50" cy="50" r="5" fill="#a3e635"/>
  </motion.svg>
)

export const LimeRing = ({ className = "", ...props }) => (
  <motion.svg
    className={`w-16 h-16 ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <circle cx="50" cy="50" r="25" stroke="#a3e635" strokeWidth="3" fill="none" opacity="0.8"/>
    <circle cx="50" cy="50" r="20" stroke="rgba(163, 230, 53, 0.6)" strokeWidth="2" fill="none"/>
    <circle cx="50" cy="50" r="15" stroke="rgba(163, 230, 53, 0.4)" strokeWidth="1" fill="none"/>
  </motion.svg>
)