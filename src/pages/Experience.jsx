import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const educationData = [
    {
      degree: 'Bachelor of Technology (CSE)',
      duration: '2023 – Pursuing',
      institute: 'R.V Institute of Technology, Bijnor',
      grade: 'CGPA: 7.5',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      degree: 'Intermediate',
      duration: '2021 – 2023',
      institute: 'Saraswati Vidya Mandir Inter College Noorpur, Bijnor',
      grade: 'Percentage: 82%',
      icon: '📚',
      color: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'High School',
      duration: '2019 – 2021',
      institute: 'Saraswati Vidya Mandir Inter College Noorpur, Bijnor',
      grade: 'Percentage: 84%',
      icon: '🏫',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const workData = [
    {
      role: 'Android App Developer Intern',
      duration: 'May 2025 – June 2025',
      company: 'CSIR-CRRI, New Delhi',
      description:
        'Designed and developed Android applications for road traffic analysis and monitoring using Java, Firebase, and REST APIs. Collaborated with research scientists and engineers to deploy real-time app modules.',
      icon: '📱',
      color: 'from-orange-500 to-red-500',
      tags: ['Java', 'Firebase', 'REST API', 'Android'],
    },
    {
      role: 'Web Development Intern',
      duration: 'Aug 2025 – Sep 2025',
      company: 'CodSoft, Pune (Remote)',
      description:
        'Created responsive and dynamic websites using HTML, CSS, and JavaScript. Participated in virtual team sprints, project reviews, and contributed to frontend UI/UX optimization.',
      icon: '💻',
      color: 'from-cyan-500 to-blue-500',
      tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    },
  ]

  return (
    <div ref={containerRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: -360,
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            My{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A timeline of my academic achievements and professional experiences
          </motion.p>
        </motion.div>

        {/* Education Section with Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-5xl"
            >
              🎓
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold">
              My{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Education
              </span>
            </h1>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"
            />

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <EducationCard key={index} edu={edu} index={index} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl"
            >
              💼
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Work{' '}
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
          </motion.div>

          <div className="space-y-8">
            {workData.map((work, index) => (
              <WorkCard key={index} work={work} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Achievements/Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Quick Stats
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AchievementCard 
              number="7.5" 
              label="Current CGPA" 
              icon="📊" 
              gradient="from-blue-500 to-cyan-500"
              delay={0.1}
            />
            <AchievementCard 
              number="2+" 
              label="Internships" 
              icon="🏢" 
              gradient="from-green-500 to-emerald-500"
              delay={0.2}
            />
            <AchievementCard 
              number="15+" 
              label="Projects Built" 
              icon="🚀" 
              gradient="from-purple-500 to-pink-500"
              delay={0.3}
            />
            <AchievementCard 
              number="30+" 
              label="Skills Mastered" 
              icon="⚡" 
              gradient="from-orange-500 to-red-500"
              delay={0.4}
            />
          </div>
        </motion.section>
      </div>
    </div>
  )
}

// Education Card with Timeline Design
const EducationCard = ({ edu, index }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
        className={`absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} transform md:-translate-x-1/2 z-10 shadow-lg`}
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${edu.color} blur-md`}
        />
      </motion.div>

      {/* Card Content */}
      <motion.div
        whileHover={{ 
          scale: 1.05, 
          boxShadow: '0 25px 70px rgba(187, 182, 17, 0.5)',
          y: -5,
        }}
        className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
      >
        <div className="relative group">
          {/* Gradient Border Effect */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-300`}
          />
          
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-xl border border-gray-700 group-hover:border-transparent transition-all">
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl mb-4"
            >
              {edu.icon}
            </motion.div>

            {/* Degree & Duration */}
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
              <h2 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                {edu.degree}
              </h2>
              <span className="text-sm text-gray-400 font-medium bg-gray-700/50 px-3 py-1 rounded-full">
                {edu.duration}
              </span>
            </div>

            {/* Institute */}
            <p className="font-semibold text-gray-200 mb-3 text-base">
              📍 {edu.institute}
            </p>

            {/* Grade */}
            <div className={`inline-block px-4 py-2 bg-gradient-to-r ${edu.color} rounded-full text-white font-bold text-sm shadow-lg`}>
              {edu.grade}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Work Experience Card
const WorkCard = ({ work, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{
      scale: 1.02,
      boxShadow: '0 30px 80px rgba(187, 182, 17, 0.5)',
      y: -10,
    }}
    className="relative group"
  >
    {/* Gradient Background on Hover */}
    <motion.div
      className={`absolute inset-0 bg-gradient-to-r ${work.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-opacity duration-300`}
    />

    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-700 group-hover:border-transparent transition-all">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
        <div className="flex items-start gap-4">
          {/* Animated Icon */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl"
          >
            {work.icon}
          </motion.div>
          
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${work.color} bg-clip-text text-transparent`}>
              {work.role}
            </h2>
            <p className="text-xl font-semibold text-gray-200">
              {work.company}
            </p>
          </div>
        </div>

        {/* Duration Badge */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`bg-gradient-to-r ${work.color} px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg whitespace-nowrap`}
        >
          📅 {work.duration}
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-gray-300 leading-7 text-base md:text-lg mb-6">
        {work.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-3">
        {work.tags.map((tag, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.2, y: -5 }}
            className="px-4 py-2 bg-gray-700/50 backdrop-blur-sm text-gray-200 rounded-full text-sm font-medium border border-gray-600 hover:border-yellow-500 transition-all cursor-pointer"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
)

// Achievement Stats Card
const AchievementCard = ({ number, label, icon, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{
      scale: 1.1,
      boxShadow: '0 20px 60px rgba(187, 182, 17, 0.4)',
      rotate: [0, -5, 5, 0],
    }}
    className="relative group"
  >
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 text-center group-hover:border-transparent transition-all">
      {/* Icon */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-4xl mb-3"
      >
        {icon}
      </motion.div>

      {/* Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2 }}
        className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}
      >
        {number}
      </motion.div>

      {/* Label */}
      <div className="text-gray-400 text-sm md:text-base font-medium">
        {label}
      </div>
    </div>

    {/* Background Glow */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{ duration: 3, repeat: Infinity }}
      className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl -z-10`}
    />
  </motion.div>
)

export default Experience
