import React, { useState } from 'react';
import { academicProjects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Layers } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredAcademic = academicProjects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.id === activeFilter;
  });

  return (
    <>
      {/* SEÇÃO: PROJETOS ACADÊMICOS (API 1º AO 3º SEMESTRE) */}
      <section id="projetos-api" className="py-12 sm:py-20 lg:py-24 border-t border-slate-200/80 dark:border-slate-800/80 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 border border-emerald-200 dark:border-emerald-800">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>Metodologia Ativa de Ensino (API) • 1º ao 3º Semestre</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Projetos Acadêmicos Integradores
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Aplicações desenvolvidas em equipe (Dev Team) ao longo da formação em DSM na FATEC São José dos Campos. Detalhamento de Hard Skills, Soft Skills e evidências das soluções entregues.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700 self-start overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Todos (3)
              </button>
              <button
                onClick={() => setActiveFilter('api-1')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeFilter === 'api-1'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                1º Semestre
              </button>
              <button
                onClick={() => setActiveFilter('api-2')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeFilter === 'api-2'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                2º Semestre
              </button>
              <button
                onClick={() => setActiveFilter('api-3')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeFilter === 'api-3'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                3º Semestre
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredAcademic.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
