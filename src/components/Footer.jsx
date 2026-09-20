import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, ArrowUp, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-100/70 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <a
              href="#"
              className="font-black text-lg text-slate-900 dark:text-white tracking-tight flex items-center justify-center md:justify-start gap-2"
            >
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 text-white flex items-center justify-center text-xs font-bold">
                HH
              </span>
              Heba Hesham
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Full-Stack Web & Flutter Mobile Developer • Sadat Academy & DEPI
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/25 transition-all hover:-translate-y-0.5 ml-2 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom divider & copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Heba Hesham. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Code2 className="w-3.5 h-3.5 text-indigo-500" /> using React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
