"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope, FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa"

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
    <footer className="relative py-20 overflow-hidden bg-[#050A18]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px] translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-[10%] w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent opacity-40"></div>
        <div className="absolute top-40 left-[20%] w-1 h-40 bg-gradient-to-b from-blue-400 to-transparent opacity-30"></div>
        <div className="absolute top-10 right-[15%] w-1 h-30 bg-gradient-to-b from-blue-500 to-transparent opacity-40"></div>
        <div className="absolute bottom-20 right-[25%] w-1 h-20 bg-gradient-to-b from-transparent to-blue-500 opacity-30"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,30,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,30,60,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.15]"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* Logo and tagline section */}
        <motion.div
          className="flex flex-col items-center justify-center mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            Rahatutzaman Rizon
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 mb-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
          <p className="max-w-2xl text-blue-100/80">
            Full Stack Developer passionate about creating efficient and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* About Section */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 overflow-hidden rounded-2xl backdrop-blur-md"
            style={{
              background: "linear-gradient(145deg, rgba(15,23,42,0.6), rgba(15,23,42,0.2))",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.1)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            <h3 className="mb-6 text-2xl font-semibold text-white">About Me</h3>
            <p className="mb-6 leading-relaxed text-blue-100/80">
              Transforming ideas into reality through code. I specialize in building modern web applications with
              cutting-edge technologies.
            </p>
            <p className="text-blue-300/80">&copy; {currentYear} All rights reserved.</p>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 overflow-hidden rounded-2xl backdrop-blur-md"
            style={{
              background: "linear-gradient(145deg, rgba(15,23,42,0.6), rgba(15,23,42,0.2))",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.1)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
            <h4 className="mb-6 text-2xl font-semibold text-white">What I Do</h4>
            <ul className="space-y-5">
              <motion.li
                className="flex items-center p-3 transition-all rounded-lg bg-blue-900/20 hover:bg-blue-900/30 hover:translate-x-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-blue-500/20">
                  <FaCode className="text-blue-400" />
                </div>
                <span className="text-blue-100">Software Development</span>
              </motion.li>

              <motion.li
                className="flex items-center p-3 transition-all rounded-lg bg-blue-900/20 hover:bg-blue-900/30 hover:translate-x-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-blue-500/20">
                  <FaLaptopCode className="text-blue-400" />
                </div>
                <span className="text-blue-100">Full Stack Solutions</span>
              </motion.li>

              <motion.li
                className="flex items-center p-3 transition-all rounded-lg bg-blue-900/20 hover:bg-blue-900/30 hover:translate-x-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-blue-500/20">
                  <FaMobileAlt className="text-blue-400" />
                </div>
                <span className="text-blue-100">Responsive Design</span>
              </motion.li>
            </ul>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-600/10 blur-xl"></div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 overflow-hidden rounded-2xl backdrop-blur-md"
            style={{
              background: "linear-gradient(145deg, rgba(15,23,42,0.6), rgba(15,23,42,0.2))",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.1)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-blue-900"></div>
            <h4 className="mb-6 text-2xl font-semibold text-white">Get in Touch</h4>

            <motion.a
              href="mailto:rizonrahat199@gmail.com"
              className="flex items-center p-3 mb-6 transition-all rounded-lg bg-blue-900/20 hover:bg-blue-900/30"
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-blue-500/20">
                <FaEnvelope className="text-blue-400" />
              </div>
              <span className="text-blue-100">rizonrahat199@gmail.com</span>
            </motion.a>

            <h5 className="mb-4 text-sm font-medium tracking-wider text-blue-300 uppercase">Connect With Me</h5>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/rahatutzaman.rizon"
                className="flex items-center justify-center w-12 h-12 transition-all rounded-full bg-blue-900/30 hover:bg-blue-800/40"
                whileHover="hover"
                variants={socialIconVariants}
              >
                <FaFacebookF className="text-blue-300" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/rahatutzamanrizon/"
                className="flex items-center justify-center w-12 h-12 transition-all rounded-full bg-blue-900/30 hover:bg-blue-800/40"
                whileHover="hover"
                variants={socialIconVariants}
              >
                <FaLinkedinIn className="text-blue-300" />
              </motion.a>

              <motion.a
                href="https://github.com/rahatutzaman-rizon"
                className="flex items-center justify-center w-12 h-12 transition-all rounded-full bg-blue-900/30 hover:bg-blue-800/40"
                whileHover="hover"
                variants={socialIconVariants}
              >
                <FaGithub className="text-blue-300" />
              </motion.a>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-700/10 blur-xl"></div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="relative z-10 pt-12 mt-16 text-center border-t border-blue-900/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-300/80">
            Designed and built with{" "}
            <motion.span
              className="inline-block text-blue-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              ❤️
            </motion.span>{" "}
            by Rahatutzaman Rizon
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
