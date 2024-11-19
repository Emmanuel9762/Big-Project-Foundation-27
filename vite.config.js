import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure this is correct
  },
  base: '/', // Keep this as root or change it if you are deploying to a subdirectory
});

