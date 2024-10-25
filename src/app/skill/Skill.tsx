import React from 'react';
import { motion } from 'framer-motion';
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
  Globe
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  proficiency: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  description: string;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'text-emerald-400',
    description: 'Core programming languages I specialize in',
    skills: [
      { name: 'TypeScript', icon: Terminal, proficiency: 92, color: 'from-emerald-400 to-emerald-600' },
      { name: 'Python', icon: Terminal, proficiency: 88, color: 'from-emerald-400 to-emerald-600' },
      { name: 'JavaScript', icon: Terminal, proficiency: 90, color: 'from-emerald-400 to-emerald-600' }
    ]
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    color: 'text-blue-400',
    description: 'Modern UI/UX development technologies',
    skills: [
      { name: 'React/Next.js', icon: Blocks, proficiency: 90, color: 'from-blue-400 to-blue-600' },
      { name: 'Tailwind CSS', icon: Layout, proficiency: 85, color: 'from-blue-400 to-blue-600' },
      { name: 'Framer Motion', icon: Sparkles, proficiency: 82, color: 'from-blue-400 to-blue-600' }
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'text-purple-400',
    description: 'Server-side technologies and frameworks',
    skills: [
      { name: 'Node.js', icon: Server, proficiency: 88, color: 'from-purple-400 to-purple-600' },
      { name: 'Express.js', icon: Server, proficiency: 85, color: 'from-purple-400 to-purple-600' },
      { name: 'GraphQL', icon: Globe, proficiency: 80, color: 'from-purple-400 to-purple-600' }
    ]
  },
 
  {
    title: 'Database',
    icon: Database,
    color: 'text-amber-400',
    description: 'Database management systems',
    skills: [
      { name: 'MongoDB', icon: Database, proficiency: 88, color: 'from-amber-400 to-amber-600' },
      { name: 'MySQL', icon: Database, proficiency: 85, color: 'from-amber-400 to-amber-600' },
      { name: 'PostgreSQL', icon: Database, proficiency: 82, color: 'from-amber-400 to-amber-600' }
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: GitBranch,
    color: 'text-teal-400',
    description: 'Development operations & tools',
    skills: [
      { name: 'Git/GitHub', icon: GitBranch, proficiency: 90, color: 'from-teal-400 to-teal-600' },
      { name: 'Docker', icon: Blocks, proficiency: 85, color: 'from-teal-400 to-teal-600' },
      { name: 'CI/CD', icon: Cpu, proficiency: 82, color: 'from-teal-400 to-teal-600' }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (proficiency: number) => ({
    width: `${proficiency}%`,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2
    }
  })
};

export default function SkillsShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Technical Skills
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <category.icon className={`w-6 h-6 ${category.color}`} />
              <h2 className="text-xl font-semibold text-white">{category.title}</h2>
            </div>
            <p className="text-gray-400 text-sm mb-6">{category.description}</p>
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <skill.icon className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-200">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                    <motion.div
                      variants={progressVariants}
                      custom={skill.proficiency}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}