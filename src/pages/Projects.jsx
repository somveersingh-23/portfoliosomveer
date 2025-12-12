import { motion } from 'framer-motion'

const projectsData = [
  {
    title: 'Spotify Player',
    image: '/img/spotify_clone.png',
    url: 'https://musicplayerspotifyclone.netlify.app/',
  },
  {
    title: 'ShopKart E-Com',
    image: '/img/ecom_web.png',
    url: 'https://ecomeerceshopkart.netlify.app/',
  },
  {
    title: 'RVIT Learning Hub',
    image: '/img/college_learn.png',
    url: 'https://rvitlearninghub.netlify.app/',
  },
  {
    title: 'Portfolio Project',
    image: '/img/portfolio_proj.png',
    url: 'https://somveer23portfolio.netlify.app/',
  },
  {
    title: 'Gym Management',
    image: '/img/gym.jpg',
    url: 'https://github.com/somveersingh-23/GymManagementGui/',
  },
  {
    title: 'Hospital Management',
    image: '/img/hospital.jpg',
    url: 'https://github.com/somveersingh-23/HospitalManageMentGui',
  },
  {
    title: 'To-Do List',
    image: '/img/todo.png',
    url: 'https://github.com/somveersingh-23/internpeWebDevTask3/',
  },
  {
    title: 'Business Website',
    image: '/img/business.png',
    url: 'https://github.com/somveersingh-23/CodeSoft_webDevInt_Lev1Task1/',
  },
]

const Projects = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-[var(--color-primary)]">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 25px 60px rgba(187, 182, 17, 0.5)',
              }}
              onClick={() => window.open(project.url, '_blank')}
              className="bg-[var(--color-dark-blue)] rounded-2xl overflow-hidden shadow-xl cursor-pointer hover-glow"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-center">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
