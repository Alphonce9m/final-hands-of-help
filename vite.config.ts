import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    open: true,
    proxy: {
      // Add any API proxies if needed
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
