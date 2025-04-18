"use client"
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award,
  Star,
  ChevronRight,
  Code,
  Server,
  Layout
} from 'lucide-react';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  responsibilities: string[];
  technologies?: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: number;
  result?: string;
  achievements: string[];
}

interface ProfileData {
  workExperience: WorkExperience[];
  education: Education[];
}

const profileData: ProfileData = {
  workExperience: [
    {
      title: "Junior Software Engineer",
      company: "Implevista",
      location: "Bangladesh",
      startDate: "2024-12",
      endDate: null,
      current: true,
      responsibilities: [
        "Develop and maintain web applications using Next.js, TypeScript, and Tailwind CSS",
        "Build robust backend services with Node.js following MVC patterns and best practices",
        "Create and optimize RESTful APIs for frontend and backend communication",
        "Collaborate with cross-functional teams for full-stack development requirements"
      ],
      technologies: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "REST API", "MVC Pattern"]
    },
    {
      title: "Junior Software Developer",
      company: "JMC Technology Ltd",
      location: "Bangladesh",
      startDate: "2024-07",
      endDate: "2024-10",
      current: false,
      responsibilities: [
        "Collaborate with cross-functional teams to design, develop, and maintain web applications using the MERN stack, Nextjs",
        "Develop and optimize RESTful APIs using Node.js and Express.js",
        "Participate in code reviews and contribute to improving development processes"
      ],
      technologies: ["MERN Stack", "Next.js", "Express.js", "REST API"]
    },
    {
      title: "Project Associate",
      company: "Farhana's BrainStation",
      location: "Bangladesh",
      startDate: "2024-05",
      endDate: "2024-11",
      current: false,
      responsibilities: [
        "Handle projects from start to finish, delivering quality results on time.",
        "Work with cross-functional teams, organize tasks, and enable communication.",
        "Use project management tools, track progress, and follow best practices.",
        "Study project needs, make plans, and give updates to stakeholders."
      ]
    },
    {
      title: "Intern Software Developer",
      company: "Business Automation Ltd",
      location: "Bangladesh",
      startDate: "2024-02",
      endDate: "2024-04",
      current: false,
      responsibilities: [
        "Complete a 3-month internship focused on streamlining operations.",
        "Develop skills in SQL, frameworks, testing, and SDLC methodologies.",
        "Contribute to team projects, aligning with company goals.",
        "Apply knowledge to real-world projects."
      ]
    }
  ],
  education: [
    {
      degree: "B.Sc. in Information and Communication Technology",
      institution: "Mawlana Bhashani Science and Technology University",
      period: "2019-2024",
      gpa: 3.48,
      achievements: [
        "Railway automatic crossing bar Magnetic system",
        "Completed thesis on Project Progress Management System"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dinajpur Govt College",
      period: "2016-2018",
      result: "GPA 4.75 (out of 5.00)",
      achievements: [
        "Attend Science Olympiad",
        "Science Club Member"
      ]
    },
    
  ]
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const TimelineItem = ({ year, isPresent, children }: { year: string; isPresent?: boolean; children: React.ReactNode }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="flex items-center gap-2 font-medium text-xl text-blue-500 mb-1 sm:mb-0 sm:absolute sm:left-0 sm:w-24">
      {year}
      {isPresent && (
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/20 text-green-400">
          Present
        </span>
      )}
    </div>
    <div className="flex flex-col sm:pl-8 sm:border-l border-gray-700">
      <div className="absolute left-2 sm:left-32 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500 group-last:h-1/2" />
      <div className="absolute left-0 sm:left-[7.5rem] w-4 h-4 -mt-2 rounded-full border-4 border-blue-500 bg-gray-900 shadow-lg shadow-blue-500/20" />
      {children}
    </div>
  </div>
);

const CardWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 shadow-xl group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    {children}
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {children}
    </h2>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
  </div>
);

const TechBadge = ({ tech }: { tech: string }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-colors">
    {tech}
  </span>
);

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4"
          >
            <Briefcase className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Professional Journey
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full-stack developer specializing in modern web technologies and application development
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <CardWrapper className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-1">Frontend</h3>
              <p className="text-gray-400">Next.js, TypeScript, Redux,CSS Frameworks</p>
            </CardWrapper>
          </motion.div>
          
          <motion.div variants={item}>
            <CardWrapper className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-1">Backend</h3>
              <p className="text-gray-400">Node.js, Express, REST APIs</p>
            </CardWrapper>
          </motion.div>
          
          <motion.div variants={item}>
            <CardWrapper className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4">
                <Layout className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-1">Patterns</h3>
              <p className="text-gray-400">MVC, Clean Architecture</p>
            </CardWrapper>
          </motion.div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-20"
        >
          <SectionTitle>Work Experience</SectionTitle>

          <div className="space-y-8">
            {profileData.workExperience.map((experience, index) => (
              <TimelineItem 
                key={index} 
                year={experience.startDate.split('-')[0]}
                isPresent={experience.current}
              >
                <motion.div variants={item}>
                  <CardWrapper className="hover:shadow-blue-500/5 border-l-4 border-l-blue-500">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-400 mb-1 flex items-center gap-2">
                          {experience.title}
                          {experience.current && (
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                              Current
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-400 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {experience.company}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 space-y-1">
                        <p className="text-gray-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                        </p>
                        <p className="text-gray-400 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </p>
                      </div>
                    </div>
                    
                    {experience.technologies && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <TechBadge key={idx} tech={tech} />
                        ))}
                      </div>
                    )}
                    
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          variants={item}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardWrapper>
                </motion.div>
              </TimelineItem>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
        >
          <SectionTitle>Education</SectionTitle>

          <div className="space-y-8">
            {profileData.education.map((edu, index) => (
              <TimelineItem key={index} year={edu.period.split('-')[0]}>
                <motion.div variants={item}>
                  <CardWrapper className="hover:shadow-purple-500/5 border-l-4 border-l-purple-500">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-purple-400 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-400 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          {edu.institution}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 space-y-1">
                        <p className="text-gray-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </p>
                        {edu.gpa && (
                          <p className="text-gray-400 flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            GPA: {edu.gpa}
                          </p>
                        )}
                        {edu.result && (
                          <p className="text-gray-400 flex items-center gap-2">
                            <Award className="w-4 h-4 text-yellow-500" />
                            {edu.result}
                          </p>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          variants={item}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <Star className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardWrapper>
                </motion.div>
              </TimelineItem>
            ))}
          </div>
        </motion.section>
        
     
      </motion.div>
    </div>
  );
};

export default ProfilePage;