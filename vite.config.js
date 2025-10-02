// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // aquí eliges el puerto
    open: true  // opcional: abre el navegador automáticamente
  }
})