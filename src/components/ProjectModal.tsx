import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Award, Brain, Code, AlertCircle, Building2, UserCheck, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      {/* Click outside to close wrapper */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[94vh] my-auto">
        
        {/* Modal Top Bar */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-950/50 gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                {project.semester || project.year}
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                FATEC SJC
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5 truncate">
              {project.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Strip: Role and Partner/Client */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-emerald-50/50 dark:bg-emerald-950/20 border-b border-emerald-100 dark:border-emerald-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 shrink-0">
            <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span><strong>Função desempenhada:</strong> {project.role || 'Dev Team'}</span>
          </div>

          {project.partner && (
            <div className="flex items-start sm:items-center gap-2 text-slate-700 dark:text-slate-300">
              <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
              <span className="break-words">
                <strong>Cliente / Parceiro:</strong> {project.partner}
              </span>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 gap-3 sm:gap-6 text-xs sm:text-sm font-medium overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2.5 sm:py-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 sm:gap-2 ${
              activeTab === 'overview'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Problema & Solução</span>
          </button>

          <button
            onClick={() => setActiveTab('contributions')}
            className={`py-2.5 sm:py-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 sm:gap-2 ${
              activeTab === 'contributions'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Minhas Contribuições</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`py-2.5 sm:py-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 sm:gap-2 ${
              activeTab === 'skills'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Hard & Soft Skills</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">

          {/* TAB 1: OVERVIEW (Problem & Solution) - SEM demonstração visual */}
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Problem Statement Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <h4>Situação-Problema</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed break-words">
                  {project.problem}
                </p>
              </div>

              {/* Solution Description Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4>Solução Desenvolvida</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed break-words">
                  {project.solution}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Tecnologias Utilizadas no Projeto
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CONTRIBUTIONS */}
          {activeTab === 'contributions' && (
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 space-y-3">
                <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-300">
                  <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">
                    Minha Atuação no Time de Desenvolvimento ({project.role})
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed break-words font-medium">
                  {project.personalContributions}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <h5 className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Repositório Oficial do Projeto no GitHub
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                  Acesse o repositório oficial da equipe SkyFlyTeam com todo o código-fonte, commits, documentação e artefatos de entrega:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white dark:bg-slate-800 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-xs font-semibold transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 shrink-0" />
                      <span>Abrir Repositório Oficial no GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1 shrink-0" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SKILLS (HARD & SOFT) */}
          {activeTab === 'skills' && (
            <div className="space-y-5 sm:space-y-6">
              
              {/* Hard Skills */}
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Hard Skills & Nível de Domínio
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Classificação baseada em autonomia prática (Básico / Autônomo / Fluente).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {project.hardSkills?.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 break-words">
                        {item.skill}
                      </span>
                      <span className={`self-start sm:self-auto px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold shrink-0 ${
                        item.level === 'Fluente'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                          : item.level === 'Autônomo'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
                          : 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Brain className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Soft Skills Exercitadas & Contexto
                  </h4>
                </div>
                <div className="space-y-2.5 sm:space-y-3">
                  {project.softSkills?.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 space-y-1"
                    >
                      <span className="text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-400 block break-words">
                        {item.skill}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed break-words">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shrink-0">
          <span className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left">
            Portfólio Acadêmico DSM • FATEC SJC
          </span>

          <div className="flex items-center justify-end gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-semibold transition-colors flex-1 sm:flex-initial"
              >
                <span>Repositório Oficial GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-1 sm:flex-initial"
            >
              Fechar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
