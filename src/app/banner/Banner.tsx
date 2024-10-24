"use client"


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,

  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
} from 'react-icons/fa';
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
} from 'react-icons/si';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkillCategory, setCurrentSkillCategory] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkillCategory((prev) => (prev + 1) % skillCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const coder = {
    name: 'Rahatutzaman Rizon',
    title: 'Professional Software Developer',
  };

  const socialIcons = [
    { Icon: FaGithub, href: 'https://github.com/rahatutzaman-rizon', color: '#6e5494' },
    { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/rahatutzamanrizon/', color: '#0077B5' },
    { Icon: FaFacebook, href: 'https://www.facebook.com/rahatutzaman.rizon', color: '#1877F2' },
    
  ];

  const jsCodeLines = [
    'class Developer {',
    '  constructor() {',
    '    this.name = "Rahatutzaman Rizon";',
    '    this.skills = {',
    '      languages: ["JavaScript", "Python", "C++"],',
    '      frameworks: ["React", "Next.js", "Express"],',
    '      databases: ["MongoDB", "MySQL"],',
    '      tools: ["Git", "Docker", "Vercel"]',
    '    };',
    '  }',
    '  code() {',
    '    console.log("Show skills as icons on background");',
    '  }',
    '}',
  ];

  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: [
        { name: 'JavaScript (ES6+)', icon: SiJavascript },
        { name: 'Python', icon: FaPython },
        { name: 'C++', icon: SiCplusplus },
      ],
    },
    {
      title: 'Front-End',
      icon: FaReact,
      skills: [
        { name: 'React', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Redux', icon: SiRedux },
      ],
    },
    {
      title: 'Back-End',
      icon: FaNodeJs,
      skills: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'GraphQL', icon: SiGraphql },
        { name: 'RESTful APIs', icon: FaDatabase },
      ],
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: FaGithub,
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: FaGithub },
        { name: 'Netlify', icon: SiNetlify },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Postman', icon: SiPostman },
        { name: 'Trello', icon: SiTrello },
      ],
    },
  ];

  return (
    <div className=" mt-12 relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 5 + 1}vw`,
              height: `${Math.random() * 5 + 1}vw`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1) 0%, rgba(0,0,0,0) 70%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[ SiJavascript,
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
  SiTrello].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl text-blue-300 opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <motion.span
                className="inline-block"
                animate={{
                  color: ['#60A5FA', '#34D399', '#F472B6', '#60A5FA'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Hello,
              </motion.span>
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              I am <motion.span
                className="inline-block"
                animate={{
                  color: ['#F472B6', '#60A5FA', '#34D399', '#F472B6'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {coder.name}
              </motion.span>
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSkillCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 block"
                >
                  {skillCategories[currentSkillCategory].title} Expert
                </motion.span>
              </AnimatePresence>
            </h3>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-2xl"
                  whileHover={{ scale: 1.2, color }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg"
          >
            <pre className="text-xs sm:text-sm lg:text-base leading-relaxed text-purple-100">
              {jsCodeLines.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </pre>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
