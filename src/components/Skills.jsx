import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My <span className="text-teal-600 dark:text-teal-400">Skills</span> & Technologies
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Core skills and frameworks I utilize to build clean, efficient, and scalable software solutions.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 group"
              >
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4 leading-relaxed min-h-[36px]">
                  {skill.description}
                </p>

                {/* Progress Bar Container */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                      Proficiency
                    </span>
                    <span className="text-teal-600 dark:text-teal-400 font-mono">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
