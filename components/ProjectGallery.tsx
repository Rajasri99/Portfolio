'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Astronaut, Planet, UFO, Rocket, Star, LimeOrb } from './SpaceObjects'
import exampleImage from 'figma:asset/02452171ab3bdaf52f263e2f4ccf527bc31010a8.png'

interface ProjectShowcase {
  id: number
  title: string
  description: string
  mockups: Array<{
    id: string
    title: string
    content: string[]
    position: { x: string; y: string }
    size: 'small' | 'medium' | 'large'
    color: 'lime' | 'blue' | 'purple'
  }>
  connections: Array<{
    from: string
    to: string
  }>
}

const ProjectGallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const projects: ProjectShowcase[] = [
    {
      id: 1,
      title: "Building Stellar E-Commerce Analytics With Real-Time Cosmic Insights",
      description: "A comprehensive analytics platform is a sophisticated system that provides a focus for teams as they navigate through a universe of e-commerce data. For the Stellar Analytics Platform to get leveraged appropriately and keep the analytics up, it should correlate with the organization's growth, be measurable and actionable, and be tied to Lifetime Value (LTV). This type of metric or constellation of metrics is crucial as teams are met with an influx of data points and resources because it allows teams to filter out what's relevant. It's through a Stellar Analytics framework, like StoryTelling, that teams can better understand where to put focus and what the organization's audience needs to avoid churning or going to a competitor.",
      mockups: [
        {
          id: 'main-dashboard',
          title: 'The Analytics Hub',
          content: ['Revenue Tracking', 'User Metrics', 'Sales Funnel', 'Performance KPIs'],
          position: { x: '10%', y: '10%' },
          size: 'large',
          color: 'lime'
        },
        {
          id: 'user-metrics',
          title: 'User Analytics',
          content: ['✓ Active user sessions', '✓ Conversion rates', '✓ User journey mapping', '✓ Engagement metrics'],
          position: { x: '60%', y: '20%' },
          size: 'medium',
          color: 'blue'
        },
        {
          id: 'sales-funnel',
          title: 'Sales Funnel Metrics & Customer Value',
          content: ['Real-time sales data', 'Customer lifetime value', 'Revenue optimization'],
          position: { x: '35%', y: '65%' },
          size: 'medium',
          color: 'purple'
        }
      ],
      connections: [
        { from: 'main-dashboard', to: 'user-metrics' },
        { from: 'main-dashboard', to: 'sales-funnel' },
        { from: 'user-metrics', to: 'sales-funnel' }
      ]
    },
    {
      id: 2,
      title: "Cosmic Social Network Architecture With Scalable Microservices",
      description: "A distributed social networking system built on microservices architecture that handles millions of cosmic connections. The platform focuses on real-time communication between space explorers, with advanced algorithms for content discovery and community building. Each service is independently scalable and resilient, ensuring the network stays operational even during peak galactic events.",
      mockups: [
        {
          id: 'social-main',
          title: 'Social Hub',
          content: ['User Feeds', 'Real-time Chat', 'Community Posts', 'Space Events'],
          position: { x: '15%', y: '15%' },
          size: 'large',
          color: 'lime'
        },
        {
          id: 'messaging',
          title: 'Message System',
          content: ['✓ Instant messaging', '✓ Group conversations', '✓ File sharing', '✓ Video calls'],
          position: { x: '65%', y: '10%' },
          size: 'small',
          color: 'blue'
        },
        {
          id: 'community',
          title: 'Community Features',
          content: ['Space groups', 'Event planning', 'Discovery feed'],
          position: { x: '45%', y: '60%' },
          size: 'medium',
          color: 'purple'
        }
      ],
      connections: [
        { from: 'social-main', to: 'messaging' },
        { from: 'social-main', to: 'community' }
      ]
    },
    {
      id: 3,
      title: "Quantum Learning Platform With Interactive Space Simulations",
      description: "An educational technology platform that transforms learning through immersive space simulations and quantum physics visualizations. The system adapts to individual learning patterns, providing personalized cosmic journeys for students exploring advanced scientific concepts through interactive 3D environments and real-time collaborative experiments.",
      mockups: [
        {
          id: 'learning-hub',
          title: 'Learning Center',
          content: ['Interactive Lessons', '3D Simulations', 'Progress Tracking', 'Achievements'],
          position: { x: '20%', y: '20%' },
          size: 'large',
          color: 'lime'
        },
        {
          id: 'simulation',
          title: 'Quantum Simulator',
          content: ['✓ 3D physics models', '✓ Real-time calculations', '✓ Interactive experiments', '✓ Data visualization'],
          position: { x: '70%', y: '15%' },
          size: 'medium',
          color: 'blue'
        },
        {
          id: 'progress',
          title: 'Student Progress & Analytics',
          content: ['Learning analytics', 'Performance metrics', 'Personalized paths'],
          position: { x: '50%', y: '70%' },
          size: 'small',
          color: 'purple'
        }
      ],
      connections: [
        { from: 'learning-hub', to: 'simulation' },
        { from: 'learning-hub', to: 'progress' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const projectVariants = {
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

  const mockupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'lime':
        return {
          bg: 'bg-lime-400/10',
          border: 'border-lime-400/30',
          text: 'text-lime-400',
          glow: 'shadow-lime-400/20'
        }
      case 'blue':
        return {
          bg: 'bg-blue-400/10',
          border: 'border-blue-400/30',
          text: 'text-blue-400',
          glow: 'shadow-blue-400/20'
        }
      case 'purple':
        return {
          bg: 'bg-purple-400/10',
          border: 'border-purple-400/30',
          text: 'text-purple-400',
          glow: 'shadow-purple-400/20'
        }
      default:
        return {
          bg: 'bg-lime-400/10',
          border: 'border-lime-400/30',
          text: 'text-lime-400',
          glow: 'shadow-lime-400/20'
        }
    }
  }

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'w-48 h-32'
      case 'medium':
        return 'w-56 h-40'
      case 'large':
        return 'w-64 h-48'
      default:
        return 'w-56 h-40'
    }
  }

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32 relative overflow-hidden space-bg">
      {/* Background floating objects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 60, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-32 left-20"
        >
          <Astronaut className="w-8 h-8 text-lime-400/20" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-32"
        >
          <UFO className="w-6 h-6 text-lime-300/25" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-32"
        >
          {/* Header */}
          <motion.div variants={projectVariants} className="text-center space-y-6">
            <motion.div className="inline-flex items-center space-x-2 bg-lime-400/10 px-4 py-2 rounded-full border border-lime-400/20">
              <Star size="small" className="text-lime-400" />
              <span className="text-sm text-lime-400">Featured Work</span>
            </motion.div>
            
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
              Cosmic <span className="text-lime-glow">Projects</span> Showcase
            </motion.h2>
            
            <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore detailed case studies showcasing the architecture and impact of cutting-edge digital solutions
            </motion.p>
          </motion.div>

          {/* Project Showcases */}
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* Left Column - Project Description */}
              <motion.div className="space-y-6">
                <motion.h3 className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
                  {project.title}
                </motion.h3>
                
                <motion.p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </motion.p>

                {/* Floating cosmic elements */}
                <motion.div className="relative">
                  {[...Array(2)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.5, 1, 0.5],
                        y: [0, -20, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        rotate: [0, 360, 0]
                      }}
                      transition={{
                        delay: projectIndex * 2 + index * 0.5,
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute text-lime-400/30"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`
                      }}
                    >
                      {index === 0 ? <Star size="small" /> : <LimeOrb />}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Interactive Mockups */}
              <motion.div className="relative h-96 lg:h-[500px]">
                {/* Mockup Cards */}
                {project.mockups.map((mockup, index) => {
                  const colors = getColorClasses(mockup.color)
                  const sizeClasses = getSizeClasses(mockup.size)
                  
                  return (
                    <motion.div
                      key={mockup.id}
                      variants={mockupVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: projectIndex * 0.5 + index * 0.2 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className={`absolute ${sizeClasses} ${colors.bg} ${colors.border} backdrop-blur-sm border rounded-2xl p-4 cursor-pointer group`}
                      style={{
                        left: mockup.position.x,
                        top: mockup.position.y,
                        filter: `drop-shadow(0 4px 20px rgba(163, 230, 53, 0.1))`
                      }}
                    >
                      {/* Card Header */}
                      <motion.div className="flex items-center justify-between mb-3">
                        <h4 className={`text-sm ${colors.text} group-hover:text-lime-300 transition-colors`}>
                          {mockup.title}
                        </h4>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="w-2 h-2 bg-lime-400 rounded-full"
                          style={{ filter: 'drop-shadow(0 0 4px rgba(163, 230, 53, 0.8))' }}
                        />
                      </motion.div>

                      {/* Card Content */}
                      <motion.div className="space-y-2">
                        {mockup.content.map((item, contentIndex) => (
                          <motion.div
                            key={contentIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: projectIndex * 0.5 + index * 0.2 + contentIndex * 0.1 }}
                            className="text-xs text-gray-300 flex items-center space-x-2"
                          >
                            {item.startsWith('✓') ? (
                              <>
                                <span className="text-lime-400">✓</span>
                                <span>{item.substring(2)}</span>
                              </>
                            ) : (
                              <span>{item}</span>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Hover glow effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-br from-lime-400/5 via-transparent to-transparent rounded-2xl pointer-events-none"
                      />
                    </motion.div>
                  )
                })}

                {/* Connection Lines */}
                {project.connections.map((connection, index) => {
                  const fromMockup = project.mockups.find(m => m.id === connection.from)
                  const toMockup = project.mockups.find(m => m.id === connection.to)
                  
                  if (!fromMockup || !toMockup) return null

                  return (
                    <motion.svg
                      key={`${connection.from}-${connection.to}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: projectIndex * 0.5 + index * 0.3 + 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                    >
                      <motion.path
                        d={`M ${parseInt(fromMockup.position.x) + 15}% ${parseInt(fromMockup.position.y) + 10}% 
                           Q ${(parseInt(fromMockup.position.x) + parseInt(toMockup.position.x)) / 2}% ${Math.min(parseInt(fromMockup.position.y), parseInt(toMockup.position.y)) - 5}% 
                           ${parseInt(toMockup.position.x) + 15}% ${parseInt(toMockup.position.y) + 10}%`}
                        stroke="rgba(163, 230, 53, 0.4)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        fill="none"
                      />
                    </motion.svg>
                  )
                })}

                {/* Animated dots along connection lines */}
                {project.connections.map((connection, index) => (
                  <motion.div
                    key={`dot-${connection.from}-${connection.to}`}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      delay: projectIndex * 0.5 + index * 0.5 + 1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                    className="absolute w-1 h-1 bg-lime-400 rounded-full"
                    style={{
                      left: `${(Math.random() * 60) + 20}%`,
                      top: `${(Math.random() * 60) + 20}%`,
                      filter: 'drop-shadow(0 0 4px rgba(163, 230, 53, 0.8))'
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced cosmic background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-400/2 via-transparent to-transparent pointer-events-none" />
      <motion.div
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/3 left-1/3 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  )
}

export default ProjectGallery