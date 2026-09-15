import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education <span className="text-teal-600 dark:text-teal-400">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-teal-500 group-hover:scale-125 transition-transform duration-300 shadow-md shadow-teal-500/30" />

              {/* Education Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-teal-600 dark:text-teal-400 font-semibold text-sm sm:text-base mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  {/* CGPA Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 font-semibold text-sm self-start sm:self-auto">
                    <Award className="w-4 h-4 text-teal-500" />
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                </div>

                {/* Duration & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-teal-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Academic Highlights */}
                <ul className="space-y-2 pt-2">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
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
