'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { 
  FaReact, 
  FaNodeJs, 
  FaCode, 
  FaGithub,
  FaBrain, 
  FaLightbulb,
  FaServer,
  FaDatabase,
  FaTools,
  FaRocket
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiGraphql, 
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiFirebase
} from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'

gsap.registerPlugin(ScrollTrigger)

const ExperienceCard = ({ title, company, period, description, skills, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      x: index % 2 === 0 ? -50 : 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top bottom-=100',
        end: 'top center',
        scrub: 1
      }
    })
  }, [index])

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative p-6 bg-gray-900 rounded-lg border border-gray-800">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {title}
            </h3>
            <p className="text-purple-400 font-medium">{company}</p>
          </div>
          <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">{period}</span>
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-purple-400 hover:bg-gray-700 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const SkillCard = ({ icon: Icon, title, description }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top bottom-=50',
        end: 'top center',
        scrub: 1
      }
    })
  }, [])

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative p-6 bg-gray-900 rounded-lg border border-gray-800">
        <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-2xl text-purple-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

const TechIcon = ({ Icon, label }) => (
  <motion.div
    className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="text-3xl text-purple-400" />
    <span className="text-sm text-gray-300">{label}</span>
  </motion.div>
)

const About = () => {
  const headerRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    })

    const sections = containerRef.current.children
    Array.from(sections).forEach((section) => {
      gsap.from(section, {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          end: "top center",
          scrub: 1
        }
      })
    })
  }, [])

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Solutions Inc.",
      period: "June 2023 - Present",
      description: "Developing and maintaining full-stack web applications using React and Node.js. Implemented new features and improved application performance by 40%.",
      skills: ["React", "Node.js", "MongoDB", "GraphQL"]
    },
    {
      title: "Web Development Intern",
      company: "Digital Innovations",
      period: "Jan 2023 - May 2023",
      description: "Created responsive web applications and contributed to the development of a major e-commerce platform.",
      skills: ["JavaScript", "React", "CSS", "REST APIs"]
    }
  ]

  const skills = [
    {
      icon: FaRocket,
      title: "Technical Expertise",
      description: "Proficient in modern web technologies including React, Node.js, and cloud platforms."
    },
    {
      icon: FaBrain,
      title: "Problem Solving",
      description: "Strong analytical skills with a track record of solving complex technical challenges."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Passionate about exploring new technologies and implementing creative solutions."
    }
  ]

  const techStack = [
    { icon: FaReact, label: "React" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: FaNodeJs, label: "Node.js" },
    { icon: SiMongodb, label: "MongoDB" },
    { icon: SiGraphql, label: "GraphQL" },
    { icon: SiTailwindcss, label: "Tailwind" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiDocker, label: "Docker" },
  
    { icon: SiFirebase, label: "Firebase" }
  ]

  const learningAreas = [
    { icon: FaServer, text: "Advanced React Patterns and Performance Optimization" },
    { icon: FaDatabase, text: "Microservices Architecture and System Design" },
    { icon: FaTools, text: "Cloud Infrastructure and DevOps Practices" }
  ]

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Hero Section */}
        <div ref={headerRef} className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Rahatutzaman Rizon
            </h1>
            <TypeAnimation
              sequence={[
                'Ambitious Full Stack Developer',
                1000,
                'Problem Solver',
                1000,
                'Innovation Enthusiast',
                1000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-2xl md:text-3xl text-gray-300"
            />
          </motion.div>
        </div>

        {/* Professional Summary */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Professional Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Ambitious Full Stack Developer with a strong foundation in software engineering, seeking to leverage technical expertise and
              problem-solving skills to drive innovation and contribute to cutting-edge projects.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Personal Brand
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Known for delivering high-quality solutions through a combination of technical excellence and creative problem-solving.
              Passionate about learning new technologies and sharing knowledge.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} index={index} />
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Technical Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <TechIcon key={index} {...tech} />
            ))}
          </div>
        </div>

        {/* Learning & Growth */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Continuous Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-6 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Current Focus Areas</h3>
                <ul className="space-y-4">
                  {learningAreas.map((area, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <area.icon className="text-purple-400 flex-shrink-0" />
                      <span>{area.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-6 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Problem-Solving Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaBrain className="text-purple-400 flex-shrink-0" />
                    <span>Analytical thinking and systematic debugging</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaLightbulb className="text-purple-400 flex-shrink-0" />
                    <span>Research-driven solution development</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaTools className="text-purple-400 flex-shrink-0" />
                    <span>Collaborative problem-solving in team environments</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
        </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Let's Connect
            </h2>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaGithub className="text-2xl text-purple-400" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About