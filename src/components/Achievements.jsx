import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, CheckCircle } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key <span className="text-amber-500">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="max-w-3xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-amber-500/30 dark:border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-slate-50 to-teal-500/5 dark:from-amber-950/20 dark:via-slate-900 dark:to-slate-900 shadow-xl shadow-amber-500/5 hover:border-amber-500/60 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
            >
              <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 shrink-0 border border-amber-500/20 shadow-inner">
                <Trophy className="w-10 h-10 animate-bounce" style={{ animationDuration: '3s' }} />
              </div>

              <div className="space-y-3 flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{item.category}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Collaborative Team Engineering & Solution Design</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
