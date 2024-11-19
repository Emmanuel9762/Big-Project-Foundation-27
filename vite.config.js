import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // Output directory for the production build (default is 'dist')
    rollupOptions: {
      input: '/index.html', // Ensure the entry point is set correctly
    },
  },
  base: '/', // Adjust base URL for deployment if needed (use for root or subdirectory)
})
