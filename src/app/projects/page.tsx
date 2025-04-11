'use client';

// types.ts
interface Project {
  _id: string;
  project_name: string;
  description: string;
  image_url: string;
  tech_stack: string[];
  github_link_client: string;
  source_link: string;
}

// app/projects/page.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink, Code, Terminal, Eye, Briefcase, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://myportfolio-server.vercel.app/project');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Get unique tech stacks for filtering
  const allTechStacks = projects.flatMap(project => project.tech_stack);
  const uniqueTechStacks = Array.from(new Set(allTechStacks));

  // Filter projects based on active filter and search query
  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "all" || project.tech_stack.includes(activeFilter);
    const matchesSearch = project.project_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F1C] to-[#0F172A]">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.blue.500/15),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <Briefcase className="w-4 h-4 mr-2" />
              Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6">
              Featured Projects
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
              A showcase of my technical expertise, creative problem-solving, and passion for building exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === "all" 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Projects
            </button>
            {uniqueTechStacks.slice(0, 5).map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === tech 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-200"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
              <Terminal className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-200 mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.project_name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-70' : 'opacity-100'
          }`} 
        />
        
        {/* Floating Tech Icons */}
        <div 
          className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          {project.tech_stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm text-xs font-medium border border-gray-700 text-blue-400"
              title={tech}
            >
              {tech.charAt(0).toUpperCase()}
            </span>
          ))}
          {project.tech_stack.length > 3 && (
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm text-xs font-medium border border-gray-700 text-blue-400">
              +{project.tech_stack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Terminal className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {project.project_name}
          </h3>
        </div>

        <p className="text-gray-300 mb-5 line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech_stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              +{project.tech_stack.length - 4} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Link
            href={`/projects/${project._id}`}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:translate-y-[-2px] shadow-lg shadow-blue-600/20"
          >
            <Eye className="w-4 h-4" />
            <span>More details</span>
            <ArrowRight className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <div className="flex space-x-3">
            <Link
              href={project.github_link_client}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-300 group-hover:rotate-6"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={project.source_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-300 group-hover:rotate-6"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};