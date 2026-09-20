import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'Mobile', label: 'Flutter & Mobile' },
    { id: 'Web', label: 'Web Development' },
    { id: 'Cloud', label: 'Cloud & AWS' },
    { id: 'Programming', label: 'Programming (C++/Python)' },
    { id: 'AI & Data', label: 'AI & Data Science' },
  ];

  const filteredCerts = certificationsData.filter((cert) => {
    if (activeCategory === 'all') return true;
    return cert.category === activeCategory;
  });

  return (
    <section id="certifications" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certificates & Credential Verification
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Every certification is clickable. Click any card below to open its official verification page or accredited organization credential.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid (Clickable Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <a
              key={index}
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              title={`Click to verify ${cert.title}`}
            >
              {/* Subtle hover accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${cert.badgeColor}`}>
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-indigo-600 dark:text-cyan-400 group-hover:underline">
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {cert.issuer}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" /> Credential
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
