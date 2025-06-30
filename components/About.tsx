import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Calendar, 
  Award,
  Code,
  Palette,
  Smartphone,
  Users,
  Lightbulb,
  Zap,
  MapPin,
  Building,
  Star,
  Search,
  User,
  FileText,
  MousePointer,
  TestTube,
  Eye,
  Type,
  Grid,
  Accessibility,
  Figma,
  Settings,
  Brush,
  GitBranch
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'


const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const profileImageUrl = "https://i.postimg.cc/wvjvJ6gs/Chat-GPT-Image-Jun-28-2025-04-59-18-PM.png"
  const glowingHaloUrl = "https://i.postimg.cc/D0jd8QJt/Glowing-Halo-and-Neon-Curls.png"

  // Core UX Skills - Left Top
  const coreUXSkills = [
    { name: 'User Research (Interviews, Surveys, Field Studies)', icon: Search },
    { name: 'Persona Creation & Journey Mapping', icon: User },
    { name: 'User Flows & Information Architecture', icon: FileText },
    { name: 'Prototyping (Clickable, Animated, Interactive)', icon: MousePointer },
    { name: 'Usability Testing & A/B Testing', icon: TestTube }
  ]

  // Visual Design Skills - Right Top
  const visualDesignSkills = [
    { name: 'Visual Design & Layout Principles', icon: Eye },
    { name: 'Typography, Color Theory, Iconography', icon: Type },
    { name: 'Design Systems & Component Libraries', icon: Grid },
    { name: 'Responsive & Mobile-First Design', icon: Smartphone },
    { name: 'Accessibility (WCAG Guidelines)', icon: Accessibility }
  ]

  // Tools and Software - Left Bottom
  const toolsAndSoftware = [
    { name: 'Figma', icon: Figma },
    { name: 'Adobe XD / Sketch', icon: Settings },
    { name: 'Adobe Illustrator / Photoshop', icon: Brush },
    { name: 'InVision / Axure / ProtoPie', icon: Zap },
    { name: 'Figma Make', icon: Lightbulb }
  ]

  // Front-End Awareness - Right Bottom
  const frontEndAwareness = [
    { name: 'HTML, CSS, JavaScript', icon: Code },
    { name: 'Dev Handoff (Zeplin / Figma Inspect / Storybook)', icon: GitBranch },
    { name: 'Working knowledge of Agile/Scrum', icon: Users }
  ]

  const workExperience = [
    {
      number: '01',
      title: 'UI/UX Designer',
      company: 'Agnikul Cosmos Pvt. Ltd.',
      period: 'October 2023 - Present',
      location: 'Chennai, India',
      description: 'At Agnikul Cosmos Pvt. Ltd., I\'ve worked as a UI/UX Designer since October 2023, delivering over 15 digital products tailored for internal tools and operational systems. My work spans across domains such as fleet management, safety dashboards, payroll systems, instrumentation platforms, and ERP support tools. I led end-to-end design efforts, starting with user research by closely collaborating with engineers and stakeholders to map workflows and constraints. I translated requirements into user flows and wireframes, created interactive prototypes, conducted usability testing, and delivered high-fidelity responsive UI designs for desktop and tablet interfaces. Projects covered areas like Entry & Exit, Budget & Expenses, Food & Beverages, Packaging, Maintenance, Engineering, DFR, CAD, PMO, Inventory, Finance, Quality, IT, HR Operations, Recruitment, and more—reflecting a broad understanding of enterprise systems and user-centered design in complex environments.',
      achievements: [
        'Delivered 15+ digital products for internal tools and operational systems',
        'Led end-to-end design for fleet management, safety dashboards, and ERP tools',
        'Conducted user research and workflow mapping with engineering teams',
        'Created responsive UI designs for desktop and tablet interfaces',
        'Designed across 15+ domains: Entry & Exit, Budget, Food & Beverages, Maintenance, Engineering, DFR, CAD, PMO, Inventory, Finance, Quality, IT, HR Operations, Recruitment'
      ],
      icon: Building,
      pinRotation: 'rotate-12'
    },
    {
      number: '02',
      title: 'UI/UX Designer',
      company: 'Jarvis Software – Wiseant',
      period: 'August 2023 - October 2023',
      location: 'Full time, Chennai India',
      description: 'At Jarvis Software – Wiseant, I worked as a UI/UX Designer from August to October 2023, where I led the design of the Digital Envelope Budgeting feature—enabling users to allocate funds into virtual spending categories with clarity and ease. I handled the full UX process: conducting user research, defining flows, designing wireframes, and testing interactive prototypes. The final UI emphasized simplicity and financial transparency. I collaborated closely with developers to ensure smooth implementation, and the feature is now live on the Wiseant app on the Play Store.',
      achievements: [
        'Led design of Digital Envelope Budgeting feature for fund allocation',
        'Conducted complete UX process from research to interactive prototypes',
        'Collaborated with developers for smooth implementation',
        'Feature successfully launched and live on Wiseant app on Play Store',
        'Emphasized simplicity and financial transparency in UI design'
      ],
      icon: Smartphone,
      pinRotation: '-rotate-6'
    },
    {
      number: '03',
      title: 'UI/UX Designer',
      company: 'Freelancing',
      period: 'February 2022 - July 2023',
      location: 'Remote',
      description: 'During my freelancing journey from February 2022 to July 2023, I worked as a UI/UX Designer across diverse creative projects. A key highlight was designing the Sick Roast App—a voice-chat battle platform aimed at relieving workplace stress through humor and social interaction. I led the complete design cycle: conducting user research to understand entertainment behaviors, mapping user flows, building wireframes, and prototyping a smooth, playful experience. In addition to product design, I also created promotional materials such as posters and digital visiting cards to support branding efforts. This period allowed me to sharpen my end-to-end design skills while building solutions that blended functionality with fun.',
      achievements: [
        'Designed Sick Roast App - voice-chat battle platform for stress relief',
        'Led complete design cycle from user research to final prototypes',
        'Conducted user research on entertainment behaviors and social interaction',
        'Created promotional materials including posters and digital visiting cards',
        'Developed solutions blending functionality with entertainment and fun',
        'Sharpened end-to-end design skills across diverse creative projects'
      ],
      icon: Palette,
      pinRotation: 'rotate-3'
    },
    {
      number: '04',
      title: 'VBA Analyst',
      company: 'Ford Global Business Centre',
      period: 'June 2018 - June 2020',
      location: 'Chennai, India',
      description: 'At Ford Global Business Centre, I worked as a VBA Analyst from June 2018 to June 2020, focusing on automation and data accuracy in vehicle analysis. I developed and implemented macros using VBA to streamline routine tasks and enhance the quality of data updates. My responsibilities included identifying discrepancies, resolving issues in vehicle records, and ensuring clean, reliable data. I also facilitated team meetings, prepared launch-related metrics, and tracked performance to support reporting and decision-making.',
      achievements: [
        'Developed and implemented VBA macros for automation',
        'Streamlined routine tasks and enhanced data quality',
        'Identified and resolved discrepancies in vehicle records',
        'Facilitated team meetings and prepared launch-related metrics',
        'Tracked performance to support reporting and decision-making',
        'Ensured clean, reliable data for vehicle analysis'
      ],
      icon: Code,
      pinRotation: '-rotate-12'
    }
  ]

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
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const pinnedCardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 30
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const rightSkillVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const centerImageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="about" ref={ref} className="relative min-h-screen bg-black py-20 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 space-bg" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lime-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6"
            style={{ 
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
              fontWeight: 900
            }}
          >
            About{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{ 
                background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text'
              }}
            >
              Me
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-lime-400 to-lime-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Main Content Layout - Left Image, Right Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          
          {/* Left Side - Profile Image (Transparent & Bigger) */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start items-center">
            <div className="relative">
              <motion.div
                className="relative w-96 h-[32rem] lg:w-[28rem] lg:h-[36rem]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImageUrl}
                  alt="Rajasri - UI/UX Designer"
                  className="w-full h-full object-cover object-center"
                  style={{
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />

                {/* Floating Elements - Reduced and more subtle */}
                <motion.div
                  className="absolute -top-3 -right-3 w-3 h-3 bg-lime-400 rounded-full opacity-70"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-2 h-2 bg-white rounded-full opacity-60"
                  animate={{ 
                    x: [0, 8, 0],
                    y: [0, -5, 0],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - About Me Content Only */}
          <motion.div variants={itemVariants} className="flex items-center">
            
            {/* About Me Card - Centered */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-lime-400/30 transition-all duration-300 w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 bg-lime-400 rounded-full" />
                <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                  Hello, I'm Rajasri
                </h3>
              </div>
              
              <div className="mb-4">
                <p className="text-lg text-lime-400" style={{ fontWeight: 600 }}>
                  UI/UX Designer | 3+ Years of Experience
                </p>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  I'm a UI/UX Designer with over 3 years of experience creating intuitive digital experiences across fintech, aerospace, and wellness domains. In fintech, I designed an app with envelope budgeting concepts, interactive GIFs, and implemented finance-based case studies. At Agnikul, I led the design of 15+ projects and built a scalable design system to streamline product consistency. As a freelancer, I crafted purpose-driven apps like Sick Roast (a stress relief tool) handling the full design process from research to UI. I specialize in simplifying complex requirements into clean, user-centered solutions.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-700/50">
                <div className="text-center">
                  <div className="text-2xl text-lime-400 mb-1" style={{ fontWeight: 900 }}>3+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-lime-400 mb-1" style={{ fontWeight: 900 }}>20+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Work Experience Section - Pinned Cards Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          {/* Work Experience Header - Matching About Section Style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h3 
              className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6"
              style={{ 
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                fontWeight: 900
              }}
            >
              Work{' '}
              <span 
                className="text-transparent bg-clip-text"
                style={{ 
                  background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text'
                }}
              >
                Experience
              </span>
            </motion.h3>
            
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-lime-400 to-lime-600 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>
          
          {/* Pinned Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                variants={pinnedCardVariants}
                className="group relative"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Pin/Thumbtack */}
                <motion.div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-lime-400 rounded-full shadow-lg border-4 border-lime-300 z-20 ${job.pinRotation}`}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-2 bg-lime-500 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-lime-600 rounded-full" />
                  
                  {/* Pin Shadow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-lime-600 to-transparent opacity-40" />
                </motion.div>

                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-lime-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Main Card - Using Same Background as About Section */}
                <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-lime-400/30 transition-all duration-300 min-h-[600px]">
                  
                  {/* Card Header */}
                  <div className="flex items-start mb-6">
                    <div className="flex items-center gap-4">
                      {/* Number Badge */}
                      <div className="flex items-center justify-center w-12 h-12 bg-lime-400/10 border border-lime-400/30 rounded-xl group-hover:bg-lime-400/20 group-hover:border-lime-400/60 transition-all duration-300">
                        <span className="text-lime-400 text-lg" style={{ fontWeight: 700 }}>
                          {job.number}
                        </span>
                      </div>
                      
                      {/* Title & Company */}
                      <div>
                        <h4 className="text-xl text-white mb-1" style={{ fontWeight: 700 }}>
                          {job.title}
                        </h4>
                        <p className="text-lime-400 text-lg" style={{ fontWeight: 600 }}>
                          {job.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Period & Location */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-lime-400" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-lime-400" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>

                  {/* Main Description */}
                  <div className="mb-6">
                    <h5 className="text-lime-400 mb-3 flex items-center gap-2 text-sm" style={{ fontWeight: 600 }}>
                      <Star className="w-4 h-4" />
                      Role Description
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h5 className="text-lime-400 mb-3 flex items-center gap-2 text-sm" style={{ fontWeight: 600 }}>
                      <Award className="w-4 h-4" />
                      Key Achievements
                    </h5>
                    <div className="space-y-2">
                      {job.achievements.slice(0, 3).map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-2 bg-lime-400/5 border border-lime-400/20 rounded-lg hover:bg-lime-400/10 hover:border-lime-400/40 transition-all duration-300">
                          <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_3px_rgba(163,230,53,0.8)]" />
                          <span className="text-gray-300 text-xs leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Corner Accents */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-lime-400/40 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-lime-400/40 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-lime-400/40 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-lime-400/40 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section - 2x2 Grid with Right-Side Image */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Skills Header - Matching About Section Style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h3 
              className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6"
              style={{ 
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif", 
                fontWeight: 900
              }}
            >
              My{' '}
              <span 
                className="text-transparent bg-clip-text"
                style={{ 
                  background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text'
                }}
              >
                Skills
              </span>
            </motion.h3>
            
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-lime-400 to-lime-600 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>
          
          {/* Skills Layout - 2x2 Grid + Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
            
            {/* Left & Center Columns - 2x2 Skills Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Core UX Skills - Top Left */}
              <motion.div 
                variants={skillVariants}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-lime-400/30 transition-all duration-300 h-80"
              >
                <h4 className="text-lime-400 text-lg font-semibold mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  CORE UX SKILLS
                </h4>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {coreUXSkills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="flex items-center justify-center w-8 h-8 bg-lime-400/10 rounded-lg group-hover:bg-lime-400/20 transition-colors flex-shrink-0">
                        <skill.icon className="w-4 h-4 text-lime-400" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed flex-1">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Visual Design Skills - Top Right */}
              <motion.div 
                variants={rightSkillVariants}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-lime-400/30 transition-all duration-300 h-80"
              >
                <h4 className="text-lime-400 text-lg font-semibold mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  VISUAL DESIGN SKILLS
                </h4>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {visualDesignSkills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="flex items-center justify-center w-8 h-8 bg-lime-400/10 rounded-lg group-hover:bg-lime-400/20 transition-colors flex-shrink-0">
                        <skill.icon className="w-4 h-4 text-lime-400" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed flex-1">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools and Software - Bottom Left */}
              <motion.div 
                variants={skillVariants}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-lime-400/30 transition-all duration-300 h-80"
              >
                <h4 className="text-lime-400 text-lg font-semibold mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  TOOLS AND SOFTWARE
                </h4>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {toolsAndSoftware.map((tool, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="flex items-center justify-center w-8 h-8 bg-lime-400/10 rounded-lg group-hover:bg-lime-400/20 transition-colors flex-shrink-0">
                        <tool.icon className="w-4 h-4 text-lime-400" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed flex-1">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Front-End Awareness - Bottom Right */}
              <motion.div 
                variants={rightSkillVariants}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-lime-400/30 transition-all duration-300 h-80"
              >
                <h4 className="text-lime-400 text-lg font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  FRONT-END AWARENESS
                </h4>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {frontEndAwareness.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="flex items-center justify-center w-8 h-8 bg-lime-400/10 rounded-lg group-hover:bg-lime-400/20 transition-colors flex-shrink-0">
                        <skill.icon className="w-4 h-4 text-lime-400" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed flex-1">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Decorative Image spanning full height */}
            <motion.div 
              variants={centerImageVariants}
              className="flex justify-center items-stretch h-full"
            >
              <div className="relative w-full h-full min-h-[688px] flex items-center justify-center"> {/* Min height matches 2 cards + gap (320px + 24px + 320px + 24px for borders) */}
                <motion.div
                  className="relative w-full h-full max-w-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={glowingHaloUrl}
                    alt="Glowing Halo and Neon Curls"
                    className="w-full h-full object-contain object-center"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About