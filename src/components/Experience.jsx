import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, Award, Sparkles, CheckCircle2, ChevronRight, Star } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Career & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Engineering Roles
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Showcasing my latest responsibilities as Technical Vice Manager and Full Stack Trainee across national initiatives and student activities.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical continuous line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 to-cyan-500 -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 dark:border-cyan-400 shadow-md flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400" />
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] w-full">
                    <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      
                      {/* Badge / Dates */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 border border-indigo-100 dark:border-indigo-900/60">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300/40 dark:border-emerald-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Active Position
                          </span>
                        )}
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                        {item.role}
                      </h3>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
                        {item.organization} • <span className="text-xs font-normal font-mono">{item.type}</span>
                      </h4>

                      {/* Special Award Callout */}
                      {item.award && (
                        <div className="mb-4 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300">
                          <Award className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{item.award}</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                        {item.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <ChevronRight className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
