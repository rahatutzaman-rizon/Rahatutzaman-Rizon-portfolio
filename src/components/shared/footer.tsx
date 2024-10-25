'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 15 },
  }

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Rahatutzaman Rizon
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Full Stack Developer passionate about creating efficient and innovative solutions.
              Transforming ideas into reality through code.
            </p>
            <p className="text-gray-400">
              &copy; {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-2xl font-semibold mb-6 text-purple-300">What I Do</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300 hover:text-purple-300 transition-colors duration-300">
                <FaCode className="mr-3 text-purple-400" /> Web Development
              </li>
              <li className="flex items-center text-gray-300 hover:text-purple-300 transition-colors duration-300">
                <FaLaptopCode className="mr-3 text-purple-400" /> Full Stack Solutions
              </li>
              <li className="flex items-center text-gray-300 hover:text-purple-300 transition-colors duration-300">
                <FaMobileAlt className="mr-3 text-purple-400" /> Responsive Design
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-2xl font-semibold mb-6 text-purple-300">Get in Touch</h4>
            <a 
              href="mailto:rizonrahat199@gmail.com" 
              className="flex items-center text-gray-300 hover:text-purple-300 transition-colors duration-300 mb-6"
            >
              <FaEnvelope className="mr-3 text-purple-400" />
              rizonrahat199@gmail.com
            </a>
            <div className="flex space-x-6">
              <motion.a 
                href="https://www.facebook.com/rahatutzaman.rizon" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaFacebookF size={28} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/rahatutzamanrizon/" 
                className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaLinkedinIn size={28} />
              </motion.a>
              <motion.a 
                href="https://github.com/rahatutzaman-rizon" 
                className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaGithub size={28} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Bottom Bar */}
      <motion.div 
        className="mt-12 pt-8 border-t border-gray-700"
        variants={itemVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Designed and built with{' '}
            <motion.span
              className="text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ❤️
            </motion.span>{' '}
            by Rahatutzaman Rizon
          </motion.p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer;