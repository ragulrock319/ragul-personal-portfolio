import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Github, Linkedin, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TypingEffect from './TypingEffect';

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) {
      const offsetTop = elem.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Open to opportunities status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-400">
                Hello, I&apos;m
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
            </div>

            {/* Role Typewriter */}
            <div className="text-xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300 min-h-[40px] flex items-center justify-center lg:justify-start gap-2">
              <span>I am a</span>
              <TypingEffect roles={personalInfo.typingRoles} />
            </div>

            {/* Short Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.tagline}
            </p>

            {/* Location badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <MapPin className="w-4 h-4 text-teal-500" />
              <span>{personalInfo.location}</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span>KPR College of Arts Science and Research</span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="Ragul_E_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-700/60 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Connect:</span>
              <div className="flex items-center space-x-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-500/10 dark:hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-500/10 dark:hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-500/10 dark:hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  aria-label="Call Phone"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-500/10 dark:hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />

              {/* Main Photo Card Container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden glass-card p-2 border-2 border-slate-200/80 dark:border-slate-700/80">
                <img
                  src={personalInfo.avatar}
                  alt="Ragul E - Software Developer Headshot"
                  className="w-full h-full object-cover object-center rounded-xl filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tech Badges floating over image */}
              <div className="absolute -bottom-4 -left-6 glass-card px-4 py-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 shadow-xl animate-float">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-xs">
                  JAVA
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">Core Java & DSA</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Problem Solver</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass-card px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-2 shadow-xl">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">CGPA 6.7</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
