import { motion } from 'framer-motion'
import { useState } from 'react'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formDataToSend = new FormData();
  formDataToSend.append("access_key", "672b81a4-264e-46ae-98d0-e2536bb5fac0");
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("message", formData.message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formDataToSend
  });

  const data = await response.json();

  if (data.success) {
    alert(`Thank you ${formData.name}! Your message has been sent to Gmail. ✔️`);
    setFormData({ name: "", email: "", message: "" });
  } else {
    alert("Error sending message ❌");
  }

  setIsSubmitting(false);
};


  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/somveersingh-23', 
      icon: '💻',
      color: 'from-gray-700 to-gray-900'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/somveer-singh-0205971ab/', 
      icon: '💼',
      color: 'from-blue-600 to-blue-800'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com', 
      icon: '🐦',
      color: 'from-sky-500 to-blue-600'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com', 
      icon: '📸',
      color: 'from-pink-500 to-purple-600'
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-[#030311] to-[#000005] py-16 md:py-20 px-4 sm:px-6 lg:px-8 mt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: -360,
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            Let's{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Have a project in mind? Let's collaborate and bring your ideas to life! 🚀
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </motion.h2>

            <ContactItem 
              icon="📍" 
              label="Location" 
              value="Bijnor, UP, India" 
              gradient="from-green-500 to-emerald-500"
              delay={0.1}
            />
            <ContactItem 
              icon="📞" 
              label="Phone" 
              value="+91 9690162617 / 3875" 
              gradient="from-blue-500 to-cyan-500"
              delay={0.2}
            />
            <ContactItem 
              icon="📧" 
              label="Email" 
              value="kaidwal.somveer@gmail.com" 
              gradient="from-purple-500 to-pink-500"
              delay={0.3}
              isLink={true}
              href="mailto:kaidwal.somveer@gmail.com"
            />
            <ContactItem 
              icon="💼" 
              label="LinkedIn" 
              value="Visit Profile" 
              gradient="from-orange-500 to-red-500"
              delay={0.4}
              isLink={true}
              href="https://www.linkedin.com/in/somveer-singh-0205971ab/"
            />

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-8"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-300">Follow Me</h3>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      boxShadow: '0 10px 40px rgba(187, 182, 17, 0.5)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative group w-14 h-14 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-2xl shadow-lg overflow-hidden`}
                  >
                    <span className="relative z-10">{social.icon}</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="relative group"
          >
            {/* Gradient Border Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 rounded-3xl blur-xl transition-opacity duration-300"
            />

            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-700 group-hover:border-transparent transition-all">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Send a Message 💬
              </h2>

              {/* Name Input */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-lg font-semibold mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter Name"
                  className="w-full h-12 px-4 rounded-xl bg-gray-800/50 border border-gray-600 text-white text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-lg font-semibold mb-2 text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="abc@gmail.com"
                  className="w-full h-12 px-4 rounded-xl bg-gray-800/50 border border-gray-600 text-white text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-lg font-semibold mb-2 text-gray-300">
                  Your Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(187, 182, 17, 0.6)',
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="relative w-full md:w-auto px-10 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-black rounded-full font-bold text-lg shadow-2xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%', opacity: 0.5 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{ mixBlendMode: 'overlay' }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        ⏳
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <span className="text-xl">🚀</span>
                    </>
                  )}
                </span>
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p 
              className="text-gray-500 text-sm md:text-base"
              whileHover={{ scale: 1.05, color: '#bbb611' }}
            >
              © 2025 <span className="font-bold">Somveer Singh</span>. All rights reserved. ✨
            </motion.p>

            {/* Quick Links */}
            <div className="flex gap-6 text-sm">
              {['Privacy', 'Terms', 'Cookies'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    color: '#bbb611',
                    y: -2
                  }}
                  className="text-gray-500 hover:text-yellow-400 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring" }}
            className="text-center mt-6"
          >
            <p className="text-gray-500 text-sm">
              Made by{' '}
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500 inline-block"
              >
                ❤️
              </motion.span>
              {' '}{' '}
              <span className="text-yellow-400">Kaidwal</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

// Enhanced Contact Item Component
const ContactItem = ({ icon, label, value, gradient, delay, isLink = false, href = '#' }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ x: 10, scale: 1.05 }}
    className="flex items-start gap-4 group"
  >
    {/* Icon */}
    <motion.div
      whileHover={{ rotate: 360, scale: 1.2 }}
      transition={{ duration: 0.5 }}
      className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}
    >
      {icon}
    </motion.div>

    {/* Content */}
    <div className="flex-1">
      <p className="text-gray-400 text-sm font-medium mb-1">{label}</p>
      {isLink ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-base md:text-lg font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent hover:underline`}
        >
          {value}
        </a>
      ) : (
        <p className="text-base md:text-lg font-semibold text-gray-200">
          {value}
        </p>
      )}
    </div>
  </motion.div>
)

export default Footer
