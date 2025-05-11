"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  Code2,
  Layout,
  Server,
  Database,
  Blocks,
  Sparkles,
  GitBranch,
  Terminal,
  Cpu,
  Globe,
  Briefcase,
  Code,
  RefreshCw,
  FileCode2,
  Store,
  Layers,
} from "lucide-react"

interface Skill {
  name: string
  icon: React.ElementType
  color: string
}

interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: Skill[]
  description: string
  color: string
}

interface WorkExperience {
  title: string
  icon: React.ElementType
  description: string
  skills: string[]
  color: string
  gradient: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    color: "text-emerald-400",
    description: "Core programming languages I specialize in",
    skills: [
      { name: "TypeScript", icon: Terminal, color: "text-emerald-400" },
      { name: "Python", icon: Terminal, color: "text-emerald-400" },
      { name: "JavaScript", icon: Terminal, color: "text-emerald-400" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    color: "text-blue-400",
    description: "Modern UI/UX development technologies",
    skills: [
      { name: "React/Next.js", icon: Blocks, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: Layout, color: "text-blue-400" },
      { name: "Framer Motion", icon: Sparkles, color: "text-blue-400" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-purple-400",
    description: "Server-side technologies and frameworks",
    skills: [
      { name: "Node.js", icon: Server, color: "text-purple-400" },
      { name: "Express.js", icon: Server, color: "text-purple-400" },
      { name: "GraphQL", icon: Globe, color: "text-purple-400" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-amber-400",
    description: "Database management systems",
    skills: [
      { name: "MongoDB", icon: Database, color: "text-amber-400" },
      { name: "MySQL", icon: Database, color: "text-amber-400" },
      { name: "PostgreSQL", icon: Database, color: "text-amber-400" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    color: "text-teal-400",
    description: "Development operations & tools",
    skills: [
      { name: "Git/GitHub", icon: GitBranch, color: "text-teal-400" },
      { name: "Docker", icon: Blocks, color: "text-teal-400" },
      { name: "CI/CD", icon: Cpu, color: "text-teal-400" },
    ],
  },
]

const workExperiences: WorkExperience[] = [
  {
    title: "State Management",
    icon: RefreshCw,
    description: "Experience with modern state management solutions",
    skills: ["Redux", "Redux Toolkit", "Context API", "Zustand", "Recoil"],
    color: "text-rose-400",
    gradient: "from-rose-400 to-rose-600",
  },
  {
    title: "API Development",
    icon: Code,
    description: "Building and consuming APIs with best practices",
    skills: ["RESTful API Design", "API Documentation", "Swagger/OpenAPI", "API Authentication", "Rate Limiting"],
    color: "text-cyan-400",
    gradient: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Business Applications",
    icon: Briefcase,
    description: "Experience developing business applications",
    skills: ["B2B Solutions", "B2C Platforms", "Enterprise Applications", "SaaS Products", "E-commerce"],
    color: "text-amber-400",
    gradient: "from-amber-400 to-amber-600",
  },
  {
    title: "Architecture Patterns",
    icon: Layers,
    description: "Implementing scalable architecture patterns",
    skills: ["MVC Pattern", "MVVM", "Clean Architecture", "Microservices", "Domain-Driven Design"],
    color: "text-violet-400",
    gradient: "from-violet-400 to-violet-600",
  },
  {
    title: "Code Quality",
    icon: FileCode2,
    description: "Maintaining high standards of code quality",
    skills: ["Code Refactoring", "Clean Code Principles", "Unit Testing", "Code Reviews", "Static Analysis"],
    color: "text-green-400",
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Business Domains",
    icon: Store,
    description: "Experience across various business domains",
    skills: ["E-commerce", "FinTech", "Healthcare", "Education", "Real Estate"],
    color: "text-orange-400",
    gradient: "from-orange-400 to-orange-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const experienceCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
    transition: {
      duration: 0.3,
    },
  },
}

const skillBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
}

export default function SkillsShowcase() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-3 md:p-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Technical Skills
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across various technologies and frameworks
        </p>
      </motion.div>

      {/* Technical Skills Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-600/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-gray-700/50 ${category.color}`}>
                <category.icon className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold text-white">{category.title}</h2>
            </div>
            <p className="text-gray-400 text-sm mb-6">{category.description}</p>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * skillIdx }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700/30 border border-gray-700/50`}
                >
                  <skill.icon className={`w-4 h-4 ${category.color}`} />
                  <span className="text-gray-200 text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Work Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
          Work Experience
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Professional experience and expertise in various technologies and methodologies
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {workExperiences.map((experience, idx) => (
          <motion.div
            key={idx}
            variants={experienceCardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-gray-700/50 ${experience.color}`}>
                <experience.icon className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold text-white">{experience.title}</h2>
            </div>
            <p className="text-gray-400 text-sm mb-6">{experience.description}</p>

            <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
              {experience.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skillIdx}
                  variants={skillBadgeVariants}
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${experience.gradient} text-white shadow-sm`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  )
}
