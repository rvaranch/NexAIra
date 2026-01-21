import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    middlewareMode: true,
    hmr: {
      protocol: 'wss',
      host: 'localhost',
      port: 443,
    },
  },
  preview: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
    },
  },
});
