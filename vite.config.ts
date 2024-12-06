import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { blackSquareUI } from '@blacksquareui/vitebuilder'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), blackSquareUI()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/main.tsx'
      },
      output: {
        entryFileNames: 'blackSquareUI.js',
        assetFileNames: 'blackSquareUI.css'
      }
    }
  }
})
