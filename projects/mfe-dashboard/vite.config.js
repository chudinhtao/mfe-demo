import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.jsx',
      name: 'MfeDashboard',
      fileName: 'remote-entry',
      formats: ['es'], // Build ra file ES Module
    },
    outDir: 'dist',
  },
  server: {
    port: 4202,
    cors: true,
    origin: 'http://localhost:4202',
  },
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  },
});
