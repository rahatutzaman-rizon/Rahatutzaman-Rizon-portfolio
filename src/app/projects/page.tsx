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
import { Github, ExternalLink, Code2, Terminal, Eye } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://myportfolio-server.vercel.app/project');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Header Section */}
      <div className="text-center py-16">
        <div className="flex items-center justify-center mb-4 space-x-2">
          <Code2 className="w-8 h-8 text-blue-400" />
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Featured Projects
          </h1>
        </div>
        <p className="max-w-2xl mx-auto text-xl text-gray-400">
          Explore my latest works featuring modern web development and creative solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              index={index}
              isHovered={hoveredId === project._id}
              onHover={() => setHoveredId(project._id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard = ({ project, onHover, onLeave }: ProjectCardProps) => {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative group rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.project_name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Terminal className="w-5 h-5 text-blue-400" />
          <h3 className="text-2xl font-bold text-white">{project.project_name}</h3>
        </div>

        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech_stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Link
            href={`/project/${project._id}`}
            className="inline-flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </Link>

          <div className="flex space-x-4">
            <Link
              href={project.github_link_client}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href={project.source_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <ExternalLink className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
