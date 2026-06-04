import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://resumeforge.com',
      dynamicRoutes: [
        '/',
        '/builder',
        '/templates',
        '/blog',
        '/blog/how-to-make-resume-for-freshers',
        '/blog/java-developer-resume',
        '/blog/react-developer-resume',
        '/blog/bca-resume-format',
        '/blog/ats-friendly-resume-tips',
        '/blog/computer-science-resume'
      ]
    })
  ],
})
