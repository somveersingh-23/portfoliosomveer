import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

// Organized skills by domain
const skillsData = {
  webDevelopment: {
    title: "Web Development",
    color: "from-cyan-500 via-blue-500 to-indigo-600",
    icon: "🌐",
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JUnit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ]
  },
  mobileAppDevelopment: {
    title: "Mobile App Development",
    color: "from-green-500 via-emerald-500 to-teal-600",
    icon: "📱",
    skills: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
      { name: 'Jetpack Compose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
      { name: 'XML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg' },
    ]
  },
  machineLearning: {
    title: "Machine Learning & AI",
    color: "from-purple-500 via-pink-500 to-rose-600",
    icon: "🤖",
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    ]
  },
  tools: {
    title: "Tools & Technologies",
    color: "from-orange-500 via-amber-500 to-yellow-600",
    icon: "🛠️",
    skills: [
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ]
  }
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('webDevelopment')
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <div ref={containerRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h1>
          <motion.p 
            className="text-gray-300 leading-7 max-w-4xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Expertise across <span className="text-cyan-400 font-semibold">Web Development</span>, 
            <span className="text-green-400 font-semibold"> Mobile App Development</span>, and 
            <span className="text-purple-400 font-semibold"> Machine Learning</span> — delivering cutting-edge solutions with modern technologies.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {Object.entries(skillsData).map(([key, category], index) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              <span className="mr-2 text-xl">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-10"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl mb-4 inline-block"
            >
              {skillsData[activeCategory].icon}
            </motion.div>
            <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${skillsData[activeCategory].color} bg-clip-text text-transparent`}>
              {skillsData[activeCategory].title}
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillsData[activeCategory].skills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index}
                gradient={skillsData[activeCategory].color}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          <StatCard number="30+" label="Technologies" gradient="from-cyan-500 to-blue-500" delay={0.1} />
          <StatCard number="15+" label="Projects" gradient="from-green-500 to-emerald-500" delay={0.2} />
          <StatCard number="2+" label="Years Experience" gradient="from-purple-500 to-pink-500" delay={0.3} />
          <StatCard number="100%" label="Passion" gradient="from-orange-500 to-yellow-500" delay={0.4} />
        </motion.div>
      </div>
    </div>
  )
}

// Skill Card Component with Advanced Animations
const SkillCard = ({ skill, index, gradient }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotateY: 180 }}
    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.05,
      type: "spring",
      stiffness: 200
    }}
    whileHover={{
      scale: 1.15,
      rotateZ: [0, -5, 5, 0],
      boxShadow: '0 20px 60px rgba(187, 182, 17, 0.6)',
      y: -10,
    }}
    className="relative group cursor-pointer"
  >
    {/* Gradient Border on Hover */}
    <motion.div
      className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-300`}
    />
    
    {/* Card Content */}
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-700 group-hover:border-transparent transition-all duration-300">
      {/* Icon with Floating Animation */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-16 h-16 md:w-20 md:h-20 mb-3 mx-auto filter group-hover:brightness-125 transition-all duration-300"
        />
        {/* Glow Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-50 blur-2xl rounded-full`}
          whileHover={{ scale: 1.5 }}
        />
      </motion.div>
      
      {/* Skill Name */}
      <span className="text-sm md:text-base font-semibold text-center block text-gray-200 group-hover:text-white transition-colors">
        {skill.name}
      </span>
      
      {/* Proficiency Bar */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.05 }}
        className={`h-1 bg-gradient-to-r ${gradient} rounded-full mt-2`}
      />
    </div>
  </motion.div>
)

// Stat Card Component
const StatCard = ({ number, label, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{
      scale: 1.1,
      boxShadow: '0 20px 60px rgba(187, 182, 17, 0.4)',
    }}
    className="relative group"
  >
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2 }}
      >
        <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
          {number}
        </div>
        <div className="text-gray-400 text-sm md:text-base font-medium">
          {label}
        </div>
      </motion.div>
      
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl`}
      />
    </div>
  </motion.div>
)

export default Skills
