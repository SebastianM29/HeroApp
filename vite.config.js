import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta de salida (por defecto es 'dist')
    assetsDir: 'assets', // Carpeta de activos (por defecto es 'assets')
    rollupOptions: {
      output: {
        format: 'es', // Formato de salida para módulos ES
      },
    },
  },


})
