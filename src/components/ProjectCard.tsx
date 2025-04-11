import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
    tech: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
      
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-all duration-500 transform group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end z-30">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        
        <div className="transform transition-all duration-300 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
          <p className="text-gray-200 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/10 rounded-full text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;