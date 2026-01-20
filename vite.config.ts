import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
    },
    hmr: {
      protocol: 'wss',
      host: 'localhost',
      port: 443,
    },
  },
  preview: {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
    },
  },
});
