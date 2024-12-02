import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import dts from 'vite-plugin-dts'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] })],

  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    lib: {
      entry: resolve(dirname("."), 'lib/main.ts'),
      formats: ['es']
    },
  },
  base: '',
})
