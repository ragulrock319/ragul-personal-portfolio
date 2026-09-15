import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Bio Column */}
          <div className="md:col-span-6 space-y-4">
            <a href="#hero" className="text-2xl font-bold font-mono text-white tracking-tight inline-block">
              Ragul<span className="text-teal-400">.E</span>
            </a>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Software Developer Intern & B.Sc IT student at KPR College. Passionate about building robust software with Java, web technologies, and Data Structures & Algorithms.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                aria-label="Phone"
                className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm font-medium">
              {['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Status Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location & Status</h4>
            <p className="text-sm text-slate-300 font-medium">Coimbatore, Tamil Nadu, India</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Available for Internships</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p className="flex items-center gap-1">
            <span>© 2026 Ragul E. Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline" />
            <span>React & Tailwind CSS.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-teal-600 transition-all duration-300 shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
