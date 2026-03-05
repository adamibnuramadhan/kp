import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5175, // Ganti port menjadi 5175
    open: true, // Membuka browser secara otomatis
    host: true, // Memungkinkan akses eksternal
  },
})
