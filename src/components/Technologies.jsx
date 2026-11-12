import React from 'react';
import { technicalSkills } from '../data/portfolioData';
import { Cpu, Code2, Database, Wrench } from 'lucide-react';

export default function Technologies() {
  const getCategoryIcon = (category) => {
    if (category.includes('Linguagens')) return <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    if (category.includes('Backend')) return <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
    if (category.includes('Bancos')) return <Database className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
    return <Wrench className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
  };

  return (
    <section id="tecnologias" className="py-12 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 w-full overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 border border-emerald-200 dark:border-emerald-800">
            <Cpu className="w-3.5 h-3.5 shrink-0" />
            <span>Competências Técnicas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tecnologias & Ferramentas
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Stack tecnológica desenvolvida e aplicada em projetos acadêmicos e pesquisas em engenharia de software e dados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {technicalSkills.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {getCategoryIcon(cat.category)}
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
