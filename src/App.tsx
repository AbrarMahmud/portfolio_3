import React from 'react';
import { Download, Github, Linkedin, Mail, Twitter, Brain, Microscope, Code, Database } from 'lucide-react';
import BackgroundAnimation from './components/BackgroundAnimation';
import GlassCard from './components/GlassCard';
import ProjectCard from './components/ProjectCard';
import ResearchCard from './components/ResearchCard';

function App() {
  const portfolio = {
    name: "Dr. John Doe",
    title: "AI/ML Research Scientist",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Research scientist specializing in deep learning and natural language processing. Focused on developing interpretable AI systems and advancing the field of machine learning.",
    skills: [
      { category: "Machine Learning", items: ["Deep Learning", "Neural Networks", "NLP", "Computer Vision"] },
      { category: "Programming", items: ["Python", "PyTorch", "TensorFlow", "JAX"] },
      { category: "Tools & Platforms", items: ["Docker", "AWS", "MLflow", "Kubernetes"] },
      { category: "Research Skills", items: ["Statistical Analysis", "Research Methods", "Technical Writing"] }
    ],
    projects: [
      {
        title: "Attention Mechanism Enhancement",
        description: "Developed a novel attention mechanism that improves transformer model efficiency by 40%",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600",
        link: "#",
        tech: ["PyTorch", "Transformers", "CUDA"]
      },
      {
        title: "Interpretable AI Framework",
        description: "Created a framework for making deep learning models more interpretable and explainable",
        image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=600",
        link: "#",
        tech: ["Python", "TensorFlow", "Streamlit"]
      },
      {
        title: "Autonomous Learning System",
        description: "Built a self-improving ML system that adapts to new data patterns automatically",
        image: "https://images.unsplash.com/photo-1677442136019-21000c819251?auto=format&fit=crop&q=80&w=600",
        link: "#",
        tech: ["JAX", "Python", "Redis"]
      }
    ],
    research: [
      {
        title: "Neural Architecture Search Optimization",
        description: "Published research on improving the efficiency of neural architecture search using reinforcement learning",
        image: "https://images.unsplash.com/photo-1676299081847-8b52d3c93f09?auto=format&fit=crop&q=80&w=600",
        publication: "Nature Machine Intelligence",
        year: "2024",
        link: "#"
      },
      {
        title: "Quantum-Inspired Neural Networks",
        description: "Investigating the application of quantum computing principles to neural network architectures",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600",
        publication: "arXiv preprint",
        year: "2024",
        link: "#"
      },
      {
        title: "Federated Learning Privacy",
        description: "Novel approach to preserving privacy in federated learning systems",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        publication: "ICML",
        year: "2023",
        link: "#"
      }
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:contact@example.com"
    }
  };

  return (
    <div className="min-h-screen bg-white/80 relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Centered Profile Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <GlassCard className="flex flex-col items-center text-center p-8">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-200 shadow-xl mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm" />
              <img 
                src={portfolio.profilePic} 
                alt={portfolio.name}
                className="w-full h-full object-cover relative z-10"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2">{portfolio.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{portfolio.title}</p>
            
            <div className="flex items-start gap-4 mb-8">
              <Brain className="w-6 h-6 mt-1 text-purple-600 flex-shrink-0" />
              <p className="text-lg text-gray-700 text-left">{portfolio.bio}</p>
            </div>

            <div className="flex gap-6 mb-6">
              <a
                href={portfolio.social.github}
                className="text-gray-600 hover:text-purple-600 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href={portfolio.social.linkedin}
                className="text-gray-600 hover:text-purple-600 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={portfolio.social.twitter}
                className="text-gray-600 hover:text-purple-600 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </a>
              <a
                href={portfolio.social.email}
                className="text-gray-600 hover:text-purple-600 transition-colors transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg backdrop-blur-lg hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 text-purple-700 transform hover:scale-105"
            >
              <Download size={20} />
              Download CV
            </a>
          </GlassCard>
        </div>

        {/* Skills */}
        <GlassCard className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-5 h-5 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">Expertise</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="text-lg font-medium mb-3 text-purple-600">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100/80 to-blue-100/80 backdrop-blur-sm rounded-full text-sm text-purple-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Research */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Microscope className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">Research</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.research.map((research) => (
              <ResearchCard key={research.title} research={research} />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;