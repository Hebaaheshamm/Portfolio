import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  Award, 
  Sparkles, 
  Code2, 
  Layers, 
  Smartphone, 
  Download,
  Terminal,
  FileDown,
  Eye
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glowing gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/20 via-blue-500/15 to-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-2/3 right-10 w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Accolade Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-cyan-300 text-xs font-semibold shadow-sm transition-all hover:scale-105">
              <Award className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
              <span>Technical Vice Manager • Hult Prize SAMS Top 1 Member</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400 shrink-0" />
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-widest font-mono font-semibold text-slate-500 dark:text-slate-400">
                Full-Stack Web & Flutter Mobile Developer
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Heba Hesham
                </span>
              </h1>
            </div>

            {/* Subheading Narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Computer and Information Systems student at Sadat Academy specializing in <strong className="text-indigo-600 dark:text-cyan-400 font-semibold">Software Engineering</strong>, <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Trainee</strong> at{' '}
              <strong className="text-indigo-600 dark:text-cyan-400 font-semibold">DEPI</strong>, and{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Technical Vice Manager</strong> at Hult Prize SAMS. Specializing in high-performance web interfaces with React and cross-platform mobile apps with Flutter & Dart.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Clear Accessible Download Resume Button */}
              <a
                href="/Heba_Hesham_Resume.pdf"
                download="Heba_Hesham_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-cyan-300 font-bold text-sm border border-indigo-200 dark:border-indigo-800 transition-all shadow-sm hover:-translate-y-0.5"
                title="Download Heba Hesham Resume (PDF)"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Preview Resume Modal Button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-700/80 transition-all hover:-translate-y-0.5 cursor-pointer"
                title="Preview Resume on screen"
              >
                <Eye className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Preview CV</span>
              </button>
            </div>

            {/* Quick Social & Contact Pill Links */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-slate-600 dark:text-slate-400">
              <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-105"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-105"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-105"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Chat"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-800 transition-all hover:scale-105"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <span className="hidden sm:inline-block w-px h-4 bg-slate-300 dark:bg-slate-800 mx-1" />

              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Available for internships & projects
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 opacity-30 dark:opacity-40 blur-xl transition-all" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-2xl space-y-6">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">heba_portfolio.tsx</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 font-medium">
                    React 19 • Vite
                  </span>
                </div>

                {/* Code Snippet / Profile Preview */}
                <div className="font-mono text-xs space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p className="text-slate-400 dark:text-slate-500">// Candidate Profile Snapshot</p>
                  <p>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{' '}
                    <span className="text-blue-600 dark:text-cyan-300">candidate</span> = {'{'}
                  </p>
                  <div className="pl-4 space-y-1">
                    <p>
                      name: <span className="text-emerald-600 dark:text-emerald-400">"Heba Hesham"</span>,
                    </p>
                    <p>
                      academy: <span className="text-emerald-600 dark:text-emerald-400">"Sadat Academy (Cairo)"</span>,
                    </p>
                    <p>
                      faculty: <span className="text-emerald-600 dark:text-emerald-400">"Computer & Information Systems"</span>,
                    </p>
                    <p>
                      specialization: <span className="text-indigo-600 dark:text-cyan-300">"Software Engineering"</span>,
                    </p>
                    <p>
                      roles: [<span className="text-indigo-600 dark:text-indigo-400">"Technical Vice Manager"</span>, <span className="text-cyan-600 dark:text-cyan-300">"Full Stack Trainee @ DEPI"</span>],
                    </p>
                    <p>
                      honors: [<span className="text-amber-600 dark:text-amber-400">"Top 1 Technical Member"</span>],
                    </p>
                    <p>
                      openToRoles: <span className="text-emerald-500 font-semibold">true</span>
                    </p>
                  </div>
                  <p>{'};'}</p>
                </div>

                {/* Floating Tech Stack Badges */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-500 mb-2.5">
                    CORE SPECIALTIES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 text-xs font-semibold">
                      <Smartphone className="w-3.5 h-3.5 text-blue-500" /> Flutter
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 text-xs font-semibold">
                      <Code2 className="w-3.5 h-3.5 text-cyan-500" /> ReactJS
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 text-xs font-semibold">
                      <Terminal className="w-3.5 h-3.5 text-indigo-500" /> C++ OOP
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 text-xs font-semibold">
                      <Layers className="w-3.5 h-3.5 text-purple-500" /> DEPI Full-Stack
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
