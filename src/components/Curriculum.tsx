import React from 'react';
import { education, professionalProjects } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

export default function Curriculum() {
  const paper = professionalProjects[0];

  return (
    <section id="curriculo" className="py-12 sm:py-20 lg:py-24 border-t border-slate-200/80 dark:border-slate-800/80 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 border border-emerald-200 dark:border-emerald-800">
            <GraduationCap className="w-3.5 h-3.5 shrink-0" />
            <span>Trajetória Formativa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Formação Acadêmica & Produção Científica
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
            Trajetória educacional e produções técnicas desenvolvidas durante o período acadêmico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* COLUMN 1: Academic Education Timeline */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <h3>Formação Acadêmica</h3>
            </div>

            <div className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/20 ml-2 sm:ml-3.5 space-y-6 sm:space-y-8 pb-2">
              {education.map((item, idx) => (
                <div key={idx} className="relative pl-5 sm:pl-7 group">
                  {/* Timeline point */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 group-hover:scale-125 transition-transform" />
                  
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/40 transition-colors">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.period}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-words">
                      {item.degree}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5 break-words">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed break-words">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Publicação Científica Real */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <h3>Produção Científica Publicada</h3>
            </div>

            {paper && (
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500/40 transition-colors space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    Artigo Internacional (Periódico)
                  </span>
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 shrink-0" />
                    {paper.year}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-words">
                  {paper.title}
                </h4>

                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                  {paper.publisher}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1 break-words">
                  {paper.summary}
                </p>

                <div className="pt-2">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    <span>Acessar artigo na MDPI</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
