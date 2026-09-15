import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work <span className="text-teal-600 dark:text-teal-400">Experience</span> & Journey
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full" />
        </div>

        {/* Experience List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-teal-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-4 h-4 text-teal-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Focus & Learning Activities:</h4>
                <ul className="space-y-2.5">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      <span className="p-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
