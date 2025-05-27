import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],

          // Gráficos
          'charts-vendor': ['chart.js', 'react-chartjs-2'],

          // Excel export
          'excel-vendor': ['exceljs'],

          // Internacionalización
          'i18n-vendor': ['i18next', 'i18next-browser-languagedetector', 'i18next-http-backend', 'react-i18next'],

          // Bootstrap
          'ui-vendor': ['bootstrap']
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  }
})