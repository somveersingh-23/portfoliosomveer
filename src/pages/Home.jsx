import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Home = () => {
  const typedRef = useRef(null)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Android Developer.',
        'iOS Developer.',
        'ML Engineer.',
        'Web Developer.',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    })

    return () => typed.destroy()
  }, [])

  // Floating animation variants
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="pt-20 md:pt-24 overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale }}
        className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Animated Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left - Image with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              type: "spring", 
              stiffness: 100 
            }}
            className="flex justify-center order-2 lg:order-1"
          >
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <motion.img
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  filter: "brightness(1.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                src="/img/bg.jpg"
                alt="Somveer Singh"
                className="w-3/4 lg:w-[85%] rounded-[40%] shadow-2xl hover-glow relative z-10"
              />
              {/* Glowing Border Effect */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0 w-3/4 lg:w-[85%] rounded-[40%] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-30 blur-xl"
              />
            </motion.div>
          </motion.div>

          {/* Right - Text with Stagger Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block"
                >
                  Hello, I'm{' '}
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Somveer Singh
                  </span>
                  .
                </motion.span>
                <br />
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-4"
                >
                  I'm{' '}
                  <span
                    ref={typedRef}
                    className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-extrabold"
                  ></span>
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start mt-8">
              <motion.a
                href="contact"
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(187, 182, 17, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-bold text-lg shadow-lg hover:shadow-yellow-500/50 transition-all"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="projects"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-full font-bold text-lg hover:bg-purple-500/20 transition-all"
              >
                View Work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section with Glass Morphism */}
      <section className="bg-gradient-to-b from-[#030311] to-[#06061f] py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#bbb611 1px, transparent 1px), linear-gradient(90deg, #bbb611 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text with Slide-in Animation */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">me</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 leading-7 mb-4 text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A passionate Machine Learning Engineer, Android App Developer, and
              Web Developer focused on building responsive websites, intuitive
              mobile applications, and intelligent systems driven by data.
            </motion.p>
            
            <motion.p 
              className="text-gray-300 leading-7 mb-6 text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Experienced through internships at <span className="text-yellow-400 font-semibold">CSIR-CRRI</span> (Central Road Research
              Institute New Delhi) as Android Developer and as Front-end Developer
              at <span className="text-pink-400 font-semibold">CodSoft</span>, with hands-on skills in responsive web design, Android
              app development, and machine learning model implementation.
            </motion.p>
            
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                boxShadow: '0 15px 50px rgba(187, 182, 17, 0.5)',
                background: 'linear-gradient(135deg, #ffd700, #ffed4e)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Image with 3D Tilt Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="flex justify-center relative"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                rotateX: 5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ perspective: 1000 }}
              className="relative"
            >
              <motion.img
                src="/img/myimg.jpg"
                alt="Somveer"
                className="w-3/4 lg:w-[85%] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl hover-glow"
              />
              {/* Rainbow Border Animation */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-3/4 lg:w-[85%] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-40 blur-2xl -z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Card Flip */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-gray-300 leading-7 max-w-4xl mx-auto text-base md:text-lg">
              Offering end-to-end services in Web Development, Android App
              Development, and Machine Learning — delivering responsive websites,
              intuitive mobile apps, and intelligent systems powered by data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              title="Web Development"
              description="Crafting responsive, dynamic, and visually appealing websites tailored to your needs using modern technologies like HTML, CSS, JavaScript, and React."
              delay={0.1}
              gradient="from-blue-500 to-cyan-500"
              icon="🌐"
            />
            <ServiceCard
              title="Android App"
              description="Designing and developing high-performance Android apps with intuitive interfaces, seamless functionality, and optimized performance for diverse user needs and devices."
              delay={0.2}
              gradient="from-green-500 to-emerald-500"
              icon="📱"
            />
            <ServiceCard
              title="ML Engineer"
              description="Designing and deploying machine learning models, analyzing data for insights, and building intelligent systems that solve real-world problems."
              delay={0.3}
              gradient="from-purple-500 to-pink-500"
              icon="🤖"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const ServiceCard = ({ title, description, delay, gradient, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{
      y: -10,
      boxShadow: '0 25px 70px rgba(187, 182, 17, 0.5)',
    }}
    className="relative group"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
    <div className="bg-[#06061f] backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-xl cursor-pointer border border-gray-800 group-hover:border-yellow-500/50 transition-all duration-300">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, type: "spring" }}
        className="text-5xl mb-4"
      >
        {icon}
      </motion.div>
      <h2 className={`text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h2>
      <p className="text-gray-300 leading-6 text-sm md:text-base">{description}</p>
      
      {/* Hover Arrow */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="mt-4 text-yellow-400 font-semibold flex items-center gap-2"
      >
        Learn More <span>→</span>
      </motion.div>
    </div>
  </motion.div>
)

export default Home
