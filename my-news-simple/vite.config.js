// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  envDir: '.',          // явно указываем: .env лежит в корне
  envPrefix: 'VITE_'    // префикс для переменных
})