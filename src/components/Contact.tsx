import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contato" className="py-12 sm:py-20 lg:py-24 bg-slate-100/50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span>Canais Oficiais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Informações de Contato & Redes
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
            Disponível para oportunidades em Engenharia de Dados, Desenvolvimento Backend e projetos de inovação tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          
          {/* GitHub */}
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all text-center flex flex-col items-center group w-full"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-emerald-500 group-hover:text-white transition-colors mb-3 sm:mb-4 shrink-0">
              <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">GitHub</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">/gui-benedito</p>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-3 group-hover:underline">
              Ver Repositórios &rarr;
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all text-center flex flex-col items-center group w-full"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-[#0a66c2] group-hover:text-white transition-colors mb-3 sm:mb-4 shrink-0">
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">LinkedIn</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">/in/guilherme-benedito</p>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-3 group-hover:underline">
              Conectar no LinkedIn &rarr;
            </span>
          </a>

          {/* E-mail Institucional FATEC */}
          <a
            href={`mailto:${personalInfo.social.email}`}
            className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all text-center flex flex-col items-center group w-full"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-emerald-600 group-hover:text-white transition-colors mb-3 sm:mb-4 shrink-0">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">E-mail Institucional</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-mono break-all px-1 max-w-full">
              {personalInfo.social.email}
            </p>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-3 group-hover:underline">
              Enviar Mensagem &rarr;
            </span>
          </a>

          {/* Instagram / Social */}
          <a
            href={personalInfo.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all text-center flex flex-col items-center group w-full"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-pink-600 group-hover:text-white transition-colors mb-3 sm:mb-4 shrink-0">
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Instagram</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">@guisantos.b</p>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-3 group-hover:underline">
              Ver Perfil &rarr;
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}
