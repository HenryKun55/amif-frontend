/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    setupFiles: 'dotenv/config',
  },
})
