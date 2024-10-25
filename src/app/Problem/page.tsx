'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { Code2, Award, BookOpen, Brain, ChevronRight, Github } from 'lucide-react'

interface CountUpProps {
  end: number
  duration?: number
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration * 1000) {
        setCount(Math.min(Math.floor((progress / (duration * 1000)) * end), end))
        animationFrame = requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

interface PlatformCardProps {
  platform: string
  solved: number
  icon: React.ElementType
  color: string
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, solved, icon: Icon, color }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ scale: [1, 1.1, 1], transition: { duration: 0.5 } })
  }, [controls])

  return (
    <motion.div
      className={`bg-white p-6 rounded-2xl shadow-lg text-center border-b-4 ${color}`}
      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        animate={controls}
        className={`text-4xl mb-4 inline-block p-3 rounded-full ${color.replace('border', 'bg').replace('-500', '-100')}`}
      >
        <Icon className={color.replace('border', 'text').replace('-500', '-600')} size={32} />
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{platform}</h3>
      <p className="text-3xl font-bold text-gray-800">
        <CountUp end={solved} /> <span className="text-base font-normal">solved</span>
      </p>
    </motion.div>
  )
}

interface SkillBarProps {
  skill: string
  level: number
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-700">{skill}</span>
      <span className="text-sm font-medium text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        className="bg-indigo-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  </div>
)

export default function Problem() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-200 to-blue-300 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <motion.header variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Problem Solving Journey
          </h1>
          <p className="mt-3 text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming complex challenges into elegant solutions, one algorithm at a time.
          </p>
        </motion.header>

        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Coding Conquests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlatformCard
              platform="CodeChef"
              solved={250}
              icon={Code2}
              color="border-yellow-500"
            />
            <PlatformCard
              platform="BeeCrowd"
              solved={150}
              icon={Award}
              color="border-green-500"
            />
            <PlatformCard
              platform="LeetCode"
              solved={50}
              icon={Brain}
              color="border-red-500"
            />
          </div>
          <motion.div
            className="text-center mt-10 text-3xl font-bold text-indigo-700"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Total Problems Vanquished: <CountUp end={500} duration={2.5} />+
          </motion.div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Course Highlights</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <BookOpen className="w-10 h-10 text-indigo-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Phitron - Batch 2</h3>
            </div>
            <h4 className="text-xl font-semibold text-indigo-600 mb-6">Programming Fundamentals</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-700 mb-4">Core Topics</h5>
                <ul className="space-y-2">
                  {['C Programming', 'Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Problem Solving Techniques'].map((topic, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ChevronRight className="w-5 h-5 text-indigo-500 mr-2" />
                      {topic}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-700 mb-4">Skill Proficiency</h5>
                <SkillBar skill="Problem Solving" level={95} />
                <SkillBar skill="Data Structures" level={90} />
                <SkillBar skill="Algorithms" level={85} />
                <SkillBar skill="C++" level={80} />
                <SkillBar skill="Python" level={75} />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.footer variants={itemVariants} className="text-center">
          <a
            href="https://github.com/rahatutzaman-rizon/data-structure-and-algorithom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            View My GitHub
          </a>
        </motion.footer>
      </motion.div>
    </div>
  )
}