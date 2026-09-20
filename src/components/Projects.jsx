import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowUpRight,
  Smartphone,
  Globe,
  Terminal,
  Info,
  GitFork,
  Code
} from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'mobile', label: 'Flutter / Mobile', icon: Smartphone },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'systems', label: 'C++ & Systems', icon: Terminal },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Featured Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Works & Code Repositories
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Real-world mobile apps, web applications, and system software with full open-source codebases linked directly to GitHub.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white shadow-md shadow-indigo-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Header */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.accentGradient}`} />

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Pill & Modal Trigger */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                      {project.badge}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs text-indigo-600 dark:text-cyan-400 font-semibold inline-flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" /> Details
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Specific GitHub repo badge preview */}
                  <div className="mb-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 truncate max-w-full"
                    >
                      <GithubIcon className="w-3 h-3 shrink-0" />
                      <span className="truncate">{project.repoName}</span>
                    </a>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-5">
                    {project.summary}
                  </p>

                  {/* Highlights Preview */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 mb-6">
                    <p className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                      Key Takeaway
                    </p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2">
                      {project.highlights[0]}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md text-slate-400">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                    {/* Working link to specific GitHub repo */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors shadow-sm"
                      title={`Open ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub Repo ↗</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:translate-x-0.5 transition-transform cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
