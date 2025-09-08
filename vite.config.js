import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ryan9987.github.io',
  build: {
    outDir: 'dist' // Output to the local dist folder
  }
})
