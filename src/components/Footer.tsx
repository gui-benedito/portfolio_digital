import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8 sm:py-12 transition-colors w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Guilherme dos Santos Benedito
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                Portfólio Acadêmico DSM • FATEC São José dos Campos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
            <span>© {new Date().getFullYear()} • GitHub Pages</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 transition-colors"
              aria-label="Voltar ao topo"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
