import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Astronaut, Planet, UFO, Rocket, Star, LimeOrb } from './SpaceObjects'
import { ImageWithFallback } from './figma/ImageWithFallback'

// Project images - Direct Unsplash links
const projectImages = {
  cosmicAnalytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80",
  stellarSocial: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80",
  quantumLearning: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80",
  nebulaMobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80",
  galacticCommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80"
}

interface Project {
  id: number
  title: string
  subtitle: string
  year: string
  rating: string
  duration: string
  description: string
  technologies: string[]
  mainImage: string
  thumbnail: string
  demoUrl?: string
  githubUrl?: string
}

const ProjectDetails = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-COMMERCE REDESIGN",
      subtitle: "Complete UX/UI Overhaul",
      year: "2024",
      rating: "98%",
      duration: "6 Month Project",
      description: "A comprehensive redesign of an e-commerce platform focusing on user experience improvements, conversion optimization, and modern design principles. Increased user engagement by 45% and conversion rates by 32%.",
      technologies: ["Figma", "Principle", "Adobe XD", "Sketch"],
      mainImage: projectImages.cosmicAnalytics,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
      demoUrl: "https://example.com/ecommerce-redesign",
      githubUrl: "https://github.com/rajasri/ecommerce-redesign"
    },
    {
      id: 2,
      title: "MOBILE BANKING APP",
      subtitle: "Fintech UI/UX Design",
      year: "2024",
      rating: "95%",
      duration: "4 Month Project",
      description: "Designed a user-friendly mobile banking application with focus on security, accessibility, and seamless user experience. Features include biometric authentication and intuitive navigation.",
      technologies: ["Figma", "Principle", "InVision", "Zeplin"],
      mainImage: projectImages.stellarSocial,
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
      demoUrl: "https://example.com/banking-app",
      githubUrl: "https://github.com/rajasri/banking-app"
    },
    {
      id: 3,
      title: "LEARNING PLATFORM",
      subtitle: "Educational App Design",
      year: "2023",
      rating: "92%",
      duration: "5 Month Project",
      description: "Created an engaging learning platform for students with interactive course materials, progress tracking, and gamification elements to enhance the learning experience.",
      technologies: ["Adobe XD", "Figma", "After Effects", "Sketch"],
      mainImage: projectImages.quantumLearning,
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
      demoUrl: "https://example.com/learning-platform",
      githubUrl: "https://github.com/rajasri/learning-platform"
    },
    {
      id: 4,
      title: "HEALTHCARE DASHBOARD",
      subtitle: "Medical Data Visualization",
      year: "2023",
      rating: "89%",
      duration: "3 Month Project",
      description: "Designed a comprehensive healthcare dashboard for medical professionals to track patient data, appointments, and medical records with intuitive data visualization.",
      technologies: ["Figma", "Principle", "Adobe Creative Suite"],
      mainImage: projectImages.nebulaMobile,
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
      demoUrl: "https://example.com/healthcare-dashboard",
      githubUrl: "https://github.com/rajasri/healthcare-dashboard"
    },
    {
      id: 5,
      title: "TRAVEL BOOKING SYSTEM",
      subtitle: "Tourism Platform Design",
      year: "2022",
      rating: "87%",
      duration: "4 Month Project",
      description: "Comprehensive travel booking platform with advanced search filters, booking management, and travel planning tools designed for seamless user experience.",
      technologies: ["Sketch", "InVision", "Principle", "Figma"],
      mainImage: projectImages.galacticCommerce,
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
      demoUrl: "https://example.com/travel-booking",
      githubUrl: "https://github.com/rajasri/travel-booking"
    }
  ]

  const [selectedProject, setSelectedProject] = useState<Project>(projects[0])
  const otherProjects = projects.filter(p => p.id !== selectedProject.id).slice(0, 4)

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const featuredProjectVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    },
    exit: { 
      opacity: 0, 
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  }

  return (
    <section id="project-details" className="min-h-screen bg-black relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center py-16 space-y-6 relative z-10">
          <motion.div className="inline-flex items-center space-x-2 bg-lime-400/10 px-4 py-2 rounded-full border border-lime-400/20">
            <Star size="small" className="text-lime-400" />
            <span className="text-sm text-lime-400">Design Portfolio</span>
          </motion.div>
          
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
            Featured <span className="text-lime-glow">Projects</span>
          </motion.h2>
        </motion.div>

        {/* Main Content - Full Width */}
        <div className="px-6 lg:px-16">
          {/* Featured Project Hero Section */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedProject.id}
              variants={featuredProjectVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative h-[70vh] rounded-3xl overflow-hidden mb-12"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={selectedProject.mainImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-3xl px-12 space-y-6">
                  {/* Platform Badge */}
                  <motion.div 
                    className="inline-flex items-center space-x-2 bg-lime-400/20 px-3 py-1 rounded border border-lime-400/30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <Star size="small" className="text-lime-400" />
                    <span className="text-lime-400 text-sm">UI/UX PROJECT</span>
                  </motion.div>

                  {/* Title */}
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                      {selectedProject.title}
                    </h1>
                    <p className="text-2xl text-lime-400">
                      {selectedProject.subtitle}
                    </p>
                  </motion.div>

                  {/* Meta Information */}
                  <motion.div 
                    className="flex items-center space-x-4 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="bg-lime-400/20 px-3 py-1 rounded text-lime-400 border border-lime-400/30">
                      {selectedProject.rating}
                    </span>
                    <span className="text-gray-300">{selectedProject.year}</span>
                    <span className="text-gray-300">{selectedProject.duration}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-gray-300">Tools:</span>
                      <span className="text-lime-400">{selectedProject.technologies.slice(0, 2).join(', ')}</span>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-300 text-lg leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {selectedProject.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="text-lime-400 text-sm">Tools Used:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          className="px-2 py-1 bg-lime-400/10 text-lime-400 text-xs rounded border border-lime-400/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex items-center space-x-4 pt-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    {/* View Project Button */}
                    <motion.button
                      onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors"
                      style={{ filter: 'drop-shadow(0 4px 20px rgba(255, 255, 255, 0.2))' }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-lg">VIEW PROJECT</span>
                    </motion.button>

                    {/* Case Study Button */}
                    <motion.button
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-3 bg-gray-600/70 text-white px-6 py-4 rounded-lg hover:bg-gray-600/90 transition-colors backdrop-blur-sm border border-gray-500/30"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>CASE STUDY</span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              {/* Project Selection Indicator */}
              <motion.div 
                className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lime-400 text-sm">{selectedProject.id}</span>
                  <span className="text-gray-400 text-sm">of</span>
                  <span className="text-white text-sm">{projects.length}</span>
                </div>
              </motion.div>

              {/* Floating cosmic elements */}
              <motion.div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                      scale: [0.5, 1, 0.5],
                      y: [0, -30, 0],
                      x: [0, Math.random() * 40 - 20, 0],
                      rotate: [0, 360, 0]
                    }}
                    transition={{
                      delay: index * 0.8,
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute text-lime-400/20"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`
                    }}
                  >
                    {index === 0 && <Star size="small" />}
                    {index === 1 && <LimeOrb />}
                    {index === 2 && <Rocket className="w-4 h-4" />}
                    {index === 3 && <Astronaut className="w-5 h-5" />}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Other Projects - Clickable Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20"
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full h-48 rounded-2xl overflow-hidden cursor-pointer relative group"
              >
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* View icon on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-lime-400/30">
                    <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Project info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lime-400 text-sm bg-lime-400/20 px-3 py-1 rounded border border-lime-400/30">
                      {project.rating}
                    </span>
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </div>
                  <h4 className="text-white text-lg leading-tight mb-2">{project.title}</h4>
                  <p className="text-lime-400 text-sm mb-2">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="text-xs text-gray-300 bg-gray-800/50 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Selection indicator */}
                {selectedProject.id === project.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(163, 230, 53, 0.8))' }}
                  >
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-transparent rounded-2xl pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Background cosmic effects */}
      <div className="absolute inset-0 space-bg opacity-20 pointer-events-none" />
      <motion.div
        animate={{ 
          opacity: [0.02, 0.05, 0.02],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  )
}

export default ProjectDetails