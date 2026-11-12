import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // No build de produção para o GitHub Pages usa o prefixo do repositório, em dev usa "/"
  base: command === 'build' ? '/portfolio_digital/' : '/',
  plugins: [react()],
  build: {
    outDir: 'docs', // Gera a saída na pasta /docs para o GitHub Pages servir direto da main
    emptyOutDir: true,
  },
}));
