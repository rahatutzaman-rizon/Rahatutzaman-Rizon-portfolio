'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Award, BookOpen, Rocket, Lightbulb, GitBranch } from 'lucide-react'

type SkillCardProps = {
  icon: React.ElementType,
  title: string,
  skills: string[]
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="bg-black bg-opacity-70 border border-purple-800 p-6 rounded-xl shadow-lg hover:shadow-purple-900/30 transition-all duration-300"
  >
    <div className="flex items-center mb-4">
      <Icon className="text-purple-500 mr-3" size={24} strokeWidth={2} />
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <ul className="text-gray-300 space-y-2">
      {skills.map((skill, index) => (
        <motion.li 
          key={index} 
          className="flex items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
          {skill}
        </motion.li>
      ))}
    </ul>
  </motion.div>
)

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggered = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-indigo-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-purple-700 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">About Me</h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '150px' }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
          ></motion.div>
          <p className="text-2xl text-purple-300 mb-4 font-light">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
            Ambitious Full Stack Developer with a strong foundation in software engineering, seeking to leverage technical expertise and
            problem-solving skills to drive innovation and contribute to cutting-edge projects.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Professional Summary</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I bring a unique blend of technical expertise and creative problem-solving to every project. With a strong foundation in both front-end and back-end technologies, I specialize in creating seamless, user-centric web applications.
          </p>
        </motion.div>

        <motion.div
          variants={staggered}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Background & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05 }} 
              className="bg-black bg-opacity-60 border border-purple-800 p-6 rounded-xl shadow-lg"
            >
              <BookOpen className="text-purple-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-white mb-2">Education</h3>
              <p className="text-gray-300 text-center">Graduated in ICT at Mawlana Bhasani Science and Technology University</p>
            </motion.div>
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.05 }} 
              className="bg-black bg-opacity-60 border border-purple-800 p-6 rounded-xl shadow-lg"
            >
              <Award className="text-purple-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-white mb-2">Experience</h3>
              <p className="text-gray-300 text-center">Developing efficient and innovative solutions using cutting-edge technologies</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Personal Brand Statement</h2>
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg text-gray-300 leading-relaxed italic border-l-4 border-purple-500 pl-4 max-w-3xl mx-auto"
          >
            "Transforming ideas into reality through code, I am committed to pushing the boundaries of what is possible in web development. My goal is to create innovative, scalable, and user-friendly solutions that make a lasting impact in the digital world."
          </motion.blockquote>
        </motion.div>

        <motion.div
          variants={staggered}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Core Skills & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={item}>
              <SkillCard
                icon={Code}
                title="Technical Skills"
                skills={['Full Stack Development', 'RESTful API Design', 'Database Management', 'Version Control', 'Responsive Design']}
              />
            </motion.div>
            <motion.div variants={item}>
              <SkillCard
                icon={Lightbulb}
                title="Core Values"
                skills={['Continuous Learning', 'Attention to Detail', 'Problem-Solving', 'Collaboration', 'Innovation']}
              />
            </motion.div>
            <motion.div variants={item}>
              <SkillCard
                icon={Rocket}
                title="Expertise"
                skills={['JavaScript/TypeScript', 'React & Next.js', 'Node.js & Express', 'MongoDB & SQL', 'AWS & Cloud']}
              />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <GitBranch className="text-purple-500 w-8 h-8 mx-auto mb-4" />
          <p className="text-purple-300">Let's build something amazing together</p>
        </motion.div>
      </div>
    </section>
  )
}

export default About