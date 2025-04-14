"use client"

import { useState, useEffect, useMemo } from "react"
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
} from "react-icons/si"

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSkillCategory, setCurrentSkillCategory] = useState(0)
  const [currentLineHighlight, setCurrentLineHighlight] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Memoize static data to prevent re-creation on each render
  const coder = useMemo(() => ({
    name: "Rahatutzaman Rizon",
    title: "Professional Software Developer",
  }), [])

  const socialIcons = useMemo(() => [
    { Icon: FaGithub, href: "https://github.com/rahatutzaman-rizon", color: "#6e5494", label: "GitHub" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/rahatutzamanrizon/", color: "#0077B5", label: "LinkedIn" },
    { Icon: FaFacebook, href: "https://www.facebook.com/rahatutzaman.rizon", color: "#1877F2", label: "Facebook" },
  ], [])

  const jsCodeLines = useMemo(() => [
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
  ], [])

  const skillCategories = useMemo(() => [
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
      ],
    },
  ], [])

  // Memoize floating tech icons to prevent recreation
  const floatingTechIcons = useMemo(() => {
    return [
      { Icon: SiJavascript, top: "15%", left: "20%", color: "hsl(40, 70%, 75%)" },
      { Icon: SiPython, top: "25%", left: "80%", color: "hsl(200, 70%, 75%)" },
      { Icon: SiCplusplus, top: "45%", left: "15%", color: "hsl(240, 70%, 75%)" },
      { Icon: SiNextdotjs, top: "65%", left: "85%", color: "hsl(0, 70%, 75%)" },
      { Icon: SiHtml5, top: "75%", left: "30%", color: "hsl(20, 70%, 75%)" },
      { Icon: SiCss3, top: "35%", left: "70%", color: "hsl(130, 70%, 75%)" },
      { Icon: SiTailwindcss, top: "85%", left: "60%", color: "hsl(170, 70%, 75%)" },
      { Icon: SiRedux, top: "55%", left: "40%", color: "hsl(280, 70%, 75%)" },
    ];
  }, []);

  // Memoize background particles
  const backgroundParticles = useMemo(() => {
    return [
      { id: 1, width: "4vw", height: "4vw", top: "10%", left: "20%", duration: 20 },
      { id: 2, width: "3vw", height: "3vw", top: "30%", left: "80%", duration: 25 },
      { id: 3, width: "5vw", height: "5vw", top: "60%", left: "15%", duration: 22 },
      { id: 4, width: "2vw", height: "2vw", top: "80%", left: "60%", duration: 18 },
      { id: 5, width: "4vw", height: "4vw", top: "40%", left: "40%", duration: 24 },
      { id: 6, width: "3vw", height: "3vw", top: "20%", left: "65%", duration: 21 },
      { id: 7, width: "5vw", height: "5vw", top: "75%", left: "30%", duration: 23 },
      { id: 8, width: "2vw", height: "2vw", top: "50%", left: "90%", duration: 19 },
      { id: 9, width: "4vw", height: "4vw", top: "15%", left: "45%", duration: 26 },
      { id: 10, width: "3vw", height: "3vw", top: "70%", left: "75%", duration: 20 },
      { id: 11, width: "5vw", height: "5vw", top: "25%", left: "10%", duration: 22 },
      { id: 12, width: "2vw", height: "2vw", top: "90%", left: "25%", duration: 24 },
    ];
  }, []);

  // Safe mounting check
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return;
    
    // Set visibility after initial render
    setIsVisible(true)

    // Skill category rotation with decreased frequency
    const categoryInterval = setInterval(() => {
      setCurrentSkillCategory((prev) => (prev + 1) % skillCategories.length)
    }, 8000)

    // Code line highlight animation with decreased frequency
    const lineInterval = setInterval(() => {
      setCurrentLineHighlight((prev) => (prev + 1) % jsCodeLines.length)
    }, 2000)

    return () => {
      clearInterval(categoryInterval)
      clearInterval(lineInterval)
    }
  }, [isMounted, skillCategories.length, jsCodeLines.length])

  // Safe guard for SSR
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
        <div className="text-xl font-medium">Loading...</div>
      </div>
    );
  }

  const currentCategory = skillCategories[currentSkillCategory]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Reduced number of animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full opacity-10"
            style={{
              width: particle.width,
              height: particle.height,
              top: particle.top,
              left: particle.left,
              background: `radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(0,0,0,0) 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Reduced number of floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingTechIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl md:text-3xl opacity-15"
            style={{
              top: item.top,
              left: item.left,
              color: item.color,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5
            }}
          >
            <item.Icon />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto">
          {/* Left column - Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
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
                  transition={{ duration: 8, repeat: Infinity }}
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
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  {coder.name}
                </motion.span>
              </h2>
            </div>

            {/* Animated skill categories with reduced animation complexity */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSkillCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800/50">
                      <currentCategory.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                      {currentCategory.title} Expert
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {currentCategory.skills.map((skill, idx) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/30"
                      >
                        <skill.icon className="w-5 h-5 text-violet-300" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Social links with simplified animations */}
            <div className="pt-4">
              <p className="text-sm text-slate-400 mb-3">Connect with me:</p>
              <div className="flex flex-wrap gap-4">
                {socialIcons.map(({ Icon, href, color, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
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

          {/* Right column - Code editor with optimized animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl blur opacity-20"></div>
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

              {/* Code content with simplified highlight animation */}
              <div className="p-4 bg-slate-900 overflow-x-auto">
                <pre className="text-xs sm:text-sm leading-relaxed font-mono">
                  {jsCodeLines.map((line, index) => (
                    <div
                      key={index}
                      className={`${index === currentLineHighlight ? "bg-slate-800/50 -mx-4 px-4" : ""}`}
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
                    </div>
                  ))}
                </pre>
              </div>
            </div>

            {/* Reduced decorative elements */}
            <motion.div
              className="absolute -z-10 w-40 h-40 bg-violet-600/15 rounded-full blur-3xl"
              style={{ top: "10%", right: "20%" }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.2, 0.15],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -z-10 w-60 h-60 bg-indigo-600/15 rounded-full blur-3xl"
              style={{ bottom: "10%", left: "20%" }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.2, 0.15],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner