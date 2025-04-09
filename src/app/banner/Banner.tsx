"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaLinkedin, FaFacebook, FaCode, FaReact, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa"
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiNetlify,
  SiVercel,
  SiPostman,
  SiTrello,
} from "react-icons/si"

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSkillCategory, setCurrentSkillCategory] = useState(0)
  const [currentLineHighlight, setCurrentLineHighlight] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Skill category rotation
    const categoryInterval = setInterval(() => {
      setCurrentSkillCategory((prev) => (prev + 1) % skillCategories.length)
    }, 5000)

    // Code line highlight animation
    const lineInterval = setInterval(() => {
      setCurrentLineHighlight((prev) => (prev + 1) % jsCodeLines.length)
    }, 1000)

    return () => {
      clearInterval(categoryInterval)
      clearInterval(lineInterval)
    }
  }, [])

  const coder = {
    name: "Rahatutzaman Rizon",
    title: "Professional Software Developer",
  }

  const socialIcons = [
    { Icon: FaGithub, href: "https://github.com/rahatutzaman-rizon", color: "#6e5494", label: "GitHub" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/rahatutzamanrizon/", color: "#0077B5", label: "LinkedIn" },
    { Icon: FaFacebook, href: "https://www.facebook.com/rahatutzaman.rizon", color: "#1877F2", label: "Facebook" },
  ]

  const jsCodeLines = [
    "class Developer {",
    "  constructor() {",
    '    this.name = "Rahatutzaman Rizon";',
    "    this.skills = {",
    '      languages: ["JavaScript", "Python", "C++"],',
    '      frameworks: ["React", "Next.js", "Express"],',
    '      databases: ["MongoDB", "MySQL"],',
    '      tools: ["Git", "Docker", "Vercel"]',
    "    };",
    "  }",
    "  code() {",
    '    console.log("Building innovative solutions");',
    "    return this.skills;",
    "  }",
    "}",
    "",
    "const me = new Developer();",
    "me.code();",
  ]

  const skillCategories = [
    {
      title: "Languages",
      icon: FaCode,
      skills: [
        { name: "JavaScript (ES6+)", icon: SiJavascript },
        { name: "Python", icon: FaPython },
        { name: "C++", icon: SiCplusplus },
      ],
    },
    {
      title: "Front-End",
      icon: FaReact,
      skills: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Redux", icon: SiRedux },
      ],
    },
    {
      title: "Back-End",
      icon: FaNodeJs,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "GraphQL", icon: SiGraphql },
        { name: "RESTful APIs", icon: FaDatabase },
      ],
    },
    {
      title: "Databases",
      icon: FaDatabase,
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: FaGithub,
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: FaGithub },
        { name: "Netlify", icon: SiNetlify },
        { name: "Vercel", icon: SiVercel },
        { name: "Postman", icon: SiPostman },
        { name: "Trello", icon: SiTrello },
      ],
    },
  ]

  const currentCategory = skillCategories[currentSkillCategory]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 6 + 2}vw`,
              height: `${Math.random() * 6 + 2}vw`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(0,0,0,0) 70%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          SiJavascript,
          SiPython,
          SiCplusplus,
          SiNextdotjs,
          SiHtml5,
          SiCss3,
          SiTailwindcss,
          SiRedux,
          SiExpress,
          SiGraphql,
          SiMongodb,
          SiMysql,
          SiGit,
          SiNetlify,
          SiVercel,
          SiPostman,
        ].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-3xl md:text-4xl opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color: `hsl(${Math.random() * 360}, 70%, 75%)`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto">
          {/* Left column - Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-sm font-medium"
              >
                Software Engineer
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <motion.span
                  className="inline-block"
                  animate={{
                    color: ["#60A5FA", "#34D399", "#F472B6", "#60A5FA"],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  Hello,
                </motion.span>
              </h1>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                I am{" "}
                <motion.span
                  className="inline-block"
                  animate={{
                    color: ["#F472B6", "#60A5FA", "#34D399", "#F472B6"],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  {coder.name}
                </motion.span>
              </h2>
            </div>

            {/* Animated skill categories */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSkillCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm">
                      <currentCategory.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                      {currentCategory.title} Expert
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {currentCategory.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/30 backdrop-blur-sm"
                      >
                        <skill.icon className="w-5 h-5 text-violet-300" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Social links */}
            <div className="pt-4">
              <p className="text-sm text-slate-400 mb-3">Connect with me:</p>
              <div className="flex flex-wrap gap-4">
                {socialIcons.map(({ Icon, href, color, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all"
                    whileHover={{ scale: 1.05, backgroundColor: color }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Code editor */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl blur opacity-30"></div>
            <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
              {/* Code editor header */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-medium text-slate-400">developer.js</div>
                <div className="text-xs text-slate-500">JavaScript</div>
              </div>

              {/* Code content */}
              <div className="p-4 bg-slate-900 overflow-x-auto">
                <pre className="text-xs sm:text-sm leading-relaxed font-mono">
                  {jsCodeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      className={`${index === currentLineHighlight ? "bg-slate-800/50 -mx-4 px-4" : ""}`}
                      animate={{
                        backgroundColor:
                          index === currentLineHighlight
                            ? ["rgba(30, 41, 59, 0.5)", "rgba(79, 70, 229, 0.2)", "rgba(30, 41, 59, 0.5)"]
                            : "transparent",
                      }}
                      transition={{ duration: 1 }}
                    >
                      <span className="mr-4 inline-block w-5 text-right text-slate-600">{index + 1}</span>
                      <span
                        className={`${
                          line.includes("class") || line.includes("constructor") || line.includes("code()")
                            ? "text-purple-400"
                            : line.includes("this.")
                              ? "text-cyan-400"
                              : line.includes("return")
                                ? "text-pink-400"
                                : line.includes("console.log")
                                  ? "text-yellow-400"
                                  : line.includes("new")
                                    ? "text-green-400"
                                    : line.includes('"')
                                      ? "text-amber-300"
                                      : "text-slate-300"
                        }`}
                      >
                        {line}
                      </span>
                    </motion.div>
                  ))}
                </pre>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -z-10 w-40 h-40 bg-violet-600/20 rounded-full blur-3xl"
              style={{ top: "10%", right: "20%" }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -z-10 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl"
              style={{ bottom: "10%", left: "20%" }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner
