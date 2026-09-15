import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, User, MapPin, Mail, Phone, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const infoCards = [
    { icon: GraduationCap, label: 'Degree', value: 'B.Sc Info Tech (2024–2027)' },
    { icon: Award, label: 'Academic CGPA', value: '6.7 CGPA' },
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: BookOpen, label: 'College', value: 'KPR College of Arts Science & Research' },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-teal-600 dark:text-teal-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Photo Alongside About Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 p-3 shadow-2xl">
                <img
                  src={personalInfo.avatar}
                  alt="Ragul E Profile"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio and Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Software Developer Intern & Aspiring Engineer
            </h3>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {infoCards.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-teal-500/50 transition-colors flex items-start space-x-3"
                  >
                    <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Line */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-500" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-500" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
