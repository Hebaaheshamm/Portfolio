import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Smartphone, 
  Terminal, 
  Cloud, 
  Search, 
  Sparkles,
  Layers,
  CheckCircle2,
  Atom,
  FileCode,
  Layout,
  Network,
  Cpu,
  RefreshCw,
  Palette,
  Code,
  Boxes,
  GitBranch,
  Database,
  Laptop,
  TerminalSquare,
  BarChart3
} from 'lucide-react';

const iconMap = {
  Atom,
  FileCode,
  Layout,
  Smartphone,
  Network,
  Code2,
  Cpu,
  RefreshCw,
  Palette,
  Terminal,
  Code,
  Boxes,
  Layers,
  CheckCircle2,
  GitBranch,
  Cloud,
  Database,
  Laptop,
  TerminalSquare,
  BarChart3
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'mobile', label: 'Mobile & Flutter' },
    { id: 'languages', label: 'Core CS & C++' },
    { id: 'tools', label: 'Cloud & Tools' },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Modern Tooling
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            A comprehensive overview of programming languages, frameworks, and engineering tools I use to build scalable products.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Real-time Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Flutter)..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="group relative p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {skill.highlight && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 border border-indigo-100 dark:border-indigo-900/60">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mt-0.5 capitalize">
                    {skill.category}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                    <span className="text-slate-400 text-[11px]">Proficiency</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No skills found matching "<span className="font-semibold text-slate-700 dark:text-slate-200">{searchQuery}</span>".
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
