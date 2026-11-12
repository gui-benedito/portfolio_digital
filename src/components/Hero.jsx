import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Database, Server, GitBranch, MapPin, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="apresentacao" className="pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden relative w-full">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[500px] h-64 sm:h-[350px] bg-gradient-to-tr from-emerald-500/15 via-teal-400/10 to-indigo-500/10 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="truncate">FATEC SJC • DSM • Portfólio Acadêmico</span>
            </div>

            {/* Title & Name */}
            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400">{personalInfo.name}</span>
              </h1>
              <p className="mt-2 text-base sm:text-xl font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2 flex-wrap">
                <Server className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{personalInfo.role}</span>
              </p>
            </div>

            {/* Current Education & Location */}
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 bg-slate-100/70 dark:bg-slate-900/60 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                <span className="font-medium text-slate-800 dark:text-slate-200 leading-snug">{personalInfo.currentEducation}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base">
              {personalInfo.summary}
            </p>

            {/* Objectives Box (Required by PDF Section 2.1) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-1.5">
                  <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                  <span>Objetivo Acadêmico</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {personalInfo.academicObjective}
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-1.5">
                  <Database className="w-3.5 h-3.5 shrink-0" />
                  <span>Objetivo Profissional</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {personalInfo.professionalObjective}
                </p>
              </div>
            </div>

            {/* Areas of Interest (Required by PDF Section 2.1) */}
            <div className="pt-1">
              <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 shrink-0" />
                <span>Áreas de Interesse</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {personalInfo.interests.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] sm:text-xs font-medium rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Photo with Fluid Frame */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative group max-w-[260px] sm:max-w-[300px] md:max-w-[320px] w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-600 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 p-2 shadow-xl border border-slate-200/80 dark:border-slate-800 w-full">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full aspect-[4/5] object-cover rounded-xl transform transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md text-white p-2.5 rounded-lg border border-white/10 text-center">
                  <p className="text-xs font-semibold tracking-wide text-emerald-400 truncate">Guilherme dos Santos Benedito</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 truncate">FATEC São José dos Campos • DSM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
