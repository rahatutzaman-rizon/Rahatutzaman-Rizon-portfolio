'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa'

type SkillCardProps = {
  icon: React.ElementType, // Update this type to be React.ElementType
  title: string,
  skills: string[]
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <Icon className="text-4xl text-indigo-400 mb-4" />
    <h3 className="text-2xl font-semibold mb-4 text-indigo-300">{title}</h3>
    <ul className="text-gray-300 space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
)

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">About Me</h2>
          <p className="text-2xl text-indigo-300 mb-6">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <p className="text-xl text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
            Ambitious Full Stack Developer with a strong foundation in software engineering, seeking to leverage technical expertise and
            problem-solving skills to drive innovation and contribute to cutting-edge projects. Committed to continuous learning and
            professional growth in a dynamic, collaborative environment.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">Professional Summary</h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            As a passionate Full Stack Developer, I bring a unique blend of technical expertise and creative problem-solving to every project. With a strong foundation in both front-end and back-end technologies, I specialize in creating seamless, user-centric web applications that not only meet but exceed client expectations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">Background & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-indigo-900/50 p-6 rounded-xl shadow-lg">
              <FaGraduationCap className="text-indigo-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-indigo-300 mb-2">Education</h3>
              <p className="text-gray-300 text-center">Graduated degree in ICT at Mawlana Bhasani Science and Technology University</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-purple-900/50 p-6 rounded-xl shadow-lg">
              <FaBriefcase className="text-purple-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-purple-300 mb-2">Experience</h3>
              <p className="text-gray-300 text-center">Internship and job experience in developing efficient and innovative solutions using cutting-edge technologies</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">Personal Brand Statement</h2>
          <blockquote className="text-xl text-gray-300 leading-relaxed italic border-l-4 border-indigo-500 pl-4 max-w-3xl mx-auto">
            `Transforming ideas into reality through code, I am committed to pushing the boundaries of what is possible in web development. My goal is to create innovative, scalable, and user-friendly solutions that make a lasting impact in the digital world.`
          </blockquote>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1, delay: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">Core Skills & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={FaCode}
              title="Technical Skills"
              skills={['Full Stack Web Development', 'RESTful API Design', 'Database Management', 'Version Control (Git)', 'Responsive Web Design']}
            />
            <SkillCard
              icon={FaLightbulb}
              title="Core Values"
              skills={['Continuous Learning', 'Attention to Detail', 'Problem-Solving', 'Collaboration', 'Innovation']}
            />
            <SkillCard
              icon={FaRocket}
              title="Expertise"
              skills={['JavaScript/TypeScript', 'React & Next.js', 'Node.js & Express', 'MongoDB & SQL', 'AWS & Cloud Services']}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
