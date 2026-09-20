import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Compass, Code, Trophy, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Sadat Academy for Management Sciences',
      subtitle: 'B.Sc. in Computer and Information Systems • Cairo, Egypt',
      specialization: 'Specialization: Software Engineering',
      date: 'Expected 2028 (Currently in Year 3)',
      icon: GraduationCap,
      description: 'Dedicated academic specialization in Software Engineering, focusing on software architecture, design patterns, algorithmic problem-solving, database engineering, and end-to-end SDLC.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Digital Egypt Pioneers Initiative (DEPI)',
      subtitle: 'Full Stack Trainee • Scholarship Program',
      date: '2026 – Present',
      icon: Code,
      description: 'Selected for intensive national scholarship training in full-stack architecture, modern web development, and hands-on production code.',
      color: 'from-indigo-500 to-cyan-500'
    },
    {
      title: 'Hult Prize SAMS Leadership',
      subtitle: 'Technical Vice Manager • Top 1 Technical Member',
      date: '2024 – Present',
      icon: Trophy,
      description: 'Promoted to Technical Vice Manager to lead technical committees and mentor members, following recognition as the #1 Top Technical Member.',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Background & Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering with Passion, Logic & Leadership
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            I bridge the creativity of mobile UI/UX and modern frontend frameworks with the rigorous algorithmic thinking of C++ and full-stack software architecture.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {personalInfo.stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center group"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    {item.subtitle}
                  </h4>
                  {item.specialization && (
                    <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-[11px] font-bold tracking-wide">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      <span>{item.specialization}</span>
                    </div>
                  )}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills & Philosophy Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-50/70 via-blue-50/50 to-cyan-50/70 dark:from-indigo-950/30 dark:via-slate-900/40 dark:to-cyan-950/30 border border-indigo-100 dark:border-indigo-900/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Technical Leadership & Collaborative Execution
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Team Leadership • Technical Committee Mentorship • Analytical Problem-Solving • Self-Learning • Fast Adaptability
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-600 dark:text-cyan-400">
              <CheckCircle2 className="w-4 h-4" /> Native Arabic • Intermediate English
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
