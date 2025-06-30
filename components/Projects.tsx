import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Calendar, 
  Clock,
  ExternalLink,
  Users,
  Award,
  Eye,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)

  // Behance portfolio link
  const portfolioLink = "https://www.behance.net/gallery/228837467/Task-Management"

  const handleViewProject = () => {
    window.open(portfolioLink, '_blank', 'noopener,noreferrer')
  }

  const projects = [
    {
      id: 1,
      title: "Digital Envelope Budgeting",
      company: "Wiseant - Jarvis Software",
      category: "Fintech App",
      duration: "2 months",
      period: "Aug 2023 - Oct 2023",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      techStack: ["Figma", "Prototyping", "User Research", "UI/UX Design", "Mobile Design"],
      description: "Led the complete design of the Digital Envelope Budgeting feature that enables users to allocate funds into virtual spending categories with clarity and ease.",
      keyFeatures: [
        "Intuitive envelope-based budget allocation system",
        "Real-time spending tracking and notifications", 
        "Interactive GIFs for better user engagement"
      ],
      role: "Lead UI/UX Designer"
    },
    {
      id: 2,
      title: "Agnikul Internal Tools Suite",
      company: "Agnikul Cosmos Pvt. Ltd.",
      category: "Enterprise Systems",
      duration: "15+ months",
      period: "Oct 2023 - Present",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2128&q=80",
      techStack: ["Figma", "Design Systems", "Enterprise UX", "Dashboard Design", "Responsive Design"],
      description: "Led end-to-end design for 15+ digital products tailored for internal tools and operational systems in the aerospace industry.",
      keyFeatures: [
        "Unified design system across all internal tools",
        "Real-time fleet management dashboard",
        "Comprehensive safety monitoring systems"
      ],
      role: "UI/UX Designer"
    },
    {
      id: 3,
      title: "HealthFlow Mobile App",
      company: "MedTech Solutions",
      category: "Healthcare Platform",
      duration: "3 months",
      period: "Feb 2023 - May 2023",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      techStack: ["Figma", "User Testing", "Health UX", "Accessibility Design", "Cross-platform"],
      description: "Designed a comprehensive healthcare app that connects patients with healthcare providers, featuring appointment scheduling, health tracking, and telemedicine capabilities.",
      keyFeatures: [
        "Seamless appointment booking and management",
        "Integrated health monitoring and data visualization",
        "HIPAA-compliant secure messaging system"
      ],
      role: "UI/UX Designer"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  // Calculate positions for the three projects with better visibility
  const getCardTransform = (index: number, currentIndex: number) => {
    const diff = index - currentIndex
    const totalProjects = projects.length
    
    if (diff === 0) {
      // Active card - center position
      return {
        x: 0,
        y: 0,
        scale: 1,
        zIndex: 10,
        opacity: 1,
        rotateY: 0,
        filter: "blur(0px)"
      }
    } else {
      // Background cards - much more visible now
      let xPos, yPos, rotation
      
      if (diff === 1 || diff === -(totalProjects - 1)) {
        // Next card (right side)
        xPos = 120  // Reduced from 150
        yPos = 20   // Reduced from 30
        rotation = -15  // Reduced from -20
      } else if (diff === -1 || diff === (totalProjects - 1)) {
        // Previous card (left side)
        xPos = -120  // Reduced from -150
        yPos = 20    // Reduced from 30
        rotation = 15   // Reduced from 20
      } else {
        // Other cards (further back)
        xPos = diff > 0 ? 160 : -160  // Reduced from 200
        yPos = 40
        rotation = diff > 0 ? -25 : 25  // Reduced from -30/30
      }
      
      return {
        x: xPos,
        y: yPos,
        scale: 0.8,      // Increased from 0.75
        zIndex: 1,
        opacity: 0.75,   // Increased from 0.4 for much better visibility
        rotateY: rotation,
        filter: "blur(2px)"  // Reduced from blur(5px)
      }
    }
  }

  return (
    <section id="projects" ref={ref} className="relative min-h-screen bg-black py-20">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        
        {/* Section Header - Moved down a bit more */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6"
            style={{ 
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 900
            }}
          >
            Featured{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{ 
                background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text'
              }}
            >
              Projects
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-lime-400 to-lime-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Much Smaller Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Cards Stack - Further reduced height */}
          <div className="relative h-[500px] flex items-center justify-center perspective-1000">
            
            {projects.map((project, index) => {
              const transform = getCardTransform(index, currentSlide)
              const isActive = index === currentSlide
              
              return (
                <motion.div
                  key={project.id}
                  className="absolute w-full max-w-xl"
                  animate={transform}
                  transition={{
                    duration: 0.6,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div 
                    className={`backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                      isActive 
                        ? 'border-lime-400/30 bg-black' 
                        : 'border-gray-700/30 bg-gray-900/60'
                    }`}
                    style={{
                      filter: transform.filter
                    }}
                  >
                    
                    {/* Much Smaller Layout: Image on Top, Content Below */}
                    <div className="flex flex-col h-full">
                      
                      {/* Top - Project Image - Much smaller */}
                      <div className="relative h-32 md:h-40 overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Image overlay for non-active cards - lighter overlay */}
                        {!isActive && (
                          <div className="absolute inset-0 bg-black/40" />
                        )}

                        {/* Category Badge - Floating on Image */}
                        <div className="absolute top-3 right-3">
                          <div className="px-2 py-1 bg-black/80 border border-gray-600/30 rounded-full backdrop-blur-sm">
                            <span className="text-gray-300 text-xs">{project.category}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom - Project Info - Much smaller padding */}
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        
                        {/* Project Title */}
                        <div>
                          <h3 className="text-xl lg:text-2xl text-white font-bold mb-1 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-lime-400 text-base font-semibold mb-2">
                            {project.company}
                          </p>
                        </div>
                        
                        {/* Description - Only show for active card */}
                        {isActive && (
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        )}
                        
                        {/* Meta Info - Only show for active card */}
                        {isActive && (
                          <div className="flex flex-wrap items-center gap-3 text-gray-400 text-xs">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-lime-400" />
                              <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-lime-400" />
                              <span>{project.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3 text-lime-400" />
                              <span>{project.role}</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Tech Stack - Only show for active card, smaller */}
                        {isActive && (
                          <div>
                            <h4 className="text-white text-sm font-semibold mb-2 flex items-center gap-1">
                              <Award className="w-3 h-3 text-lime-400" />
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {project.techStack.slice(0, 3).map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-white text-xs font-medium hover:bg-lime-400/10 hover:border-lime-400/30 transition-all duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* View Project Button - Only show for active card, smaller */}
                        {isActive && (
                          <div className="pt-2">
                            <motion.button
                              onClick={handleViewProject}
                              className="flex items-center gap-2 px-4 py-2 bg-lime-400 text-black rounded-xl text-sm font-semibold hover:bg-lime-500 transition-all duration-300 group shadow-lg"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Eye className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                              View Project
                              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </motion.button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Navigation Arrows - Smaller */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-lime-400 rounded-full text-black hover:bg-lime-500 transition-all duration-300 group shadow-xl flex items-center justify-center"
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-lime-400 rounded-full text-black hover:bg-lime-500 transition-all duration-300 group shadow-xl flex items-center justify-center"
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Pagination Indicator - Smaller and simplified */}
          <div className="flex justify-center items-center mt-8 gap-3">
            
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-lime-400 shadow-lg shadow-lime-400/50 w-6'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            {/* Project Counter - Smaller */}
            <div className="flex items-center gap-2 px-2 py-1 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-white text-xs font-medium">
              <span className="text-base font-bold text-lime-400">{currentSlide + 1}</span>
              <div className="w-3 h-px bg-gray-600" />
              <span className="text-gray-400">{projects.length}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects