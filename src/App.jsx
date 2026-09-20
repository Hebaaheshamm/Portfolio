import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { FileDown } from 'lucide-react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-indigo-500 selection:text-white">
        
        {/* Background Ambient Grid Pattern */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 dark:opacity-40 z-0" />

        {/* Foreground Content Stack */}
        <div className="relative z-10">
          <Navbar onOpenResume={() => setResumeOpen(true)} />
          <main>
            <Hero onOpenResume={() => setResumeOpen(true)} />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact onOpenResume={() => setResumeOpen(true)} />
          </main>
          <Footer />
        </div>

        {/* Floating Download Resume Quick-Button */}
        <div className="fixed bottom-6 right-6 z-30 hidden sm:flex items-center gap-2">
          <a
            href="/Heba_Hesham_Resume.pdf"
            download="Heba_Hesham_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all"
            title="Download Heba Hesham Resume (PDF)"
          >
            <FileDown className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Fullscreen Interactive Resume Preview Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      </div>
    </ThemeProvider>
  );
}
