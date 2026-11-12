import React from 'react';
import { ExternalLink, ArrowUpRight, Building2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col overflow-hidden w-full">
      
      {/* Card Header & Preview Image */}
      <div className="relative h-40 sm:h-48 bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-4 border-b border-slate-100 dark:border-slate-800/80 overflow-hidden shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="max-h-32 sm:max-h-36 max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="text-slate-400 dark:text-slate-600 font-mono text-xs text-center px-4">
            Projeto API
          </div>
        )}

        {/* Badge: Semester / Year */}
        <div className="absolute top-2.5 left-2.5">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 dark:bg-slate-900/95 text-emerald-700 dark:text-emerald-400 shadow-sm border border-slate-200/60 dark:border-slate-700">
            {project.semester || project.year}
          </span>
        </div>

        {/* Role badge: Dev Team */}
        <div className="absolute top-2.5 right-2.5">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold shadow-sm border bg-slate-900/85 dark:bg-slate-800/95 text-white border-slate-700">
            {project.role || 'Dev Team'}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Partner identification */}
          {project.partner && (
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1.5 font-medium">
              <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="truncate">Cliente: {project.partner}</span>
            </div>
          )}

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors break-words">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed break-words">
            {project.solution || project.problem || project.summary}
          </p>
        </div>

        {/* Technologies preview */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-3.5 sm:mb-4">
            {project.technologies?.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies?.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Card Action Buttons */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
            >
              <span>Ver Detalhes</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-1">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Repositório Oficial no GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Acessar publicação"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
