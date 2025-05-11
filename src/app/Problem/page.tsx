"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView, type Variants } from "framer-motion"
import { Code2, Award, BookOpen, Brain, ChevronRight, Github, Trophy, Zap, ArrowRight } from "lucide-react"

interface CountUpProps {
  end: number
  duration?: number
  withPlus?: boolean
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2, withPlus = true }) => {
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

  return (
    <span>
      {count}
      {withPlus && "+"}
    </span>
  )
}

interface PlatformCardProps {
  platform: string
  solved: number
  icon: React.ElementType
  color: string
  delay?: number
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, solved, icon: Icon, color, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const iconVariants: Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        delay: delay + 0.2,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`bg-slate-800/90 p-4 rounded-2xl shadow-xl text-center border-b-4 ${color} backdrop-blur-sm relative overflow-hidden group`}
      whileHover={{
        y: -8,
        boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      <motion.div
        variants={iconVariants}
        className={`text-4xl mb-4 inline-block p-3 rounded-full ${color.replace("border", "bg").replace("-500", "-900/40")}`}
      >
        <Icon className={color.replace("border", "text").replace("-500", "-400")} size={32} />
      </motion.div>

      <h3 className="text-xl font-bold mb-2 text-white">{platform}</h3>

      <motion.p
        className="text-3xl font-bold text-slate-200"
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <CountUp end={solved} /> <span className="text-base font-normal text-slate-400">solved</span>
      </motion.p>

      <motion.div
        className="mt-4 pt-4 border-t border-slate-700/50"
        initial={{ opacity: 0, height: 0 }}
        whileHover={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center items-center text-cyan-400 text-sm font-medium">
          <span>View details</span>
          <ArrowRight className="ml-1 w-4 h-4" />
        </div>
      </motion.div>
    </motion.div>
  )
}

interface AchievementCardProps {
  title: string
  value: string | number | React.ReactNode
  icon: React.ElementType
  delay?: number
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, value, icon: Icon, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-slate-800/80 p-4 rounded-xl shadow-lg backdrop-blur-sm overflow-hidden relative"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-slate-900/30 opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex items-center gap-4 relative z-10">
        <motion.div
          className="p-3 bg-slate-700/50 rounded-lg"
          initial={{ rotate: -10, scale: 0.9 }}
          animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -10, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: delay + 0.1,
          }}
        >
          <Icon className="text-cyan-400" size={24} />
        </motion.div>
        <div>
          <p className="text-slate-400 text-sm">{title}</p>
          <motion.p
            className="text-white text-xl font-bold"
            initial={{ opacity: 0, y: 5 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ delay: delay + 0.2, duration: 0.3 }}
          >
            {value}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Problem() {
  const [isVisible, setIsVisible] = useState(false)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: false, amount: 0.3 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const floatingVariants: Variants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        duration: 3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-white">
      {/* Decorative elements with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-40 w-80 h-80 bg-slate-700/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-slate-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.header ref={headerRef} variants={itemVariants} className="text-center mb-10">
          <motion.div
            className="inline-block mb-3 px-4 py-1 bg-slate-800/80 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-cyan-400 font-medium">Professional Developer Portfolio</span>
          </motion.div>

          <motion.h1
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-slate-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Problem Solving Journey
          </motion.h1>

          <motion.p
            className="mt-3 text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Transforming complex challenges into elegant solutions, one algorithm at a time.
          </motion.p>

          <motion.div variants={floatingVariants} initial="hidden" animate="visible" className="mt-4">
            <motion.div
              className="w-8 h-8 mx-auto text-cyan-400"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                repeatType: "mirror",
              }}
            >
              <ChevronRight className="w-full h-full rotate-90" />
            </motion.div>
          </motion.div>
        </motion.header>

        <motion.section variants={itemVariants} className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Key Achievements</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-grow mx-4"></div>
            <motion.div
              className="bg-slate-800/80 px-3 py-1 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-cyan-400 font-medium">Expert Level</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <AchievementCard
              title="Total Problems"
              value={<CountUp end={500} duration={2.5} />}
              icon={Trophy}
              delay={0.1}
            />
            <AchievementCard title="Contests" value="25+" icon={Award} delay={0.2} />
       
            <AchievementCard title="Streak" value="365+" icon={Zap} delay={0.4} />
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Coding Conquests</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-grow mx-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PlatformCard platform="CodeChef" solved={250} icon={Code2} color="border-cyan-500" delay={0.1} />
            <PlatformCard platform="BeeCrowd" solved={150} icon={Award} color="border-emerald-500" delay={0.2} />
            <PlatformCard platform="LeetCode" solved={50} icon={Brain} color="border-amber-500" delay={0.3} />
          </div>

          <motion.div
            className="text-center mt-10 text-3xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false, amount: 0.8 }}
          >
            {/* <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-slate-200 mt-16"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Total Problems Vanquished: <CountUp end={1500} duration={2.5} />
            </motion.span> */}
          </motion.div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-10 mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Course Highlights</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-grow mx-4"></div>
          </div>

          <motion.div
            className="bg-slate-800/80 p-5 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              y: -5,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-slate-900/20"
              animate={{
                background: [
                  "linear-gradient(to bottom right, rgba(8, 145, 178, 0.1), transparent, rgba(15, 23, 42, 0.2))",
                  "linear-gradient(to bottom right, rgba(15, 23, 42, 0.2), transparent, rgba(8, 145, 178, 0.1))",
                  "linear-gradient(to bottom right, rgba(8, 145, 178, 0.1), transparent, rgba(15, 23, 42, 0.2))",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <motion.div
                  className="p-3 bg-slate-700/50 rounded-lg mr-4"
                  whileHover={{
                    rotate: [0, -10, 10, -5, 5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Phitron - Batch 2</h3>
                  <p className="text-slate-400">Advanced Computer Science Program</p>
                </div>
              </div>

              <motion.h4
                className="text-xl font-semibold text-cyan-400 mb-6"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Programming Fundamentals
              </motion.h4>

              <div>
                <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center">
                  <motion.span
                    className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "mirror",
                    }}
                  />
                  Core Topics
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "C Programming",
                    "Data Structures",
                    "Algorithms",
                    "Object-Oriented Programming",
                    "Problem Solving Techniques",
                    "System Design Architecture",
                    "Quick Learner",
                  ].map((topic, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-slate-300 bg-slate-700/30 px-3 py-1.5 rounded-lg group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(8, 145, 178, 0.2)",
                      }}
                    >
                      <motion.div
                        className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0"
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-full h-full" />
                      </motion.div>
                      <span className="text-sm">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Professional Expertise</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-grow mx-4"></div>
          </div>

          <motion.div
            className="bg-slate-800/80 p-5 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              y: -5,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-slate-900/20"
              animate={{
                background: [
                  "linear-gradient(to bottom right, rgba(8, 145, 178, 0.1), transparent, rgba(15, 23, 42, 0.2))",
                  "linear-gradient(to bottom right, rgba(15, 23, 42, 0.2), transparent, rgba(8, 145, 178, 0.1))",
                  "linear-gradient(to bottom right, rgba(8, 145, 178, 0.1), transparent, rgba(15, 23, 42, 0.2))",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <motion.div
                  className="p-2 bg-slate-700/50 rounded-lg mr-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Brain className="w-5 h-5 text-cyan-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Technical Specializations</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Algorithm Design",
                  "Competitive Programming",
                  "Dynamic Programming",
                  "Graph Theory",
                  "System Design Architecture",
                  "Quick Learner",
                ].map((specialty, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-slate-300 bg-slate-700/30 px-3 py-2 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: false, amount: 0.5 }}
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(8, 145, 178, 0.2)",
                    }}
                  >
                    <motion.div
                      className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-full h-full" />
                    </motion.div>
                    <span className="text-sm">{specialty}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.footer variants={itemVariants} className="text-center">
          <motion.a
            href="https://github.com/rahatutzaman-rizon/data-structure-and-algorithom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-600 to-slate-700 hover:from-cyan-500 hover:to-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200 shadow-lg relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ translateX: ["100%", "-100%"] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 1.5,
                repeatDelay: 3,
              }}
            />
            <motion.div
              className="mr-2"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 5,
              }}
            >
              <Github className="w-5 h-5" />
            </motion.div>
            View My GitHub
          </motion.a>

         
        </motion.footer>
      </motion.div>
    </div>
  )
}
