import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure this is the directory where you want to output the build
    assetsDir: 'assets', // Ensure this is set to organize assets properly
  },
  base: '/BPF27/src/App.jsx',
});

