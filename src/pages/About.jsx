import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  // Skill badges data
  const skills = [
    { name: "React", color: "from-cyan-500 to-blue-500" },
    { name: "Android", color: "from-green-500 to-emerald-500" },
    { name: "ML/AI", color: "from-purple-500 to-pink-500" },
    { name: "Python", color: "from-yellow-500 to-orange-500" },
    { name: "Kotlin", color: "from-indigo-500 to-purple-500" },
  ]

  return (
    <div ref={containerRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Parallax */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -100, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateZ: -5,
                filter: "brightness(1.1)"
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group"
            >
              <motion.img
                src="/img/myimg.jpg"
                alt="Somveer"
                className="w-3/4 lg:w-4/5 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl hover-glow relative z-10"
              />
              
              {/* Animated Multi-Color Border */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0 w-3/4 lg:w-4/5 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity"
              />
              
              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute w-3 h-3 bg-yellow-400 rounded-full blur-sm"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 15}%`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Text with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Animated Title */}
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              About{' '}
              <motion.span 
                className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                me
              </motion.span>
            </motion.h1>
            
            {/* Text with Stagger Effect */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.p 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="text-gray-300 leading-8 text-base md:text-lg backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-gray-700/50"
              >
                A passionate <span className="text-purple-400 font-semibold">Machine Learning Engineer</span>, <span className="text-green-400 font-semibold">Android App Developer</span>, and
                <span className="text-cyan-400 font-semibold"> Web Developer</span> focused on building responsive websites, intuitive
                mobile applications, and intelligent systems driven by data.
              </motion.p>
              
              <motion.p 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="text-gray-300 leading-8 text-base md:text-lg backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-gray-700/50"
              >
                Experienced through internships at <span className="text-yellow-400 font-bold">CSIR-CRRI</span> (Central Road Research
                Institute New Delhi) as Android Developer and as Front-end Developer
                at <span className="text-pink-400 font-bold">CodSoft</span>, with hands-on skills in responsive web design, Android
                app development, and machine learning model implementation. Dedicated
                to delivering efficient, user-centric, and scalable digital solutions.
              </motion.p>
            </motion.div>

            {/* Skill Badges */}
            <motion.div 
              className="flex flex-wrap gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className={`px-4 py-2 bg-gradient-to-r ${skill.color} rounded-full text-white font-semibold text-sm shadow-lg cursor-pointer`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
            
            {/* CTA Button with Magnetic Effect */}
            <a href="/somveer_resume.pdf" download>
              <motion.button
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: '0 20px 60px rgba(187, 182, 17, 0.6)',
                  background: 'linear-gradient(135deg, #ffd700, #ffed4e, #ff6b6b)',
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(187, 182, 17, 0.3)',
                    '0 0 40px rgba(187, 182, 17, 0.5)',
                    '0 0 20px rgba(187, 182, 17, 0.3)',
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
                className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl overflow-hidden group mt-6"
              >
                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%', opacity: 0.5 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{ mixBlendMode: 'overlay' }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Download CV <span className="text-xl">📄</span>
                </span>
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
