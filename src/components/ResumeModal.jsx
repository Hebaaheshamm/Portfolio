import React from 'react';
import { X, Download, Printer, ExternalLink, FileText, CheckCircle2, Sparkles, Mail, Phone, MapPin, Award } from 'lucide-react';
import { personalInfo, experienceData, projectsData, skillsData, certificationsData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-scaleUp max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:p-6 pb-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Heba Hesham — Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Official Resume • Full-Stack Web & Flutter Mobile Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Heba_Hesham_Resume.pdf"
              download="Heba_Hesham_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-md shadow-indigo-500/25 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              aria-label="Print Resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200 font-sans text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 mt-0.5">
                {personalInfo.role}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Computer and Information Systems Student • Specializing in Software Engineering • Sadat Academy
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-500" /> {personalInfo.email}
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-500" /> {personalInfo.phone}
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-500" /> {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-2">
              Professional Summary
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              {personalInfo.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-4">
              Work & Leadership Experience
            </h2>
            <div className="space-y-5">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {exp.role} <span className="font-normal text-slate-500 dark:text-slate-400">• {exp.organization}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  {exp.award && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                      <Award className="w-3.5 h-3.5" /> {exp.award}
                    </div>
                  )}
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 pl-1">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-xs leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-2">
              Education
            </h2>
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {personalInfo.education.institution} — {personalInfo.education.location}
                </h3>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {personalInfo.education.degree}
                </p>
                <p className="text-xs font-semibold text-indigo-600 dark:text-cyan-400">
                  Specialization: {personalInfo.education.specialization}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {personalInfo.education.graduationYear} ({personalInfo.education.status})
              </span>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-3">
              Selected Technical Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectsData.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 mb-2">
                    {p.summary}
                  </p>
                  <span className="text-[10px] font-mono text-indigo-600 dark:text-cyan-400">
                    {p.tech.join(' • ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-950/60">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Need a custom format? Email <span className="font-semibold text-slate-700 dark:text-slate-200">{personalInfo.email}</span>
          </p>
          <a
            href="/Heba_Hesham_Resume.pdf"
            download="Heba_Hesham_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>
        </div>

      </div>
    </div>
  );
}
